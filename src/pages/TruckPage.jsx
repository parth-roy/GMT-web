import React, { useState, useEffect } from "react"
import TruckHero from "../components/truck/TruckHero"
import VehicleSelection from "../components/truck/VehicleSelection"
import PopularRoutes from "../components/truck/PopularRoutes"
import AreasWeServe from "../components/truck/AreasWeServe"
import AppDownloadBanner from "../components/truck/AppDownloadBanner"
import OtherServices from "../components/truck/OtherServices"
import SEOContent from "../components/truck/SEOContent"
import InternalLinks from "../components/truck/InternalLinks"
import TruckFAQ from "../components/truck/TruckFAQ"
import SEOHead from "../seo/SEOHead"

export default function TruckPage() {
  const [city, setCity] = useState("Kolkata")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const truckSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Truck Booking & Goods Transport in ${city}`,
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": city,
      "serviceType": "Truck Booking, Mini Truck Rental, FTL Transport, PTL Logistics",
      "description": `Book mini truck, Tata Ace on rent, pickup truck & full truck load (FTL) transport in ${city}. Same-day booking, transparent pricing, real-time tracking.`
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": `Truck Booking in ${city}`, "item": "https://gomytruck.com/truck" }
      ]
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen font-sans w-full">
      <SEOHead
        title={`Truck Booking in ${city} | Mini Truck, Tata Ace on Rent & FTL Transport`}
        description={`Book mini truck, Tata Ace on rent, pickup truck & full truck load (FTL) transport in ${city} online. Same-day goods transport, transparent pricing, real-time tracking. GoMyTruck — India's trusted logistics platform.`}
        canonical="/truck"
        keywords={`truck booking ${city}, mini truck booking near me, tata ace on rent, tata ace rent per km, pickup truck booking, FTL transport services, part load transport, goods transport ${city}, intercity transport booking, commercial truck rental, PTL logistics`}
        jsonLd={truckSchema}
      />
      <TruckHero city={city} setCity={setCity} />
      <VehicleSelection city={city} />
      <PopularRoutes city={city} />
      <AreasWeServe city={city} />
      <AppDownloadBanner />
      <OtherServices currentService="truck" />
      <SEOContent city={city} />
      <InternalLinks />
      <TruckFAQ city={city} />
    </div>
  )
}

