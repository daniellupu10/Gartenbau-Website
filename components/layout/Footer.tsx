import Link from "next/link"
import { Leaf, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                            <Leaf className="h-6 w-6" />
                            <span>AP Gartenbau</span>
                        </Link>
                        <p className="text-primary-foreground/80 leading-relaxed text-sm">
                            Ihr professioneller Partner für Gartenbau und Landschaftspflege in Baden-Württemberg. Wir verwandeln Ihre Gartenträume in Realität.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Unsere Leistungen</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><Link href="/services#planung" className="hover:text-white transition-colors">Gartenplanung</Link></li>
                            <li><Link href="/services#pflege" className="hover:text-white transition-colors">Gartenpflege</Link></li>
                            <li><Link href="/services#terrassen" className="hover:text-white transition-colors">Terrassenbau</Link></li>
                            <li><Link href="/services#baumpflege" className="hover:text-white transition-colors">Baumpflege</Link></li>
                            <li><Link href="/services#wasser" className="hover:text-white transition-colors">Teichbau & Bewässerung</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Navigation</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><Link href="/" className="hover:text-white transition-colors">Startseite</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">Wer wir sind</Link></li>
                            <li><Link href="/termin" className="hover:text-white transition-colors">Termin buchen</Link></li>
                            <li><Link href="/standorte" className="hover:text-white transition-colors">Einsatzgebiete</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Kontakt</h3>
                        <ul className="space-y-3 text-sm text-primary-foreground/80">
                            {/* Address removed as per user request */}
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0" />
                                <a href="tel:+4915166587383" className="hover:text-white transition-colors">+49 151 66587383</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0" />
                                <a href="mailto:gartenbauu@gmail.com" className="hover:text-white transition-colors">gartenbauu@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} AP Gartenbau. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-6">
                        <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
                        <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
