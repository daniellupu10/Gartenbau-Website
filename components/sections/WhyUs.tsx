"use client"

import { ShieldCheck, Clock, MapPin, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
    {
        icon: ShieldCheck,
        title: "Meisterbetrieb",
        description: "Fachgerechte Ausführung nach höchsten deutschen Gartenbaustandards."
    },
    {
        icon: Clock,
        title: "Termintreue",
        description: "Pünktliche Umsetzung und transparente Zeitplanung für Ihr Projekt."
    },
    {
        icon: MapPin,
        title: "Regional",
        description: "Tief verwurzelt in Baden-Württemberg mit umfassender Standortkenntnis."
    },
    {
        icon: ThumbsUp,
        title: "Premium Service",
        description: "Individuelle Betreuung von der ersten Skizze bis zur finalen Abnahme."
    }
]

export function WhyUs() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left: Sticky-like Heading */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl font-bold font-heading leading-[0.85] tracking-tighter uppercase mb-8"
                        >
                            WARUM <br />
                            <span className="text-primary">WIR?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-md"
                        >
                            Wir setzen Maßstäbe in der modernen Gartengestaltung durch Präzision und Innovation.
                        </motion.p>
                    </div>

                    {/* Right: Feature List */}
                    <div className="lg:col-span-7 space-y-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group flex flex-col md:flex-row gap-8 p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-500 shadow-xl"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 shadow-inner">
                                    <benefit.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight uppercase text-white group-hover:text-primary transition-colors">{benefit.title}</h3>
                                    <p className="text-lg text-white/50 leading-relaxed font-medium group-hover:text-white/80 transition-colors">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </section>
    )
}
