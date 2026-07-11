import React from "react"
import { Eye, ShieldCheck, HeartHandshake, Compass, BarChart3, HelpCircle } from "lucide-react"

export default function WhyChooseUs() {
  const points = [
    {
      title: "Real-time Live GPS Tracking",
      desc: "Monitor your shipment with precise, real-time location tracking. Know exactly when your cargo will reach its destination, with automatic ETA updates sent directly to your phone via SMS.",
      icon: Compass,
      bgColor: "bg-amber-100 text-amber-600",
      borderColor: "hover:border-amber-200"
    },
    {
      title: "Transparent & Guaranteed Fares",
      desc: "No surprises, no hidden costs. Our advanced algorithm provides a firm, guaranteed quote based on distance and load. The price you see in the estimate is exactly what you pay.",
      icon: ShieldCheck,
      bgColor: "bg-brand-100 text-brand-600",
      borderColor: "hover:border-brand-200"
    },
    {
      title: "100% Insured & Verified Partners",
      desc: "Every single driver on our platform is background checked, verified with Aadhaar/DL, and rated above 4.5 stars. We also provide complimentary cargo insurance up to ₹50,000 for every trip.",
      icon: Eye,
      bgColor: "bg-teal-100 text-teal-600",
      borderColor: "hover:border-teal-200"
    },
    {
      title: "Dedicated Enterprise Dashboard",
      desc: "Running a business? Get access to consolidated monthly billing, custom API integrations, deep analytical reports, and a dedicated logistics account manager to optimize your supply chain.",
      icon: BarChart3,
      bgColor: "bg-indigo-100 text-indigo-600",
      borderColor: "hover:border-indigo-200"
    },
    {
      title: "24/7 Support in 6 Languages",
      desc: "Our customer success team operates day and night. Get instant help in Hindi, English, Kannada, Tamil, Telugu, or Marathi. We resolve any transit query in under 5 minutes.",
      icon: HeartHandshake,
      bgColor: "bg-rose-100 text-rose-600",
      borderColor: "hover:border-rose-200"
    }
  ]

  const stats = [
    { label: "Trips Completed", value: "10k+" },
    { label: "Active Vehicles", value: "15,000+" },
    { label: "Indian Cities Covered", value: "150+" },
    { label: "Average Pickup Time", value: "38 min" }
  ]

  return (
    <section id="enterprise" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-slate-50 opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="lg:flex lg:items-center lg:justify-between mb-16 gap-12 text-left">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-100 text-brand-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <HelpCircle size={13} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Revolutionizing Indian Logistics With Absolute Precision
            </h2>
            <div className="w-16 h-1 bg-brand-500 rounded-full"></div>
          </div>
          <p className="mt-4 lg:mt-0 text-slate-600 font-medium text-base sm:text-lg max-w-md">
            We bridge the gap between business cargo needs and fleet availability. Safe, reliable, and completely digitized on-demand trucking.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Main feature spotlight card - Now Light & Aesthetic */}
          <div className="md:col-span-2 lg:col-span-1 bg-brand-50 border border-brand-100 text-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between text-left relative overflow-hidden group hover:shadow-xl hover:border-brand-200 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-brand-200 rounded-full blur-3xl opacity-50 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-700 bg-brand-50 shadow-sm px-3 py-1 rounded-full border border-brand-200/50">
                Technology First
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold leading-tight text-slate-900">
                Instantly matches you with nearby fleet partners
              </h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Our advanced machine learning engine analyzes traffic, load factors, and driver location to match your booking request to the perfect driver within 300 seconds. No waiting, no phone negotiations.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-brand-200/50 flex items-center gap-4 relative z-10">
              <div className="h-10 w-10 rounded-full bg-brand-50 shadow-sm border border-brand-100 flex items-center justify-center font-bold text-lg text-brand-600">
                99%
              </div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Driver Allocation Success Rate
              </p>
            </div>
          </div>

          {/* Standard cards */}
          {points.map((pt, index) => {
            const Icon = pt.icon
            return (
              <div 
                key={index} 
                className={`bg-brand-50 border border-slate-200 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${pt.borderColor} flex flex-col items-start text-left`}
              >
                <div className={`p-3 rounded-2xl mb-6 ${pt.bgColor}`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3 tracking-wide">
                  {pt.title}
                </h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Counter/Stats bar */}
        <div className="mt-20 bg-brand-50 border border-slate-200 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-brand-600">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
