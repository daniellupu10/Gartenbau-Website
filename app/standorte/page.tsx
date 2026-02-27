import Spline from '@splinetool/react-spline/next'
import { getAllLocations } from "@/lib/locations"
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Einsatzgebiete | Ihr Gärtner in der Region Pforzheim",
    description: "Wir sind in Pforzheim, Mühlacker, Birkenfeld und der gesamten Region für Sie tätig. Finden Sie Ihren Standort in unserer Übersicht.",
}

export default function LocationsIndex() {
    const locations = getAllLocations()

    // Grouping locations alphabetically for better UX
    const grouped = locations.reduce((acc, loc) => {
        const firstLetter = loc.name[0].toUpperCase()
        if (!acc[firstLetter]) acc[firstLetter] = []
        acc[firstLetter].push(loc)
        return acc
    }, {} as Record<string, typeof locations>)

    const letters = Object.keys(grouped).sort()

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary py-32 text-white z-10 min-h-[50vh] flex flex-col justify-center">
                {/* 3D Spline Background */}
                <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
                    <Spline scene="https://prod.spline.design/OpMMEhMKObiExUY0/scene.splinecode" />
                </div>

                {/* Green Overlay to maintain brand color and text readability */}
                <div className="absolute inset-0 bg-primary/80 z-0 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/80 z-0" />

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 tracking-tighter">
                        Unsere <span className="italic opacity-80">Einsatzgebiete</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
                        Wir sind stolz darauf, die Region rund um Pforzheim und den Enzkreis schöner zu machen.
                        Entdecken Sie unsere Standorte und finden Sie Ihren persönlichen Ansprechpartner vor Ort.
                    </p>
                </div>
            </section>

            {/* Alphabetical Grid */}
            <section className="py-24 bg-background">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {letters.map(letter => (
                            <div key={letter} className="space-y-6">
                                <h2 className="text-5xl font-bold font-heading text-primary/20 border-b border-primary/10 pb-4">{letter}</h2>
                                <div className="flex flex-col gap-3">
                                    {grouped[letter].map((location) => (
                                        <Link
                                            key={location.slug}
                                            href={`/standorte/${location.slug}`}
                                            className="group flex items-center justify-between p-4 rounded-2xl hover:bg-primary/5 transition-all text-foreground border border-transparent hover:border-primary/10 shadow-sm hover:shadow-md"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <MapPin className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold text-lg group-hover:text-primary transition-colors">{location.name}</span>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 mx-auto text-center space-y-8">
                    <h3 className="text-3xl md:text-5xl font-bold font-heading">Ihr Ort ist nicht dabei?</h3>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Wir erweitern unser Einsatzgebiet ständig. Kontaktieren Sie uns einfach
                        und wir prüfen, ob wir auch zu Ihnen kommen können.
                    </p>
                    <Link href="/termin" className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-10 text-xl font-bold text-white shadow-xl hover:bg-primary/90 transition-all hover:scale-105">
                        Jetzt unverbindlich anfragen
                    </Link>
                </div>
            </section>
        </div>
    )
}
