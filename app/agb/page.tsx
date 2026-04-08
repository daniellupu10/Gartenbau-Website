"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AGBPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container px-4 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter uppercase">
                            Allgemeine <span className="text-primary italic">Geschäftsbedingungen</span> (AGB)
                        </h1>
                        <p className="text-xl text-muted-foreground">AP Gartenbau GmbH</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-muted-foreground space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">1. Geltungsbereich</h3>
                            <p>
                                Die nachstehenden Allgemeinen Geschäftsbedingungen gelten für sämtliche Verträge über Leistungen, Arbeiten und Materiallieferungen im Bereich Garten- und Landschaftsbau zwischen der AP Gartenbau GmbH, vertreten durch die Geschäftsführer Andrei Priala und Daniel Lupu (im Folgenden "Auftragnehmer"), und ihren Kunden (im Folgenden "Auftraggeber" oder "Kunde"). Dies umfasst sowohl Verträge mit Verbrauchern (B2C) als auch mit Unternehmern (B2B).
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">2. Vertragsschluss und Angebotsbindung</h3>
                            <p>
                                Nach einer Vor-Ort-Besichtigung und Beratung unterbreitet der Auftragnehmer ein Angebot, welches mündlich oder schriftlich erfolgen kann. An dieses übermittelte Angebot hält sich der Auftragnehmer für einen Zeitraum von 14 Tagen gebunden. Ein bindender Vertrag kommt durch die Annahme dieses Angebots durch den Kunden zustande.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">3. Leistungsausführung und Preisanpassungen</h3>
                            <p>
                                Die Arbeiten werden fachgerecht nach den aktuellen Standards des Garten- und Landschaftsbaus ausgeführt. Da bei Naturprodukten (Pflanzen, Natursteine etc.) sowie Rohstoffen teilweise kurzfristige, unvorhersehbare Marktschwankungen auftreten können, behält sich der Auftragnehmer das Recht vor, die Preise zwischen Angebot und Ausführung angemessen anzupassen, sofern dies gesetzlich zulässig ist und die Preiserhöhung nicht durch den Auftragnehmer vorsätzlich herbeigeführt wurde.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">4. Schlechtwetter-Klausel</h3>
                            <p>
                                Der Gartenbau ist stark witterungsabhängig. Bei widrigen oder extremen Wetterverhältnissen (z.B. starker Bodenfrost, Dauerregen, Sturm), die eine ordnungsgemäße oder sichere Ausführung der Arbeiten verhindern, verlängern sich eventuell vereinbarte Ausführungs- oder Fertigstellungsfristen um die Dauer der witterungsbedingten Verzögerung angemessen. Der Auftraggeber hat hierdurch keinen Anspruch auf Schadensersatz oder Vertragsstrafen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">5. Mitwirkungspflichten des Kunden</h3>
                            <p>
                                Der Auftraggeber ist verpflichtet, die für die Ausführung der Arbeiten notwendigen Betriebsmittel, insbesondere Baustrom und Bauwasser, unentgeltlich und in ausreichendem Maße an der Arbeitsstelle zur Verfügung zu stellen. 
                                <br/><br/>
                                Des Weiteren ist der Auftraggeber ausdrücklich verpflichtet, vor dem Beginn jeglicher Erdarbeiten auf eigene Verantwortung den genauen Verlauf von Versorgungsleitungen (Wasser, Strom, Gas, Telekommunikation) auf dem Grundstück zu ermitteln und dem Auftragnehmer anzuzeigen. Ebenfalls hat der Auftraggeber in eigener Verantwortung für das Vorliegen sämtlicher ggf. notwendigen behördlichen Genehmigungen (z.B. Baumfällgenehmigungen, Baugenehmigungen) zu sorgen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">6. Zahlungsbedingungen und Vorauskasse</h3>
                            <p>
                                Rechnungen sind vom Kunden innerhalb von maximal 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen. 
                                Bei großen Projekten und umfangreichen Materialbestellungen behält sich der Auftragnehmer ausdrücklich das Recht vor, eine angemessene Vorkasse oder Abschlagszahlungen entsprechend der nachgewiesenen Baufortschritte zu verlangen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">7. Gewährleistung für Pflanzen (Keine Anwuchsgarantie)</h3>
                            <p>
                                Mit der ordnungsgemäßen und fachgerechten Einpflanzung geht das Risiko für das weitere Gedeihen (insbesondere die Verantwortung für ausreichende Bewässerung und Pflege) vollständig auf den Auftraggeber über. Für nach der Pflanzung eingegangene oder beschädigte Pflanzen haftet der Auftragnehmer nicht, es sei denn, der Mangel beruht nachweislich auf einer unsachgemäßen Vorbereitung oder Pflanzung durch den Auftragnehmer. Eine generelle Anwuchsgarantie wird hiermit ausgeschlossen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">8. Eigentumsvorbehalt</h3>
                            <p>
                                Gelieferte Pflanzen, Baustoffe und sonstige Materialien bleiben bis zur vollständigen Bezahlung sämtlicher offenen Forderungen aus dem jeweiligen Vertrag das uneingeschränkte Eigentum der AP Gartenbau GmbH.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">9. Streitbeilegung</h3>
                            <p>
                                Wir legen großen Wert auf eine partnerschaftliche Zusammenarbeit und klären eventuelle Missverständnisse direkt mit unseren Kunden. Die AP Gartenbau GmbH ist jedoch nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </div>
                    </div>

                    <div className="pt-12 text-center">
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/contact">Kontakt aufnehmen</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
