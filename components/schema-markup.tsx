import Script from "next/script"

interface SchemaMarkupProps {
  type: "home" | "about" | "contact" | "privacy" | "terms"
  lang?: string
}

export function SchemaMarkup({ type, lang = "tr" }: SchemaMarkupProps) {
  const baseUrl = "https://yoursite.com"

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Şekilli Nick Oluşturucu",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Oyunlar ve sosyal medya için benzersiz şekilli nickler oluşturun",
    sameAs: ["https://twitter.com/yoursite", "https://facebook.com/yoursite", "https://instagram.com/yoursite"],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Şekilli Nick Oluşturucu",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Şekilli Nick Oluşturucu",
    url: baseUrl,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "PUBG, Free Fire, Mobile Legends ve sosyal medya için şekilli nick oluşturma aracı",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: baseUrl,
      },
    ],
  }

  if (type === "about") {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "Hakkımızda",
      item: `${baseUrl}/about`,
    })
  } else if (type === "contact") {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "İletişim",
      item: `${baseUrl}/contact`,
    })
  } else if (type === "privacy") {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "Gizlilik Politikası",
      item: `${baseUrl}/privacy`,
    })
  } else if (type === "terms") {
    breadcrumbSchema.itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: "Kullanım Şartları",
      item: `${baseUrl}/terms`,
    })
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Şekilli nick oluşturucu ücretsiz mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, tüm özelliklerimiz tamamen ücretsizdir. Gizli ücret veya abonelik yoktur.",
        },
      },
      {
        "@type": "Question",
        name: "Hangi oyunlarda kullanabilirim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PUBG, Free Fire, Mobile Legends, Fortnite ve Unicode destekleyen tüm oyunlarda kullanabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Mobil cihazlarda çalışır mı?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, web sitemiz tüm cihazlarda (telefon, tablet, bilgisayar) mükemmel çalışır.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {type === "home" && (
        <>
          <Script
            id="webapp-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
          />
          <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </>
      )}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
