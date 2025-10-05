import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yoursite.com"),
  title: {
    default: "Şekilli Nick Oluşturucu | PUBG, Free Fire, ML Nickler",
    template: "%s | Şekilli Nick Oluşturucu",
  },
  description:
    "PUBG, Free Fire, Mobile Legends için şekilli nick oluştur. 200+ hazır stil, 50+ font, özel dekorasyonlar. Ücretsiz ve kolay kullanım!",
  keywords: [
    "şekilli nick",
    "pubg nick",
    "free fire nick",
    "mobile legends nick",
    "nick oluşturucu",
    "stylish name",
    "fancy text",
    "cool nick",
    "gaming nick",
    "sosyal medya nick",
  ],
  authors: [{ name: "Şekilli Nick Oluşturucu" }],
  creator: "Şekilli Nick Oluşturucu",
  publisher: "Şekilli Nick Oluşturucu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://yoursite.com",
    siteName: "Şekilli Nick Oluşturucu",
    title: "Şekilli Nick Oluşturucu | PUBG, Free Fire, ML Nickler",
    description:
      "PUBG, Free Fire, Mobile Legends için şekilli nick oluştur. 200+ hazır stil, 50+ font, özel dekorasyonlar.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Şekilli Nick Oluşturucu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Şekilli Nick Oluşturucu | PUBG, Free Fire, ML Nickler",
    description:
      "PUBG, Free Fire, Mobile Legends için şekilli nick oluştur. 200+ hazır stil, 50+ font, özel dekorasyonlar.",
    images: ["/og-image.png"],
    creator: "@yoursite",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://yoursite.com",
    languages: {
      "tr-TR": "https://yoursite.com",
      "en-US": "https://yoursite.com/en",
      "es-ES": "https://yoursite.com/es",
      "de-DE": "https://yoursite.com/de",
      "fr-FR": "https://yoursite.com/fr",
      "ar-SA": "https://yoursite.com/ar",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
