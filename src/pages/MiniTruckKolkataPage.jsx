import React from "react"
import { Link } from "react-router-dom"
import CityTransportPage from "../components/CityTransportPage"

export default function MiniTruckKolkataPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mini Truck Booking in Kolkata",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "Kolkata, West Bengal",
      "description": "Book mini trucks online in Kolkata. Fast, reliable, and cheap mini truck booking for house shifting, goods transport, and commercial use."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": "Mini Truck Booking Kolkata", "item": "https://gomytruck.com/mini-truck-booking-kolkata" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the starting price for mini truck booking in Kolkata?",
          "acceptedAnswer": { "@type": "Answer", "text": "The starting base fare for mini truck booking in Kolkata is highly affordable, followed by a transparent per-kilometer charge. The exact fare depends on the distance and the specific vehicle model (like Tata Ace or Bolero Pickup)." }
        },
        {
          "@type": "Question",
          "name": "How fast can I get a mini truck after booking?",
          "acceptedAnswer": { "@type": "Answer", "text": "GoMyTruck has a massive fleet of verified partners across Kolkata. Typically, a mini truck will arrive at your pickup location within 15 to 30 minutes of booking confirmation." }
        },
        {
          "@type": "Question",
          "name": "Can I use a mini truck for house shifting?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! Mini trucks are perfect for moving 1BHK apartments, paying guest (PG) accommodations, and individual rooms. If you need professional packing and loading, we also offer dedicated Packers and Movers services." }
        }
      ]
    }
  ]

  const areas = [
    "Salt Lake", "New Town", "Park Street", "Ballygunge", "Howrah",
    "Dum Dum", "Behala", "Jadavpur", "Garia", "Barasat", "Barrackpore",
    "Tollygunge", "Kasba", "Rajarhat", "Bidhannagar"
  ]

  const customFaqs = (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">Mini Truck Booking FAQs</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              What is the starting price for mini truck booking in Kolkata?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The starting base fare for mini truck booking in Kolkata is highly affordable, followed by a transparent per-kilometer charge. The exact fare depends on the distance and the specific vehicle model (like Tata Ace or Bolero Pickup).
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              How fast can I get a mini truck after booking?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              GoMyTruck has a massive fleet of verified partners across Kolkata. Typically, a mini truck will arrive at your pickup location within 15 to 30 minutes of booking confirmation.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Can I use a mini truck for house shifting?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes! Mini trucks are perfect for moving 1BHK apartments, paying guest (PG) accommodations, and individual rooms. If you need professional packing and loading, we also offer dedicated <Link to="/packers-and-movers" className="text-brand-600 font-semibold hover:underline">Packers and Movers</Link> services.
            </p>
          </details>
        </div>
      </div>
    </section>
  )

  return (
    <CityTransportPage
      city="Kolkata"
      slug="mini-truck-booking-kolkata"
      headline="Mini Truck Booking in Kolkata"
      subheadline="Rent Tata Ace, Chota Hathi, and Mini Trucks online in Kolkata. Best per-km rates, verified drivers, and same-day availability."
      description="Need a mini truck in Kolkata? Book Tata Ace and Chota Hathi online with GoMyTruck. Transparent pricing, live tracking, and fast goods delivery."
      keywords="mini truck booking in kolkata, tata ace rent kolkata, chota hathi booking kolkata, rent mini truck kolkata, mini truck for shifting kolkata, small truck booking"
      jsonLd={jsonLd}
      areas={areas}
      highlights={[
        "Available across all Kolkata zones within 20 mins",
        "Clear Tata Ace & Mini Truck per-km rates",
        "Loading and unloading assistance available",
        "Live GPS tracking of your goods",
        "Dedicated customer support for Kolkata bookings"
      ]}
      customFaqs={customFaqs}
    >
      <h2>Fast and Reliable Mini Truck Booking in Kolkata</h2>
      <p>
        Moving goods through the narrow and busy lanes of Kolkata requires agility and speed. <strong>GoMyTruck</strong> offers the fastest and most reliable <strong>mini truck booking in Kolkata</strong>. Whether you need to deliver wholesale market supplies from Burrabazar, move an apartment's furniture from Salt Lake, or distribute FMCG products to local retailers, our fleet of mini trucks is always ready for dispatch.
      </p>
      <p>
        Gone are the days of standing at local truck stands and negotiating fares. With our smart tech platform, you can instantly <Link to="/truck-booking-kolkata">book a truck</Link> from your phone, get upfront pricing, and track the entire journey via GPS.
      </p>

      <h3>Why Choose a Mini Truck in Kolkata?</h3>
      <p>
        Mini trucks are the backbone of last-mile and mid-mile delivery in dense urban areas like Kolkata. Here is why businesses and individuals prefer them over larger commercial vehicles for local trips:
      </p>
      <ul>
        <li><strong>Perfect for Narrow Streets:</strong> Kolkata is famous for its intricate network of narrow lanes and bylanes. A mini truck like a <strong><Link to="/tata-ace-booking-kolkata">Tata Ace</Link></strong> can easily navigate spaces where a 14-ft or 17-ft truck would get stuck.</li>
        <li><strong>Cost-Effective:</strong> If your cargo volume is under 1 ton, hiring a large truck is an unnecessary expense. Mini trucks offer superior fuel efficiency, which translates directly to lower booking fares for the customer.</li>
        <li><strong>No City Entry Restrictions:</strong> Large commercial vehicles often face "No Entry" timings during peak traffic hours in Kolkata. Mini trucks generally face fewer restrictions, ensuring your goods are delivered without massive delays.</li>
        <li><strong>Easy Loading/Unloading:</strong> The low bed height of a mini truck makes it incredibly easy to load and unload heavy items like refrigerators, washing machines, and industrial equipment manually.</li>
      </ul>

      <h3>Use Cases for Mini Trucks</h3>
      <p>
        Our mini truck services cater to a wide variety of <Link to="/goods-transport-services-kolkata">goods transport</Link> needs:
      </p>

      <h4>1. House and Room Shifting</h4>
      <p>
        Are you a student moving out of a PG in Jadavpur? Or a small family shifting from Behala to New Town? A mini truck provides just the right amount of space for a bed, a few appliances, and your cartons. It is the most affordable way to execute a small-scale move.
      </p>

      <h4>2. E-Commerce and Retail Distribution</h4>
      <p>
        Online shopping has exploded, and so has the need for efficient last-mile delivery. We partner with e-commerce businesses to provide dedicated mini trucks for bulk order distributions to micro-fulfillment centers. Similarly, retailers in local markets use our trucks to restock inventory daily.
      </p>

      <h4>3. Electronics and Furniture Delivery</h4>
      <p>
        Bought a new sofa set from Bowbazar or a commercial AC unit from Chandni Chowk? Don't rely on expensive showroom delivery services. Book a mini truck or <Link to="/pickup-truck-booking-kolkata">Pickup Truck</Link> instantly and transport your new purchases home securely.
      </p>

      <h4>4. Events and Catering Logistics</h4>
      <p>
        Event managers and caterers in Kolkata frequently book our mini trucks to transport raw materials, lighting equipment, stages, and catering utensils to event venues, especially during the busy wedding and festive seasons.
      </p>

      <h3>Transparent Mini Truck Fares</h3>
      <p>
        At GoMyTruck, we pride ourselves on absolute transparency. Our pricing algorithm calculates fares based on the exact distance between the pickup and drop points and the base fare of the selected mini truck. There are absolutely no hidden charges, toll surprises, or driver haggling. <Link to="/pricing">Check our standard rates</Link> to see how affordable your next trip will be.
      </p>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Book Your Mini Truck Instantly</h3>
        <p className="text-slate-600 mb-6">
          Don't let logistics slow you down. Get a mini truck at your location in Kolkata within 20 minutes!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-truck-online" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book Online Now
          </Link>
          <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20want%20to%20book%20a%20mini%20truck%20in%20Kolkata" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book on WhatsApp
          </a>
        </div>
      </div>
    </CityTransportPage>
  )
}

