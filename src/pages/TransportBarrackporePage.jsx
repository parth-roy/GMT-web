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
        { "@type": "ListItem", "position": 3, "name": "Transport Services in Barrackpore", "item": "https://gomytruck.com/transport-services-barrackpore" }
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
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Tata Aces (Chota Hathi) are our most popular vehicles for residential moving in Barrackpore. You can book one instantly for shifting rooms, 1BHKs, or PG luggage." }
        },
        {
          "@type": "Question",
          "name": "How long does it take for the truck to arrive after booking?",
          "acceptedAnswer": { "@type": "Answer", "text": "We maintain a large fleet of active driver partners in the Barrackpore subdivision. Typically, a truck will reach your pickup location within 20 to 30 minutes of a confirmed booking." }
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
              Absolutely. Tata Aces (Chota Hathi) are our most popular vehicles for residential moving in Barrackpore. You can book one instantly for shifting rooms, 1BHKs, or PG luggage.
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
              We maintain a large fleet of active driver partners in the Barrackpore subdivision. Typically, a truck will reach your pickup location within 20 to 30 minutes of a confirmed booking.
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
      headline="Truck Booking in Barrackpore"
      subheadline="Fast and reliable truck booking services in Barrackpore, Titagarh, Sodepur, and North 24 Parganas. Transparent per-km pricing."
      description="Looking for goods transport in Barrackpore? Book Tata Ace, mini trucks, and pickup trucks online with GoMyTruck for fast local delivery."
      keywords="truck booking barrackpore, goods transport barrackpore, tata ace rent barrackpore, transport agency barrackpore, local transport north 24 parganas"
      jsonLd={jsonLd}
      areas={barrackporeAreas}
      highlights={[
        "Covering Barrackpore and all surrounding belt areas",
        "Fast pickup within 20–30 minutes from Barrackpore",
        "Connects to Kolkata for intercity transport",
        "Verified, background-checked local drivers",
        "Transparent per-km pricing — no hidden charges",
        "Book online in under 2 minutes, 24/7"
      ]}
      customFaqs={customFaqs}
    >
      <h2>Top-Rated Truck Booking Agency in Barrackpore</h2>
      <p>
        Barrackpore and the wider North 24 Parganas district form a crucial industrial and residential belt in West Bengal. Navigating the logistics in this bustling region requires a transport partner that is local, fast, and highly reliable. <strong>GoMyTruck</strong> offers the premier <strong>truck booking service in Barrackpore</strong>, bridging the gap between local businesses, residents, and verified commercial vehicle owners.
      </p>
      <p>
        Whether you are shifting your home from Titagarh, sending industrial goods from Khardah to Kolkata, or distributing retail products across Sodepur, our digital transport platform provides you with instant access to a vast fleet of commercial vehicles. Say goodbye to negotiating with unorganized local truck stands; with GoMyTruck, you get transparent, algorithm-driven pricing and guaranteed service.
      </p>

      <h3>Our Transport Services in Barrackpore</h3>
      <p>
        We cater to the diverse logistics needs of the Barrackpore subdivision. Here is how our <Link to="/goods-transport-barrackpore">goods transport services</Link> can help you:
      </p>

      <h4>1. Local Shifting and Relocation</h4>
      <p>
        Moving to a new house within the Barrackpore cantonment area or shifting to a nearby town like Shyamnagar? Our <Link to="/mini-truck-booking-kolkata">mini trucks</Link> and Tata Aces are perfectly sized for residential relocations. We offer safe, quick, and hassle-free transport for your furniture, appliances, and personal belongings.
      </p>

      <h4>2. B2B and Industrial Transport</h4>
      <p>
        The Barrackpore belt is home to numerous manufacturing units, jute mills, and small-scale industries. We provide dedicated <Link to="/pickup-truck-booking-kolkata">pickup trucks</Link> (like Bolero Pickups) and larger 14-ft trucks to transport raw materials, machinery, and finished goods from factories to wholesale markets or directly to Kolkata.
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
        <li><strong>Instant Vehicle Allocation:</strong> We have a dense network of driver partners located specifically within the Barrackpore subdivision. When you book a truck, we guarantee a vehicle at your pickup location within 30 minutes.</li>
        <li><strong>Transparent, Low Fares:</strong> We charge based on the exact distance traveled. Our technology eliminates arbitrary broker margins, meaning you get the most affordable per-kilometer rates in the market.</li>
        <li><strong>Live GPS Tracking:</strong> Security is paramount. From the moment the truck is loaded in Barrackpore until it reaches its destination (whether in Kolkata or another district), you can track its live location directly from your smartphone.</li>
        <li><strong>Wide Fleet Variety:</strong> You don't have to hire a large truck for a small load. Choose from two-wheelers, Tata Aces, 8ft Pickup trucks, and heavy-duty vehicles based entirely on your cargo volume.</li>
      </ul>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Book Your Truck in Barrackpore Today</h3>
        <p className="text-slate-600 mb-6">
          Experience the most reliable transport service in North 24 Parganas. Get an instant quote and book your vehicle now.
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
