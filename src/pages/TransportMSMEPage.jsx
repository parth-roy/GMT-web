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
      canonical="/services/transport-for-msmes"
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
        "GST invoice details available for eligible completed bookings",
        "Commercial terms documented for approved enterprise accounts",
        "Part Load (PTL) solutions to save costs on small shipments",
        "Account support can be scoped in an enterprise agreement",
        "API integration requirements assessed during onboarding",
        "Route coverage confirmed before each booking"
      ]}
    />
  )
}
