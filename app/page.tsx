"use client"

import { useState, useEffect } from "react"
import { NickGenerator } from "@/components/nick-generator"
import { ReadyNicksSection } from "@/components/ready-nicks-section"
import { CookieConsent } from "@/components/cookie-consent"
import { SchemaMarkup } from "@/components/schema-markup"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PlatformPreview } from "@/components/platform-preview"
import { AdZone } from "@/components/ad-zone"
import { getTranslation, type LanguageCode } from "@/lib/i18n"
import { getSiteSettings } from "@/lib/site-settings"

export default function Home() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>("tr")
  const [generatedNick, setGeneratedNick] = useState("")
  const [customHeadCode, setCustomHeadCode] = useState("")
  const t = getTranslation(currentLang)

  useEffect(() => {
    const settings = getSiteSettings()
    if (settings.customHeadCode) {
      setCustomHeadCode(settings.customHeadCode)
    }
  }, [])

  return (
    <>
      <SchemaMarkup type="home" lang={currentLang} />
      {customHeadCode && <div dangerouslySetInnerHTML={{ __html: customHeadCode }} />}

      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-purple-950/30 dark:to-blue-950/30">
        <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} translations={t} />

        <AdZone position="header" />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 space-y-16">
          <AdZone position="content-top" />

          <div className="text-center space-y-6 py-8">
            <h1 className="text-5xl md:text-7xl font-black text-balance">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Create Your
              </span>
              <br />
              <span className="text-foreground">Perfect Nickname</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transform your name into something extraordinary with 200+ styles and decorations
            </p>
          </div>

          {/* Nick Generator */}
          <NickGenerator translations={t} onNickGenerated={setGeneratedNick} />

          {generatedNick && <PlatformPreview nickname={generatedNick} translations={t} />}

          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            <div>
              {/* Ready Nicks Section */}
              <div className="border-t pt-16">
                <ReadyNicksSection currentLang={currentLang} translations={t} />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <AdZone position="sidebar" />
              </div>
            </div>
          </div>

          <AdZone position="content-bottom" />
        </main>

        <AdZone position="footer" />

        <Footer currentLang={currentLang} translations={t} />

        {/* Cookie Consent */}
        <CookieConsent />
      </div>
    </>
  )
}
