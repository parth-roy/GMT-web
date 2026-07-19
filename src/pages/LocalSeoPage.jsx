import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react"
import SEOHead from "../seo/SEOHead"

const pages = {
  kolkata: {
    canonical: "/kolkata",
    title: "Goods Transport & Truck Booking in Kolkata",
    description: "Explore GoMyTruck truck booking, mini truck, goods transport, packers and movers, local and intercity services available from Kolkata.",
    eyebrow: "Kolkata logistics hub",
    h1: "Truck Booking and Goods Transport in Kolkata",
    intro: "Plan a local delivery, a household move or an intercity commercial shipment from one Kolkata hub. Choose a vehicle for the declared load, check the route-based estimate and follow booking updates online.",
    context: "Kolkata movements can involve narrow market lanes, daytime commercial-vehicle restrictions and bridge or toll routing. Enter complete pickup, drop and goods details so the platform can calculate the relevant vehicle, distance, time and applicable fare components.",
    areas: ["Burrabazar", "Park Street", "Dum Dum", "Behala", "Garia", "Howrah connections"],
    services: [["Truck booking", "/kolkata/truck-booking"], ["Mini truck", "/kolkata/mini-truck-booking"], ["Goods transport", "/kolkata/goods-transport"], ["Packers and movers", "/kolkata/packers-and-movers"]],
  },
  barrackpore: {
    canonical: "/barrackpore",
    title: "Truck Booking & Goods Transport in Barrackpore",
    description: "Book local and Kolkata-connected goods transport from Barrackpore, including Tata Ace, pickup and larger commercial vehicle options.",
    eyebrow: "North 24 Parganas hub",
    h1: "Truck Booking and Goods Transport in Barrackpore",
    intro: "Arrange goods movement across Barrackpore, the surrounding industrial belt and routes into Kolkata. Vehicle assignment and pickup timing depend on the declared cargo, route and partner availability.",
    context: "The Barrackpore belt combines residential lanes, wholesale distribution and industrial freight. A clear goods declaration—including weight, quantity and handling needs—helps prevent a vehicle mismatch at pickup.",
    areas: ["Titagarh", "Khardah", "Sodepur", "Naihati", "Shyamnagar", "Kolkata connections"],
    services: [["Truck booking", "/barrackpore/truck-booking"], ["Goods transport", "/barrackpore/goods-transport"], ["Loading labour", "/barrackpore/loading-unloading-labour"], ["Contact us", "/contact"]],
  },
  howrah: {
    canonical: "/howrah",
    title: "Goods Transport & Truck Booking in Howrah",
    description: "Find route-based goods transport and commercial truck booking options for Howrah, Kolkata and intercity movements.",
    eyebrow: "Howrah logistics hub",
    h1: "Goods Transport and Truck Booking in Howrah",
    intro: "Move retail stock, industrial materials, furniture and other permitted goods from Howrah with vehicle options matched to the load declaration.",
    context: "Howrah connects dense local markets with industrial zones and national corridors. Route estimates may reflect distance, estimated travel time, vehicle class, fuel adjustment, taxes, tolls and other disclosed trip components.",
    areas: ["Howrah Maidan", "Shibpur", "Santragachi", "Liluah", "Bally", "Kolkata connections"],
    services: [["Howrah goods transport", "/howrah/goods-transport"], ["Book a truck", "/book-truck-online"], ["Intercity transport", "/intercity/kolkata"], ["Enterprise logistics", "/enterprise"]],
  },
  "salt-lake": {
    canonical: "/salt-lake",
    title: "Goods Transport & Mini Truck Booking in Salt Lake",
    description: "Arrange local goods delivery, business distribution and mini truck booking in Salt Lake and nearby Kolkata areas.",
    eyebrow: "Bidhannagar logistics hub",
    h1: "Goods Transport in Salt Lake, Kolkata",
    intro: "Book suitable commercial vehicles for office moves, retail replenishment, parcels and household goods across Salt Lake and nearby business districts.",
    context: "Sector access, building rules and loading windows can affect a Salt Lake pickup. Add landmark and contact details, select the correct goods category and disclose labour requirements before confirming.",
    areas: ["Sector I", "Sector II", "Sector III", "Sector V", "Lake Town", "New Town connections"],
    services: [["Salt Lake goods transport", "/salt-lake/goods-transport"], ["Mini truck booking", "/kolkata/mini-truck-booking"], ["Packers and movers", "/kolkata/packers-and-movers"], ["Contact support", "/contact"]],
  },
  "new-town": {
    canonical: "/new-town",
    title: "Goods Transport & Truck Booking in New Town",
    description: "Book commercial goods transport, mini trucks and moving vehicles in New Town, Rajarhat and nearby Kolkata locations.",
    eyebrow: "Rajarhat–New Town hub",
    h1: "Goods Transport and Truck Booking in New Town",
    intro: "Arrange office, retail, construction-material and household-goods movement in New Town with route-based estimates and digital booking updates.",
    context: "High-rise access rules, loading bays and scheduled entry windows matter in New Town. Confirm them with the property and include handling instructions so the transport and optional workforce request reflect the job.",
    areas: ["Action Area I", "Action Area II", "Action Area III", "Rajarhat", "Chinar Park", "Sector V connections"],
    services: [["New Town goods transport", "/new-town/goods-transport"], ["Mini truck booking", "/kolkata/mini-truck-booking"], ["Commercial transport", "/services/commercial-goods-transport"], ["Contact us", "/contact"]],
  },
  "kolkata-14ft": {
    canonical: "/kolkata/14-feet-truck-rental",
    title: "14 Feet Truck Rental in Kolkata",
    description: "Request a 14 feet commercial truck in Kolkata for suitable medium-volume goods, with route and load details used for the estimate.",
    eyebrow: "Medium commercial vehicle",
    h1: "14 Feet Truck Rental in Kolkata",
    intro: "A 14 feet truck can suit furniture, packaged stock, appliances and medium commercial loads that exceed mini-truck capacity. Declare the goods, approximate weight and dimensions before selecting the vehicle.",
    context: "Payload varies by exact vehicle, body type and permit. The assigned vehicle and final payable amount are shown through the booking flow; toll, waiting, labour and statutory charges may apply when relevant and disclosed.",
    areas: ["Kolkata", "Howrah", "Salt Lake", "New Town", "Barrackpore", "West Bengal routes"],
    services: [["Start booking", "/book-truck-online"], ["Kolkata truck booking", "/kolkata/truck-booking"], ["Commercial transport", "/services/commercial-goods-transport"], ["Contact us", "/contact"]],
  },
  "kolkata-packers": {
    canonical: "/kolkata/packers-and-movers",
    title: "Packers and Movers in Kolkata",
    description: "Request packing and moving assistance in Kolkata for eligible household or office moves, with inventory-based estimates.",
    eyebrow: "Kolkata relocation service",
    h1: "Packers and Movers in Kolkata",
    intro: "Plan a household or small-office move with pickup, destination, inventory and access details captured before the quote. Packing material, workforce and vehicle requirements depend on the declared inventory.",
    context: "List bulky or fragile items, floor and lift access, dismantling needs and preferred moving time. The initial estimate can change if the on-site inventory or service scope differs from what was declared.",
    areas: ["Central Kolkata", "South Kolkata", "North Kolkata", "Salt Lake", "New Town", "Howrah"],
    services: [["Moving service", "/packers-and-movers"], ["Mini truck", "/kolkata/mini-truck-booking"], ["Workforce", "/workforce"], ["Terms", "/legal/terms"]],
  },
  "barrackpore-labour": {
    canonical: "/barrackpore/loading-unloading-labour",
    title: "Loading & Unloading Labour in Barrackpore",
    description: "Request linked loading or unloading workforce with an eligible transport booking in Barrackpore, subject to worker availability.",
    eyebrow: "Optional linked workforce",
    h1: "Loading and Unloading Labour in Barrackpore",
    intro: "Add workforce requirements to an eligible goods-transport request, including worker count, task type and estimated duration. Labour assignment is separate from vehicle assignment and remains subject to availability.",
    context: "Describe stairs, lift access, item weight and specialist handling before confirming. Drivers are not automatically responsible for loading or unloading unless that service is expressly included in the booking.",
    areas: ["Barrackpore", "Titagarh", "Khardah", "Sodepur", "Shyamnagar", "Naihati"],
    services: [["Barrackpore transport", "/barrackpore/truck-booking"], ["Goods transport", "/barrackpore/goods-transport"], ["Workforce programme", "/workforce"], ["Contact support", "/contact"]],
  },
  "howrah-goods": {
    canonical: "/howrah/goods-transport",
    title: "Goods Transport Services in Howrah",
    description: "Request local or intercity goods transport from Howrah with vehicle selection based on route, load and handling requirements.",
    eyebrow: "Howrah service page",
    h1: "Goods Transport Services in Howrah",
    intro: "Use GoMyTruck for eligible household, retail and commercial goods movements from Howrah. Choose local or intercity transport and provide a complete goods declaration.",
    context: "For industrial or high-value consignments, verify the selected vehicle, packaging, permits and any optional protection shown during booking. Prohibited or incorrectly declared goods cannot be carried.",
    areas: ["Shibpur", "Liluah", "Bally", "Santragachi", "Dasnagar", "Kolkata routes"],
    services: [["Howrah hub", "/howrah"], ["Book a truck", "/book-truck-online"], ["Commercial transport", "/services/commercial-goods-transport"], ["Intercity transport", "/intercity/kolkata"]],
  },
  "salt-lake-goods": {
    canonical: "/salt-lake/goods-transport",
    title: "Goods Transport Services in Salt Lake",
    description: "Book eligible goods transport in Salt Lake for office, retail, household and local distribution requirements.",
    eyebrow: "Salt Lake service page",
    h1: "Goods Transport Services in Salt Lake",
    intro: "Request a mini truck, pickup or other suitable vehicle for goods movement across Bidhannagar and nearby Kolkata locations.",
    context: "Share building access, loading-slot and contact details before pickup. A route estimate is not a guarantee of immediate allocation; the app confirms assignment and trip status separately.",
    areas: ["Sector I", "Sector II", "Sector III", "Sector V", "Lake Town", "Kestopur"],
    services: [["Salt Lake hub", "/salt-lake"], ["Mini truck", "/kolkata/mini-truck-booking"], ["Enterprise logistics", "/enterprise"], ["Contact us", "/contact"]],
  },
  "new-town-goods": {
    canonical: "/new-town/goods-transport",
    title: "Goods Transport Services in New Town",
    description: "Arrange local goods transport in New Town and Rajarhat with route-based estimates and vehicle options matched to the load.",
    eyebrow: "New Town service page",
    h1: "Goods Transport Services in New Town",
    intro: "Book for eligible retail stock, office equipment, household items or commercial goods across New Town, Rajarhat and nearby areas.",
    context: "Building and gated-community entry policies can affect pickup. Confirm access, item dimensions and labour needs beforehand; vehicle allocation and arrival time remain subject to live availability and traffic.",
    areas: ["Action Area I", "Action Area II", "Action Area III", "Rajarhat", "Chinar Park", "Eco Park area"],
    services: [["New Town hub", "/new-town"], ["Mini truck", "/kolkata/mini-truck-booking"], ["Packers and movers", "/kolkata/packers-and-movers"], ["Contact support", "/contact"]],
  },
  "kolkata-asansol": {
    canonical: "/routes/kolkata-to-asansol",
    title: "Kolkata to Asansol Goods Transport",
    description: "Plan a dedicated goods movement from Kolkata to Asansol with a route-based estimate and vehicle selection for the declared load.",
    eyebrow: "Intercity route guide",
    h1: "Kolkata to Asansol Goods Transport",
    intro: "Request an intercity vehicle for eligible commercial or household goods between Kolkata and Asansol. Select a vehicle only after checking cargo weight, volume and loading requirements.",
    context: "The road route is roughly 200 km but actual distance and time depend on pickup, drop, traffic and routing. The estimate may include base, distance, time, fuel adjustment, surge, GST, toll, waiting and labour components where applicable; review the live breakdown before payment.",
    areas: ["Kolkata", "Dankuni", "Bardhaman corridor", "Durgapur", "Raniganj", "Asansol"],
    services: [["Intercity from Kolkata", "/intercity/kolkata"], ["14 feet truck", "/kolkata/14-feet-truck-rental"], ["Truck booking", "/kolkata/truck-booking"], ["Enterprise logistics", "/enterprise"]],
  },
}

