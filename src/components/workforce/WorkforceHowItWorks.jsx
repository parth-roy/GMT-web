import React from "react"
import { ClipboardList, UserCheck, Banknote, CheckCircle2 } from "lucide-react"
import { useAuth } from "../../context/AuthContext"

export default function WorkforceHowItWorks() {
  const { user } = useAuth()
  
  const isRegistered = !!user
  const isDocVerified = user?.worker?.isDocVerified === true

  const steps = [
    {
      icon: ClipboardList,
      title: "1. Register Online",
      desc: "Fill out the simple form above with your basic details and role preference.",
      isCompleted: isRegistered,
      isActive: !isRegistered
    },
    {
      icon: UserCheck,
      title: "2. Document Verification",
      desc: "Our team will call you to verify your Aadhaar, PAN, and Bank details.",
      isCompleted: isDocVerified,
      isActive: isRegistered && !isDocVerified
    },
    {
      icon: Banknote,
      title: "3. Review Opportunities",
      desc: "If approved, use the GoMyTruck Workforce app to review available assignments and their stated terms.",
      isCompleted: false,
      isActive: isDocVerified
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
            Verification time and assignment availability vary by role, location, and current demand.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200" style={{ left: '16.6%', right: '16.6%' }}>
            <div className="absolute inset-0 bg-blue-500 origin-left scale-x-0 transition-transform duration-1000 group-hover:scale-x-100"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.isCompleted ? CheckCircle2 : step.icon
              return (
                <div key={index} className="text-center group">
                  <div className={`w-24 h-24 mx-auto rounded-3xl shadow-xl flex items-center justify-center mb-6 relative transition-transform duration-300 border-2 ${
                    step.isCompleted
                      ? "bg-emerald-50 border-emerald-200 shadow-emerald-100"
                      : step.isActive
                        ? "bg-white border-blue-200 shadow-blue-200/50 group-hover:-translate-y-2"
                        : "bg-white border-slate-100 shadow-slate-200/50 group-hover:-translate-y-2"
                  }`}>
                    <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                      step.isActive && !step.isCompleted ? "bg-blue-50 opacity-100 animate-pulse" : "bg-blue-50 opacity-0 group-hover:opacity-100"
                    }`}></div>
                    <Icon size={40} className={`relative z-10 ${
                      step.isCompleted ? "text-emerald-500" : step.isActive ? "text-blue-600" : "text-slate-400"
                    }`} strokeWidth={1.5} />
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg ${
                      step.isCompleted ? "bg-emerald-500 text-white" : "bg-slate-900 text-white"
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${step.isCompleted ? "text-emerald-600" : "text-slate-900"}`}>
                    {step.title}
                  </h3>
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
