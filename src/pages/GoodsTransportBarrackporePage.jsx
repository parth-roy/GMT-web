import React from "react"
import { Link } from "react-router-dom"
import CityTransportPage from "../components/CityTransportPage"

export default function GoodsTransportBarrackporePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Goods Transport in Barrackpore",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "Barrackpore, West Bengal",
      "description": "Book goods transport services in Barrackpore for commercial and residential logistics."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": "Goods Transport in Barrackpore", "item": "https://gomytruck.com/barrackpore/goods-transport" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I book transport from Barrackpore to other districts?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we handle extensive intercity goods transport. We regularly transport goods from Barrackpore to major districts like Hooghly, Howrah, Nadia, South 24 Parganas, and Purba Bardhaman." }
        },
        {
          "@type": "Question",
          "name": "Do you offer monthly billing for local businesses in Sodepur?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. For businesses with frequent logistics needs in the Barrackpore subdivision (including Sodepur, Khardah, and Naihati), we offer specialized corporate accounts with digital monthly billing and dedicated fleet assignments." }
        },
        {
          "@type": "Question",
          "name": "Is my cargo insured during transit?",
          "acceptedAnswer": { "@type": "Answer", "text": "We provide highly secure transport with verified drivers. However, for high-value commercial goods, we strongly recommend opting for our comprehensive transit insurance add-on during the booking process." }
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
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">Goods Transport FAQs for Barrackpore</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Can I book transport from Barrackpore to other districts?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes, we handle extensive intercity goods transport. We regularly transport goods from Barrackpore to major districts like Hooghly, Howrah, Nadia, South 24 Parganas, and Purba Bardhaman.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Do you offer monthly billing for local businesses in Sodepur?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes. For businesses with frequent logistics needs in the Barrackpore subdivision (including Sodepur, Khardah, and Naihati), we offer specialized corporate accounts with digital monthly billing and dedicated fleet assignments.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Is my cargo insured during transit?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We provide highly secure transport with verified drivers. However, for high-value commercial goods, we strongly recommend opting for our comprehensive transit insurance add-on during the booking process.
            </p>
          </details>
        </div>
      </div>
    </section>
  )

  return (
    <CityTransportPage
      city="Barrackpore"
      slug="goods-transport-barrackpore"
      canonical="/barrackpore/goods-transport"
      headline="Goods Transport in Barrackpore"
      subheadline="Comprehensive goods transport and logistics services across Barrackpore and North 24 Parganas. Fast, secure, and affordable."
      description="Looking for goods transport in Barrackpore? Book Tata Ace, mini trucks, and pickup trucks online with GoMyTruck for fast local delivery."
      keywords="goods transport barrackpore, transport services barrackpore, truck booking barrackpore, transport agency barrackpore, local transport north 24 parganas"
      jsonLd={jsonLd}
      areas={barrackporeAreas}
      highlights={[
        "Serving Barrackpore and the entire North 24 Parganas belt",
        "Partner assignment and arrival shown in booking status",
        "Seamless connectivity to Kolkata and beyond",
        "Verified and highly experienced local drivers",
        "Fare components shown before confirmation",
        "Specialized solutions for local SMEs and industries"
      ]}
      customFaqs={customFaqs}
    >
      <h2>Goods Transport Requests in Barrackpore</h2>
      <p>
        The Barrackpore belt, stretching along the Hooghly River in North 24 Parganas, is a vital economic corridor teeming with jute mills, small-scale industries, and dense residential areas. To keep this region moving, you need a logistics partner that understands the local terrain. <strong>GoMyTruck</strong> stands as the most reliable and tech-driven <strong>goods transport agency in Barrackpore</strong>, serving businesses and individuals alike.
      </p>
      <p>
        From declared raw jute in Titagarh to electronic goods for a Sodepur retailer, the platform records the route and load, calculates a current estimate, and begins partner matching after confirmation. Supported active trips can provide status and location updates.
      </p>

      <h3>Complete Freight Solutions for North 24 Parganas</h3>
      <p>
        We provide a full spectrum of <Link to="/kolkata/goods-transport">goods transport services</Link> tailored to the unique demands of the Barrackpore subdivision:
      </p>

      <h4>1. Industrial & B2B Logistics</h4>
      <p>
        The factories and manufacturing units scattered across Khardah, Shyamnagar, and Naihati require robust supply chains. We supply heavy-duty <Link to="/kolkata/pickup-truck-booking">pickup trucks</Link> and large 14-ft vehicles for the daily movement of raw materials, machinery parts, and finished industrial goods. Our vehicles ensure your production lines never halt due to logistics failures.
      </p>

      <h4>2. Wholesale and Retail Distribution</h4>
      <p>
        Local markets in Barrackpore rely on constant inventory replenishment. We partner with wholesalers to distribute FMCG products, groceries, and textiles to retail outlets across the region. Our <Link to="/kolkata/mini-truck-booking">mini trucks</Link> and Tata Aces are perfect for navigating crowded local markets for swift mid-mile and last-mile deliveries.
      </p>

      <h4>3. Relocation and Packers & Movers</h4>
      <p>
        Whether you are a family moving to a new apartment in Kamarhati or a student shifting to a PG near the cantonment, we offer specialized household shifting services. Book a <Link to="/kolkata/tata-ace-booking">Tata Ace</Link> for a quick local move, or opt for our comprehensive packers and movers service for complete peace of mind.
      </p>

      <h3>Why Trust GoMyTruck for Your Transport Needs?</h3>
      <p>
        Choosing the right transport provider is critical for the safety of your goods and the efficiency of your business. Here is why Barrackpore trusts GoMyTruck:
      </p>
      <ul>
        <li><strong>Local opportunity matching:</strong> Eligible nearby driver and fleet partners may receive the request. Vehicle availability and waiting time are confirmed only after a partner accepts or is assigned.</li>
        <li><strong>Transparent, Algorithm-Driven Fares:</strong> We charge based on the actual distance of your route. By cutting out the middlemen and brokers, we offer the most competitive per-kilometer transport rates in North 24 Parganas.</li>
        <li><strong>Live GPS Tracking:</strong> Security is our top priority. You can monitor the exact location of your goods via our app from the moment they are loaded in Barrackpore until they reach their final destination.</li>
        <li><strong>Scalable Fleet:</strong> Whether you need a small Piaggio Ape for a quick courier run or a 14-ft truck for bulk industrial goods, our diverse fleet ensures you only pay for the capacity you actually need.</li>
      </ul>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Ready to Ship Your Goods?</h3>
        <p className="text-slate-600 mb-6">
          Experience seamless, reliable, and affordable goods transport across Barrackpore and beyond.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-truck-online" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book Transport Now
          </Link>
          <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20am%20looking%20for%20goods%20transport%20in%20Barrackpore" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </CityTransportPage>
  )
}
