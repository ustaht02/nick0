"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Check, Search } from "lucide-react"
import { readyNicks, nickCategories, type ReadyNick } from "@/lib/ready-nicks"
import { cn } from "@/lib/utils"
import type { LanguageCode } from "@/lib/i18n"

interface ReadyNicksSectionProps {
  currentLang: LanguageCode
  translations: Record<string, string>
}

const ITEMS_PER_PAGE = 30

export function ReadyNicksSection({ currentLang, translations }: ReadyNicksSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)

  const filteredNicks = readyNicks.filter((nick) => {
    const matchesCategory = selectedCategory === "all" || nick.category === selectedCategory
    const matchesSearch = nick.text.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const displayedNicks = filteredNicks.slice(0, displayCount)
  const hasMore = displayCount < filteredNicks.length

  const copyNick = async (nick: ReadyNick) => {
    try {
      await navigator.clipboard.writeText(nick.text)
      setCopiedId(nick.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const getCategoryName = (category: (typeof nickCategories)[0]) => {
    const langKey = `name${currentLang.charAt(0).toUpperCase() + currentLang.slice(1)}` as keyof typeof category
    return category[langKey] || category.name
  }

  const loadMore = () => {
    setDisplayCount((prev) => prev + ITEMS_PER_PAGE)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setDisplayCount(ITEMS_PER_PAGE)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setDisplayCount(ITEMS_PER_PAGE)
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {translations.readyNicks || "Ready Nicknames"}
        </h2>
        <p className="text-lg text-muted-foreground font-semibold">
          {translations.readyNicksDesc || "Choose from 200+ ready-made nickname styles"}
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder={translations.search || "Search..."}
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-12 h-14 text-lg border-2 font-semibold"
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          variant={selectedCategory === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryChange("all")}
          className={cn(
            "font-bold border-2",
            selectedCategory === "all" &&
              "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg",
          )}
        >
          {translations.all || "All"} ({readyNicks.length})
        </Button>
        {nickCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category.id)}
            className={cn(
              "font-bold border-2",
              selectedCategory === category.id &&
                "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg",
            )}
          >
            {category.icon} {getCategoryName(category)} ({readyNicks.filter((n) => n.category === category.id).length})
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedNicks.map((nick) => (
          <Card
            key={nick.id}
            className="p-5 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group border-2 hover:border-primary"
            onClick={() => copyNick(nick)}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 font-bold text-xl break-all">{nick.text}</div>
              <Button
                size="sm"
                variant="ghost"
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
              >
                {copiedId === nick.id ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredNicks.length === 0 && (
        <div className="text-center py-16 text-muted-foreground text-lg font-semibold">
          {translations.noResults || "No results found"}
        </div>
      )}

      {hasMore && (
        <div className="text-center pt-8">
          <Button
            onClick={loadMore}
            size="lg"
            className="font-bold text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            {translations.loadMore || "Daha Fazla Yükle"} ({filteredNicks.length - displayCount}{" "}
            {translations.remaining || "kaldı"})
          </Button>
        </div>
      )}
    </div>
  )
}
