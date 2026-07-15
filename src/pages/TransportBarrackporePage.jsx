import React from "react"
import { Link } from "react-router-dom"
import CityTransportPage from "../components/CityTransportPage"

export default function TransportBarrackporePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Truck Booking in Barrackpore",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "Barrackpore, West Bengal",
      "description": "Top goods transport agency in Barrackpore offering truck booking, mini truck rental, and logistics services."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": "Goods Transport Services", "item": "https://gomytruck.com/goods-transport-services" },
        { "@type": "ListItem", "position": 3, "name": "Transport Services in Barrackpore", "item": "https://gomytruck.com/barrackpore/truck-booking" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you provide transport from Barrackpore to Kolkata?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer seamless goods transport between Barrackpore and Kolkata. Whether you need a mini truck for local shifting or a larger vehicle for commercial goods, our drivers cover the entire North 24 Parganas to Kolkata route daily." }
        },
        {
          "@type": "Question",
          "name": "Can I rent a Tata Ace in Barrackpore for house shifting?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Tata Ace may suit a smaller residential move, depending on the declared inventory, weight, body dimensions, access, and partner availability. Check the actual load before confirming." }
        },
        {
          "@type": "Question",
          "name": "How long does it take for the truck to arrive after booking?",
          "acceptedAnswer": { "@type": "Answer", "text": "There is no fixed arrival promise. Assignment and arrival depend on a matching vehicle and partner, the route, traffic, goods, and current availability. Follow the confirmed booking status." }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden costs involved?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. At GoMyTruck, pricing transparency is our core value. The fare you see on the app or website is calculated based on distance and vehicle type. The only additional charges might be actual toll taxes or labor charges if you request loading/unloading help." }
        }
      ]
    }
  ]

  const barrackporeAreas = [
    "Barrackpore Cantonment", "Titagarh", "Ichhapur", "Nilganj", "Ghoshpara",
    "Bhatpara", "Naihati", "Kamarhati", "Sodepur", "Khardah", "Shyamnagar",
    "Garulia", "North Barrackpore", "Jagatdal", "Noapara", "Halisahar",
  ]

  const customFaqs = (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">Barrackpore Transport FAQs</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Do you provide transport from Barrackpore to Kolkata?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes, we offer seamless goods transport between Barrackpore and Kolkata. Whether you need a mini truck for local shifting or a larger vehicle for commercial goods, our drivers cover the entire North 24 Parganas to Kolkata route daily.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Can I rent a Tata Ace in Barrackpore for house shifting?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A Tata Ace may suit a smaller residential move, depending on the declared inventory, weight, body dimensions, access, and partner availability. Check the actual load before confirming.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              How long does it take for the truck to arrive after booking?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              There is no fixed arrival promise. Assignment and arrival depend on a matching vehicle and partner, the route, traffic, goods, and current availability. Follow the confirmed booking status.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Are there any hidden costs involved?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              No. At GoMyTruck, pricing transparency is our core value. The fare you see on the app or website is calculated based on distance and vehicle type. The only additional charges might be actual toll taxes or labor charges if you request loading/unloading help.
            </p>
          </details>
        </div>
      </div>
    </section>
  )

  return (
    <CityTransportPage
      city="Barrackpore"
      slug="truck-booking-barrackpore"
      canonical="/barrackpore/truck-booking"
      headline="Truck Booking in Barrackpore"
      subheadline="Request a truck in Barrackpore, Titagarh, Sodepur, and North 24 Parganas, then review route-based pricing and current availability."
      description="Request goods transport in Barrackpore with Tata Ace, mini-truck and pickup options. Review the live route estimate before confirming."
      keywords="truck booking barrackpore, goods transport barrackpore, tata ace rent barrackpore, transport agency barrackpore, local transport north 24 parganas"
      jsonLd={jsonLd}
      areas={barrackporeAreas}
      highlights={[
        "Covering Barrackpore and all surrounding belt areas",
        "Partner assignment and arrival shown in the booking status",
        "Connects to Kolkata for intercity transport",
        "Applicable partner and vehicle documents reviewed during onboarding",
        "Route-based fare components shown before confirmation",
        "Submit route and goods details online"
      ]}
      customFaqs={customFaqs}
    >
      <h2>Request Transport Service in Barrackpore</h2>
      <p>
        Barrackpore and the wider North 24 Parganas district form an important industrial and residential belt in West Bengal. <strong>GoMyTruck</strong> accepts <strong>truck-booking requests in Barrackpore</strong> from businesses and residents and makes them available to eligible driver or fleet partners. Service begins only after assignment is confirmed.
      </p>
      <p>
        Whether you are shifting a home from Titagarh, sending industrial goods from Khardah to Kolkata, or distributing retail products around Sodepur, the platform records the route and goods details and calculates a current estimate. Service begins only after an eligible partner is assigned.
      </p>

      <h3>Our Transport Services in Barrackpore</h3>
      <p>
        We cater to the diverse logistics needs of the Barrackpore subdivision. Here is how our <Link to="/barrackpore/goods-transport">goods transport services</Link> can help you:
      </p>

      <h4>1. Local Shifting and Relocation</h4>
      <p>
        Moving within Barrackpore or to a nearby town such as Shyamnagar? Compare <Link to="/kolkata/mini-truck-booking">mini-truck</Link> and Tata Ace options against the declared inventory. Packing, workforce, access, timing and protection needs must be confirmed as part of the service scope.
      </p>

      <h4>2. B2B and Industrial Transport</h4>
      <p>
        The Barrackpore belt is home to numerous manufacturing units, jute mills, and small-scale industries. We provide dedicated <Link to="/kolkata/pickup-truck-booking">pickup trucks</Link> (like Bolero Pickups) and larger 14-ft trucks to transport raw materials, machinery, and finished goods from factories to wholesale markets or directly to Kolkata.
      </p>

      <h4>3. Retail and FMCG Distribution</h4>
      <p>
        Local distributors and wholesalers rely on GoMyTruck for their daily delivery runs. Our vehicles ensure that retail shops across Naihati, Kamarhati, and Halisahar are restocked promptly every morning. We offer dedicated fleet tie-ups for businesses requiring regular logistics support.
      </p>

      <h3>Why Choose GoMyTruck in Barrackpore?</h3>
      <p>
        There are several reasons why residents and businesses in North 24 Parganas prefer us over traditional transport brokers:
      </p>
      <ul>
        <li><strong>Availability Check:</strong> A confirmed request enters matching. Vehicle assignment and arrival depend on the route, goods, vehicle type, traffic, and current partner supply.</li>
        <li><strong>Route-Based Estimate:</strong> Pricing can include the mapped distance and time, selected vehicle, fuel surcharge, demand rules, workforce, and tax components.</li>
        <li><strong>Live GPS Tracking:</strong> Security is paramount. From the moment the truck is loaded in Barrackpore until it reaches its destination (whether in Kolkata or another district), you can track its live location directly from your smartphone.</li>
        <li><strong>Wide Fleet Variety:</strong> You don't have to hire a large truck for a small load. Choose from two-wheelers, Tata Aces, 8ft Pickup trucks, and heavy-duty vehicles based entirely on your cargo volume.</li>
      </ul>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Book Your Truck in Barrackpore Today</h3>
        <p className="text-slate-600 mb-6">
          Enter the exact route and load to review a current estimate and check partner availability in North 24 Parganas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-truck-online" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book Online Now
          </Link>
          <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20want%20to%20book%20a%20truck%20in%20Barrackpore" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book on WhatsApp
          </a>
        </div>
      </div>
    </CityTransportPage>
  )
}
