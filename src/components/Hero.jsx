import React, { useState } from "react"
import { MapPin, ArrowRight } from "lucide-react"

export default function Hero({ 
  selectedService, 
  setSelectedService, 
  onOpenEstimate,
  onSelectVehicle
}) {
  const services = [
    {
      id: "truck",
      name: "Truck",
      imgSrc: "/navy_truck-256.webp",
    },
    {
      id: "bike",
      name: "Two Wheeler",
      imgSrc: "/navy_bike-256.webp",
    },
    {
      id: "movers",
      name: "Packers & Movers",
      imgSrc: "/navy_movers-256.webp",
    }
  ]

  return (
    <section className="relative min-h-[85vh] pt-24 pb-24 sm:pb-32 flex flex-col justify-end items-center bg-slate-900 overflow-visible mb-32">
      {/* Standard Image Background with dark overlay for white text contrast */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet="/hero-bg-640.webp 640w, /hero-bg-960.webp 960w, /hero-bg-1600.webp 1600w"
            sizes="100vw"
          />
          <img
            src="/hero-bg-960.webp"
            alt="GoMyTruck branded delivery rider, warehouse handler and mini truck"
            width="1600"
            height="894"
            className="h-full w-full object-cover object-center"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-lg">
          Online Truck Booking &amp; Goods Transport in Kolkata
        </h1>

        <p className="mt-5 text-2xl sm:text-3xl font-black text-brand-200" lang="hi-Latn">Saaman aapka, transport hamara</p>
        <p className="text-lg sm:text-xl text-slate-100 font-medium leading-relaxed mt-8 max-w-2xl mx-auto drop-shadow-md">
          Enter your route and load details, compare suitable commercial vehicles, and review the current fare estimate before confirming. Assignment and arrival time depend on partner availability and traffic.
        </p>
      </div>

      {/* Floating Services Bar (Porter style) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-4 z-20 flex justify-center">
        <div className="bg-brand-50 rounded-xl shadow-2xl p-6 sm:p-8 sm:px-12 flex flex-col gap-6 border border-slate-100 w-full sm:w-fit">
          
          {/* Top City Selector */}
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm px-2 w-fit">
            <MapPin size={20} className="text-[#001f3f]" />
            <span>City: Kolkata</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 lg:gap-16">
            {/* Services Tabs (Large Square Cards) */}
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto justify-start">
              {services.map((srv) => {
                const isActive = selectedService === srv.id
                return (
                  <button
                    key={srv.id}
                    onClick={() => onSelectVehicle(srv.id)}
                    className={`relative flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-2xl transition-all duration-500 flex-shrink-0 group overflow-hidden ${
                      isActive
                        ? "bg-brand-50 border border-brand-200 shadow-[0_0_20px_rgba(0,31,63,0.3)]"
                        : "bg-slate-50 border border-transparent hover:bg-brand-50 hover:shadow-[0_0_25px_rgba(0,31,63,0.2)]"
                    }`}
                  >
                    <img 
                      src={srv.imgSrc} 
                      alt={srv.name} 
                      width="256"
                      height="256"
                      loading="lazy"
                      decoding="async"
                      className={`w-20 h-20 sm:w-24 sm:h-24 object-contain mix-blend-multiply contrast-[1.20] brightness-[1.10] transition-all duration-500 opacity-85 group-hover:scale-105 group-hover:-translate-y-4 group-hover:opacity-100`} 
                    />
                    <span className="absolute bottom-2 font-bold text-[11px] sm:text-xs text-center px-1 transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-brand-700">
                      {srv.name}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Floating Arrow Button */}
            <button
              onClick={onOpenEstimate}
              className="group flex flex-col items-center justify-center gap-4 shrink-0 sm:pr-4 cursor-pointer outline-none"
            >
              <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/30 transition-transform duration-500 group-hover:scale-110">
                {/* Wave Ping Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-brand-600 opacity-0 group-hover:animate-ping transition-opacity duration-300"></div>
                <ArrowRight size={40} className="transition-transform duration-500 group-hover:translate-x-2 relative z-10" />
              </div>
              <span className="font-display font-extrabold text-base sm:text-lg text-slate-800 group-hover:text-brand-600 transition-colors tracking-tight">
                Get an Estimate
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
