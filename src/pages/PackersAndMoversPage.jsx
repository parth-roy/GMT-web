import React, { useState, useEffect } from "react"
import PackersHero from "../components/packers/PackersHero"
import PackersValueProps from "../components/packers/PackersValueProps"
import PackersExtraServices from "../components/packers/PackersExtraServices"
import PackersSEOContent from "../components/packers/PackersSEOContent"
import PackersLocalSEO from "../components/packers/PackersLocalSEO"
import PackersFAQ from "../components/packers/PackersFAQ"
import AppDownloadBanner from "../components/truck/AppDownloadBanner"
import Testimonials from "../components/Testimonials"
import SEOHead from "../seo/SEOHead"

export default function PackersAndMoversPage() {
  const [city, setCity] = useState("Kolkata")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const packersSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Packers and Movers in ${city}`,
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": city,
      "serviceType": "Packers and Movers, House Shifting, Office Relocation",
      "description": `Best packers and movers in ${city}. Safe, affordable, and 100% damage-free house shifting services. Get instant quotes and book online.`
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": `Packers and Movers in ${city}`, "item": "https://gomytruck.com/packers-and-movers" }
      ]
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen font-sans w-full">
      <SEOHead
        title={`Best Packers and Movers in ${city} | House Shifting Services`}
        description={`Looking for reliable packers and movers in ${city}? GoMyTruck offers 100% damage-free house shifting, office relocation, and bike transport with transparent pricing.`}
        canonical="/packers-and-movers"
        keywords={`packers and movers in ${city}, house shifting services in ${city}, office relocation ${city}, best packers and movers near me, affordable packers and movers, safe house shifting, bike transport ${city}`}
        jsonLd={packersSchema}
      />
      
      <PackersHero city={city} setCity={setCity} />
      <PackersValueProps />
      <PackersExtraServices />
      <PackersSEOContent city={city} />
      <AppDownloadBanner />
      <Testimonials />
      <PackersLocalSEO city={city} />
      <PackersFAQ city={city} />
    </div>
  )
}
