"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

export function ContactForm() {
    return (
        <section className="py-32 bg-background relative overflow-hidden" id="contact">
            {/* Decorative background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-[4rem] p-12 md:p-24 text-center space-y-10 shadow-2xl border border-white/10 relative overflow-hidden group">
                    {/* Background accent glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/30 transition-all duration-700" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-primary/20 rounded-full text-primary font-bold uppercase tracking-widest text-xs border border-primary/20"
                    >
                        <Calendar className="w-4 h-4" />
                        Bereit für Veränderung?
                    </motion.div>

                    <h2 className="text-5xl md:text-8xl font-bold font-heading text-white tracking-tighter leading-[0.85] uppercase">
                        Starten Sie <br />
                        <span className="text-primary italic">Ihr Projekt</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
                        Buchen Sie heute noch Ihren persönlichen Beratungstermin vor Ort. <br className="hidden md:block" /> Schnell, einfach und digital.
                    </p>

                    <div className="pt-6">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl md:text-2xl px-14 h-24 rounded-full font-bold shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-all hover:scale-110 active:scale-95 group relative z-10">
                            <Link href="/termin" className="flex items-center gap-4">
                                Termin buchen <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 opacity-60">
                        <div className="space-y-1">
                            <p className="text-white font-bold uppercase tracking-widest text-xs">Email</p>
                            <p className="text-white text-lg font-medium">gartenbauu@gmail.com</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-white font-bold uppercase tracking-widest text-xs">Telefon</p>
                            <p className="text-white text-lg font-medium">+49 151 66587383</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-white font-bold uppercase tracking-widest text-xs">Einsatzgebiet</p>
                            <p className="text-white text-lg font-medium">Enzkreis & BW</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
