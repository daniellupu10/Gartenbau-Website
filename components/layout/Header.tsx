"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Phone, Mail, Leaf, ChevronDown, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Define top cities for the dropdown
const TOP_CITIES = [
  { name: "Pforzheim", slug: "pforzheim" },
  { name: "Birkenfeld", slug: "birkenfeld" },
  { name: "Ispringen", slug: "ispringen" },
  { name: "Eisingen", slug: "eisingen" },
  { name: "Kieselbronn", slug: "kieselbronn" },
  { name: "Niefern", slug: "niefern" },
  { name: "Remchingen", slug: "remchingen" },
  { name: "Mühlacker", slug: "muehlacker" },
  { name: "Neuenbürg", slug: "neuenbuerg" },
  { name: "Straubenhardt", slug: "straubenhardt" },
  { name: "Maulbronn", slug: "maulbronn" },
  { name: "Knittlingen", slug: "knittlingen" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Bar - Simplified and Transparent */}
        <div className="hidden md:flex justify-end items-center py-2 text-xs text-white/40 gap-6 mb-2">
          <a href="tel:+4915166587383" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
            <Phone className="h-3 w-3" />
            <span>+49 151 66587383</span>
          </a>
          <a href="mailto:gartenbauu@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors font-medium">
            <Mail className="h-3 w-3" />
            <span>gartenbauu@gmail.com</span>
          </a>
        </div>

        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl text-white group">
            <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/40 transition-all duration-500">
              <Leaf className="h-7 w-7 text-primary" />
            </div>
            <span className="tracking-tighter">AP Gartenbau</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-2xl">
              <Link href="/" className={cn(
                "relative py-1 text-sm font-bold transition-all duration-300 hover:scale-110 group flex flex-col items-center",
                pathname === "/" ? "text-primary" : "text-white/90"
              )}>
                Startseite
                <span className={cn(
                  "absolute -bottom-1 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(var(--primary),0.8)]",
                  pathname === "/" && "w-full"
                )} />
              </Link>

              <div className="h-4 w-[1px] bg-white/20 mx-3" />

              <Link href="/standorte" className={cn(
                "relative py-1 text-sm font-bold transition-all duration-300 hover:scale-110 group flex flex-col items-center",
                pathname.startsWith("/standorte") ? "text-primary" : "text-white/90"
              )}>
                Standorte
                <span className={cn(
                  "absolute -bottom-1 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(var(--primary),0.8)]",
                  pathname.startsWith("/standorte") && "w-full"
                )} />
              </Link>

              <div className="h-4 w-[1px] bg-white/20 mx-3" />

              <Link href="/services" className={cn(
                "relative py-1 text-sm font-bold transition-all duration-300 hover:scale-110 group flex flex-col items-center",
                pathname === "/services" ? "text-primary" : "text-white/90"
              )}>
                Leistungen
                <span className={cn(
                  "absolute -bottom-1 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(var(--primary),0.8)]",
                  pathname === "/services" && "w-full"
                )} />
              </Link>

              <div className="h-4 w-[1px] bg-white/20 mx-3" />

              <Link href="/about" className={cn(
                "relative py-1 text-sm font-bold transition-all duration-300 hover:scale-110 group flex flex-col items-center",
                pathname === "/about" ? "text-primary" : "text-white/90"
              )}>
                Über Uns
                <span className={cn(
                  "absolute -bottom-1 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(var(--primary),0.8)]",
                  pathname === "/about" && "w-full"
                )} />
              </Link>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 h-12 shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all hover:scale-105 active:scale-95">
              <Link href="/termin">Termin buchen</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center gap-2 bg-black/20 backdrop-blur-md rounded-full pr-1 pl-3 shadow-sm border border-white/10">
            <Link href="/termin" className="text-xs font-bold text-white uppercase tracking-wider hover:text-primary transition-colors">
              Termin
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:text-primary rounded-full hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menü öffnen</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left text-lg font-bold text-primary flex items-center gap-2 mb-6 text-foreground">
                  <Leaf className="h-5 w-5" /> AP Gartenbau
                </SheetTitle>
                <nav className="flex flex-col gap-4">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold py-2 border-b">Startseite</Link>

                  {/* Mobile Locations (Simple List) */}
                  <div className="space-y-4 py-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Top Standorte
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {TOP_CITIES.slice(0, 8).map(city => (
                        <Link key={city.slug} href={`/standorte/${city.slug}`} onClick={() => setIsOpen(false)} className="text-sm py-1 font-medium text-foreground/80 hover:text-primary">{city.name}</Link>
                      ))}
                      <Link href="/standorte" onClick={() => setIsOpen(false)} className="text-sm py-1 font-bold text-primary">Alle Orte →</Link>
                    </div>
                  </div>

                  <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-bold py-2 border-b border-t mt-2">Leistungen</Link>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold py-2 border-b">Über Uns</Link>

                  <div className="mt-8 flex flex-col gap-4">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-xl">
                      <Link href="/termin" onClick={() => setIsOpen(false)}>
                        Termin buchen
                      </Link>
                    </Button>
                    <div className="flex flex-col gap-3 mt-4 text-sm text-muted-foreground">
                      <a href="tel:+4915166587383" className="flex items-center gap-3 font-medium hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" /> +49 151 66587383
                      </a>
                      <a href="mailto:gartenbauu@gmail.com" className="flex items-center gap-3 font-medium hover:text-primary transition-colors">
                        <Mail className="h-4 w-4" /> gartenbauu@gmail.com
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
