import React, { useState } from "react"
import { Send, BadgeCheck, ShieldCheck } from "lucide-react"

export default function PartnerHero({ isFleetOwner = false }) {
  const [driverName, setDriverName] = useState("")
  const [driverPhone, setDriverPhone] = useState("")
  const [driverCity, setDriverCity] = useState("")
  const [vehicleType, setDriverVehicle] = useState("Tata Ace")
  const [isRegistered, setIsRegistered] = useState(false)
  const [regError, setRegError] = useState("")

  const handleRegister = (e) => {
    e.preventDefault()
    if (!driverName || !driverPhone || !driverCity) {
      setRegError("Please fill out all the fields.")
      return
    }
    if (driverPhone.length < 10) {
      setRegError("Please enter a valid 10-digit phone number.")
      return
    }
    setRegError("")
    setIsRegistered(true)
  }

  const headline = isFleetOwner 
    ? "Attach Your Fleet & Grow Your Transport Business"
    : "Attach Your Vehicle & Earn Up To ₹45,000/Month*"
  
  const subheadline = isFleetOwner
    ? "Join India's rapidly growing logistics platform. Attach multiple trucks, eliminate idle time with guaranteed return loads, and get paid instantly. Partner with GoMyTruck today."
    : "Join India's rapidly growing logistics platform. We welcome 2-wheelers, 3-wheelers, mini-trucks, and heavy trucks. Get consistent daily bookings and daily payouts."

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Copy */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 backdrop-blur-md text-green-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              <ShieldCheck size={16} />
              <span>India's Most Trusted Partner Network</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                {isFleetOwner ? "Attach Your Fleet &" : "Attach Your Vehicle &"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-brand-400">
                  {isFleetOwner ? "Grow Your Business" : "Earn Up To ₹45k/Mo*"}
                </span>
              </h1>
              <p className="text-slate-300 font-medium text-lg sm:text-xl max-w-xl leading-relaxed">
                {subheadline}
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400 shadow-inner">
                  <span className="font-bold text-lg">0%</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Zero Commission</p>
                  <p className="text-slate-400 text-sm">On your first 10 trips</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-green-400 shadow-inner">
                  <span className="font-bold text-lg">24h</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Fast Onboarding</p>
                  <p className="text-slate-400 text-sm">Start driving today</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shadow-inner">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">₹2,50,000 Insurance</p>
                  <p className="text-slate-400 text-sm">Free health & accidental cover</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="lg:col-span-5 relative z-20">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-black/50">
              {isRegistered ? (
                <div className="text-center py-12 space-y-6">
                  <div className="h-20 w-20 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full flex items-center justify-center mx-auto animate-bounce shadow-lg shadow-green-500/20">
                    <BadgeCheck size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-display font-extrabold text-white">Application Received!</h3>
                    <p className="text-base text-slate-300 px-4 leading-relaxed">
                      Thank you, <span className="text-green-400 font-semibold">{driverName}</span>. Our onboarding officer will call you on <span className="text-green-400 font-semibold">+91 {driverPhone}</span> shortly.
                    </p>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl text-sm space-y-3 text-left">
                    <p className="font-semibold text-white">Please prepare these documents:</p>
                    <ul className="space-y-2 text-slate-300 list-disc list-inside marker:text-brand-500">
                      <li>Aadhaar Card & PAN Card</li>
                      <li>Driving License (DL)</li>
                      <li>Vehicle Registration Certificate (RC)</li>
                      <li>Bank Details</li>
                    </ul>
                  </div>
                  <button 
                    onClick={() => { setIsRegistered(false); setDriverName(""); setDriverPhone(""); setDriverCity(""); }}
                    className="text-sm text-green-400 hover:text-green-300 font-bold underline transition-colors"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegister} className="space-y-5">
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">Partner Registration</h3>
                    <p className="text-sm text-slate-300 mt-2">Enter your details and our team will call you back.</p>
                  </div>

                  {regError && (
                    <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-3 rounded-xl backdrop-blur-sm">
                      {regError}
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text" placeholder="e.g. Ramesh Kumar" value={driverName}
                        onChange={(e) => setDriverName(e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Mobile Number</label>
                      <div className="relative">
                        <span className="absolute left-4 top-3 text-base font-semibold text-slate-400">+91</span>
                        <input
                          type="tel" maxLength={10} placeholder="98765 43210" value={driverPhone}
                          onChange={(e) => setDriverPhone(e.target.value.replace(/\D/g, ""))}
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 pl-14 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* City */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">City</label>
                        <input
                          type="text" placeholder="e.g. Kolkata" value={driverCity}
                          onChange={(e) => setDriverCity(e.target.value)}
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                        />
                      </div>
                      {/* Vehicle */}
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Vehicle</label>
                        <select
                          value={vehicleType}
                          onChange={(e) => setDriverVehicle(e.target.value)}
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all cursor-pointer appearance-none"
                        >
                          <option className="bg-slate-800" value="Two Wheeler">Bike</option>
                          <option className="bg-slate-800" value="3-Wheeler Auto">3-Wheeler Auto</option>
                          <option className="bg-slate-800" value="Tata Ace">Tata Ace</option>
                          <option className="bg-slate-800" value="Bolero Pickup">Bolero Pickup</option>
                          <option className="bg-slate-800" value="Eicher / Heavy">Heavy Truck</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-green-500 hover:bg-green-400 text-slate-900 font-extrabold text-lg py-4 px-6 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Register Now</span>
                    <Send size={20} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs text-slate-400 text-center leading-relaxed font-medium mt-4">
                    By submitting, you agree to our <a href="/partner-terms" className="underline hover:text-white">Partner Terms</a> and consent to receiving updates on WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
