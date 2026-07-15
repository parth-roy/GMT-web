import React, { useEffect } from 'react';
import SEOHead from '../seo/SEOHead';
import WorkforceHero from '../components/workforce/WorkforceHero';
import WorkforceHowItWorks from '../components/workforce/WorkforceHowItWorks';
import WorkforceBenefits from '../components/workforce/WorkforceBenefits';
import WorkforceFAQ from '../components/workforce/WorkforceFAQ';

const workforceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Delivery Executive & Driver Jobs — GoMyTruck Workforce",
    "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
    "areaServed": "India",
    "serviceType": "Delivery Executive Jobs, Driver Jobs, Loader Jobs",
    "description": "Apply to join the GoMyTruck Workforce as a delivery executive, driver, or loader. Availability, onboarding, assignments, and earnings depend on verification and local demand."
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
        description="Apply for delivery executive, driver, or loader opportunities with GoMyTruck. Onboarding and work availability depend on verification and local demand."
        canonical="/workforce"
        keywords="delivery jobs, driver jobs, loader jobs, delivery executive jobs in india, part time delivery jobs, logistics jobs"
        jsonLd={workforceSchema}
      />
      
      <main className="min-h-screen bg-slate-50 font-sans">
        <div className="bg-slate-950 px-4 pb-10 pt-28 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Partner opportunities</p>
          <h1 className="mx-auto mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
            Apply for Delivery, Driver, and Loading Work
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Register your interest. Our team will review your details, explain current terms, and confirm whether opportunities are available in your area.
          </p>
        </div>
        <WorkforceHero />
        <WorkforceHowItWorks />
        <WorkforceBenefits />
        <WorkforceFAQ />
      </main>
    </>
  );
}
