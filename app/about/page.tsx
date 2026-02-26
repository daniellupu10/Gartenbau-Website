"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

import { WhyUs } from "@/components/sections/WhyUs"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container px-4 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tighter uppercase leading-[0.85]">
                        Tradition trifft <br />
                        <span className="text-primary italic">Moderne</span>
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-24">
                        <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-relaxed">
                            Seit über 15 Jahren sind wir Ihr vertrauensvoller Partner für hochwertige Garten- und Landschaftsgestaltung in Baden-Württemberg. Unser Fokus liegt auf der Verbindung von Ästhetik und Funktionalität.
                        </p>

                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold font-heading uppercase tracking-tight">Unsere Philosophie</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Ein Garten ist mehr als nur Pflanzen – er ist ein Erweiterung Ihres Lebensraums. Wir schaffen Rückzugsorte, die nachhaltig, ökologisch sinnvoll und visuell beeindruckend sind. Jedes Projekt ist ein Unikat.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-bold font-heading uppercase tracking-tight">Unser Team</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Professionelle Meister, erfahrene Landschaftsgärtner und visionäre Planer arbeiten bei uns Hand in Hand. Wir garantieren deutsche Wertarbeit mit Liebe zum Detail.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-24">
                        <WhyUs />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-primary rounded-[3rem] p-12 md:p-24 text-center mt-32"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-8 italic">
                            Lust auf einen <br /> Traumgarten?
                        </h2>
                        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-2xl px-12 h-20 rounded-full font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
                            <Link href="/termin">Termin buchen</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
