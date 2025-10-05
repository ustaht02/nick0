"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Settings } from "lucide-react"
import { useState } from "react"
import type { LanguageCode } from "@/lib/i18n"
import { languages } from "@/lib/nick-data"

interface NavigationProps {
  currentLang: LanguageCode
  onLanguageChange: (lang: LanguageCode) => void
  translations: any
}

export function Navigation({ currentLang, onLanguageChange, translations }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: `/${currentLang}`, label: translations.home || "Home" },
    { href: `/${currentLang}/about`, label: translations.about || "About" },
    { href: `/${currentLang}/contact`, label: translations.contact || "Contact" },
  ]

  return (
    <header className="border-b-4 border-primary/20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${currentLang}`} className="flex items-center gap-3 group">
            <div className="text-5xl group-hover:scale-110 transition-transform">✨</div>
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {translations.title || "NickGen"}
              </h1>
              <p className="text-xs font-semibold text-muted-foreground hidden sm:block uppercase tracking-wide">
                {translations.subtitle || "Nickname Generator"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold transition-all hover:text-primary hover:scale-110 ${
                  pathname === link.href ? "text-primary scale-110" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="hidden sm:flex gap-2 bg-muted rounded-xl p-1.5 border-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code as LanguageCode)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105 ${
                    currentLang === lang.code
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                      : "hover:bg-background"
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            <Link href={`/${currentLang}/admin`}>
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex font-bold border-2 hover:scale-105 transition-transform bg-transparent"
              >
                <Settings className="h-4 w-4 mr-2" />
                {translations.admin || "Admin"}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:scale-110 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t-2 pt-6 space-y-6 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-bold transition-colors hover:text-primary ${
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Language Selector */}
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code as LanguageCode)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 ${
                    currentLang === lang.code
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-pink-500"
                      : "hover:bg-muted"
                  }`}
                >
                  {lang.flag} {lang.name}
                </button>
              ))}
            </div>

            <Link href={`/${currentLang}/admin`} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="sm" className="w-full font-bold border-2 bg-transparent">
                <Settings className="h-4 w-4 mr-2" />
                {translations.admin || "Admin"}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
