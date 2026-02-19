import fs from "fs"
import path from "path"

export interface Location {
    name: string
    slug: string
    municipality?: string
    postCode?: string
}

export function getAllLocations(): Location[] {
    try {
        const filePath = path.join(process.cwd(), "Ort.txt")
        // Check if file exists, if not, return empty or mock
        if (!fs.existsSync(filePath)) {
            console.warn("Ort.txt not found at", filePath)
            return []
        }

        const fileContent = fs.readFileSync(filePath, "utf-8")

        // Parse the file. Format is Markdown/Table style: | Name | Municipality | Type |
        const lines = fileContent.split("\n").filter(line => line.trim() !== "")
        const locations: Location[] = []

        for (const line of lines) {
            // Skip separators and headers
            if (line.includes("---") || line.toLowerCase().includes("zugehörige gemeinde")) continue;

            const parts = line.split("|").map(s => s.trim()).filter(s => s !== "")

            // Expected: [Name, Municipality, Type] (length 3 usually)
            if (parts.length >= 1) {
                const name = parts[0]
                if (name && name !== "Ort") {
                    locations.push({
                        name: name,
                        slug: slugify(name),
                        municipality: parts[1] || ""
                    })
                }
            }
        }

        return locations
    } catch (error) {
        console.error("Error reading Ort.txt", error)
        return []
    }
}

export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start
        .replace(/-+$/, '') // Trim - from end
}
