import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { SchemaMarkup } from "@/components/schema-markup"
import type { LanguageCode } from "@/lib/i18n"

export default function ContactPage({ params }: { params: { lang: LanguageCode } }) {
  const lang = params.lang || "tr"
  const homeUrl = lang === "tr" ? "/" : `/${lang}`

  return (
    <>
      <SchemaMarkup type="contact" lang={lang} />

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <Link href={homeUrl}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>
        </header>
      </div>
    </>
  )
}
