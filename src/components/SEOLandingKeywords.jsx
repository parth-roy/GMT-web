import React from "react"
import { Link } from "react-router-dom"

/**
 * SEOLandingKeywords
 *
 * Renders all 4 keyword tiers (Tier 1–4), near-me keywords, West Bengal /
 * Barrackpore local keywords, and the 10 high-priority landing-page keyword
 * anchors in semantic HTML5 sections.
 *
 * This component sits below the fold on the Home page.  It is VISIBLE to
 * search engines and provides natural keyword density across every major
 * cluster from the SEO strategy.  The design is kept subtle (small text,
 * light background) so it doesn't disrupt the UX.
 */

const tier1 = [
  { kw: "Online Truck Booking",         href: "/truck" },
  { kw: "Book Truck Online",            href: "/truck" },
  { kw: "Hire Truck for Goods",         href: "/truck" },
  { kw: "Truck Booking Near Me",        href: "/truck" },
  { kw: "Transport Service Near Me",    href: "/services" },
  { kw: "Goods Transport Services",     href: "/services" },
  { kw: "Mini Truck Booking Near Me",   href: "/truck" },
  { kw: "Tata Ace on Rent",             href: "/truck" },
  { kw: "Tata Ace Rent Per Km",         href: "/truck" },
  { kw: "Pickup Truck Booking",         href: "/truck" },
  { kw: "Pickup Truck Near Me",         href: "/truck" },
  { kw: "Mini Truck Transport Near Me", href: "/truck" },
  { kw: "Commercial Truck Rental",      href: "/truck" },
  { kw: "Full Truck Load Services",     href: "/services" },
  { kw: "FTL Transport Services",       href: "/services" },
  { kw: "Part Load Transport",          href: "/services" },
  { kw: "PTL Logistics",                href: "/services" },
  { kw: "Intercity Transport Booking",  href: "/truck" },
  { kw: "Goods Carrier Near Me",        href: "/truck" },
  { kw: "Transport Company Near Me",    href: "/services" },
]

const tier2 = [
  { kw: "Urgent Truck Booking Near Me",   href: "/truck" },
  { kw: "Same Day Truck Transport",       href: "/truck" },
  { kw: "Instant Truck Booking",         href: "/truck" },
  { kw: "Book Tata Ace Online",           href: "/truck" },
  { kw: "Mini Truck on Hire Nearby",      href: "/truck" },
  { kw: "Local Goods Transport Near Me",  href: "/truck" },
  { kw: "Hire Pickup Truck Today",        href: "/truck" },
  { kw: "Truck Rental Near Me",           href: "/truck" },
  { kw: "Online Lorry Booking",           href: "/truck" },
  { kw: "Nearest Transport Agency",       href: "/services" },
  { kw: "Local Transport Service Near Me",href: "/services" },
  { kw: "Affordable Goods Transport",     href: "/truck" },
  { kw: "Cheap Truck Booking",            href: "/truck" },
  { kw: "Truck Booking App India",        href: "/truck" },
]

const tier3 = [
  { kw: "B2B Logistics Services",         href: "/enterprise" },
  { kw: "FMCG Transport Service",         href: "/enterprise" },
  { kw: "Industrial Goods Transport",     href: "/enterprise" },
  { kw: "Warehouse Transport Services",   href: "/enterprise" },
  { kw: "Corporate Truck Rental",         href: "/enterprise" },
  { kw: "Retail Distribution Logistics",  href: "/enterprise" },
  { kw: "Heavy Machinery Transport",      href: "/enterprise" },
  { kw: "Factory Goods Transport",        href: "/enterprise" },
  { kw: "Commercial Freight Broker",      href: "/enterprise" },
  { kw: "Enterprise Logistics Solutions", href: "/enterprise" },
  { kw: "Contract Logistics Companies",   href: "/enterprise" },
  { kw: "Logistics Vendor Management",    href: "/enterprise" },
  { kw: "Freight Forwarding Services",    href: "/enterprise" },
  { kw: "Supply Chain Logistics",         href: "/enterprise" },
  { kw: "Dedicated Fleet Services",       href: "/enterprise" },
]

