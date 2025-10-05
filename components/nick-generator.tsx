"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Copy, Check, Wand2 } from "lucide-react"
import { fontStyles, decorations, loadCustomData, fontCategories, decorationCategories } from "@/lib/nick-data"
import { cn } from "@/lib/utils"

interface NickGeneratorProps {
  translations: Record<string, string>
  onNickGenerated?: (nick: string) => void
}

export function NickGenerator({ translations, onNickGenerated }: NickGeneratorProps) {
  const [inputText, setInputText] = useState("")
  const [selectedFont, setSelectedFont] = useState(fontStyles[0].id)
  const [selectedDecoration, setSelectedDecoration] = useState(decorations[0].id)
  const [result, setResult] = useState("")
  const [copied, setCopied] = useState(false)
  const [fonts, setFonts] = useState(fontStyles)
  const [decs, setDecs] = useState(decorations)
  const [fontCategory, setFontCategory] = useState<string>("all")
  const [decorationCategory, setDecorationCategory] = useState<string>("all")

  useEffect(() => {
    const { fonts: customFonts, decorations: customDecs } = loadCustomData()
    setFonts(customFonts)
    setDecs(customDecs)
  }, [])

  useEffect(() => {
    if (!inputText) {
      setResult("")
      return
    }

    const font = fonts.find((f) => f.id === selectedFont)
    const decoration = decs.find((d) => d.id === selectedDecoration)

    if (font && decoration) {
      const transformed = font.transform(inputText)
      const finalResult = `${decoration.prefix}${transformed}${decoration.suffix}`
      setResult(finalResult)
      onNickGenerated?.(finalResult)
    }
  }, [inputText, selectedFont, selectedDecoration, fonts, decs, onNickGenerated])

  const copyToClipboard = async () => {
    if (!result) return

    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const examples = ["Gamer", "Legend", "Pro", "King", "Queen"]

  const filteredFonts = fontCategory === "all" ? fonts : fonts.filter((f) => f.category === fontCategory)

  const filteredDecorations =
    decorationCategory === "all" ? decs : decs.filter((d) => d.category === decorationCategory)

  return (
    <div className="space-y-10">
      <Card className="p-8 bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-purple-900/20 border-4 border-primary/20 shadow-2xl">
        <div className="space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder={translations.inputPlaceholder || "Enter your name..."}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="text-xl h-16 pr-14 bg-white dark:bg-gray-900 backdrop-blur border-2 font-semibold"
            />
            <Wand2 className="absolute right-5 top-5 h-6 w-6 text-primary animate-pulse" />
          </div>

          {/* Examples */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-semibold text-muted-foreground">{translations.examples || "Try"}:</span>
            {examples.map((example) => (
              <Button
                key={example}
                variant="outline"
                size="sm"
                onClick={() => setInputText(example)}
                className="h-8 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
              >
                {example}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="text-2xl font-black flex items-center gap-3">
            <span className="text-3xl">✨</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {translations.fontStyle || "Font Styles"}
            </span>
          </h3>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={fontCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFontCategory("all")}
              className={cn(
                "font-semibold",
                fontCategory === "all" &&
                  "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
              )}
            >
              All
            </Button>
            {Object.entries(fontCategories).map(([key, label]) => (
              <Button
                key={key}
                variant={fontCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFontCategory(key)}
                className={cn(
                  "font-semibold",
                  fontCategory === key &&
                    "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
                )}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredFonts.map((font) => (
            <Card
              key={font.id}
              className={cn(
                "p-5 cursor-pointer transition-all hover:scale-110 hover:shadow-2xl border-2",
                selectedFont === font.id
                  ? "bg-gradient-to-br from-pink-500 to-purple-500 text-white border-pink-600 shadow-xl scale-105"
                  : "bg-white dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-purple-900/20 border-border",
              )}
              onClick={() => setSelectedFont(font.id)}
            >
              <div className="text-center space-y-2">
                <div className="text-xs font-bold uppercase tracking-wide">{font.name}</div>
                <div className="text-2xl font-bold">{font.transform("ABC")}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="text-2xl font-black flex items-center gap-3">
            <span className="text-3xl">🎨</span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {translations.decoration || "Decorations"}
            </span>
          </h3>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={decorationCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setDecorationCategory("all")}
              className={cn(
                "font-semibold",
                decorationCategory === "all" &&
                  "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
              )}
            >
              All
            </Button>
            {Object.entries(decorationCategories).map(([key, label]) => (
              <Button
                key={key}
                variant={decorationCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setDecorationCategory(key)}
                className={cn(
                  "font-semibold",
                  decorationCategory === key &&
                    "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
                )}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {filteredDecorations.map((decoration) => (
            <Card
              key={decoration.id}
              className={cn(
                "p-4 cursor-pointer transition-all hover:scale-110 hover:shadow-2xl border-2",
                selectedDecoration === decoration.id
                  ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white border-blue-600 shadow-xl scale-105"
                  : "bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-border",
              )}
              onClick={() => setSelectedDecoration(decoration.id)}
            >
              <div className="text-center space-y-1">
                <div className="text-xs font-bold uppercase tracking-wide truncate">{decoration.name}</div>
                <div className="text-base truncate font-semibold">
                  {decoration.prefix}A{decoration.suffix}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {result && (
        <Card className="p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:via-emerald-950/30 dark:to-teal-950/30 border-4 border-green-400 dark:border-green-600 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-6">
            <h3 className="text-2xl font-black flex items-center gap-3">
              <span className="text-3xl animate-bounce">🎉</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {translations.result || "Your Nickname"}
              </span>
            </h3>
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <div className="flex-1 p-6 bg-white dark:bg-gray-900 rounded-2xl text-3xl text-center break-all font-bold border-2 border-green-200 dark:border-green-800">
                {result}
              </div>
              <Button
                onClick={copyToClipboard}
                size="lg"
                className="h-auto py-6 px-8 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                {copied ? (
                  <>
                    <Check className="h-6 w-6 mr-3" />
                    {translations.copied || "Copied!"}
                  </>
                ) : (
                  <>
                    <Copy className="h-6 w-6 mr-3" />
                    {translations.copy || "Copy"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
