import React, { useEffect } from 'react';
import SEOHead from '../seo/SEOHead';
import WorkforceHero from '../components/workforce/WorkforceHero';
import WorkforceHowItWorks from '../components/workforce/WorkforceHowItWorks';
import WorkforceBenefits from '../components/workforce/WorkforceBenefits';
import WorkforceFAQ from '../components/workforce/WorkforceFAQ';
import PartnerTestimonials from '../components/PartnerTestimonials';

const workforceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Delivery Executive & Driver Jobs — GoMyTruck Workforce",
    "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
    "areaServed": "India",
    "serviceType": "Delivery Executive Jobs, Driver Jobs, Loader Jobs",
    "description": "Join GoMyTruck Workforce as a delivery executive, driver, or loader. Enjoy flexible shifts, weekly payouts, and free accidental insurance."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
      { "@type": "ListItem", "position": 2, "name": "Join Workforce", "item": "https://gomytruck.com/workforce" }
    ]
  }
];

export default function WorkforcePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <SEOHead
        title="Delivery Executive & Driver Jobs | Join GoMyTruck Workforce"
        description="Looking for delivery executive, driver, or loader jobs? Join GoMyTruck Workforce for flexible shifts, weekly payouts, and guaranteed daily jobs."
        canonical="/workforce"
        keywords="delivery jobs, driver jobs, loader jobs, delivery executive jobs in india, part time delivery jobs, logistics jobs"
        jsonLd={workforceSchema}
      />
      
      <main className="min-h-screen bg-slate-50 font-sans">
        <WorkforceHero />
        <WorkforceHowItWorks />
        <WorkforceBenefits />
        <PartnerTestimonials />
        <WorkforceFAQ />
      </main>
    </>
  );
}
