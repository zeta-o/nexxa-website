import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { site } from "@/lib/data";

import "./globals.css";

// Brand typeface: Creato Display (SIL Open Font License 1.1 — see src/fonts/creato-display/OFL.txt).
// Manual: Black for titles, Bold for subtitles, Regular for body text.
const brand = localFont({
  variable: "--font-brand",
  display: "swap",
  src: [
    { path: "../fonts/creato-display/CreatoDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/creato-display/CreatoDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/creato-display/CreatoDisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/creato-display/CreatoDisplay-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../fonts/creato-display/CreatoDisplay-Black.otf", weight: "900", style: "normal" },
  ],
});

// Brand tagline "We Rise Together" — Heydex (Khurasan).
const slogan = localFont({
  variable: "--font-slogan-src",
  display: "swap",
  src: "../fonts/heydex/Heydex.otf",
});

// Morington (Patria Std) — uniforms and headers of two words at most (brand manual).
const accent = localFont({
  variable: "--font-accent-src",
  display: "swap",
  src: "../fonts/morington/Morington-Regular.ttf",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Voleibol femenino`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} · Voleibol femenino`,
    description: site.description,
    locale: "es_CR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#00143c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${brand.variable} ${slogan.variable} ${accent.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-white">
        <a
          href="#contenido"
          className="sr-only z-50 bg-gold px-4 py-3 font-bold text-navy-deep focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
