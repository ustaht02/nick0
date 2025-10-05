export interface SiteSettings {
  siteName: string
  siteDescription: string
  siteUrl: string
  logo: string
  favicon: string
  customHeadCode: string
  customFooterCode: string
  googleAnalytics: string
  facebookPixel: string
  socialMedia: {
    facebook: string
    twitter: string
    instagram: string
    youtube: string
  }
  contact: {
    email: string
    phone: string
    address: string
  }
}

export interface AdZone {
  id: string
  name: string
  code: string
  enabled: boolean
  position: "header" | "sidebar" | "content-top" | "content-bottom" | "footer"
}

const defaultSettings: SiteSettings = {
  siteName: "Şekilli Nick Oluşturucu",
  siteDescription: "Ücretsiz şekilli nick oluşturucu ile benzersiz ve havalı nickler oluşturun",
  siteUrl: "https://nickgenerator.com",
  logo: "/logo.png",
  favicon: "/favicon.ico",
  customHeadCode: "",
  customFooterCode: "",
  googleAnalytics: "",
  facebookPixel: "",
  socialMedia: {
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
  },
  contact: {
    email: "info@nickgenerator.com",
    phone: "+90 555 123 4567",
    address: "İstanbul, Türkiye",
  },
}

const defaultAdZones: AdZone[] = [
  { id: "header", name: "Header Ad", code: "", enabled: false, position: "header" },
  { id: "sidebar", name: "Sidebar Ad", code: "", enabled: false, position: "sidebar" },
  { id: "content-top", name: "Content Top Ad", code: "", enabled: false, position: "content-top" },
  { id: "content-bottom", name: "Content Bottom Ad", code: "", enabled: false, position: "content-bottom" },
  { id: "footer", name: "Footer Ad", code: "", enabled: false, position: "footer" },
]

export function getSiteSettings(): SiteSettings {
  if (typeof window === "undefined") return defaultSettings
  const saved = localStorage.getItem("siteSettings")
  return saved ? JSON.parse(saved) : defaultSettings
}

export function saveSiteSettings(settings: SiteSettings) {
  if (typeof window === "undefined") return
  localStorage.setItem("siteSettings", JSON.stringify(settings))
}

export function getAdZones(): AdZone[] {
  if (typeof window === "undefined") return defaultAdZones
  const saved = localStorage.getItem("adZones")
  return saved ? JSON.parse(saved) : defaultAdZones
}

export function saveAdZones(zones: AdZone[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("adZones", JSON.stringify(zones))
}
