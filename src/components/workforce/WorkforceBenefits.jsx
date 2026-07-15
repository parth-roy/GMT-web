import React from "react"
import { DollarSign, Clock, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react"

const benefitsData = [
  {
    icon: DollarSign,
    title: "Terms Shown Per Assignment",
    description: "Review the role, expected work, and stated earning terms before accepting an available assignment.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    icon: Clock,
    title: "Choose Available Work",
    description: "Review assignments that appear for your role and area. Availability is not guaranteed and can change with local demand.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: ShieldCheck,
    title: "Documented Onboarding",
    description: "Our team reviews identity and role documents and explains the current onboarding requirements before activation.",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
  },
  {
    icon: TrendingUp,
    title: "Assignment History",
    description: "Use the workforce app to view active work and the information recorded for completed assignments.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: HeartHandshake,
    title: "Operational Support",
    description: "Use the support options provided in the app if you need help with an active assignment.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  }
]

export default function WorkforceBenefits() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Why Join Our Workforce?
          </h2>
          <p className="text-lg text-slate-600">
            Understand the process, review current opportunities, and decide whether an available assignment fits.
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
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="text-2xl font-display font-extrabold mb-3 relative z-10">Ready to start?</h3>
            <p className="text-slate-400 text-sm mb-6 relative z-10">
              Complete the registration form above. The team will review it and contact you when the relevant onboarding capacity is available.
            </p>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-colors relative z-10 w-max">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
