import React from "react"
import { Link } from "react-router-dom"

const links = [
  { label: "Online Truck Booking",         href: "/truck",          title: "Book truck online – GoMyTruck" },
  { label: "Mini Truck Booking Near Me",   href: "/truck",          title: "Mini truck booking near you" },
  { label: "Part Load Transport (PTL)",    href: "/services",       title: "Affordable part load transport services" },
  { label: "Full Truck Load (FTL)",        href: "/services",       title: "Request full-truck-load transport" },
  { label: "B2B Enterprise Logistics",     href: "/enterprise",     title: "Corporate & B2B logistics solutions" },
  { label: "Packers & Movers",             href: "/packers-and-movers",               title: "Packers and movers service – GoMyTruck" },
  { label: "Two-Wheeler Courier",          href: "/bike",           title: "Two-wheeler goods transport and courier" },
  { label: "Book Tata Ace Online",         href: "/truck",          title: "Tata Ace on rent – per km pricing" },
  { label: "Find Return Load Online",      href: "/driver-partner", title: "Truck owner? Find return loads and earn more" },
  { label: "Attach Truck to Company",      href: "/driver-partner", title: "Register your vehicle with GoMyTruck" },
]

export default function InternalLinks() {
  return (
    <section className="bg-white border-t border-slate-100 py-10" aria-label="Quick navigation links">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-base font-bold text-slate-700 mb-5 text-center">
          Explore All Truck &amp; Transport Services
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <Link 
                to={link.href}
                title={link.title}
                className="text-slate-500 hover:text-brand-600 font-medium text-sm transition-colors border-b border-transparent hover:border-brand-600 pb-0.5"
              >
                {link.label}
              </Link>
              {index < links.length - 1 && (
                <span className="hidden md:inline text-slate-200">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
