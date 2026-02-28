"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const SERVICES = [
    "Heckenschnitt",
    "Strauchschnitt",
    "Baumschnitt",
    "Rasen- und Grasschnitt",
    "Neuer Rasen",
    "Vertikutieren",
    "Unkrautentfernung",
    "Laubentfernung",
    "Gartengestaltung",
    "Heckenpflanzung",
    "Grünabfallentsorgung",
    "Entrümpelung Zäune"
]

export function BookingForm() {
    const [step, setStep] = useState<"details" | "calendar">("details")
    const [formData, setFormData] = useState({
        services: [] as string[]
    })
    const [iframeLoading, setIframeLoading] = useState(true)

    const isStep1Valid = formData.services.length > 0

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }))
    }

    const calendlyBaseUrl = "https://calendly.com/gartenbauu/30min"
    const params = new URLSearchParams({
        hide_event_type_details: "1",
        hide_gdpr_banner: "1",
        primary_color: "2d5016",
        locale: "de",
        // We only pre-fill services now, as address is handled inside Calendly
        a2: formData.services.join(", ")
    })

    const finalUrl = `${calendlyBaseUrl}?${params.toString()}`

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <AnimatePresence mode="wait">
                {step === "details" ? (
                    <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl space-y-8 max-w-4xl mx-auto"
                    >
                        <div className="space-y-6">
                            <h3 className="text-4xl font-bold font-heading text-primary text-center">Termin vereinbaren</h3>
                        </div>

                        <div className="grid gap-8">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="w-full h-16 justify-between text-left text-xl rounded-2xl border-2 border-primary/10 hover:border-primary/30 bg-background px-6">
                                        {formData.services.length === 0
                                            ? "Leistungen auswählen..."
                                            : `${formData.services.length} Leistungen ausgewählt`}
                                        <ChevronRight className="ml-2 h-6 w-6 transition-transform rotate-90" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-[calc(100vw-4rem)] max-w-2xl rounded-xl shadow-2xl p-0 bg-card border-primary/20 overflow-hidden">
                                    <div className="max-h-[300px] overflow-y-auto p-2 outline-none">
                                        {SERVICES.map((s) => (
                                            <DropdownMenuCheckboxItem
                                                key={s}
                                                checked={formData.services.includes(s)}
                                                onCheckedChange={() => handleServiceToggle(s)}
                                                className="text-lg py-4 px-4 cursor-pointer text-foreground focus:bg-primary/5 rounded-lg"
                                            >
                                                {s}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {formData.services.map(s => (
                                    <Badge key={s} variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-sm py-1.5 px-3 rounded-full flex items-center gap-2">
                                        {s}
                                        <button onClick={() => handleServiceToggle(s)} className="hover:text-red-500 transition-colors font-bold">
                                            ×
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button
                                className="w-full h-18 text-2xl font-bold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 group transition-all"
                                disabled={!isStep1Valid}
                                onClick={() => {
                                    setStep("calendar");
                                    setIframeLoading(true);
                                }}
                            >
                                Weiter
                                <ChevronRight className="ml-3 h-8 w-8 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="calendar"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-card p-6 md:p-8 rounded-3xl border border-border shadow-lg gap-6 max-w-4xl mx-auto w-full">
                            <div className="flex items-center gap-5">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <CheckCircle2 className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Gewählte Leistungen:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {formData.services.slice(0, 4).map(s => (
                                            <span key={s} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">{s}</span>
                                        ))}
                                        {formData.services.length > 4 && <span className="text-xs text-muted-foreground">+{formData.services.length - 4} weitere</span>}
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => setStep("details")}
                                className="rounded-2xl border-2 border-primary/10 hover:bg-primary/5 h-14 px-8 text-lg"
                            >
                                <ArrowLeft className="mr-3 h-5 w-5" />
                                Leistungen ändern
                            </Button>
                        </div>

                        <div className="w-full relative min-h-[850px] bg-white rounded-[2rem] border-2 border-primary/5 shadow-2xl overflow-hidden">
                            {iframeLoading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-50">
                                    <Loader2 className="h-14 w-14 animate-spin text-primary mb-6" />
                                    <p className="text-xl font-medium text-muted-foreground animate-pulse">Kalender wird geladen...</p>
                                </div>
                            )}

                            <iframe
                                src={finalUrl}
                                width="100%"
                                height="850"
                                frameBorder="0"
                                className="w-full h-full min-h-[850px]"
                                onLoad={() => setIframeLoading(false)}
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}
