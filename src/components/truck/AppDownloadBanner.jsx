import React from "react"
import { Smartphone } from "lucide-react"

export default function AppDownloadBanner() {
  return (
    <section className="bg-brand-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
              Think Logistics, Think GoMyTruck!
            </h2>
            <p className="text-brand-100 text-lg md:text-xl max-w-2xl font-medium">
              Use the GoMyTruck app to submit bookings and follow supported trip-status and tracking updates for active orders.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.gomytruck.customer&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors"
              >
                <Smartphone size={20} />
                Download Android App
              </a>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex-shrink-0 flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
            <div className="bg-white p-3 rounded-xl shadow-lg mb-3 w-[140px] h-[140px] flex items-center justify-center">
              <img src="/app-qr.png" alt="Download GoMyTruck App QR Code" className="w-[120px] h-[120px] object-contain" />
            </div>
            <p className="text-white font-bold tracking-wide text-sm uppercase">Scan to download</p>
          </div>

        </div>
      </div>
    </section>
  )
}
