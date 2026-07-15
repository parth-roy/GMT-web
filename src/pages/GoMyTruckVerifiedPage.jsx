import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { ShieldCheck, Star, FileCheck, UserCheck, Truck, ArrowRight, CheckCircle, BadgeCheck } from "lucide-react"
import SEOHead from "../seo/SEOHead"

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GoMyTruck",
    "url": "https://gomytruck.com",
    "description": "GoMyTruck Verified is a rigorous driver and vehicle verification program ensuring every logistics partner meets safety, documentation, and conduct standards.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GoMyTruck Verified Services"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
      { "@type": "ListItem", "position": 2, "name": "GoMyTruck Verified", "item": "https://gomytruck.com/gomytruck-verified" }
    ]
  }
]

const steps = [
  {
    icon: FileCheck,
    title: "Document Verification",
    desc: "Driver and vehicle partners submit identity, driving-licence and vehicle documents required for their role. Records are reviewed during onboarding.",
  },
  {
    icon: UserCheck,
    title: "Identity & Profile Review",
    desc: "Identity and profile details are checked for completeness. Any specific third-party verification is identified in the onboarding workflow.",
  },
  {
    icon: Truck,
    title: "Vehicle Inspection",
    desc: "Vehicle registration, fitness, permit and related records are collected where applicable. Vehicle owners remain responsible for roadworthiness and legal compliance.",
  },
  {
    icon: Star,
    title: "Trip & Conduct Records",
    desc: "Booking, delivery and support records can be reviewed under platform terms when a safety, service or policy concern is reported.",
  },
]

const badges = [
  { label: "Documents Submitted", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "Identity Reviewed", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "Vehicle Records", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Conduct Standards", color: "bg-purple-100 text-purple-700 border-purple-200" },
]

export default function GoMyTruckVerifiedPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="bg-white min-h-screen font-sans">
      <SEOHead
        title="GoMyTruck Partner Verification & Safety Standards"
        description="Learn what partner documents GoMyTruck collects, how onboarding records are reviewed, and the responsibilities that continue during a trip."
        canonical="/gomytruck-verified"
        keywords="GoMyTruck verified, verified truck drivers, safe transport service, background checked drivers, verified logistics platform, trusted truck booking, safe goods transport, verified driver partner, GoMyTruck safety, GoMyTruck driver verification"
        jsonLd={schema}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 to-brand-950 pt-32 pb-20 mt-[68px] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <BadgeCheck size={48} className="text-green-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            <span className="text-green-400">GoMyTruck</span> Verified
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Learn which onboarding records are collected and what the GoMyTruck Verified label does—and does not—mean for a booking.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((b, i) => (
              <span key={i} className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm font-bold ${b.color}`}>
                <CheckCircle size={14} /> {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Verification process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-bold tracking-widest uppercase mb-4">
              Our Verification Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
              How We Keep Your Goods <span className="text-green-600">Safe</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The onboarding workflow records identity, role and vehicle information applicable to each partner.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-black text-slate-50">{i + 1}</div>
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <step.icon size={24} className="text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification scope */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "ID", label: "Identity records" },
              { value: "DL", label: "Licence records" },
              { value: "RC", label: "Vehicle records" },
              { value: "Trip", label: "Conduct records" },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="text-3xl font-black text-brand-600 mb-1">{stat.value}</div>
                <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck size={48} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-display font-extrabold mb-4">
            Book with Confidence
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Verification reduces onboarding risk but is not a guarantee against delay, loss or misconduct. Review the assigned partner, trip details and any protection option before confirmation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book-truck-online"
              className="bg-white text-brand-700 font-bold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors flex items-center gap-2"
            >
              Book a Truck Now <ArrowRight size={16} />
            </Link>
            <Link
              to="/driver-partner"
              className="border border-white/40 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Become a Verified Partner <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
