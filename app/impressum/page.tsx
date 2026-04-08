"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ImpressumPage() {
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
                        <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter uppercase relative z-10">
                            Im<span className="text-primary italic">pressum</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">Angaben gemäß § 5 TMG</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-muted-foreground space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Betreiber der Website</h3>
                            <p>
                                <strong>AP Gartenbau GmbH</strong><br />
                                [Musterstraße 1] <span className="text-xs text-primary/80">&lt;-- Bitte Straße eintragen</span><br />
                                [75172 Pforzheim] <span className="text-xs text-primary/80">&lt;-- Bitte PLZ und Ort eintragen</span>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Vertreten durch</h3>
                            <p>
                                Die Geschäftsführer:<br />
                                Andrei Priala und Daniel Lupu
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Kontakt</h3>
                            <p>
                                Telefon: +49 151 66587383<br />
                                E-Mail: gartenbauu@gmail.com
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Registereintrag</h3>
                            <p>
                                Eintragung im Handelsregister.<br />
                                Registergericht: [Amtsgericht Musterstadt] <span className="text-xs text-primary/80">&lt;-- Bitte zuständiges Gericht eintragen</span><br />
                                Registernummer: [HRB 12345] <span className="text-xs text-primary/80">&lt;-- Bitte Handelsregisternummer eintragen</span>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Umsatzsteuer</h3>
                            <p>
                                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                                <em>Derzeit in Beantragung / Noch nicht vorhanden</em>
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">EU-Streitschlichtung</h3>
                            <p>
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                                    https://ec.europa.eu/consumers/odr/
                                </a>.<br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h3>
                            <p>
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10 mt-12 space-y-6">
                            <h3 className="text-xl font-bold text-white">Haftung für Inhalte</h3>
                            <p className="text-sm">
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </p>

                            <h3 className="text-xl font-bold text-white">Haftung für Links</h3>
                            <p className="text-sm">
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                            </p>

                            <h3 className="text-xl font-bold text-white">Urheberrecht</h3>
                            <p className="text-sm">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                            </p>
                        </div>
                    </div>

                    <div className="pt-12 text-center">
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/agb">Zu den AGB</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
