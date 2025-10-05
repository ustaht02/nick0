import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yoursite.com"
  const languages = ["tr", "en", "es", "de", "fr", "ar"]

  const routes = ["", "/about", "/contact", "/privacy", "/terms"]

  const sitemap: MetadataRoute.Sitemap = []

  // Add default Turkish routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(languages.map((lang) => [lang, `${baseUrl}/${lang}${route}`])),
      },
    })
  })

  // Add language-specific routes
  languages.forEach((lang) => {
    if (lang === "tr") return // Skip Turkish as it's the default
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
