import { google } from "googleapis"
import { JWT } from "google-auth-library"
import { addMinutes, format, parse, setHours, setMinutes, isBefore, isAfter, addHours, subHours } from "date-fns"
import { TimeSlot } from "./types"

const SCOPES = ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/calendar.events"]

// Environment variables
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID
const TIMEZONE = "Europe/Berlin"

const MOCK_MODE = !CLIENT_EMAIL || !PRIVATE_KEY || !CALENDAR_ID

async function getAuthClient() {
    if (MOCK_MODE) return null

    const client = new JWT({
        email: CLIENT_EMAIL,
        key: PRIVATE_KEY,
        scopes: SCOPES,
    })

    await client.authorize()
    return client
}

/**
 * Fetches available time slots for a specific date, checking against Google Calendar events.
 * Implements a 1-hour buffer before and after each existing event for travel time.
 * 
 * @param {string} dateStr - The date in YYYY-MM-DD format.
 * @returns {Promise<TimeSlot[]>} Array of time slots with availability status.
 */
export async function getAvailableSlots(dateStr: string): Promise<TimeSlot[]> {
    const date = parse(dateStr, "yyyy-MM-dd", new Date())
    const slots: TimeSlot[] = []

    // Generate potential slots (08:00 to 18:00, 1 hour duration)
    // Assuming slots start every hour? Or flexible? 
    // Requirement: "Users can only book appointments between 8:00 and 18:00"
    // Let's assume hourly slots for simplicity: 08:00-09:00, 09:00-10:00, ... 17:00-18:00.

    const startHour = 8
    const endHour = 18

    // Create all potential slots first
    for (let hour = startHour; hour < endHour; hour++) {
        const slotStart = setMinutes(setHours(date, hour), 0)
        const slotEnd = addHours(slotStart, 1) // 1 hour appointment

        slots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
            available: true
        })
    }

    if (MOCK_MODE) {
        // Return some random availability for demo
        console.warn("Running in MOCK MODE for Calendar")
        return slots.map(slot => ({
            ...slot,
            available: Math.random() > 0.3 // 70% chance available
        }))
    }

    const auth = await getAuthClient()
    const calendar = google.calendar({ version: "v3", auth: auth! })

    // Fetch events for the day
    // Range: 00:00 to 23:59 of the selected day to catch all overlaps
    const dayStart = setMinutes(setHours(date, 0), 0)
    const dayEnd = setMinutes(setHours(date, 23), 59)

    const response = await calendar.events.list({
        calendarId: CALENDAR_ID,
        timeMin: dayStart.toISOString(),
        timeMax: dayEnd.toISOString(),
        singleEvents: true,
        orderBy: "startTime",
        timeZone: TIMEZONE
    })

    const events = response.data.items || []

    // Check conflicts
    // Requirement: "block 1 hour between each booking to allow travel time"
    // This means an event at 10:00-11:00 blocks 09:00-12:00 for *new* bookings effectively? 
    // (Buffer before: 09:00-10:00, Buffer after: 11:00-12:00).

    return slots.map(slot => {
        const slotStart = new Date(slot.start)
        const slotEnd = new Date(slot.end)

        // Check against each existing event
        const isBlocked = events.some(event => {
            if (!event.start?.dateTime || !event.end?.dateTime) return false

            const eventStart = new Date(event.start.dateTime)
            const eventEnd = new Date(event.end.dateTime)

            // Calculate buffer window around the event
            const bufferStart = subHours(eventStart, 1)
            const bufferEnd = addHours(eventEnd, 1)

            // Check if our slot overlaps with the [BufferStart ... Event ... BufferEnd]
            /*
               Slot:       [Start   End]
               BufferRange:     [BufferStart ................. BufferEnd]
            */

            // Standard overlap check: (StartA <= EndB) and (EndA >= StartB)
            // Here A = Slot, B = BufferRange

            return (slotStart < bufferEnd) && (slotEnd > bufferStart)
        })

        return {
            ...slot,
            available: !isBlocked
        }
    })
}

/**
 * Creates a new booking in the Google Calendar.
 * 
 * @param {Object} data - The booking details.
 * @param {string} data.name - Client name.
 * @param {string} data.email - Client email.
 * @param {string} data.phone - Client phone number.
 * @param {string} data.address - Client address for the home visit.
 * @param {string} data.date - Booking date (YYYY-MM-DD).
 * @param {string} data.time - Booking time (HH:mm).
 * @param {string} [data.description] - Optional project description.
 * @returns {Promise<Object>} The created calendar event data.
 */
export async function createBooking(data: {
    name: string
    email: string
    phone: string
    address: string
    date: string
    time: string
    description?: string
}) {
    if (MOCK_MODE) {
        console.log("Mock Booking Created:", data)
        return { status: "success", id: "mock-id-" + Date.now() }
    }

    const auth = await getAuthClient()
    const calendar = google.calendar({ version: "v3", auth: auth! })

    const startDateTime = parse(`${data.date} ${data.time}`, "yyyy-MM-dd HH:mm", new Date())
    const endDateTime = addHours(startDateTime, 1)

    const event = {
        summary: `Hausbesuch: ${data.name}`,
        description: `
      Kunde: ${data.name}
      Email: ${data.email}
      Telefon: ${data.phone}
      Adresse: ${data.address}
      
      Notiz: ${data.description || "-"}
    `,
        location: data.address,
        start: {
            dateTime: startDateTime.toISOString(),
            timeZone: TIMEZONE,
        },
        end: {
            dateTime: endDateTime.toISOString(),
            timeZone: TIMEZONE,
        },
    }

    const response = await calendar.events.insert({
        calendarId: CALENDAR_ID,
        requestBody: event,
    })

    return response.data
}
