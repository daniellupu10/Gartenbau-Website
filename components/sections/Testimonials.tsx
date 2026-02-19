"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
    {
        name: "Thomas Müller",
        role: "Eigenheimbesitzer, Stuttgart",
        content: "AP Gartenbau hat unseren Vorgarten komplett neu gestaltet. Das Team war pünktlich, professionell und das Ergebnis übertrifft unsere Erwartungen.",
        rating: 5,
        initials: "TM"
    },
    {
        name: "Sabine Weber",
        role: "Gartengestaltung, Karlsruhe",
        content: "Endlich eine Firma, die mitdenkt! Die Beratung war klasse und die Umsetzung der Terrasse lief reibungslos. Klare Weiterempfehlung.",
        rating: 5,
        initials: "SW"
    },
    {
        name: "Michael Klein",
        role: "Baumpflege, Pforzheim",
        content: "Habe meine alten Obstbäume schneiden lassen. Sehr kompetente Gärtner, die wissen was sie tun. Der Garten sieht wieder super aus.",
        rating: 5,
        initials: "MK"
    }
]

export function TestimonialSlider() {
    const [active, setActive] = useState(0)

    const next = () => setActive((prev) => (prev + 1) % testimonials.length)
    const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="py-32 bg-primary overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 -skew-x-12 translate-x-1/2" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-md"
                            >
                                <Quote className="w-12 h-12 text-white" />
                            </motion.div>
                            <h2 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tighter uppercase leading-[0.9]">
                                Was unsere <br />
                                <span className="opacity-50">Kunden sagen</span>
                            </h2>
                            <div className="flex gap-4">
                                <button
                                    onClick={prev}
                                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>

                        <div className="relative h-[400px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="space-y-8"
                                >
                                    <div className="flex gap-1 text-white">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-3xl md:text-4xl text-white font-medium leading-[1.2] tracking-tight">
                                        "{testimonials[active].content}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="w-14 h-14 border-2 border-white/20">
                                            <AvatarFallback className="bg-white/10 text-white font-bold">{testimonials[active].initials}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-bold text-xl text-white">{testimonials[active].name}</p>
                                            <p className="text-white/60 font-medium">{testimonials[active].role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
