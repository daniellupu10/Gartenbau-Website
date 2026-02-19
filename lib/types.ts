export interface TimeSlot {
    start: string // ISO string
    end: string // ISO string
    available: boolean
}

export interface BookingRequest {
    name: string
    email: string
    phone: string
    address: string
    date: string // YYYY-MM-DD
    time: string // HH:mm
    description?: string
}

export interface CalendarEvent {
    summary: string
    description: string
    location: string
    start: {
        dateTime: string
        timeZone: string
    }
    end: {
        dateTime: string
        timeZone: string
    }
}
