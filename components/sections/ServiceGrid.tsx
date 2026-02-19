"use client"

import {
    Scissors,
    Trees,
    Sprout,
    Mountain,
    ArrowRight,
    Leaf,
    Shovel,
    Trash2,
    Fence,
    Hammer,
    Zap,
    Paintbrush
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        title: "Heckenschnitt",
        description: "Präziser Schnitt für dichte und formschöne Hecken als Sichtschutz.",
        icon: Scissors,
        color: "bg-emerald-500/10",
        iconColor: "text-emerald-500"
    },
    {
        title: "Strauchschnitt",
        description: "Fachgerechte Verjüngung und Formgebung Ihrer Sträucher und Büsche.",
        icon: Scissors,
        color: "bg-green-500/10",
        iconColor: "text-green-500"
    },
    {
        title: "Baumschnitt",
        description: "Sicherer Schnitt von Ästen zur Erhaltung der Baumgesundheit und Sicherheit.",
        icon: Trees,
        color: "bg-teal-500/10",
        iconColor: "text-teal-500"
    },
    {
        title: "Rasen- und Grasschnitt",
        description: "Regelmäßiges Mähen für einen gepflegten und strapazierfähigen Rasen.",
        icon: Sprout,
        color: "bg-lime-500/10",
        iconColor: "text-lime-500"
    },
    {
        title: "Neuer Rasen",
        description: "Professionelle Neuanlage durch Rollrasen oder hochwertige Aussaat.",
        icon: Leaf,
        color: "bg-emerald-600/10",
        iconColor: "text-emerald-600"
    },
    {
        title: "Vertikutieren",
        description: "Befreiung des Rasens von Moos und Filz für bessere Belüftung.",
        icon: Zap,
        color: "bg-green-600/10",
        iconColor: "text-green-600"
    },
    {
        title: "Unkrautentfernung",
        description: "Gründliche Reinigung von Beeten und Wegen von unerwünschtem Wildwuchs.",
        icon: Shovel,
        color: "bg-teal-600/10",
        iconColor: "text-teal-600"
    },
    {
        title: "Laubentfernung",
        description: "Schnelle und saubere Beseitigung von Herbstlaub auf dem gesamten Grundstück.",
        icon: Leaf,
        color: "bg-orange-500/10",
        iconColor: "text-orange-500"
    },
    {
        title: "Pflasterarbeiten",
        description: "Verlegung von Wegen, Einfahrten und Terrassen aus hochwertigen Steinen.",
        icon: Mountain,
        color: "bg-slate-500/10",
        iconColor: "text-slate-500"
    },
    {
        title: "Heckenpflanzung",
        description: "Fachgerechte Neupflanzung von Hecken für Ihren perfekten Sichtschutz.",
        icon: Shovel,
        color: "bg-lime-600/10",
        iconColor: "text-lime-600"
    },
    {
        title: "Grünabfallentsorgung",
        description: "Fachgerechter Abtransport und Entsorgung aller pflanzlichen Abfälle.",
        icon: Trash2,
        color: "bg-zinc-500/10",
        iconColor: "text-zinc-500"
    },
    {
        title: "Entrümpelung Zäune",
        description: "Abbau alter Zäune und allgemeine Entrümpelungsarbeiten im Garten.",
        icon: Fence,
        color: "bg-amber-700/10",
        iconColor: "text-amber-700"
    }
]

export function ServiceGrid() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl font-bold font-heading leading-[0.9] tracking-tighter uppercase"
                        >
                            Unsere <br />
                            <span className="text-primary italic">Leistungen</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white/50 text-xl md:text-2xl font-medium max-w-lg"
                        >
                            Präzision und Leidenschaft für jedes Detail in Ihrem Garten.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                            className="group relative bg-white/5 backdrop-blur-md p-10 md:p-14 border-r border-b border-white/10 hover:bg-white/10 transition-all duration-500"
                        >
                            {/* Watermark Icon - Faded background graphic */}
                            <div className="absolute right-4 bottom-4 opacity-[0.05] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                                <service.icon className="w-48 h-48 text-primary" strokeWidth={1} />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-inner">
                                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-bold font-heading tracking-tight uppercase text-white group-hover:text-primary transition-colors leading-tight break-words">
                                        {service.title}
                                    </h3>
                                    <p className="text-base text-white/50 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <Link href="/termin" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        Jetzt anfragen <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