const tier4 = [
  { kw: "Find Return Load Online",        href: "/driver-partner" },
  { kw: "Return Load Booking",            href: "/driver-partner" },
  { kw: "Return Load App",                href: "/driver-partner" },
  { kw: "Load Board India",               href: "/driver-partner" },
  { kw: "Truck Load Board India",         href: "/driver-partner" },
  { kw: "Attach Truck to Company",        href: "/driver-partner" },
  { kw: "Attach Commercial Vehicle",      href: "/driver-partner" },
  { kw: "Truck Owner Registration",       href: "/driver-partner" },
  { kw: "Fleet Owner Logistics Platform", href: "/driver-partner" },
  { kw: "Find Freight for Truck",         href: "/driver-partner" },
  { kw: "Lorry Load Matching",            href: "/driver-partner" },
  { kw: "Online Load Board",              href: "/driver-partner" },
  { kw: "Zero Commission Load Booking",   href: "/driver-partner" },
  { kw: "Empty Truck Load Matching",      href: "/driver-partner" },
  { kw: "Transport Business Tie Up",      href: "/driver-partner" },
]

const nearMeKws = [
  { kw: "Truck Booking Near Me",          href: "/truck" },
  { kw: "Mini Truck Booking Near Me",     href: "/truck" },
  { kw: "Pickup Truck Near Me",           href: "/truck" },
  { kw: "Transport Service Near Me",      href: "/services" },
  { kw: "Goods Carrier Near Me",          href: "/truck" },
  { kw: "Tata Ace on Rent Near Me",       href: "/truck" },
  { kw: "Local Truck Stand Nearby",       href: "/truck" },
  { kw: "Nearest Transport Agency",       href: "/services" },
  { kw: "Transport Contractors Near Me",  href: "/services" },
  { kw: "Truck Rental Near Me",           href: "/truck" },
]

const wbKws = [
  { kw: "Truck Booking Barrackpore",      href: "/truck" },
  { kw: "Transport Service Barrackpore",  href: "/services" },
  { kw: "Transporters in Barrackpore",    href: "/services" },
  { kw: "Mini Truck Rent Barrackpore",    href: "/truck" },
  { kw: "Goods Transport Barrackpore",    href: "/truck" },
  { kw: "Truck Booking Kolkata",          href: "/truck" },
  { kw: "Truck Booking West Bengal",      href: "/truck" },
  { kw: "FMCG Transport West Bengal",     href: "/enterprise" },
  { kw: "Part Load Transport Kolkata",    href: "/services" },
  { kw: "Kolkata Transport Company",      href: "/services" },
]

const top10LandingPages = [
  { kw: "Online Truck Booking",           href: "/truck",          desc: "Book truck online instantly — transparent pricing, verified drivers." },
  { kw: "Mini Truck Booking Near Me",     href: "/truck",          desc: "Find mini truck near you for local goods transport in your city." },
  { kw: "Tata Ace on Rent",               href: "/truck",          desc: "Affordable Tata Ace rental with per-km pricing & same-day availability." },
  { kw: "Part Load Transport",            href: "/services",       desc: "Share truck space, pay for only what you need — PTL logistics made easy." },
  { kw: "Full Truck Load Services",       href: "/services",       desc: "Exclusive FTL transport for bulk shipments across India." },
  { kw: "Goods Transport Services",       href: "/services",       desc: "End-to-end goods transport solutions for businesses & individuals." },
  { kw: "Transport Service Near Me",      href: "/services",       desc: "Local & intercity transport service near your location." },
  { kw: "Find Return Load Online",        href: "/driver-partner", desc: "Truck owners: find return loads and maximise your earnings." },
  { kw: "Attach Truck to Company",        href: "/driver-partner", desc: "Register your vehicle and start earning with India's growing freight network." },
  { kw: "B2B Logistics Services",         href: "/enterprise",     desc: "Corporate truck rental, FMCG distribution & dedicated fleet contracts." },
]

function KeywordList({ items, label }) {
  return (
    <div>
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{label}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.href}
            title={item.kw}
            className="px-3 py-1 bg-white border border-slate-200 text-slate-600 hover:text-brand-700 hover:border-brand-300 text-xs font-medium rounded-full transition-colors shadow-sm"
          >
            {item.kw}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function SEOLandingKeywords() {
  return (
    <section
      className="bg-slate-100 border-t border-slate-200 py-16"
      aria-label="Logistics Services & Popular Searches"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ── Top 10 High-Priority Landing Pages ── */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Popular Transport Services on GoMyTruck
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            India's leading online truck booking platform. Book mini truck, Tata Ace, FTL & part load transport — instantly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {top10LandingPages.map((item, i) => (
              <Link
                key={i}
                to={item.href}
                title={item.kw}
                className="block bg-white rounded-xl p-4 border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <span className="font-semibold text-slate-800 group-hover:text-brand-700 text-sm block mb-1">
                  {item.kw}
                </span>
                <span className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
