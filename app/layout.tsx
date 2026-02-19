import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AP Gartenbau | Professioneller Garten- & Landschaftsbau",
  description: "Ihr Experte für Gartengestaltung, Pflege und Landschaftsbau in Baden-Württemberg. Jetzt kostenloses Angebot anfordern!",
  metadataBase: new URL("https://ap-gartenbau.de"),
  keywords: ["Gartenbau", "Landschaftsbau", "Gartenpflege", "Baden-Württemberg", "Stuttgart", "Karlsruhe"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "AP Gartenbau",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased flex flex-col min-h-screen relative`}
      >
        <SmoothScrollProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
