import { getAllLocations } from "@/lib/locations"

const locs = getAllLocations()
console.log(`Found ${locs.length} locations`)
if (locs.length > 0) {
    console.log("First location:", locs[0])
    console.log("Last location:", locs[locs.length - 1])
} else {
    console.log("No locations found!")
}
