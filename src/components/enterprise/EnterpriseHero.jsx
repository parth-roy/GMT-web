import React, { useState, useEffect } from "react"
import { User, Briefcase, Phone, Mail } from "lucide-react"

const HERO_IMAGES = [
  "/enterprise_hero_01.jpg",
  "/enterprise_hero_02.jpg",
  "/enterprise_hero_03.jpg",
  "/enterprise_hero_04.jpg",
  "/enterprise_hero_05.jpg",
  "/enterprise_hero_06.jpg",
  "/enterprise_hero_07.jpg",
  "/enterprise_hero_08.jpg",
]

export default function EnterpriseHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden py-16 sm:py-24 lg:py-32">

      {/* Infinite Background Image Slider */}
      {HERO_IMAGES.map((imgSrc, index) => (
        <div
          key={imgSrc}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={imgSrc}
            alt="Enterprise Logistics Background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-slate-900/50 pointer-events-none"></div>

      {/* Background Subtle Gradient/Texture */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-brand-500 blur-3xl opacity-20"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-emerald-500 blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left space-y-6">
            {/* Tag/Badge */}
            <div className="inline-block bg-slate-800/80 border border-slate-600 rounded-full px-4 py-1.5 text-xs font-bold text-white uppercase tracking-widest shadow-sm">
              GOMYTRUCk ENTERPRISE
            </div>

            {/* Main Headline (H1) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight max-w-2xl">
              Move More, Manage Less: Enterprise Logistics at Speed
            </h1>

            {/* Subheadline (H2 / Highlights) */}
            <h2 className="text-lg sm:text-xl font-bold text-amber-400 max-w-2xl leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Advanced Fleet Intelligence </span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span>Pan-India Network </span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span>Faster Turnarounds</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span>Zero Downtime</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span>Growth-Ready Platform</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span>Dedicated Support</span>
            </h2>
          </div>

          {/* Right Column: Lead Generation Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
            <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10 relative overflow-hidden">
              {/* Decorative glare */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
                Fill Out For More Details
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-brand-400 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter your Name*" 
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-800/50 focus:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-white placeholder-slate-400 font-medium"
                  />
                </div>

                {/* Company Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-slate-400 group-focus-within:text-brand-400 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter your Company Name*" 
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-800/50 focus:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-white placeholder-slate-400 font-medium"
                  />
                </div>

                {/* Phone Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400 group-focus-within:text-brand-400 transition-colors" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Enter your Phone Number*" 
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-800/50 focus:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-white placeholder-slate-400 font-medium"
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-brand-400 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter your Email ID" 
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-800/50 focus:bg-slate-800/80 focus:outline-none focus:ring-1 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-white placeholder-slate-400 font-medium"
                  />
                </div>

                {/* CTA Button */}
                <button 
                  type="submit" 
                  className="w-full mt-6 bg-brand-500 hover:bg-brand-600 text-white font-bold text-lg py-3.5 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/50 transform hover:-translate-y-0.5"
                >
                  Get in Touch
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
