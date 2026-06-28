import React from "react"
import { ArrowRight, FileText, Smartphone, Wallet } from "lucide-react"

export default function PartnerHowItWorks() {
  const steps = [
    {
      icon: Smartphone,
      title: "1. Register Online",
      description: "Fill the form above or download the GoMyTruck Partner App. Enter your mobile number to begin."
    },
    {
      icon: FileText,
      title: "2. Verify Documents",
      description: "Upload your Aadhaar, DL, and Vehicle RC in the app. Verification takes less than 2 hours."
    },
    {
      icon: Wallet,
      title: "3. Start Earning",
      description: "Get verified, accept your first trip, and receive your earnings directly in your bank account."
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
            const Icon = step.icon
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 shadow-xl shadow-brand-900/50 flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute inset-0 bg-brand-500 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Icon size={36} className="text-brand-400 relative z-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
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
