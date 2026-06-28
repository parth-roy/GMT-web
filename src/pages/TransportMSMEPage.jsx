import React from "react"
import CityTransportPage from "../components/CityTransportPage"

export default function TransportMSMEPage() {
  const jsonLd = [
    {
      "@type": "Service",
      "name": "Transport Service for MSMEs",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "India",
      "description": "B2B transport and logistics services tailored for MSMEs, manufacturers, and wholesalers."
    }
  ]

  return (
    <CityTransportPage
      city="India (B2B/MSME)"
      slug="transport-service-msme"
      headline="Transport Service for MSMEs"
      subheadline="Scalable, affordable, and GST-compliant logistics solutions designed specifically for Small and Medium Enterprises (MSMEs)."
      description="GoMyTruck provides dedicated transport services for MSMEs. Manage your supply chain with FTL, PTL, GST invoicing, and verified commercial vehicles."
      keywords="transport service for msme, b2b logistics india, commercial goods transport, sme logistics, gst transport booking, wholesale delivery trucks"
      jsonLd={jsonLd}
      areas={[
        "Kolkata", "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad",
        "Chennai", "Pune", "Ahmedabad", "Surat", "Ludhiana"
      ]}
      highlights={[
        "100% GST compliant automated invoicing",
        "Credit lines available for verified MSME partners",
        "Part Load (PTL) solutions to save costs on small shipments",
        "Dedicated Key Account Manager (KAM) for your business",
        "API integration for your ERP/Shopify store",
        "Pan-India delivery network"
      ]}
    />
  )
}
