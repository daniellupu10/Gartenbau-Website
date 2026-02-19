import { NextRequest, NextResponse } from "next/server"
import { getAvailableSlots } from "@/lib/googleCalendar"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get("date")

    if (!date) {
        return NextResponse.json({ error: "Date parameter is required" }, { status: 400 })
    }

    try {
        const slots = await getAvailableSlots(date)
        return NextResponse.json({ slots })
    } catch (error) {
        console.error("Availability API Error:", error)
        return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 })
    }
}
