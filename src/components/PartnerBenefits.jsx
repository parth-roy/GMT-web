import React from "react"
import { DollarSign, Route, ShieldCheck, Map, Smartphone } from "lucide-react"

const benefitsData = [
  {
    icon: DollarSign,
    title: "Highest Earnings",
    description: "Earn up to ₹45,000+ per month. We charge the lowest marketplace commission per trip, maximizing your take-home pay.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Route,
    title: "Zero Empty Returns",
    description: "Our smart load-matching algorithm ensures you get return loads, minimizing idle time and empty kilometers.",
    color: "text-brand-600",
    bgColor: "bg-brand-100",
  },
  {
    icon: ShieldCheck,
    title: "Free Family Insurance",
    description: "Your safety is our priority. We provide free accidental and medical insurance worth ₹2,50,000 for you and your family.",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
  {
    icon: Map,
    title: "Be Your Own Boss",
    description: "Drive according to your own comfort. Log in and log out anytime. No fixed shifts, complete freedom over your schedule.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: Smartphone,
    title: "Easy to Use App",
    description: "View trips, navigate with GPS, and track your daily earnings all within our simple, driver-friendly mobile app.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  }
]

export default function PartnerBenefits() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Why Drive With GoMyTruck?
          </h2>
          <p className="text-lg text-slate-600">
            We provide our partners with consistent income, maximum flexibility, and absolute peace of mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div 
                key={idx} 
                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${benefit.bgColor} ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            )
          })}

          {/* Call out card */}
          <div className="bg-slate-900 rounded-[2rem] p-8 shadow-xl shadow-slate-900/20 text-white flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-2xl font-display font-extrabold mb-3 relative z-10">Ready to start?</h3>
            <p className="text-slate-400 text-sm mb-6 relative z-10">
              Complete the registration form above to get a call back within 2 hours.
            </p>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-6 rounded-xl transition-colors relative z-10 w-max">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
