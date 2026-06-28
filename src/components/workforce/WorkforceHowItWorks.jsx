import React from "react"
import { ClipboardList, UserCheck, Banknote } from "lucide-react"

export default function WorkforceHowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: "1. Register Online",
      desc: "Fill out the simple form above with your basic details and role preference."
    },
    {
      icon: UserCheck,
      title: "2. Document Verification",
      desc: "Our team will call you to verify your Aadhaar, PAN, and Bank details."
    },
    {
      icon: Banknote,
      title: "3. Start Earning",
      desc: "Get onboarded onto the GoMyTruck Workforce app and start receiving daily jobs."
    }
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            How to Join
          </h2>
          <p className="text-lg text-slate-600">
            It takes less than 24 hours to go from registration to your first job.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200" style={{ left: '16.6%', right: '16.6%' }}>
            <div className="absolute inset-0 bg-blue-500 origin-left scale-x-0 transition-transform duration-1000 group-hover:scale-x-100"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-24 h-24 mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Icon size={40} className="text-blue-600 relative z-10" strokeWidth={1.5} />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
