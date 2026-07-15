import React from "react"
import { Map, Wallet, PieChart, Users } from "lucide-react"

export default function KeyFeatures() {
  const features = [
    {
      title: "Unified Trip Details",
      description: "Check all your goods transportation trip information in the city in one centralized dashboard.",
      icon: Map,
      mockupColor: "bg-blue-500/10 border-blue-500/20",
      mockupElement: (
        <div className="flex flex-col gap-3">
          <div className="h-4 w-3/4 bg-blue-500/20 rounded"></div>
          <div className="h-20 w-full bg-slate-800 rounded-lg border border-slate-700 flex items-center p-4 gap-4">
             <div className="w-10 h-10 rounded-full bg-blue-500/20"></div>
             <div className="flex-1 space-y-2">
               <div className="h-2 w-full bg-slate-700 rounded"></div>
               <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
             </div>
          </div>
          <div className="h-20 w-full bg-slate-800 rounded-lg border border-slate-700"></div>
        </div>
      )
    },
    {
      title: "Digital Payment Records",
      description: "Review the payment and invoice records available for eligible enterprise bookings.",
      icon: Wallet,
      mockupColor: "bg-emerald-500/10 border-emerald-500/20",
      mockupElement: (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
           <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
             <Wallet size={32} className="text-emerald-400" />
           </div>
           <div className="text-lg font-bold text-white">Payment record</div>
           <div className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">Illustrative interface</div>
        </div>
      )
    },
    {
      title: "Complete Clarity and Control",
      description: "Review booking and transaction details; reporting scope depends on the agreed enterprise setup.",
      icon: PieChart,
      mockupColor: "bg-purple-500/10 border-purple-500/20",
      mockupElement: (
        <div className="flex gap-4 h-full items-end justify-center pb-4">
           <div className="w-8 bg-purple-500/40 h-1/3 rounded-t-sm"></div>
           <div className="w-8 bg-purple-500/60 h-2/3 rounded-t-sm"></div>
           <div className="w-8 bg-purple-500 h-full rounded-t-sm"></div>
           <div className="w-8 bg-purple-500/80 h-1/2 rounded-t-sm"></div>
        </div>
      )
    },
    {
      title: "Multi-User Access",
      description: "Account and team access requirements can be assessed during enterprise onboarding.",
      icon: Users,
      mockupColor: "bg-amber-500/10 border-amber-500/20",
      mockupElement: (
        <div className="flex flex-col gap-3">
          {[1,2,3].map((i) => (
            <div key={i} className="h-12 w-full bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-between p-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/20"></div>
                <div className="h-2 w-20 bg-slate-600 rounded"></div>
              </div>
              <div className="h-4 w-8 bg-amber-500/20 rounded-full"></div>
            </div>
          ))}
        </div>
      )
    }
  ]

  return (
    <section className="w-full bg-slate-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Key Features We Offer
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col sm:flex-row gap-8 items-center bg-slate-800/50 rounded-3xl p-6 border border-slate-700/50 hover:bg-slate-800 transition-colors">
              
              {/* Text Content */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex p-3 rounded-xl bg-slate-800 border border-slate-700 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* UI Mockup Representation */}
              <div className={`w-full sm:w-48 h-48 rounded-2xl border ${feature.mockupColor} p-4 shrink-0 overflow-hidden relative shadow-inner`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <div className="relative z-10 h-full w-full">
                  {feature.mockupElement}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
