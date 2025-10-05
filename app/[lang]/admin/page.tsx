"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Trash2, Lock, Settings, Hand as Ad, Palette } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { fontStyles, decorations, loadCustomData, saveCustomData } from "@/lib/nick-data"
import type { FontStyle } from "@/lib/nick-data"
import type { LanguageCode } from "@/lib/i18n"
import {
  getSiteSettings,
  saveSiteSettings,
  getAdZones,
  saveAdZones,
  type SiteSettings,
  type AdZone,
} from "@/lib/site-settings"

export default function AdminPage({ params }: { params: { lang: LanguageCode } }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [fonts, setFonts] = useState(fontStyles)
  const [decs, setDecs] = useState(decorations)
  const [newFontName, setNewFontName] = useState("")
  const [newFontTransform, setNewFontTransform] = useState("")
  const [newDecName, setNewDecName] = useState("")
  const [newDecPrefix, setNewDecPrefix] = useState("")
  const [newDecSuffix, setNewDecSuffix] = useState("")

  const [siteSettings, setSiteSettings] = useState<SiteSettings>(getSiteSettings())
  const [adZones, setAdZones] = useState<AdZone[]>(getAdZones())

  const lang = params.lang || "tr"
  const homeUrl = lang === "tr" ? "/" : `/${lang}`

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
      const { fonts: customFonts, decorations: customDecs } = loadCustomData()
      setFonts(customFonts)
      setDecs(customDecs)
      setSiteSettings(getSiteSettings())
      setAdZones(getAdZones())
    }
  }, [])

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true)
      localStorage.setItem("adminAuth", "true")
      const { fonts: customFonts, decorations: customDecs } = loadCustomData()
      setFonts(customFonts)
      setDecs(customDecs)
      setSiteSettings(getSiteSettings())
      setAdZones(getAdZones())
    } else {
      alert("Yanlış şifre!")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("adminAuth")
  }

  const addFont = () => {
    if (!newFontName || !newFontTransform) return

    try {
      const transformFn = new Function("text", newFontTransform)

      const newFont: FontStyle = {
        id: `custom-${Date.now()}`,
        name: newFontName,
        transform: transformFn as (text: string) => string,
      }

      const updatedFonts = [...fonts, newFont]
      setFonts(updatedFonts)
      saveCustomData(updatedFonts, decs)

      setNewFontName("")
      setNewFontTransform("")
    } catch (error) {
      alert("Geçersiz transform fonksiyonu!")
    }
  }

  const removeFont = (id: string) => {
    const updatedFonts = fonts.filter((f) => f.id !== id)
    setFonts(updatedFonts)
    saveCustomData(updatedFonts, decs)
  }

  const addDecoration = () => {
    if (!newDecName) return

    const newDec = {
      id: `custom-${Date.now()}`,
      name: newDecName,
      prefix: newDecPrefix,
      suffix: newDecSuffix,
    }

    const updatedDecs = [...decs, newDec]
    setDecs(updatedDecs)
    saveCustomData(fonts, updatedDecs)

    setNewDecName("")
    setNewDecPrefix("")
    setNewDecSuffix("")
  }

  const removeDecoration = (id: string) => {
    const updatedDecs = decs.filter((d) => d.id !== id)
    setDecs(updatedDecs)
    saveCustomData(fonts, updatedDecs)
  }

  const handleSaveSettings = () => {
    saveSiteSettings(siteSettings)
    alert("Site ayarları kaydedildi!")
  }

  const updateAdZone = (id: string, updates: Partial<AdZone>) => {
    const updated = adZones.map((zone) => (zone.id === id ? { ...zone, ...updates } : zone))
    setAdZones(updated)
    saveAdZones(updated)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-6">
            <Lock className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h1 className="text-2xl font-bold">Admin Paneli</h1>
            <p className="text-sm text-muted-foreground mt-2">Giriş yapmak için şifrenizi girin</p>
          </div>

          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              Giriş Yap
            </Button>
            <Link href={homeUrl}>
              <Button variant="outline" className="w-full bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">Demo şifre: admin123</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Paneli</h1>
            <div className="flex gap-2">
              <Link href={homeUrl}>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Ana Sayfa
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Çıkış Yap
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="fonts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="fonts">
              <Palette className="h-4 w-4 mr-2" />
              Fontlar
            </TabsTrigger>
            <TabsTrigger value="decorations">
              <Palette className="h-4 w-4 mr-2" />
              Dekorasyonlar
            </TabsTrigger>
            <TabsTrigger value="ads">
              <Ad className="h-4 w-4 mr-2" />
              Reklamlar
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Site Ayarları
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fonts">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Fontları Yönet</h2>
              <div className="flex items-center gap-4">
                <Input
                  placeholder="Yeni Font Adı"
                  value={newFontName}
                  onChange={(e) => setNewFontName(e.target.value)}
                />
                <Textarea
                  placeholder="Transform Fonksiyonu"
                  value={newFontTransform}
                  onChange={(e) => setNewFontTransform(e.target.value)}
                />
                <Button onClick={addFont}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ekle
                </Button>
              </div>
              <ul className="space-y-2">
                {fonts.map((font) => (
                  <li key={font.id} className="flex items-center justify-between">
                    <span>{font.name}</span>
                    <Button variant="outline" onClick={() => removeFont(font.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="decorations">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Dekorasyonları Yönet</h2>
              <div className="flex items-center gap-4">
                <Input
                  placeholder="Yeni Dekorasyon Adı"
                  value={newDecName}
                  onChange={(e) => setNewDecName(e.target.value)}
                />
                <Input placeholder="Ön Ek" value={newDecPrefix} onChange={(e) => setNewDecPrefix(e.target.value)} />
                <Input placeholder="Sufix" value={newDecSuffix} onChange={(e) => setNewDecSuffix(e.target.value)} />
                <Button onClick={addDecoration}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ekle
                </Button>
              </div>
              <ul className="space-y-2">
                {decs.map((dec) => (
                  <li key={dec.id} className="flex items-center justify-between">
                    <span>{dec.name}</span>
                    <Button variant="outline" onClick={() => removeDecoration(dec.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="ads">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Reklamları Yönet</h2>
              <ul className="space-y-2">
                {adZones.map((zone) => (
                  <li key={zone.id} className="flex items-center justify-between">
                    <span>{zone.name}</span>
                    <Button variant="outline" onClick={() => updateAdZone(zone.id, { active: !zone.active })}>
                      <Switch checked={zone.active} />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Site Ayarlarını Düzenle</h2>
              {/* Form fields for site settings */}
              <Button onClick={handleSaveSettings}>Ayarları Kaydet</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
