import React from "react"
import { Link } from "react-router-dom"
import CityTransportPage from "../components/CityTransportPage"

const kolkataAreas = [
  "Park Street", "Salt Lake (Bidhannagar)", "New Town (Rajarhat)", "Howrah", "Dum Dum",
  "Behala", "Tollygunge", "Jadavpur", "Kasba", "Garia", "Barasat", "Barrackpore",
  "Ballygunge", "Kalighat", "Ultadanga", "Bagbazar", "Shyambazar", "Maniktala",
  "Entally", "Phoolbagan", "Kankurgachi", "Topsia", "Tiljala", "Tangra",
]

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Transport Services in Kolkata — GoMyTruck",
    "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
    "areaServed": { "@type": "City", "name": "Kolkata", "sameAs": "https://en.wikipedia.org/wiki/Kolkata" },
    "serviceType": "Goods Transport, Truck Booking, Last-Mile Delivery, Packers and Movers",
    "description": "GoMyTruck provides full-range transport services across Kolkata — mini trucks, Tata Ace, full truck load, bike delivery, and packers & movers. Instant online booking, transparent pricing."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
      { "@type": "ListItem", "position": 2, "name": "Goods Transport Services", "item": "https://gomytruck.com/goods-transport-services" },
      { "@type": "ListItem", "position": 3, "name": "Transport Services in Kolkata", "item": "https://gomytruck.com/transport-services-kolkata" }
    ]
  }
]

