"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Trash2, Lock, Settings, Hand as Ad, Palette, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { fontStyles, decorations, loadCustomData, saveCustomData } from "@/lib/nick-data"
import type { FontStyle } from "@/lib/nick-data"
import {
  getSiteSettings,
  saveSiteSettings,
  getAdZones,
  saveAdZones,
  type SiteSettings,
  type AdZone,
} from "@/lib/site-settings"
import { readyNicks, nickCategories, type ReadyNick } from "@/lib/ready-nicks"

export default function AdminPage() {
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

  const [nicks, setNicks] = useState<ReadyNick[]>([])
  const [newNickText, setNewNickText] = useState("")
  const [newNickCategory, setNewNickCategory] = useState("gaming")
  const [searchNick, setSearchNick] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
      const { fonts: customFonts, decorations: customDecs } = loadCustomData()
      setFonts(customFonts)
      setDecs(customDecs)
      setSiteSettings(getSiteSettings())
      setAdZones(getAdZones())
      const savedNicks = localStorage.getItem("readyNicks")
      setNicks(savedNicks ? JSON.parse(savedNicks) : readyNicks)
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
      const savedNicks = localStorage.getItem("readyNicks")
      setNicks(savedNicks ? JSON.parse(savedNicks) : readyNicks)
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

  const saveNicks = (updatedNicks: ReadyNick[]) => {
    setNicks(updatedNicks)
    localStorage.setItem("readyNicks", JSON.stringify(updatedNicks))
  }

  const addReadyNick = () => {
    if (!newNickText.trim()) return

    const newNick: ReadyNick = {
      id: `custom-${Date.now()}`,
      text: newNickText,
      category: newNickCategory,
    }

    const updatedNicks = [...nicks, newNick]
    saveNicks(updatedNicks)
    setNewNickText("")
    alert("Hazır nick eklendi!")
  }

  const removeReadyNick = (id: string) => {
    if (confirm("Bu hazır nick'i silmek istediğinizden emin misiniz?")) {
      const updatedNicks = nicks.filter((n) => n.id !== id)
      saveNicks(updatedNicks)
    }
  }

  const filteredNicks = nicks.filter((nick) => {
    const matchesSearch = nick.text.toLowerCase().includes(searchNick.toLowerCase())
    const matchesCategory = filterCategory === "all" || nick.category === filterCategory
    return matchesSearch && matchesCategory
  })

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
            <Link href="/">
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
              <Link href="/">
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="fonts">
              <Palette className="h-4 w-4 mr-2" />
              Fontlar
            </TabsTrigger>
            <TabsTrigger value="decorations">
              <Palette className="h-4 w-4 mr-2" />
              Dekorasyonlar
            </TabsTrigger>
            <TabsTrigger value="ready-nicks">
              <Star className="h-4 w-4 mr-2" />
              Hazır Nickler
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

          {/* Font Yönetimi */}
          <TabsContent value="fonts">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Font Stilleri Yönetimi</h2>

              <div className="space-y-4 mb-6">
                <Input
                  placeholder="Font adı (örn: Custom Bold)"
                  value={newFontName}
                  onChange={(e) => setNewFontName(e.target.value)}
                />
                <Textarea
                  placeholder="Transform fonksiyonu (örn: return text.toUpperCase())"
                  value={newFontTransform}
                  onChange={(e) => setNewFontTransform(e.target.value)}
                  rows={3}
                />
                <Button onClick={addFont} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Font Ekle
                </Button>
              </div>

              <div className="space-y-2">
                {fonts.map((font) => (
                  <div
                    key={font.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <div className="font-medium">{font.name}</div>
                      <div className="text-sm text-muted-foreground">{font.transform("ABC123")}</div>
                    </div>
                    {font.id.startsWith("custom-") && (
                      <Button variant="destructive" size="sm" onClick={() => removeFont(font.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Dekorasyon Yönetimi */}
          <TabsContent value="decorations">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Dekorasyon Yönetimi</h2>

              <div className="space-y-4 mb-6">
                <Input
                  placeholder="Dekorasyon adı (örn: Custom Stars)"
                  value={newDecName}
                  onChange={(e) => setNewDecName(e.target.value)}
                />
                <Input
                  placeholder="Prefix (örn: ⭐ )"
                  value={newDecPrefix}
                  onChange={(e) => setNewDecPrefix(e.target.value)}
                />
                <Input
                  placeholder="Suffix (örn:  ⭐)"
                  value={newDecSuffix}
                  onChange={(e) => setNewDecSuffix(e.target.value)}
                />
                <Button onClick={addDecoration} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Dekorasyon Ekle
                </Button>
              </div>

              <div className="space-y-2">
                {decs.map((dec) => (
                  <div
                    key={dec.id}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div>
                      <div className="font-medium">{dec.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {dec.prefix}Text{dec.suffix}
                      </div>
                    </div>
                    {dec.id.startsWith("custom-") && (
                      <Button variant="destructive" size="sm" onClick={() => removeDecoration(dec.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="ready-nicks">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Hazır Nickler Yönetimi</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Kullanıcıların seçebileceği hazır nick stillerini yönetin
              </p>

              {/* Add New Nick */}
              <div className="space-y-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold">Yeni Hazır Nick Ekle</h3>
                <Input
                  placeholder="Nick metni (örn: ꧁༒LEGEND༒꧂)"
                  value={newNickText}
                  onChange={(e) => setNewNickText(e.target.value)}
                />
                <div>
                  <Label>Kategori</Label>
                  <Select value={newNickCategory} onValueChange={setNewNickCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {nickCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.icon} {cat.nameTr}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={addReadyNick} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Hazır Nick Ekle
                </Button>
              </div>

              {/* Filter and Search */}
              <div className="space-y-4 mb-6">
                <Input placeholder="Nick ara..." value={searchNick} onChange={(e) => setSearchNick(e.target.value)} />
                <div>
                  <Label>Kategori Filtrele</Label>
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tümü ({nicks.length})</SelectItem>
                      {nickCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.icon} {cat.nameTr} ({nicks.filter((n) => n.category === cat.id).length})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Nicks List */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                <div className="text-sm text-muted-foreground mb-2">{filteredNicks.length} nick gösteriliyor</div>
                {filteredNicks.map((nick) => {
                  const category = nickCategories.find((c) => c.id === nick.category)
                  return (
                    <div
                      key={nick.id}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-lg">{nick.text}</div>
                        <div className="text-xs text-muted-foreground">
                          {category?.icon} {category?.nameTr} • ID: {nick.id}
                        </div>
                      </div>
                      <Button variant="destructive" size="sm" onClick={() => removeReadyNick(nick.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                })}
                {filteredNicks.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Star className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Sonuç bulunamadı</p>
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="ads">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Reklam Bölgeleri Yönetimi</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Sitenizin farklı bölgelerine reklam kodları ekleyebilirsiniz (Google AdSense, vb.)
              </p>

              <div className="space-y-6">
                {adZones.map((zone) => (
                  <Card key={zone.id} className="p-4 bg-gray-50 dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{zone.name}</h3>
                        <p className="text-xs text-muted-foreground">Pozisyon: {zone.position}</p>
                      </div>
                      <Switch
                        checked={zone.enabled}
                        onCheckedChange={(checked) => updateAdZone(zone.id, { enabled: checked })}
                      />
                    </div>
                    <Textarea
                      placeholder="Reklam kodunuzu buraya yapıştırın (HTML/JavaScript)"
                      value={zone.code}
                      onChange={(e) => updateAdZone(zone.id, { code: e.target.value })}
                      rows={4}
                      className="font-mono text-xs"
                    />
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              {/* Genel Ayarlar */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Genel Ayarlar</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Site Adı</Label>
                    <Input
                      value={siteSettings.siteName}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Site Açıklaması</Label>
                    <Textarea
                      value={siteSettings.siteDescription}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteDescription: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Site URL</Label>
                    <Input
                      value={siteSettings.siteUrl}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteUrl: e.target.value })}
                    />
                  </div>
                </div>
              </Card>

              {/* Özel Kodlar */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Özel Kodlar</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Head Kodu (Analytics, Meta Tags vb.)</Label>
                    <Textarea
                      placeholder="<script>...</script> veya <meta> tagları"
                      value={siteSettings.customHeadCode}
                      onChange={(e) => setSiteSettings({ ...siteSettings, customHeadCode: e.target.value })}
                      rows={5}
                      className="font-mono text-xs"
                    />
                  </div>
                  <div>
                    <Label>Footer Kodu (Tracking, Chat Widget vb.)</Label>
                    <Textarea
                      placeholder="<script>...</script>"
                      value={siteSettings.customFooterCode}
                      onChange={(e) => setSiteSettings({ ...siteSettings, customFooterCode: e.target.value })}
                      rows={5}
                      className="font-mono text-xs"
                    />
                  </div>
                </div>
              </Card>

              {/* Analytics */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Analytics & Tracking</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Google Analytics ID</Label>
                    <Input
                      placeholder="G-XXXXXXXXXX"
                      value={siteSettings.googleAnalytics}
                      onChange={(e) => setSiteSettings({ ...siteSettings, googleAnalytics: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Facebook Pixel ID</Label>
                    <Input
                      placeholder="123456789"
                      value={siteSettings.facebookPixel}
                      onChange={(e) => setSiteSettings({ ...siteSettings, facebookPixel: e.target.value })}
                    />
                  </div>
                </div>
              </Card>

              {/* Sosyal Medya */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Sosyal Medya</h2>
                <div className="space-y-4">
                  <div>
                    <Label>Facebook</Label>
                    <Input
                      placeholder="https://facebook.com/..."
                      value={siteSettings.socialMedia.facebook}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, facebook: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Twitter</Label>
                    <Input
                      placeholder="https://twitter.com/..."
                      value={siteSettings.socialMedia.twitter}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, twitter: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Instagram</Label>
                    <Input
                      placeholder="https://instagram.com/..."
                      value={siteSettings.socialMedia.instagram}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, instagram: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>YouTube</Label>
                    <Input
                      placeholder="https://youtube.com/..."
                      value={siteSettings.socialMedia.youtube}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          socialMedia: { ...siteSettings.socialMedia, youtube: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </Card>

              {/* İletişim */}
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">İletişim Bilgileri</h2>
                <div className="space-y-4">
                  <div>
                    <Label>E-posta</Label>
                    <Input
                      type="email"
                      value={siteSettings.contact.email}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          contact: { ...siteSettings.contact, email: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Telefon</Label>
                    <Input
                      value={siteSettings.contact.phone}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          contact: { ...siteSettings.contact, phone: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Adres</Label>
                    <Textarea
                      value={siteSettings.contact.address}
                      onChange={(e) =>
                        setSiteSettings({
                          ...siteSettings,
                          contact: { ...siteSettings.contact, address: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>
                </div>
              </Card>

              <Button onClick={handleSaveSettings} className="w-full" size="lg">
                Ayarları Kaydet
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
