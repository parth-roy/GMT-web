import React from "react"
import { MessageCircle, Truck } from "lucide-react"
import { Link } from "react-router-dom"
import { trackWhatsAppClick } from "../utils/analytics"

export default function GlobalFABs() {
  const whatsappNumber = "919331488999"
  const whatsappMessage = encodeURIComponent("Hi GoMyTruck, I want to book a truck.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-4 items-end pointer-events-none">
      
      {/* WhatsApp FAB */}
      <a
        href={whatsappLink}
        onClick={() => trackWhatsAppClick("Global FAB")}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-[#25D366] hover:bg-[#1ebe57] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
        {/* Tooltip for desktop */}
        <span className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Book a Truck FAB */}
      <Link
        to="/truck"
        className="pointer-events-auto bg-brand-600 hover:bg-brand-700 text-white p-3.5 sm:p-4 rounded-full shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Book a Truck"
        title="Book a Truck"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-75"></div>
        <Truck size={28} className="relative z-10" />
        {/* Tooltip for desktop */}
        <span className="absolute right-full mr-4 bg-brand-700 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
          Book a Truck
        </span>
      </Link>

    </div>
  )
}
