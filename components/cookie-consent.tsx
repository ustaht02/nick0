"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      // Show after 2 seconds
      setTimeout(() => setShowConsent(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <Card className="p-6 shadow-2xl border-2">
        <button
          onClick={declineCookies}
          className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          aria-label="Kapat"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex gap-4 mb-4">
          <Cookie className="h-8 w-8 text-purple-500 shrink-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Çerez Kullanımı</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Web sitemiz, deneyiminizi iyileştirmek için çerezler kullanmaktadır. Sitemizi kullanarak çerez kullanımını
              kabul etmiş olursunuz.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button onClick={acceptCookies} className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500">
            Kabul Et
          </Button>
          <Button onClick={declineCookies} variant="outline" className="flex-1 bg-transparent">
            Reddet
          </Button>
        </div>

        <div className="mt-3 text-center">
          <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">
            Gizlilik Politikası
          </Link>
          {" • "}
          <Link href="/terms" className="text-xs text-muted-foreground hover:underline">
            Kullanım Şartları
          </Link>
        </div>
      </Card>
    </div>
  )
}
