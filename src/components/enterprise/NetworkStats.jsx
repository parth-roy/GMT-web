import React from "react"

export default function NetworkStats() {
  return (
    <section className="w-full bg-slate-900 py-20 relative overflow-hidden">
      {/* Decorative gradient glowing spheres */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-[100px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="text-sm font-bold text-slate-400 mb-12 uppercase tracking-[0.2em]">
          Our Growing Network
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-5xl sm:text-7xl font-display font-black text-white mb-3 drop-shadow-lg">
              10+
            </div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Cities
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-5xl sm:text-7xl font-display font-black text-white mb-3 drop-shadow-lg">
              7.5TH+
            </div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Driver Partners
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
            <div className="text-5xl sm:text-7xl font-display font-black text-white mb-3 drop-shadow-lg">
              1000+
            </div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Enterprise Clients
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
