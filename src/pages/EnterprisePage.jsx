import React, { useEffect } from "react"
import EnterpriseHero from "../components/enterprise/EnterpriseHero"
import ClientLogos from "../components/enterprise/ClientLogos"
import KeyFeatures from "../components/enterprise/KeyFeatures"
import NetworkStats from "../components/enterprise/NetworkStats"
import CityCoverage from "../components/enterprise/CityCoverage"
import Testimonials from "../components/enterprise/Testimonials"
import IndustriesServed from "../components/enterprise/IndustriesServed"
import SecondaryContact from "../components/enterprise/SecondaryContact"
import EnterpriseFAQ from "../components/enterprise/EnterpriseFAQ"
import SEOHead from "../seo/SEOHead"

const enterpriseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "B2B Enterprise Logistics & Corporate Truck Rental",
    "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
    "areaServed": "India",
    "serviceType": "B2B Logistics, FMCG Transport, Corporate Fleet, Supply Chain Management",
    "description": "GoMyTruck Enterprise provides B2B logistics services, FMCG transport, corporate truck rental, dedicated fleet, freight forwarding, supply chain logistics, and contract logistics for businesses across India."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
      { "@type": "ListItem", "position": 2, "name": "Enterprise B2B Logistics", "item": "https://gomytruck.com/enterprise" }
    ]
  }
]

export default function EnterprisePage() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full font-sans bg-slate-50 overflow-x-hidden pt-[72px]">
      <SEOHead
        title="B2B Enterprise Logistics | FMCG Transport, Corporate Truck Rental & Supply Chain Services"
        description="GoMyTruck Enterprise — India's trusted B2B logistics platform. FMCG transport service, corporate truck rental, industrial goods transport, dedicated fleet services, freight forwarding & supply chain logistics. API integration available."
        canonical="/enterprise"
        keywords="B2B logistics services, FMCG transport service, industrial goods transport, warehouse transport services, corporate truck rental, retail distribution logistics, heavy machinery transport, factory goods transport, enterprise logistics solutions, contract logistics companies, freight forwarding services, supply chain logistics, dedicated fleet services, commercial freight broker, logistics vendor management"
        jsonLd={enterpriseSchema}
      />
      <EnterpriseHero />
      <ClientLogos />
      {/* <KeyFeatures /> */}
      <NetworkStats />
      <CityCoverage />
      {/* <Testimonials /> */}
      <IndustriesServed />
      <SecondaryContact />
      <EnterpriseFAQ />
    </div>
  )
}

