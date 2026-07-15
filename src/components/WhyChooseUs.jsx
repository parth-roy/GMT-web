import React from "react"
import { Eye, ShieldCheck, HeartHandshake, Compass, BarChart3, HelpCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function WhyChooseUs() {
  const points = [
    { title: "Live trip visibility", desc: "Supported active trips can share driver location and status updates. Signal, device and network conditions can affect freshness.", icon: Compass },
    { title: "Fare-component breakdown", desc: "Review the route estimate and applicable components before payment. Actual toll, waiting, route or service changes may affect the final amount.", icon: ShieldCheck },
    { title: "Partner onboarding records", desc: "Identity and vehicle documents applicable to the partner role are collected and reviewed. Verification lowers risk but is not a service guarantee.", icon: Eye },
    { title: "Business logistics scoping", desc: "Enterprise routes, reporting, account support and integrations can be assessed and documented in an approved commercial agreement.", icon: BarChart3 },
    { title: "Multiple support channels", desc: "Use in-app support for an active booking or contact GoMyTruck by phone, WhatsApp or email for general enquiries.", icon: HeartHandshake },
  ]

  return (
    <section id="why-gomytruck" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-brand-800 font-bold uppercase tracking-wider text-xs"><HelpCircle size={15} /> What the platform provides</div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900">Useful logistics controls, with the conditions stated clearly</h2>
          <p className="mt-4 text-lg text-slate-600">GoMyTruck is a logistics marketplace connecting customers with independent driver, fleet and workforce partners.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center"><Icon size={22} /></div>
              <h3 className="mt-5 text-xl font-black text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{desc}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-600">For important limitations and responsibilities, read the <Link to="/legal/terms" className="font-bold text-brand-700 underline">Terms & Conditions</Link> and <Link to="/legal/refund-cancellation" className="font-bold text-brand-700 underline">Cancellation & Refund Policy</Link>.</p>
      </div>
    </section>
  )
}
