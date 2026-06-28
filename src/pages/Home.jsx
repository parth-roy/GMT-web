import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import SEOHead from '../seo/SEOHead';

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Goods Transport & Truck Booking",
    "provider": {
      "@type": "Organization",
      "name": "GoMyTruck",
      "url": "https://gomytruck.com"
    },
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Logistics & Transport Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Online Truck Booking" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mini Truck Booking Near Me" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tata Ace on Rent" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Part Load Transport (PTL)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Truck Load (FTL) Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Goods Transport Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transport Service Near Me" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Find Return Load Online" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Attach Truck to Company" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Logistics Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FMCG Transport Service" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Truck Booking Kolkata" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Truck Booking West Bengal" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Truck Booking Barrackpore" } }
      ]
    }
  }
];

export default function Home({ selectedService, setSelectedService, onCalculateEstimate, onOpenEstimate, onSelectVehicle }) {
  
  useEffect(() => {
    setSelectedService(null)
  }, [setSelectedService])

  return (
    <>
      <SEOHead
        description="GoMyTruck – Book mini truck, Tata Ace on rent, pickup truck & FTL transport near you. Same-day goods transport service across India. Transparent pricing. Serving Kolkata, West Bengal & pan India."
        canonical="/"
        keywords="online truck booking, book truck online, hire truck for goods, truck booking near me, transport service near me, goods transport services, mini truck booking near me, tata ace on rent, pickup truck booking, FTL transport services, part load transport, goods carrier near me, truck booking Kolkata, truck booking West Bengal"
        jsonLd={homeSchema}
      />
      <Hero 
        selectedService={selectedService} 
        setSelectedService={setSelectedService} 
        onCalculateEstimate={onCalculateEstimate} 
        onOpenEstimate={onOpenEstimate}
        onSelectVehicle={onSelectVehicle}
      />

      <section className="services-intro-text" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Reliable Online Truck Booking & Logistics Services</h2>
          
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginTop: '15px' }}>
              Welcome to GoMyTruck, your premier digital platform for efficient supply chain and freight management. 
              Whether you need a quick <strong>online truck booking</strong> for local deliveries or an enterprise-grade 
              <strong>truck rental</strong> for interstate goods transport, our fleet is equipped to handle your requirements safely. 
              We specialize in everything from <strong>mini truck</strong> logistics for small business distribution to heavy-duty 
              commercial <strong>truck</strong> transportation across major routes. Trust our reliable logistics framework to offer secure, 
              on-time, and budget-friendly <strong>truck</strong> booking options tailored to keep your business moving forward seamlessly.
          </p>
      </section>

      <Services onSelectVehicle={onSelectVehicle} />
      <Testimonials />
      <FAQ />
    </>
  );
}

