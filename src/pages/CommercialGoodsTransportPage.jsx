import React from "react"
import CityTransportPage from "../components/CityTransportPage"

export default function CommercialGoodsTransportPage() {
  const jsonLd = [
    {
      "@type": "Service",
      "name": "Commercial Goods Transport",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "India",
      "description": "Heavy-duty commercial goods transport services for raw materials, FMCG, electronics, and industrial cargo."
    }
  ]

  return (
    <CityTransportPage
      city="India"
      slug="commercial-goods-transport"
      headline="Commercial Goods Transport"
      subheadline="Secure and fast commercial freight forwarding. Book open trucks, container trucks, and trailers for industrial logistics."
      description="Book commercial goods transport with GoMyTruck. We handle FMCG, industrial raw materials, textiles, and electronics with pan-India FTL truck availability."
      keywords="commercial goods transport, industrial logistics, fmcg transport, heavy goods vehicle booking, container truck booking, open body truck rent"
      jsonLd={jsonLd}
      areas={[
        "Industrial Zones", "Ports & Docks", "Manufacturing Hubs", "FMCG Warehouses", "Textile Parks"
      ]}
      highlights={[
        "Large fleet of 14ft, 17ft, 19ft, and 22ft container trucks",
        "Open body trucks for heavy industrial raw materials",
        "Trained drivers with commercial cargo experience",
        "High-value goods transit insurance",
        "Real-time GPS visibility for supply chain management"
      ]}
    />
  )
}
