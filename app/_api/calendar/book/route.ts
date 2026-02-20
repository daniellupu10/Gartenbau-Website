import { NextRequest, NextResponse } from "next/server"
import { createBooking } from "@/lib/googleCalendar"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        // Basic validation
        if (!body.date || !body.time || !body.email || !body.name || !body.address) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
        }

        const result = await createBooking(body)
        return NextResponse.json({ success: true, booking: result })
    } catch (error) {
        console.error("Booking API Error:", error)
        return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
    }
}
