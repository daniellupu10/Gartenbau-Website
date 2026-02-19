"use client"

import { BookingForm } from "@/components/sections/BookingForm"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Metadata } from "next"

// Metadata is server-side usually, but this is a client component.
// I'll skip metadata export in client component and rely on layout or separate file if strictly needed.
// But for now, basic page structure.

export default function TerminPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div className="min-h-screen bg-background" ref={containerRef}>
            {/* Parallax Hero */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary/5">
                <motion.div
                    style={{ y, opacity }}
                    className="text-center z-10 px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-foreground">
                            Termin buchen
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                            Planen Sie Ihren kostenlosen Hausbesuch ganz bequem online.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
                </div>
            </div>

            {/* Booking Section */}
            <section className="relative z-20 -mt-20 pb-32">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card rounded-3xl shadow-2xl border border-border/50 p-6 md:p-12"
                    >
                        <BookingForm />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
