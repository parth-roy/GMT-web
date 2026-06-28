import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Truck, ArrowRight, CheckCircle, X, Globe, Package, Shield } from "lucide-react"
import SEOHead from "../seo/SEOHead"

export default function IntercityTransportPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Intercity Transport Services",
        "provider": {
          "@type": "Organization",
          "name": "GoMyTruck",
          "url": "https://vahanlogistics.in"
        },
        "description": "Book intercity transport from Kolkata to any city in India. Full truck load (FTL), part load (PTL) and mini truck available for city-to-city freight.",
        "areaServed": "India",
        "serviceType": "Intercity Goods Transport"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vahanlogistics.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Intercity Transport Services",
            "item": "https://vahanlogistics.in/intercity-transport"
          }
        ]
      }
    ]
  }

  const routes = [
    { from: "Kolkata", to: "Delhi" },
    { from: "Kolkata", to: "Mumbai" },
    { from: "Kolkata", to: "Bangalore" },
    { from: "Kolkata", to: "Hyderabad" },
    { from: "Kolkata", to: "Chennai" },
    { from: "Kolkata", to: "Durgapur" },
    { from: "Kolkata", to: "Siliguri" },
    { from: "Kolkata", to: "Bhubaneswar" },
    { from: "Kolkata", to: "Patna" },
    { from: "Kolkata", to: "Guwahati" },
  ]

  const serviceTypes = [
    {
      title: "Full Truck Load (FTL)",
      icon: <Truck size={32} className="text-brand-500 mb-4" />,
      description: "Entire truck for one shipment. Best for large quantities and dedicated express delivery without intermediate stops.",
    },
    {
      title: "Part Truck Load (PTL)",
      icon: <Package size={32} className="text-brand-500 mb-4" />,
      description: "Share space and cost. Ideal for smaller loads that don't require a full truck, making it highly cost-effective.",
    },
    {
      title: "Mini Truck Intercity",
      icon: <Truck size={32} className="text-brand-500 mb-4" />,
      description: "For medium loads going to nearby cities. Perfect for shifting mid-sized inventory or partial house relocations.",
    }
  ]

  const benefits = [
    "GPS tracking throughout journey",
    "Door-to-door pickup & delivery",
    "Verified long-haul drivers",
    "Competitive per-km rates",
    "Insurance available for cargo"
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-[72px] sm:pt-[88px] font-sans">
      <SEOHead 
        title="Intercity Transport Services | City-to-City Truck Booking & Freight"
        description="Book intercity transport from Kolkata to any city in India. Full truck load (FTL), part load (PTL) and mini truck available for city-to-city freight. Transparent rates, door-to-door delivery."
        canonicalUrl="/intercity-transport"
        keywords="intercity transport, city to city transport, outstation truck booking, Kolkata to Delhi truck, FTL transport services, PTL logistics, intercity freight, outstation goods transport, long distance truck booking, door to door delivery India"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
           <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-brand-300 mb-6 backdrop-blur-sm">
            <Globe size={16} /> Pan-India Coverage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Intercity Transport — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">Kolkata to Any City</span> in India
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Full truck load (FTL), part load (PTL), and mini truck booking for city-to-city freight. Transparent rates and door-to-door delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-truck-online" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2">
              <Truck size={20} /> Book Truck Now
            </Link>
            <Link to="/enterprise" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
              Enterprise Logistics
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Intercity Routes</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We cover 500+ cities across India. Here are some of our most frequently requested routes from Kolkata.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {routes.map((route, idx) => (
              <div key={idx} className="bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-200 rounded-xl p-4 flex items-center justify-between group transition-colors cursor-default">
                <span className="font-semibold text-slate-700 group-hover:text-brand-700">{route.from}</span>
                <ArrowRight size={18} className="text-slate-400 group-hover:text-brand-500" />
                <span className="font-semibold text-slate-700 group-hover:text-brand-700">{route.to}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                {service.icon}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GoMyTruck & Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose GoMyTruck for Intercity?</h2>
              <p className="text-slate-600 mb-8 text-lg">Shipping goods across states requires trust. We ensure your cargo is safe, tracked, and delivered on time.</p>
              
              <ul className="space-y-5">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-slate-800">
                    <CheckCircle size={24} className="text-green-500 shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 px-6 py-4">
                <h3 className="text-xl font-bold text-white">GoMyTruck vs Traditional Brokers</h3>
              </div>
              <div className="p-0">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 font-semibold text-slate-700">Feature</th>
                      <th className="px-6 py-4 font-bold text-brand-600 bg-brand-50/50">GoMyTruck</th>
                      <th className="px-6 py-4 font-semibold text-slate-500">Traditional Broker</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 text-slate-700 font-medium">Online Booking</td>
                      <td className="px-6 py-4 bg-brand-50/50"><CheckCircle size={20} className="text-green-500" /></td>
                      <td className="px-6 py-4"><X size={20} className="text-red-400" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700 font-medium">Live GPS Tracking</td>
                      <td className="px-6 py-4 bg-brand-50/50"><CheckCircle size={20} className="text-green-500" /></td>
                      <td className="px-6 py-4"><X size={20} className="text-red-400" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700 font-medium">Transparent Pricing</td>
                      <td className="px-6 py-4 bg-brand-50/50"><CheckCircle size={20} className="text-green-500" /></td>
                      <td className="px-6 py-4"><X size={20} className="text-red-400" /></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700 font-medium">Verified Drivers</td>
                      <td className="px-6 py-4 bg-brand-50/50"><CheckCircle size={20} className="text-green-500" /></td>
                      <td className="px-6 py-4"><span className="text-slate-400 text-sm">Sometimes</span></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700 font-medium">Insurance Options</td>
                      <td className="px-6 py-4 bg-brand-50/50"><CheckCircle size={20} className="text-green-500" /></td>
                      <td className="px-6 py-4"><X size={20} className="text-red-400" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Content & FAQs */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2 className="text-3xl font-bold text-slate-900 mt-0 mb-6 text-center">Seamless Intercity Transport from Kolkata</h2>
          <p>
            When your business operations expand beyond city limits, you need a logistics partner that can keep up with long-haul demands. <strong>GoMyTruck</strong> provides fast, secure, and highly reliable <strong>intercity transport from Kolkata</strong> to destinations across West Bengal and the rest of India. Whether you are shipping manufacturing equipment to Durgapur, textiles to Asansol, or bulk agricultural products to Siliguri, our extensive fleet is ready to deploy.
          </p>
          <p>
            Unlike local shifting, intercity transport requires meticulous planning, robust vehicles, and experienced drivers who can handle highway driving and state borders. We leverage advanced tech to eliminate the traditional inefficiencies of long-haul logistics. With GoMyTruck, you get instant freight quotes, dedicated vehicle allocation, and end-to-end GPS tracking, ensuring that your cargo crosses state lines without unnecessary delays or hidden broker fees.
          </p>
          
          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Our Intercity Transport Solutions</h3>
          <p>
            We understand that different shipments require different logistical approaches. That is why we offer flexible options tailored to your specific cargo volume and budget:
          </p>
          <ul className="space-y-2 mb-8">
            <li><strong>Full Truck Load (FTL):</strong> The best choice for large-volume shipments. You book the entire truck, meaning your goods travel directly from your pickup location in Kolkata to the final destination with no intermediate stops. FTL guarantees the fastest transit times and maximum security for high-value cargo.</li>
            <li><strong>Part Truck Load (PTL):</strong> If your shipment isn't large enough to warrant an entire truck, PTL is the most cost-effective solution. You share the truck space with other shippers and only pay for the volume your goods occupy. While transit times may be slightly longer due to multiple drops, it drastically reduces shipping costs for SMEs.</li>
            <li><strong>Express Intercity Mini Trucks:</strong> For urgent, smaller consignments (like emergency spare parts, medical equipment, or perishable goods) traveling to nearby cities like Haldia or Kharagpur, you can book an express <Link to="/mini-truck-booking-kolkata" className="text-brand-600 font-semibold hover:underline">mini truck</Link> or <Link to="/pickup-truck-booking-kolkata" className="text-brand-600 font-semibold hover:underline">pickup truck</Link> for direct, same-day delivery.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Why Businesses Trust Our Outstation Transport</h3>
          <p>
            Long-haul logistics has traditionally been an opaque industry. We are changing that by offering complete transparency and reliability:
          </p>
          <ol className="space-y-4 mb-8">
            <li><strong>Verified Highway Fleet:</strong> We don't just use any truck. Our intercity fleet consists of well-maintained 14-ft, 17-ft, 19-ft, and multi-axle trucks driven by experienced professionals who are well-versed in highway safety and toll protocols.</li>
            <li><strong>Real-Time Transit Updates:</strong> Once your goods leave Kolkata, you won't be left guessing. Our live GPS tracking allows you to monitor the truck's progress across highways, providing accurate ETAs for your receiving teams.</li>
            <li><strong>Transit Insurance:</strong> Highway transport carries inherent risks. We offer comprehensive transit insurance options to protect your valuable commercial shipments against unforeseen incidents during the journey.</li>
            <li><strong>Digital Documentation:</strong> From e-way bills to GST-compliant digital invoicing and proof of delivery (POD), all documentation is handled digitally, simplifying your accounting and compliance processes.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Frequently Asked Questions (FAQs)</h3>
          <div className="space-y-4 not-prose mt-6">
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Which cities do you provide transport services to from Kolkata?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We provide transport across West Bengal (including Asansol, Durgapur, Siliguri, Haldia) and pan-India routes connecting Kolkata to major metro cities like Delhi, Mumbai, Chennai, and Bangalore.
              </p>
            </details>
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Are toll charges and state taxes included in the booking fare?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our base transport fare is transparent. However, toll taxes, state border entry taxes, and loading/unloading labor charges are usually extra and paid at actuals, unless specifically requested to be bundled into an all-inclusive enterprise quote.
              </p>
            </details>
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Do you transport household goods intercity?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes, we do. For individuals relocating from Kolkata to another city, we provide trucks for household shifting. We also partner with professional packers and movers to ensure your furniture and appliances are securely packed for the long journey.
              </p>
            </details>
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                How far in advance should I book an intercity truck?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                While we can often arrange FTL vehicles on the same day, we highly recommend booking at least 24 to 48 hours in advance for intercity routes to ensure the best vehicle availability and optimal pricing.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-600 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Ship Intercity?</h2>
        <p className="text-brand-100 mb-8 max-w-2xl mx-auto text-lg">Book online for immediate dispatch or contact our enterprise team for regular freight requirements.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/book-truck-online" className="bg-white text-brand-700 hover:bg-slate-50 px-8 py-3.5 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
            Book Now <ArrowRight size={20} />
          </Link>
          <Link to="/enterprise" className="bg-brand-700 hover:bg-brand-800 text-white border border-brand-500 px-8 py-3.5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
            <Shield size={20} /> Enterprise Solutions
          </Link>
        </div>
      </section>

    </div>
  )
}
