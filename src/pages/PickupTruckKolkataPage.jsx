import React from "react"
import { Link } from "react-router-dom"
import CityTransportPage from "../components/CityTransportPage"

export default function PickupTruckKolkataPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Pickup Truck Booking in Kolkata",
      "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
      "areaServed": "Kolkata, West Bengal",
      "description": "Book pickup trucks online in Kolkata for fast commercial and personal goods transport."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
        { "@type": "ListItem", "position": 2, "name": "Pickup Truck Booking Kolkata", "item": "https://gomytruck.com/kolkata/pickup-truck-booking" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the load capacity of a pickup truck?",
          "acceptedAnswer": { "@type": "Answer", "text": "Standard pickup trucks like the Mahindra Bolero Pickup or Tata Yodha generally have a payload capacity ranging from 1,000 kg (1 Ton) to 1,500 kg (1.5 Tons). This makes them perfect for medium-heavy commercial goods." }
        },
        {
          "@type": "Question",
          "name": "Can I book a pickup truck for intercity transport from Kolkata?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, absolutely. Pickup trucks are built for endurance and are frequently used for intercity transport from Kolkata to nearby cities like Asansol, Durgapur, Haldia, and Siliguri." }
        },
        {
          "@type": "Question",
          "name": "Are there any hidden charges for toll or parking?",
          "acceptedAnswer": { "@type": "Answer", "text": "The booking flow shows the available route-based fare components before confirmation. Tolls, waiting, parking, route changes and other stated trip actuals may affect the final amount." }
        }
      ]
    }
  ]

  const areas = [
    "Burrabazar", "Posta", "Howrah", "Kaikhali", "Madhyamgram",
    "Barasat", "Kalyani", "Sonarpur", "Baruipur", "Behala"
  ]

  const customFaqs = (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-center">Pickup Truck Booking FAQs</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              What is the load capacity of a pickup truck?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Standard pickup trucks like the Mahindra Bolero Pickup or Tata Yodha generally have a payload capacity ranging from 1,000 kg (1 Ton) to 1,500 kg (1.5 Tons). This makes them perfect for medium-heavy commercial goods.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Can I book a pickup truck for intercity transport from Kolkata?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes, absolutely. Pickup trucks are built for endurance and are frequently used for <Link to="/intercity/kolkata" className="text-brand-600 font-semibold hover:underline">intercity transport from Kolkata</Link> to nearby cities like Asansol, Durgapur, Haldia, and Siliguri.
            </p>
          </details>
          <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
              Are there any hidden charges for toll or parking?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The booking flow shows the available route-based fare components before confirmation. Tolls, waiting, parking, route changes and other stated trip actuals may affect the final amount.
            </p>
          </details>
        </div>
      </div>
    </section>
  )

  return (
    <CityTransportPage
      city="Kolkata"
      slug="pickup-truck-booking-kolkata"
      canonical="/kolkata/pickup-truck-booking"
      headline="Pickup Truck Booking in Kolkata"
      subheadline="Rent 8ft and 10ft Pickup Trucks online. Perfect for heavy goods, construction materials, and commercial stock delivery."
      description="Book a pickup truck in Kolkata for heavy goods delivery. GoMyTruck offers Bolero Pickup and other 8ft/10ft trucks at cheap per-km rates."
      keywords="pickup truck booking kolkata, bolero pickup rent kolkata, rent pickup truck kolkata, 8ft truck booking, heavy goods transport kolkata, pickup van hire"
      jsonLd={jsonLd}
      areas={areas}
      highlights={[
        "Heavy-duty pickup trucks (Bolero, Super Carry)",
        "Ideal for B2B commercial transport",
        "Route-based estimate shown before confirmation",
        "Verified drivers experienced with heavy loads",
        "Tracking on supported active trips"
      ]}
      customFaqs={customFaqs}
    >
      <h2>Heavy-Duty Pickup Truck Booking in Kolkata</h2>
      <p>
        When you need to transport goods that are too heavy or bulky for a standard <Link to="/kolkata/mini-truck-booking">mini truck</Link>, but you don't quite need the massive space of a 14-ft truck, a pickup truck is the perfect middle ground. <strong>GoMyTruck</strong> provides the most reliable and affordable <strong>pickup truck booking in Kolkata</strong>.
      </p>
      <p>
        Whether you are transporting construction materials from Howrah, delivering heavy industrial equipment from Burrabazar, or shifting large quantities of agricultural produce, our fleet of 8ft and 10ft pickup trucks (like the Mahindra Bolero Pickup and Tata Yodha) is equipped to handle the toughest loads.
      </p>

      <h3>Why Book a Pickup Truck?</h3>
      <p>
        Pickup trucks are the ultimate workhorses of the logistics industry. They combine the raw power and payload capacity of larger commercial vehicles with the maneuverability of smaller vans. Here is why you should consider booking a pickup truck for your next consignment:
      </p>
      <ul>
        <li><strong>High Payload Capacity:</strong> Unlike a <Link to="/kolkata/tata-ace-booking">Tata Ace</Link> which usually carries around 750 kg, a standard pickup truck can comfortably transport payloads ranging from 1,000 kg to 1,500 kg (1 to 1.5 tons).</li>
        <li><strong>Durability on Rough Terrain:</strong> Pickup trucks are built with heavy-duty suspensions and powerful engines. This makes them ideal for navigating poorly maintained roads, construction sites, and rural areas just outside the Kolkata metropolitan area.</li>
        <li><strong>Cost-Effective Heavy Transport:</strong> Hiring a massive 14-foot truck for a 1.2-ton payload is inefficient and expensive. A pickup truck provides the exact capacity you need, saving you money on your <Link to="/kolkata/goods-transport">goods transport</Link> costs.</li>
        <li><strong>Versatile Cargo Bed:</strong> The open cargo bed of an 8ft or 10ft pickup allows for the transportation of oversized or irregularly shaped items, such as long steel pipes, large wooden boards, or heavy machinery.</li>
      </ul>

      <h3>Common Uses for Pickup Trucks in Kolkata</h3>
      <p>
        Our pickup trucks serve a wide variety of industries across Kolkata and its surrounding areas, including:
      </p>

      <h4>1. Construction and Hardware Materials</h4>
      <p>
        Kolkata is a rapidly growing city, and construction is constant. Contractors and builders frequently use our pickup trucks to transport cement bags, steel TMT bars, bricks, tiles, and plumbing hardware from wholesale markets like Posta and Howrah directly to construction sites.
      </p>

      <h4>2. Agricultural and Mandi Transport</h4>
      <p>
        Farmers and wholesale vegetable vendors rely on robust pickup trucks to transport fresh produce from rural farms and wholesale mandis directly to retail markets across Kolkata before dawn. The speed and durability of the pickup truck are essential for preserving the freshness of the goods.
      </p>

      <h4>3. Heavy Commercial Goods Distribution</h4>
      <p>
        SMEs dealing in heavy electrical goods, industrial generators, large commercial refrigerators, and automotive spare parts utilize our pickup trucks for daily B2B distribution. Our <Link to="/fleet-partner-registration">fleet partners</Link> ensure that these high-value items are transported securely.
      </p>

      <h4>4. Large-Scale Event Logistics</h4>
      <p>
        Transporting massive sound systems, heavy lighting rigs, and large stage setups requires the specific payload capacity and open-bed design that only a pickup truck can provide. Event organizers trust GoMyTruck for their critical, time-sensitive logistics.
      </p>

      <h3>How to Book a Pickup Truck with GoMyTruck</h3>
      <p>
        The online workflow records the route, vehicle, goods, and handling requirements before showing the current estimate:
      </p>
      <ol>
        <li><strong>Enter Your Route:</strong> Open our app or website and enter your exact pickup and drop-off locations in Kolkata.</li>
        <li><strong>Select Pickup Truck:</strong> Choose the "Pickup Truck" category (typically 8ft or 10ft depending on your load).</li>
        <li><strong>Review the Estimate:</strong> The pricing engine uses distance, time, vehicle, fuel surcharge, demand, workforce, and tax inputs.</li>
        <li><strong>Confirm and Follow Status:</strong> Confirmation starts partner matching. Assignment is not immediate or guaranteed; supported active trips can provide status and location updates.</li>
      </ol>

      <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Need a Pickup Truck Now?</h3>
        <p className="text-slate-600 mb-6">
          For cement, machinery, or other dense goods, confirm the actual payload, body fit, securing method, access, and handling requirements before booking a pickup.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book-truck-online" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book Online Now
          </Link>
          <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20want%20to%20book%20a%20pickup%20truck%20in%20Kolkata" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Book on WhatsApp
          </a>
        </div>
      </div>
    </CityTransportPage>
  )
}

