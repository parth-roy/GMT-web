import React from "react"
import { Link } from "react-router-dom"
import CityTransportPage from "../components/CityTransportPage"

export default function TataAceKolkataPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tata Ace Booking in Kolkata",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "Kolkata, West Bengal",
      "description": "Book Tata Ace (Chota Hathi) online in Kolkata for fast local shifting and commercial goods delivery."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": "Tata Ace Booking Kolkata", "item": "https://gomytruck.com/kolkata/tata-ace-booking" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the maximum weight a Tata Ace can carry?",
          "acceptedAnswer": { "@type": "Answer", "text": "A standard Tata Ace (Chota Hathi) can comfortably carry a payload of up to 750 kg. This makes it perfect for moving 1BHK furniture, electronic appliances, and daily wholesale goods." }
        },
        {
          "@type": "Question",
          "name": "Is Tata Ace allowed inside Kolkata city during the day?",
          "acceptedAnswer": { "@type": "Answer", "text": "Unlike larger 14-ft commercial trucks, Tata Ace vehicles generally face fewer 'No Entry' daytime restrictions in Kolkata. This allows for faster daytime deliveries, though certain highly congested zones may have specific localized rules." }
        },
        {
          "@type": "Question",
          "name": "How do I calculate the rent for a Tata Ace?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our pricing is completely transparent. It includes a minimal base fare for the first few kilometers, followed by a fixed per-kilometer charge. Just enter your pickup and drop locations in our app to see the exact upfront fare." }
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
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">Tata Ace Booking FAQs</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              What is the maximum weight a Tata Ace can carry?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A standard Tata Ace (Chota Hathi) can comfortably carry a payload of up to 750 kg. This makes it perfect for moving 1BHK furniture, electronic appliances, and daily wholesale goods.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Is Tata Ace allowed inside Kolkata city during the day?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Unlike larger 14-ft commercial trucks, Tata Ace vehicles generally face fewer "No Entry" daytime restrictions in Kolkata. This allows for faster daytime deliveries, though certain highly congested zones may have specific localized rules.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              How do I calculate the rent for a Tata Ace?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our pricing is completely transparent. It includes a minimal base fare for the first few kilometers, followed by a fixed per-kilometer charge. Just enter your pickup and drop locations in our app to see the exact upfront fare.
            </p>
          </details>
        </div>
      </div>
    </section>
  )

  return (
    <CityTransportPage
      city="Kolkata"
      slug="tata-ace-booking-kolkata"
      canonical="/kolkata/tata-ace-booking"
      headline="Tata Ace Booking in Kolkata"
      subheadline="Rent Tata Ace (Chota Hathi) online. Perfect for 1BHK shifting, appliances, and FMCG deliveries across Kolkata."
      description="Request a Tata Ace in Kolkata for eligible local goods. Review the declared load, route-based estimate, and current partner availability before confirming."
      keywords="tata ace booking kolkata, chota hathi rent kolkata, tata ace for shifting, rent tata ace kolkata, book chota hathi online"
      jsonLd={jsonLd}
      areas={areas}
      highlights={[
        "Assignment and arrival depend on current availability",
        "Perfect for 1BHK house shifting",
        "Transparent, low per-km rates",
        "Verified drivers",
        "Live GPS tracking via our app"
      ]}
      customFaqs={customFaqs}
    >
      <h2>Request a Tata Ace (Chota Hathi) in Kolkata</h2>
      <p>
        The Tata Ace, often called a <em>Chota Hathi</em>, is a compact commercial vehicle used for many local routes. It may suit apartment goods, office equipment or wholesale inventory after the weight, dimensions and access conditions are checked. <strong>GoMyTruck</strong> accepts <strong>Tata Ace booking requests in Kolkata</strong> subject to eligible partner availability.
      </p>
      <p>
        Skip the hassle of negotiating with local truck stands. With our digital platform, you can book a Tata Ace online in seconds, get a transparent upfront price, and track your goods in real-time.
      </p>

      <h3>Why is the Tata Ace Perfect for Kolkata?</h3>
      <p>
        Kolkata's unique urban layout requires a vehicle that is compact yet powerful. The Tata Ace fits this requirement perfectly:
      </p>
      <ul>
        <li><strong>Unmatched Maneuverability:</strong> The compact size of the Tata Ace allows it to enter narrow lanes and congested market areas where larger trucks simply cannot fit.</li>
        <li><strong>Fewer Traffic Restrictions:</strong> Large commercial vehicles face severe daytime "No Entry" restrictions in Kolkata. The Tata Ace, being a light commercial vehicle (LCV), faces fewer restrictions, ensuring your <Link to="/local-transport/kolkata">local transport</Link> needs are met promptly during the day.</li>
        <li><strong>Economical Pricing:</strong> Why pay for a large truck when you only have a small load? The excellent fuel efficiency of the Tata Ace translates to significantly lower booking fares for our customers.</li>
        <li><strong>Optimal Capacity:</strong> With a payload capacity of up to 750 kg, it is spacious enough to hold a refrigerator, a washing machine, a double bed, and several cartons simultaneously.</li>
      </ul>

      <h3>Common Uses for Tata Ace Rentals</h3>
      <p>
        The versatility of the Tata Ace makes it the most popular choice for a variety of tasks:
      </p>

      <h4>1. Small Scale House Shifting</h4>
      <p>
        For a smaller household or PG move, a Tata Ace may be suitable after the inventory, dimensions, weight and access conditions are checked. Choose the vehicle only after comparing those details with its stated capacity.
      </p>

      <h4>2. E-commerce and Retail Delivery</h4>
      <p>
        For business owners in Kolkata, the Tata Ace is crucial for last-mile delivery. Whether you are distributing electronics, garments, or FMCG products from your warehouse to local retailers, our dedicated fleet ensures timely deliveries.
      </p>

      <h4>3. Event Management Logistics</h4>
      <p>
        Transporting catering equipment, lighting, and small stage props to event venues across the city is effortless with a Tata Ace. Its low loading height makes it easy for laborers to load and unload heavy equipment quickly.
      </p>

      <h3>Transparent Fare Structure</h3>
      <p>
        The server calculates the current estimate from the route, estimated duration, vehicle configuration, declared load and optional services. Applicable toll, waiting or scope changes can affect trip actuals. <Link to="/pricing">See how fare components work</Link>.
      </p>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Ready to Rent a Tata Ace?</h3>
        <p className="text-slate-600 mb-6">
          Enter the route and load details to check whether a suitable Tata Ace and partner are currently available.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-truck-online" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book Online Now
          </Link>
          <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20want%20to%20book%20a%20Tata%20Ace%20in%20Kolkata" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book on WhatsApp
          </a>
        </div>
      </div>
    </CityTransportPage>
  )
}
