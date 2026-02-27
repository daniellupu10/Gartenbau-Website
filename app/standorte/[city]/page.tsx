import Spline from '@splinetool/react-spline/next'
import { getAllLocations } from "@/lib/locations"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    CheckCircle2, MapPin, Phone, Mail, Clock, ShieldCheck,
    Leaf, TreePine, Shovel, Droplets, Construction, Trash2, Scissors
} from "lucide-react"
import { CityVectorBackground } from "@/components/ui/CityVectorBackground"
import { ProcessAnimation } from "@/components/sections/ProcessAnimation"

interface Props {
    params: Promise<{ city: string }>
}

const ALL_SERVICES = [
    { title: "Heckenschnitt", icon: <Scissors className="w-6 h-6" /> },
    { title: "Strauchschnitt", icon: <Scissors className="w-6 h-6" /> },
    { title: "Baumschnitt", icon: <TreePine className="w-6 h-6" /> },
    { title: "Rasen- und Grasschnitt", icon: <Leaf className="w-6 h-6" /> },
    { title: "Neuer Rasen", icon: <Leaf className="w-6 h-6" /> },
    { title: "Vertikutieren", icon: <Construction className="w-6 h-6" /> },
    { title: "Unkrautentfernung", icon: <Droplets className="w-6 h-6" /> },
    { title: "Laubentfernung", icon: <Leaf className="w-6 h-6" /> },
    { title: "Pflasterarbeiten", icon: <Shovel className="w-6 h-6" /> },
    { title: "Heckenpflanzung", icon: <TreePine className="w-6 h-6" /> },
    { title: "Grünabfallentsorgung", icon: <Trash2 className="w-6 h-6" /> },
    { title: "Entrümpelung Zäune", icon: <Construction className="w-6 h-6" /> }
]

export async function generateStaticParams() {
    const locations = getAllLocations()
    return locations.map((loc) => ({
        city: loc.slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params
    const locations = getAllLocations()
    const location = locations.find((l) => l.slug === city)

    if (!location) return { title: "Standort nicht gefunden" }

    return {
        title: `Gartenbau ${location.name} | Profi-Gartengestaltung & Pflege`,
        description: `Ihr Experte für Gartenbau in ${location.name}. Von Heckenschnitt bis Pflasterarbeiten - Ihr Garten in ${location.name} ist bei uns in besten Händen.`,
        openGraph: {
            title: `Gartenbau ${location.name} | Profi-Gartengestaltung & Pflege`,
            description: `Ihr lokaler Gärtner für ${location.name}. Jetzt kostenlose Besichtigung anfordern!`,
        }
    }
}

const getUniqueCityText = (cityName: string, municipality?: string) => {
    const texts = [
        `In ${cityName} und der gesamten Region rund um ${municipality || "Pforzheim"} verwirklichen wir Gartenträume. Wir kennen die Besonderheiten der Böden und das Klima in der Region ${cityName} genau, was für eine nachhaltige Bepflanzung entscheidend ist.`,
        `Gartenpflege in ${cityName} auf höchstem Niveau. Ob private Gartenanlage oder gewerbliche Grünflächen - in ${cityName} sorgen wir für ein gepflegtes Erscheinungsbild Ihrer Immobilie.`,
        `Landschaftsbau und Design in ${cityName}. Als lokaler Fachbetrieb für ${cityName} bieten wir Ihnen schnelle Anfahrtswege und eine persönliche Betreuung direkt vor Ort in Ihrem Garten.`
    ];
    return texts[cityName.length % texts.length];
};

export default async function LocationPage({ params }: Props) {
    const { city } = await params
    const locations = getAllLocations()
    const location = locations.find((l) => l.slug === city)

    if (!location) notFound()

    const uniqueText = getUniqueCityText(location.name, location.municipality);

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Generative Vector Background - Subtle and Unique per City */}
            <CityVectorBackground seed={location.name} />

            {/* Unique Hero for SEO */}
            <section className="relative overflow-hidden bg-primary/95 py-32 text-white z-10 min-h-[70vh] flex flex-col justify-center">
                {/* 3D Spline Background */}
                <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
                    <Spline scene="https://prod.spline.design/OpMMEhMKObiExUY0/scene.splinecode" />
                </div>

                {/* Green Overlay to maintain brand color and text readability */}
                <div className="absolute inset-0 bg-primary/80 z-0 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/80 z-0" />

                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1558905619-17254263becd?q=80&w=2000')] bg-cover bg-center mix-blend-overlay z-0" />

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
                        <MapPin className="w-3 h-3 text-accent" /> Exklusives Einsatzgebiet: {location.name}
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold font-heading mb-6 tracking-tighter">
                        Gartenbau & Pflege <br />
                        <span className="italic opacity-80 text-white underline decoration-accent/30 underline-offset-8 font-serif">in {location.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
                        {uniqueText}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-16 rounded-full font-bold shadow-2xl transition-transform hover:scale-105 active:scale-95">
                            <Link href="/termin">Termin in {location.name} buchen</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 h-16 rounded-full font-bold backdrop-blur-sm transition-all shadow-xl">
                            <a href="tel:+4915166587383">Direkt anrufen</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Interactive Process Animation with City Name */}
            <ProcessAnimation cityName={location.name} />

            {/* COMPLETE SERVICES Section */}
            <section className="py-24 bg-primary/5 relative z-10 border-y border-primary/10">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Full Service</span>
                        <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">Leistungen in <span className="text-primary underline decoration-accent/30">{location.name}</span></h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">Wir decken alle Bereiche des modernen Gartenbaus für Sie ab.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {ALL_SERVICES.map((s) => (
                            <div key={s.title} className="bg-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/40 transition-all hover:shadow-2xl group flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                                    {s.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                                    Fachgerechte {s.title} direkt vor Ort für Privat & Gewerbe in {location.name}.
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button asChild size="lg" className="h-14 px-10 rounded-2xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            <Link href="/termin">Komplettes Angebot anfordern</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Final Contact Push */}
            <section className="py-24 relative z-10 bg-background">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">Haben Sie Fragen zu Ihrem Projekt in {location.name}?</h3>
                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Rufnummer</p>
                                    <a href="tel:+4915166587383" className="text-2xl font-bold hover:text-accent transition-colors">+49 151 66587383</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-accent">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest opacity-60 mb-1">E-Mail Adresse</p>
                                    <a href="mailto:gartenbauu@gmail.com" className="text-2xl font-bold hover:text-accent transition-colors">gartenbauu@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