export default function TransportKolkataPage() {
  const customFaqs = (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              How do I book transport services in Kolkata?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Booking is fast and easy with GoMyTruck. Simply visit our website, enter your pickup and drop locations in Kolkata, choose your required vehicle (like a Mini Truck, Tata Ace, or Full Truck Load), and confirm. You can also book via a quick call or WhatsApp message to 9331488999.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              What are the truck booking charges in Kolkata?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our pricing is 100% transparent and based on distance and vehicle type. Mini truck bookings generally start at a very affordable base fare, plus a per-kilometer charge. There are no hidden costs. <Link to="/pricing" className="text-brand-600 font-semibold hover:underline">Check our pricing page</Link> for exact estimates.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Do you provide intercity transport from Kolkata?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes! Alongside local city transport, GoMyTruck provides comprehensive intercity transport services from Kolkata to major hubs across West Bengal and India. We handle Full Truck Load (FTL) and Part Truck Load (PTL) requirements.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Are your drivers and trucks verified?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Absolutely. Safety and security are our top priorities. Every driver and vehicle registered with GoMyTruck undergoes a strict background check, documentation verification, and vehicle fitness test before onboarding. 
            </p>
          </details>
        </div>
      </div>
    </section>
  )

  return (
    <CityTransportPage
      city="Kolkata"
      slug="kolkata"
      headline="Transport Services in Kolkata"
      subheadline="Book mini truck, Tata Ace, bike delivery, and packers & movers anywhere in Kolkata. Instant booking, verified drivers, real-time tracking."
      description="Looking for transport services in Kolkata? GoMyTruck offers mini truck booking, Tata Ace rental, full truck load, bike delivery & packers and movers across all areas of Kolkata. Transparent pricing, same-day service, verified drivers."
      keywords="transport services Kolkata, truck booking Kolkata, goods transport Kolkata, mini truck Kolkata, logistics company Kolkata, movers and packers Kolkata, transport company Kolkata, cargo delivery Kolkata, tempo service Kolkata, freight services Kolkata, same day delivery Kolkata, truck rental Kolkata"
      areas={kolkataAreas}
      jsonLd={schema}
      customFaqs={customFaqs}
      pricingRoutes={[
        { origin: 'Kolkata', destination: 'Howrah', vehicle: 'Mini Truck', capacity: '1 Ton', price: 450 },
        { origin: 'Kolkata', destination: 'Salt Lake', vehicle: 'Tata Ace', capacity: '750 Kg', price: 350 },
        { origin: 'Kolkata', destination: 'Barrackpore', vehicle: 'Pickup Truck', capacity: '1.5 Ton', price: 800 },
        { origin: 'Kolkata', destination: 'Asansol', vehicle: '14Ft Truck', capacity: '4 Ton', price: 6500 },
        { origin: 'Kolkata', destination: 'Siliguri', vehicle: '20Ft Container', capacity: '7 Ton', price: 12500 }
      ]}
    >
      <h2>Reliable and Fast Transport Services in Kolkata</h2>
      <p>
        Navigating the bustling streets of the City of Joy requires a logistics partner who understands the local terrain. <strong>GoMyTruck</strong> stands out as the premier provider of <strong>transport services in Kolkata</strong>, bridging the gap between businesses, individuals, and verified truck owners. Whether you need to transport heavy machinery from Howrah, shift your household goods from Salt Lake, or deliver urgent commercial parcels to New Town, our tech-driven platform ensures your goods arrive safely and on time.
      </p>
      <p>
        We have revolutionized the traditional transport industry by eliminating middlemen, hidden charges, and haggling. With a few clicks, you can book everything from a <Link to="/bike">bike courier</Link> to a <Link to="/mini-truck-booking-kolkata">mini truck</Link> or a heavy-duty container. We bring complete transparency to truck booking in Kolkata.
      </p>

      <h3>Why GoMyTruck is the Best Transport Company in Kolkata</h3>
      <p>
        In a city as dynamic as Kolkata, logistics requirements change rapidly. Businesses need an agile partner, while individuals need an affordable, stress-free moving experience. Here is why thousands of customers rate us as the best transport company in Kolkata:
      </p>
      <ul>
        <li><strong>Instant Online Truck Booking:</strong> No more waiting hours for a transporter to confirm. Our intelligent routing system matches your requirement with the nearest available verified truck in minutes.</li>
        <li><strong>Transparent, Zero-Surprise Pricing:</strong> We believe in honest pricing. Our fares are calculated based on accurate distance and vehicle type. You know exactly what you will pay before the trip begins.</li>
        <li><strong>Wide Fleet of Vehicles:</strong> From the highly maneuverable <strong><Link to="/tata-ace-booking-kolkata">Tata Ace</Link></strong> (Chota Hathi) for narrow lanes to 14-ft, 17-ft, and 19-ft trucks for heavy industrial freight, our fleet can accommodate any load.</li>
        <li><strong>Real-Time GPS Tracking:</strong> Once your goods are loaded, you can track the vehicle’s live location right from your smartphone. Peace of mind is guaranteed.</li>
        <li><strong>Verified Driver Partners:</strong> Every driver goes through rigorous KYC and background verification. Your cargo is always in safe, professional hands.</li>
      </ul>

      <h3>Comprehensive Goods Transport Solutions</h3>
      <p>
        At GoMyTruck, we cater to a diverse array of logistics needs under one roof. Our <strong><Link to="/goods-transport-services-kolkata">goods transport services in Kolkata</Link></strong> are categorized to serve different use cases efficiently:
      </p>

      <h4>1. Mini Truck & Tata Ace Booking</h4>
      <p>
        For intra-city transport of light to medium goods, nothing beats the agility of a mini truck. Whether it's shifting a 1 BHK, delivering FMCG products to retailers, or transporting electronics, booking a Tata Ace or <Link to="/pickup-truck-booking-kolkata">Pickup Truck</Link> ensures fast navigation through Kolkata's dense traffic.
      </p>

      <h4>2. Full Truck Load (FTL) Services</h4>
      <p>
        Manufacturing hubs in Howrah, Barrackpore, and industrial estates around Kolkata rely on our robust FTL transport services. We provide heavy commercial vehicles capable of moving raw materials, construction supplies, and finished products directly from factories to distribution centers across the state and beyond.
      </p>

      <h4>3. Professional Packers and Movers</h4>
      <p>
        Moving to a new home or relocating an office? Our dedicated Packers and Movers team handles the heavy lifting. We provide premium packing materials, careful loading, safe transit, and careful unloading, ensuring your valuable furniture and appliances remain scratch-free. 
      </p>

      <h4>4. B2B and Enterprise Logistics</h4>
      <p>
        We partner with SMEs and large corporations to streamline their supply chain. Our <Link to="/fleet-partner-registration">fleet partners</Link> work on dedicated contracts, providing reliable daily distribution services for retail, e-commerce, and manufacturing sectors.
      </p>

      <h3>Intercity and Local Transport</h3>
      <p>
        While we excel in <strong><Link to="/local-transport-services-kolkata">local transport services within Kolkata</Link></strong>, our network stretches far beyond the city limits. We provide highly efficient <strong><Link to="/intercity-transport-from-kolkata">intercity transport from Kolkata</Link></strong> to destinations like Asansol, Durgapur, Siliguri, Haldia, and neighboring states. Whether it is a single factory shipment or regular regional distribution, we maintain the same high standards of punctuality and safety.
      </p>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Ready to Book Your Truck?</h3>
        <p className="text-slate-600 mb-6">
          Experience the fastest, most reliable goods transport service in Kolkata today. Get an instant quote and a truck at your doorstep in minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-truck-online" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book Truck Online
          </Link>
          <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20need%20transport%20services%20in%20Kolkata" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book via WhatsApp
          </a>
        </div>
      </div>
    </CityTransportPage>
  )
}

