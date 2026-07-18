import React from "react"
import { ArrowRight, FileText, Smartphone, Wallet, CheckCircle2 } from "lucide-react"
import { useAuth } from "../context/AuthContext"

export default function PartnerHowItWorks() {
  const { user } = useAuth()
  
  // Dynamic status logic
  const isRegistered = !!user
  const isDocVerified = user?.driver?.isDocVerified === true
  
  const steps = [
    {
      icon: Smartphone,
      title: "1. Register Online",
      description: "Fill the form above or download the GoMyTruck Partner App. Enter your mobile number to begin.",
      isCompleted: isRegistered,
      isActive: !isRegistered
    },
    {
      icon: FileText,
      title: "2. Verify Documents",
      description: "Upload your Aadhaar, DL, and Vehicle RC in the app. Verification takes less than 2 hours.",
      isCompleted: isDocVerified,
      isActive: isRegistered && !isDocVerified
    },
    {
      icon: Wallet,
      title: "3. Start Earning",
      description: "Get verified, accept your first trip, and receive your earnings directly in your bank account.",
      isCompleted: false, // Cannot verify trip count from here
      isActive: isDocVerified
    }
  ]

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400">
            Start earning with India's easiest partner onboarding process. From sign-up to your first trip in under 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-slate-800 via-brand-500 to-slate-800 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.isCompleted ? CheckCircle2 : step.icon
            const isLineActive = idx < steps.length - 1 && steps[idx].isCompleted
            
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className={`w-24 h-24 rounded-full border-4 shadow-xl flex items-center justify-center mb-6 relative transition-transform duration-300 ${
                  step.isCompleted 
                    ? "bg-emerald-900/50 border-emerald-500 shadow-emerald-900/50" 
                    : step.isActive 
                      ? "bg-brand-900/50 border-brand-500 shadow-brand-900/50 group-hover:-translate-y-2"
                      : "bg-slate-800 border-slate-900 shadow-slate-900/50 group-hover:-translate-y-2"
                }`}>
                  <div className={`absolute inset-0 rounded-full blur-lg opacity-0 transition-opacity duration-300 ${
                    step.isActive && !step.isCompleted ? "bg-brand-500 opacity-40 animate-pulse" : "group-hover:opacity-40"
                  }`}></div>
                  <Icon size={36} className={`relative z-10 ${
                    step.isCompleted ? "text-emerald-400" : step.isActive ? "text-brand-400" : "text-slate-500"
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${step.isCompleted ? "text-emerald-400" : step.isActive ? "text-white" : "text-slate-400"}`}>
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
