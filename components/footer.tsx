"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react"
import type { LanguageCode } from "@/lib/i18n"
import { useEffect, useState } from "react"
import { getSiteSettings } from "@/lib/site-settings"

interface FooterProps {
  currentLang: LanguageCode
  translations: any
}

export function Footer({ currentLang, translations }: FooterProps) {
  const [customFooterCode, setCustomFooterCode] = useState("")

  useEffect(() => {
    const settings = getSiteSettings()
    if (settings.customFooterCode) {
      setCustomFooterCode(settings.customFooterCode)
    }
  }, [])

  const footerLinks = {
    quickLinks: [
      { href: `/${currentLang}`, label: translations.home || "Home" },
      { href: `/${currentLang}/about`, label: translations.about || "About" },
      { href: `/${currentLang}/contact`, label: translations.contact || "Contact" },
    ],
    legal: [
      { href: `/${currentLang}/privacy`, label: translations.privacy || "Privacy Policy" },
      { href: `/${currentLang}/terms`, label: translations.terms || "Terms of Service" },
    ],
    categories: [
      { label: translations.gamingNicks || "Gaming Nicknames" },
      { label: translations.socialMediaNicks || "Social Media Nicknames" },
      { label: translations.coolNicks || "Cool Nicknames" },
      { label: translations.cuteNicks || "Cute Nicknames" },
    ],
  }

  return (
    <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">✨</div>
              <h3 className="font-bold text-lg">{translations.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{translations.footerDescription}</p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{translations.quickLinks || "Quick Links"}</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">{translations.categories || "Categories"}</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((item, index) => (
                <li key={index}>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold mb-4">{translations.legal || "Legal"}</h3>
            <ul className="space-y-2 mb-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-purple-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+90 555 123 4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 {translations.title}. {translations.allRightsReserved || "All rights reserved."}
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>{translations.availableLanguages || "Languages"}: TR, EN, ES, DE, FR, AR</span>
          </div>
        </div>

        {/* Custom Footer Code */}
        {customFooterCode && <div dangerouslySetInnerHTML={{ __html: customFooterCode }} />}
      </div>
    </footer>
  )
}