export default function LocalSeoPage({ pageKey }) {
  const page = pages[pageKey]
  useEffect(() => { window.scrollTo(0, 0) }, [pageKey])

  const faqs = [
    ["How is the transport price calculated?", "The booking flow uses the declared route, vehicle, load and trip conditions. It shows the available fare components before payment; toll, waiting, labour, taxes or other disclosed charges may apply."],
    ["Is a vehicle assigned immediately?", "Not always. An estimate is not a vehicle-allocation guarantee. Assignment and arrival timing depend on a matching partner, the route, traffic and current availability."],
    ["What should I provide before booking?", "Enter accurate pickup and drop details and disclose the goods type, weight, quantity, dimensions, photos when requested and any loading or unloading workforce needs."],
  ]
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      url: `https://gomytruck.com${page.canonical}`,
      provider: { "@id": "https://gomytruck.com/#organization" },
      areaServed: page.areas,
      description: page.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://gomytruck.com/" },
        { "@type": "ListItem", position: 2, name: page.h1, item: `https://gomytruck.com${page.canonical}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question", name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ]

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEOHead title={page.title} description={page.description} canonical={page.canonical} jsonLd={jsonLd} />
      <nav aria-label="Breadcrumb" className="border-b border-slate-200">
        <ol className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 text-sm text-slate-600">
          <li><Link to="/" className="hover:text-brand-700">Home</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-slate-900">{page.h1}</li>
        </ol>
      </nav>

      <header className="bg-slate-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 font-bold uppercase tracking-widest text-sm mb-4">{page.eyebrow}</p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl">{page.h1}</h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book-truck-online" className="min-h-12 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 font-bold flex items-center gap-2">Get a route estimate <ArrowRight size={18} /></Link>
            <a href="tel:+919331488999" className="min-h-12 px-6 py-3 rounded-xl border border-white/40 hover:bg-white/10 font-bold flex items-center gap-2"><Phone size={18} /> Call 93314 88999</a>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900">What to know before you book</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{page.context}</p>
              <p className="mt-5 text-slate-700 leading-7">GoMyTruck is a digital logistics marketplace. Availability, pickup time, service scope and final charges are confirmed in the booking flow and depend on the matching vehicle or workforce partner. Review the goods declaration, cancellation terms and price breakdown before confirming.</p>
            </div>
            <aside className="rounded-2xl bg-brand-50 border border-brand-200 p-6">
              <h2 className="text-xl font-black text-slate-900">Coverage highlights</h2>
              <ul className="mt-4 space-y-3">
                {page.areas.map((area) => <li key={area} className="flex gap-2 text-slate-700"><MapPin size={18} className="text-brand-700 shrink-0 mt-0.5" />{area}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900">Related services</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {page.services.map(([label, to]) => (
                <Link key={to} to={to} className="min-h-16 bg-white border border-slate-200 rounded-xl p-5 font-bold text-slate-900 hover:border-brand-500 flex items-center justify-between">{label}<ArrowRight size={18} className="text-brand-700" /></Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-900 text-center">Booking questions</h2>
            <div className="mt-8 space-y-4">
              {faqs.map(([question, answer]) => <details key={question} className="border border-slate-200 rounded-xl p-5"><summary className="font-bold cursor-pointer">{question}</summary><p className="mt-3 text-slate-700 leading-7">{answer}</p></details>)}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
