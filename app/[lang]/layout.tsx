import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../globals.css"
import type { LanguageCode } from "@/lib/i18n"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export async function generateMetadata({ params }: { params: { lang: LanguageCode } }): Promise<Metadata> {
  const lang = params.lang || "tr"

  const titles: Record<LanguageCode, string> = {
    tr: "Şekilli Nick Oluşturucu | PUBG, Free Fire, ML Nickler",
    en: "Stylish Name Generator | PUBG, Free Fire, ML Names",
    es: "Generador de Nombres Elegantes | PUBG, Free Fire, ML",
    de: "Stilvoller Namengenerator | PUBG, Free Fire, ML",
    fr: "Générateur de Noms Stylés | PUBG, Free Fire, ML",
    ar: "منشئ أسماء أنيقة | PUBG, Free Fire, ML",
  }

  const descriptions: Record<LanguageCode, string> = {
    tr: "PUBG, Free Fire, Mobile Legends için şekilli nick oluştur. 200+ hazır stil, 50+ font, özel dekorasyonlar.",
    en: "Create stylish names for PUBG, Free Fire, Mobile Legends. 200+ ready styles, 50+ fonts, custom decorations.",
    es: "Crea nombres elegantes para PUBG, Free Fire, Mobile Legends. 200+ estilos listos, 50+ fuentes.",
    de: "Erstelle stilvolle Namen für PUBG, Free Fire, Mobile Legends. 200+ fertige Stile, 50+ Schriftarten.",
    fr: "Créez des noms stylés pour PUBG, Free Fire, Mobile Legends. 200+ styles prêts, 50+ polices.",
    ar: "أنشئ أسماء أنيقة لـ PUBG و Free Fire و Mobile Legends. أكثر من 200 نمط جاهز و 50 خطًا.",
  }

  return {
    metadataBase: new URL("https://yoursite.com"),
    title: {
      default: titles[lang],
      template: `%s | ${titles[lang]}`,
    },
    description: descriptions[lang],
    openGraph: {
      type: "website",
      locale: lang === "tr" ? "tr_TR" : `${lang}_${lang.toUpperCase()}`,
      url: `https://yoursite.com/${lang === "tr" ? "" : lang}`,
      siteName: titles[lang],
      title: titles[lang],
      description: descriptions[lang],
    },
    alternates: {
      canonical: `https://yoursite.com/${lang === "tr" ? "" : lang}`,
      languages: {
        tr: "https://yoursite.com",
        en: "https://yoursite.com/en",
        es: "https://yoursite.com/es",
        de: "https://yoursite.com/de",
        fr: "https://yoursite.com/fr",
        ar: "https://yoursite.com/ar",
      },
    },
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: LanguageCode }
}) {
  const lang = params.lang || "tr"

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body>{children}</body>
    </html>
  )
}
