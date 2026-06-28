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
              Get the GoMyTruck mobile app to start booking your orders instantly and track them in real-time!
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
              <button className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
                <Smartphone size={20} />
                Download Android App
              </button>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex-shrink-0 flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
            <div className="bg-white p-3 rounded-xl shadow-lg mb-3">
              {/* Dummy QR Code SVG */}
              <svg width="120" height="120" viewBox="0 0 100 100" fill="black" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100" height="100" fill="white"/>
                <rect x="5" y="5" width="22" height="22" fill="black"/>
                <rect x="9" y="9" width="14" height="14" fill="white"/>
                <rect x="12" y="12" width="8" height="8" fill="black"/>
                <rect x="73" y="5" width="22" height="22" fill="black"/>
                <rect x="77" y="9" width="14" height="14" fill="white"/>
                <rect x="80" y="12" width="8" height="8" fill="black"/>
                <rect x="5" y="73" width="22" height="22" fill="black"/>
                <rect x="9" y="77" width="14" height="14" fill="white"/>
                <rect x="12" y="80" width="8" height="8" fill="black"/>
                <rect x="40" y="40" width="25" height="25" fill="black"/>
                <rect x="70" y="45" width="10" height="15" fill="black"/>
                <rect x="40" y="75" width="15" height="15" fill="black"/>
                <rect x="80" y="75" width="10" height="10" fill="black"/>
                <rect x="5" y="40" width="15" height="10" fill="black"/>
                <rect x="25" y="50" width="10" height="15" fill="black"/>
                <rect x="45" y="10" width="15" height="10" fill="black"/>
                <rect x="65" y="85" width="10" height="10" fill="black"/>
                <rect x="25" y="30" width="5" height="5" fill="black"/>
                <rect x="60" y="25" width="5" height="5" fill="black"/>
                <rect x="85" y="35" width="10" height="5" fill="black"/>
              </svg>
            </div>
            <p className="text-white font-bold tracking-wide text-sm uppercase">Scan to download</p>
          </div>

        </div>
      </div>
    </section>
  )
}
