import React from "react"
import { Tv, Wheat, Building2, FlaskConical, Armchair, ShoppingCart, Boxes } from "lucide-react"

export default function IndustriesServed() {
  const industries = [
    { name: "Electronics & Appliances", icon: Tv, color: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/40" },
    { name: "F&Vs & Processed Foods", icon: Wheat, color: "from-emerald-400 to-emerald-600", shadow: "shadow-emerald-500/40" },
    { name: "Construction Materials", icon: Building2, color: "from-amber-400 to-orange-500", shadow: "shadow-orange-500/40" },
    { name: "Chemicals & Pharma", icon: FlaskConical, color: "from-purple-500 to-indigo-600", shadow: "shadow-purple-500/40" },
    { name: "Furnitures", icon: Armchair, color: "from-rose-400 to-red-500", shadow: "shadow-red-500/40" },
    { name: "E-Commerce", icon: ShoppingCart, color: "from-brand-400 to-brand-600", shadow: "shadow-brand-500/40" },
    { name: "FMCG", icon: Boxes, color: "from-slate-700 to-slate-900", shadow: "shadow-slate-800/40" },
  ]

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 uppercase tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-slate-500 text-lg">
            With unmatched expertise and experience in handling diverse goods & consignments, we provide customized logistics solutions for all sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-6">
          {industries.map((ind, idx) => (
            <div 
              key={idx}
              className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Premium App-Style Icon Tile */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${ind.color} text-white shadow-lg ${ind.shadow} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 transform-gpu`}>
                <ind.icon className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm leading-snug">{ind.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
