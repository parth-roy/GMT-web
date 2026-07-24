import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
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

export default function Home({ selectedService, setSelectedService, onOpenEstimate, onSelectVehicle }) {
  
  useEffect(() => {
    setSelectedService(null)
  }, [setSelectedService])

  return (
    <>
      <SEOHead
        title="Online Truck Booking & Goods Transport in Kolkata"
        description="Request mini trucks, Tata Ace and larger goods vehicles in Kolkata and supported routes. Review a route-based estimate before confirming."
        canonical="/"
        keywords="online truck booking, book truck online, hire truck for goods, truck booking near me, transport service near me, goods transport services, mini truck booking near me, tata ace on rent, pickup truck booking, FTL transport services, part load transport, goods carrier near me, truck booking Kolkata, truck booking West Bengal"
        jsonLd={homeSchema}
        preloadImage="/hero-bg-960.webp"
        preloadImageSrcSet="/hero-bg-640.webp 640w, /hero-bg-960.webp 960w, /hero-bg-1600.webp 1600w"
      />
      <Hero 
        selectedService={selectedService} 
        setSelectedService={setSelectedService} 
        onOpenEstimate={onOpenEstimate}
        onSelectVehicle={onSelectVehicle}
      />

      <section className="services-intro-text" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
          <h2 style={{ textAlign: 'center' }}>Reliable Online Truck Booking & Logistics Services</h2>
          
          <div style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginTop: '15px' }}>
              <p>GoMyTruck is a digital logistics marketplace for local deliveries, household goods and commercial freight.</p>
              
              <h3 style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>How to Book a Truck Online</h3>
              <ol style={{ paddingLeft: '20px', listStyleType: 'decimal', marginTop: '10px', marginBottom: '20px' }}>
                <li><strong>Enter route:</strong> Provide pickup and drop locations.</li>
                <li><strong>Select vehicle:</strong> Choose a suitable <strong>mini truck</strong>, pickup, or larger commercial vehicle.</li>
                <li><strong>Declare goods:</strong> Provide goods declaration and handling needs.</li>
                <li><strong>Confirm:</strong> Review route coverage, timing, and confirm the booking.</li>
              </ol>

              <h3 style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>Fare Calculation Components</h3>
              <dl style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px' }}>
                <dt style={{ fontWeight: 'bold' }}>Base Fare</dt>
                <dd>Initial charge based on the vehicle type.</dd>
                <dt style={{ fontWeight: 'bold' }}>Distance</dt>
                <dd>Calculated cost based on route distance.</dd>
                <dt style={{ fontWeight: 'bold' }}>Time & Fuel</dt>
                <dd>Adjustments for travel time and current fuel surcharge.</dd>
                <dt style={{ fontWeight: 'bold' }}>Add-ons</dt>
                <dd>Tolls, loading workforce, and taxes shown at confirmation.</dd>
              </dl>
          </div>
      </section>

      <Services onSelectVehicle={onSelectVehicle} />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}
