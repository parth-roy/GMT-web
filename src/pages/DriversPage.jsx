import React, { useEffect } from 'react';
import SEOHead from '../seo/SEOHead';
import PartnerHero from '../components/PartnerHero';
import PartnerBenefits from '../components/PartnerBenefits';
import PartnerVehicles from '../components/PartnerVehicles';
import PartnerHowItWorks from '../components/PartnerHowItWorks';
import PartnerTestimonials from '../components/PartnerTestimonials';
import PartnerFAQ from '../components/PartnerFAQ';

const driverSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Truck Owner Registration & Return Load Platform — GoMyTruck",
    "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
    "areaServed": "India",
    "serviceType": "Driver Partner Onboarding, Return Load Matching, Load Board India",
    "description": "GoMyTruck helps truck owners find return loads online, attach their commercial vehicle to the company, and access India's biggest load board with zero commission on select routes."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
      { "@type": "ListItem", "position": 2, "name": "Driver Partner & Truck Owner", "item": "https://gomytruck.com/driver-partner" }
    ]
  }
];

export default function DriversPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEOHead
        title="Find Return Load Online | Attach Truck to Company — GoMyTruck Driver Partner"
        description="Truck owners: attach your commercial vehicle to GoMyTruck, access India's load board, get daily bookings and zero commission on select routes. Register now to start earning."
        canonical="/driver-partner"
        keywords="find return load online, return load booking, return load app, load board India, attach truck to company, truck owner registration, find freight for truck, zero commission load booking, empty truck load matching"
        jsonLd={driverSchema}
      />
      
      <main className="min-h-screen bg-slate-50 font-sans">
        <PartnerHero isFleetOwner={false} />
        <PartnerVehicles />
        <PartnerHowItWorks />
        <PartnerBenefits />
        <PartnerTestimonials />
        <PartnerFAQ isFleetOwner={false} />
      </main>
    </>
  );
}

