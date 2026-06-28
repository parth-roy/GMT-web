import React from "react"
import { Star, Quote } from "lucide-react"

export default function PartnerTestimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      city: "Kolkata",
      vehicle: "Tata Ace Owner",
      quote: "Before GoMyTruck, my vehicle would sit idle for days. Now, I get back-to-back bookings and earn almost ₹40,000 every month. The payments are always on time.",
      initial: "R"
    },
    {
      name: "Suresh Singh",
      city: "Howrah",
      vehicle: "Bolero Pickup Owner",
      quote: "The zero-commission model for the first few trips really helped me start. The app is so easy to use, and the support team actually picks up the phone when I need help.",
      initial: "S"
    },
    {
      name: "Abdul Rahman",
      city: "Asansol",
      vehicle: "Fleet Owner (5 Trucks)",
      quote: "Managing my fleet was a headache with local brokers. With the GoMyTruck Partner App, I can track all my trucks and never have to worry about return loads.",
      initial: "A"
    }
  ]

  return (
    <section className="py-24 bg-brand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Hear From Our Partners
          </h2>
          <p className="text-lg text-slate-600">
            Join thousands of successful driver partners and fleet owners across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-500/5 relative">
              <Quote className="absolute top-6 right-6 text-brand-100 w-12 h-12" />
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 leading-relaxed italic mb-8 relative z-10">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xl">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.vehicle} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
