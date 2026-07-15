import React from "react"
import CityTransportPage from "../components/CityTransportPage"

export default function CommercialGoodsTransportPage() {
  const jsonLd = [
    {
      "@type": "Service",
      "name": "Commercial Goods Transport",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "West Bengal",
      "description": "Heavy-duty commercial goods transport services for raw materials, FMCG, electronics, and industrial cargo."
    }
  ]

  return (
    <CityTransportPage
      city="India"
      slug="commercial-goods-transport"
      canonical="/services/commercial-goods-transport"
      headline="Commercial Goods Transport"
      subheadline="Discuss open trucks, container trucks, and suitable commercial vehicles for declared industrial or distribution requirements."
      description="Request commercial goods transport for FMCG, industrial raw materials, textiles, or electronics. Vehicle and route coverage are confirmed for each requirement."
      keywords="commercial goods transport, industrial logistics, fmcg transport, heavy goods vehicle booking, container truck booking, open body truck rent"
      jsonLd={jsonLd}
      areas={[
        "Industrial Zones", "Ports & Docks", "Manufacturing Hubs", "FMCG Warehouses", "Textile Parks"
      ]}
      highlights={[
        "14-ft and larger vehicle requirements assessed for each load",
        "Open body trucks for heavy industrial raw materials",
        "Trained drivers with commercial cargo experience",
        "Optional cargo protection shown when available and eligible",
        "Live GPS visibility on supported active trips"
      ]}
    />
  )
}
