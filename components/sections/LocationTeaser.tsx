import { getAllLocations } from "@/lib/locations"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"

export function LocationTeaser() {
    const locations = getAllLocations()
    // Select top 6 cities for teaser
    const topCities = locations.slice(0, 12)

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-primary">
                            In Ihrer Nähe <br />
                            <span className="text-muted-foreground italic">unterwegs</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Wir sind Ihr lokaler Fachbetrieb für den gesamten Enzkreis und Umgebung.
                            Wählen Sie Ihren Ort für maßgeschneiderte Services.
                        </p>
                    </div>
                    <Link href="/standorte" className="group flex items-center gap-3 text-xl font-bold text-primary hover:opacity-80 transition-all">
                        Alle Einsatzgebiete <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {topCities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/standorte/${city.slug}`}
                            className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 hover:border-primary/40 hover:bg-white/10 transition-all text-center group"
                        >
                            <MapPin className="w-8 h-8 text-primary/30 group-hover:text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110" />
                            <span className="font-bold block text-white/70 group-hover:text-white transition-colors uppercase text-xs tracking-widest">{city.name}</span>
                        </Link>
                    ))}
                    <Link
                        href="/standorte"
                        className="bg-primary/20 backdrop-blur-md p-6 rounded-[2rem] border border-primary/40 text-white text-center hover:bg-primary/40 transition-all shadow-2xl hover:-translate-y-1 flex flex-col justify-center gap-2 group"
                    >
                        <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest group-hover:opacity-100 transition-opacity">Mehr entdecken</span>
                        <span className="font-bold text-lg text-primary">Alle Orte</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
