"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarCheck2, Eye, FileBadge, ArrowRight, Zap, Clock, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProcessAnimationProps {
    cityName?: string
}

export function ProcessAnimation({ cityName }: ProcessAnimationProps) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovering, setIsHovering] = useState<number | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const STEPS = [
        {
            id: 0,
            number: "01",
            title: "Termin buchen",
            description: `Wählen Sie Ihren Wunschtermin in unter 60 Sekunden direkt online für ${cityName || 'Ihr Projekt'} aus.`,
            icon: <CalendarCheck2 className="w-10 h-10" />,
            action: { label: "Jetzt Termin buchen", href: "/termin" }
        },
        {
            id: 1,
            number: "02",
            title: "Kostenlose Besichtigung",
            description: `Wir kommen zu Ihnen nach ${cityName || 'Hause'}, besprechen Ihre Wünsche und vermessen alles präzise vor Ort.`,
            icon: <Eye className="w-10 h-10" />,
        },
        {
            id: 2,
            number: "03",
            title: "Angebot am selben Tag",
            description: "Kein langes Warten. Sie erhalten Ihr faires Festpreis-Angebot noch am Tag der Besichtigung.",
            icon: <FileBadge className="w-10 h-10" />,
            highlight: true
        }
    ]

    useEffect(() => {
        if (isHovering === null) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % STEPS.length)
            }, 3000)
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [isHovering])

    const currentActive = isHovering !== null ? isHovering : activeIndex

    return (
        <section id="process-animation" className="py-32 bg-background relative overflow-hidden border-y border-border">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em]"
                    >
                        <Zap className="w-4 h-4" /> Wir sind anders
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter leading-[0.9]">
                        Andere lassen Sie warten. <br />
                        <span className="text-primary italic">Wir geben Ihnen Zeit zurück.</span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                        Während andere Firmen Wochen für ein Angebot brauchen, setzen wir auf maximale Geschwindigkeit und absolute Zuverlässigkeit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch">
                    {/* Connecting line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />

                    {STEPS.map((step, index) => {
                        const isActive = currentActive === index

                        return (
                            <div
                                key={step.number}
                                onMouseEnter={() => setIsHovering(index)}
                                onMouseLeave={() => setIsHovering(null)}
                                className="relative h-full"
                            >
                                <motion.div
                                    animate={{
                                        scale: isActive ? 1.02 : 1,
                                        y: isActive ? -5 : 0,
                                        boxShadow: isActive ? "0 20px 40px -10px rgba(var(--primary), 0.3)" : "none"
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className={`relative z-10 p-10 rounded-[3rem] border h-full transition-all duration-500 overflow-hidden flex flex-col ${isActive
                                        ? "bg-primary/20 backdrop-blur-xl border-primary shadow-[0_0_30px_rgba(var(--primary),0.2)]"
                                        : "bg-white/5 backdrop-blur-lg border-white/10"
                                        }`}
                                >
                                    {/* Progress line indicator (Active card only) */}
                                    {isActive && isHovering === null && (
                                        <motion.div
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "0%" }}
                                            transition={{ duration: 3, ease: "linear" }}
                                            className="absolute bottom-0 left-0 h-1 bg-primary w-full"
                                        />
                                    )}

                                    <div className="relative z-20 space-y-8 flex-grow">
                                        <div className="flex justify-between items-start">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive ? "bg-primary text-white scale-110 shadow-[0_0_20px_rgba(var(--primary),0.4)]" : "bg-white/10 text-white/60"
                                                }`}>
                                                {step.icon}
                                            </div>
                                            <span className={`text-5xl font-black font-heading tracking-tighter transition-colors duration-500 ${isActive ? "text-primary/40" : "text-white/10"
                                                }`}>
                                                {step.number}
                                            </span>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className={`text-2xl md:text-3xl font-bold font-heading tracking-tight leading-none transition-colors duration-500 ${isActive ? "text-white" : "text-white/70"}`}>
                                                {step.title}
                                            </h3>
                                            <p className={`text-lg leading-relaxed transition-colors duration-500 ${isActive ? "text-white/90" : "text-white/40"
                                                }`}>
                                                {step.description}
                                            </p>
                                        </div>

                                        {step.action && isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="pt-4"
                                            >
                                                <Button asChild size="lg" className="w-full bg-primary text-white hover:bg-primary/90 rounded-2xl h-14 font-bold text-lg group shadow-lg shadow-primary/20">
                                                    <Link href={step.action.href}>
                                                        {step.action.label}
                                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        )}

                                        {step.highlight && (
                                            <div className={`mt-auto pt-6 flex items-center gap-3 text-xs font-bold uppercase tracking-widest p-4 rounded-2xl border transition-all duration-500 ${isActive ? "bg-primary/20 border-primary/30 text-white" : "bg-white/5 border-white/10 text-white/40"
                                                }`}>
                                                <Clock className={`w-4 h-4 ${isActive ? "text-primary" : "text-white/40"} animate-pulse`} />
                                                <span>Angebot am selben Tag</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>

                {/* Trust bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 flex flex-wrap justify-center gap-12 border-t pt-16 border-border/50"
                >
                    <div className="flex items-center gap-3 text-muted-foreground font-medium">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                        <span>100% Zuverlässigkeit</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground font-medium">
                        <Zap className="w-6 h-6 text-primary" />
                        <span>Sorglos-Paket</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground font-medium">
                        <Clock className="w-6 h-6 text-primary" />
                        <span>Zeitersparnis</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
