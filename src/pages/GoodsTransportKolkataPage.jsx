import React from "react"
import { Link } from "react-router-dom"
import CityTransportPage from "../components/CityTransportPage"

export default function GoodsTransportKolkataPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Goods Transport in Kolkata",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "Kolkata, West Bengal",
      "description": "Top goods transport agency in Kolkata offering FTL, PTL, and local delivery services."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": "Goods Transport Services Kolkata", "item": "https://gomytruck.com/kolkata/goods-transport" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you transport industrial goods in Kolkata?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide end-to-end transport for industrial and commercial goods. Whether it is raw materials, heavy machinery, or finished textiles, our heavy-duty vehicles and pickup trucks are equipped to handle it safely." }
        },
        {
          "@type": "Question",
          "name": "Is transit insurance available for my goods?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, for valuable commercial shipments, we offer comprehensive transit insurance options to protect your goods against unforeseen circumstances during transit. Please speak with our support team to add insurance to your booking." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between FTL and PTL transport?",
          "acceptedAnswer": { "@type": "Answer", "text": "FTL (Full Truck Load) means you book the entire truck for your exclusive use, resulting in faster point-to-point delivery. PTL (Part Truck Load) allows you to book only a portion of the truck space and share the cost with other shippers, which is cheaper but may take slightly longer due to multiple drops." }
        },
        {
          "@type": "Question",
          "name": "Can I get a monthly transport contract for my business?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes! We specialize in B2B logistics. We offer dedicated fleet assignments, monthly billing cycles, and a dedicated account manager for businesses requiring regular goods transport in Kolkata." }
        }
      ]
    }
  ]

  const areas = [
    "Kolkata", "Howrah", "Hooghly", "North 24 Parganas", "South 24 Parganas",
    "Durgapur", "Asansol", "Siliguri", "Haldia", "Kharagpur"
  ]

  const customFaqs = (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">Goods Transport FAQs</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Do you transport industrial goods in Kolkata?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes, we provide end-to-end transport for industrial and commercial goods. Whether it is raw materials, heavy machinery, or finished textiles, our heavy-duty vehicles and <Link to="/kolkata/pickup-truck-booking" className="text-brand-600 font-semibold hover:underline">pickup trucks</Link> are equipped to handle it safely.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Is transit insurance available for my goods?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes, for valuable commercial shipments, we offer comprehensive transit insurance options to protect your goods against unforeseen circumstances during transit. Please speak with our support team to add insurance to your booking.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              What is the difference between FTL and PTL transport?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              FTL (Full Truck Load) means you book the entire truck for your exclusive use, resulting in faster point-to-point delivery. PTL (Part Truck Load) allows you to book only a portion of the truck space and share the cost with other shippers, which is cheaper but may take slightly longer due to multiple drops.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Can I get a monthly transport contract for my business?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes! We specialize in B2B logistics. We offer dedicated fleet assignments, monthly billing cycles, and a dedicated account manager for businesses requiring regular goods transport in Kolkata.
            </p>
          </details>
        </div>
      </div>
    </section>
  )

  return (
    <CityTransportPage
      city="Kolkata"
      slug="goods-transport-kolkata"
      canonical="/kolkata/goods-transport"
      headline="Goods Transport Services in Kolkata"
      subheadline="Request local or full-truck transport in Kolkata. Part-load and outstation coverage must be confirmed for the specific goods and route."
      description="Looking for reliable goods transport in Kolkata? GoMyTruck offers online booking for local shifting, B2B logistics, FTL, and PTL transport services."
      keywords="goods transport kolkata, transport agency kolkata, kolkata transport company, logistics services kolkata, freight transport kolkata, lorry booking kolkata"
      jsonLd={jsonLd}
      areas={areas}
      highlights={[
        "End-to-end goods transport solutions",
        "Both Local (Intracity) and Outstation (Intercity) services",
        "Part Truck Load (PTL) for smaller shipments",
        "Full Truck Load (FTL) for bulk goods",
        "Transit insurance available for valuable cargo",
        "Dedicated account managers for businesses"
      ]}
      customFaqs={customFaqs}
    >
      <h2>Top-Rated Goods Transport Agency in Kolkata</h2>
      <p>
        As a major commercial hub in Eastern India, Kolkata has varied goods-transport requirements across wholesale, retail, manufacturing and household routes. <strong>GoMyTruck</strong> accepts <strong>goods-transport requests in Kolkata</strong> from MSMEs, enterprises and individuals, subject to route, vehicle and partner availability.
      </p>
      <p>
        We have replaced the chaotic, opaque traditional transporter model with a seamless digital platform. Whether you need to transport a small batch of garments from Burrabazar using a <Link to="/kolkata/mini-truck-booking">mini truck</Link> or dispatch 10 tons of steel from Howrah via an <Link to="/intercity/kolkata">intercity transport</Link> truck, we handle it all with precision and transparency.
      </p>

      <h3>Complete Freight & Goods Transport Solutions</h3>
      <p>
        No two businesses have the exact same logistics needs. That is why our goods transport services are highly flexible. We offer the following primary freight solutions:
      </p>

      <h4>1. Full Truck Load (FTL) Services</h4>
      <p>
        For large manufacturing units, distributors, and wholesalers, our FTL services are the most efficient way to move bulk goods. When you book a Full Truck Load, the entire vehicle is dedicated solely to your consignment. This ensures that your goods travel directly from the origin to the destination without any detours, resulting in the fastest possible transit times.
      </p>

      <h4>2. Part Truck Load (PTL) Services</h4>
      <p>
        If your shipment is not large enough to fill an entire 14-ft or 19-ft truck, you don't have to pay for empty space. Our PTL services allow you to share the truck's capacity with other shippers. You only pay for the exact volume and weight your goods occupy. This is highly cost-effective for small to medium enterprises (SMEs).
      </p>

      <h4>3. B2B Commercial Logistics</h4>
      <p>
        Retail chains, FMCG companies, and e-commerce platforms require consistent, daily distribution. We offer dedicated fleet management where vehicles and drivers are assigned specifically to your company's daily routes. This ensures your supply chain operates like clockwork. Check out our <Link to="/transport-service-for-msmes">MSME transport services</Link> for customized business solutions.
      </p>

      <h3>Types of Goods We Transport</h3>
      <p>
        Our diverse fleet of vehicles—ranging from the agile <Link to="/kolkata/tata-ace-booking">Tata Ace</Link> to heavy-duty <Link to="/kolkata/pickup-truck-booking">pickup trucks</Link> and large containers—allows us to transport almost any type of commercial or personal cargo:
      </p>
      <ul>
        <li><strong>FMCG & Groceries:</strong> Fast-moving consumer goods, packaged foods, and beverages transported from warehouses to local retailers.</li>
        <li><strong>Textiles and Garments:</strong> Safe, dry transport of fabrics and readymade garments from manufacturing units to wholesale markets.</li>
        <li><strong>Industrial Machinery:</strong> Heavy equipment, generators, and spare parts securely strapped and transported via open-bed trucks.</li>
        <li><strong>Construction Materials:</strong> Cement, steel, tiles, and hardware supplies delivered directly to construction sites.</li>
        <li><strong>Household Goods:</strong> Complete packing and moving services for residential relocations within or outside Kolkata.</li>
      </ul>

      <h3>Why Trust GoMyTruck for Goods Transport?</h3>
      <p>
        Choosing the right transport workflow affects cost, timing, and handling. GoMyTruck provides these planning and booking capabilities:
      </p>
      <ul>
        <li><strong>100% Verified Fleet:</strong> We do not broker loads to unknown trucks. Every vehicle and <Link to="/fleet-partner-registration">driver partner</Link> in our network is thoroughly vetted, ensuring the highest level of security for your valuable cargo.</li>
        <li><strong>Live GPS Tracking:</strong> Visibility is crucial in modern logistics. You will receive a tracking link the moment your goods are dispatched, allowing you to monitor the truck's exact location in real-time until delivery is completed.</li>
        <li><strong>Transparent Digital Billing:</strong> Say goodbye to hidden charges and manual paperwork. Our fares are calculated upfront, and GST-compliant digital invoices are generated automatically for easy bookkeeping.</li>
        <li><strong>Published Support Channels:</strong> Phone hours and email or WhatsApp options are listed on the Support page. Response time varies with the issue and current enquiry volume.</li>
      </ul>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Streamline Your Goods Transport Today</h3>
        <p className="text-slate-600 mb-6">
          Enter the route and declared goods to review the current estimate and partner availability for a Kolkata shipment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-truck-online" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book Transport Now
          </Link>
          <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20am%20looking%20for%20goods%20transport%20services%20in%20Kolkata" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </CityTransportPage>
  )
}

