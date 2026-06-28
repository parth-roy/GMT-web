import React from "react"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const reviews = [
    {
      text: "Switching to Porter Enterprise has completely streamlined our dispatch process. The centralized wallet system and unified dashboard mean I never have to track down petty cash receipts from drivers again.",
      role: "Logistics Manager at a Leading FMCG MNC"
    },
    {
      text: "With a high volume of daily deliveries, we needed a scalable solution. The multi-user access feature lets our warehouse managers book trucks simultaneously across 5 different cities with total transparency.",
      role: "CEO of an Ecommerce company"
    },
    {
      text: "The sheer availability of vehicles—from small EV autos to large 14ft trucks—means we can consolidate all our logistics vendors into one single platform. It’s highly reliable and incredibly cost-effective.",
      role: "Operations Head at a Retail Chain"
    }
  ]

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
            Some Words From Our Happy Customers
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-200" />
              
              <p className="text-slate-600 font-medium italic text-lg leading-relaxed relative z-10 mb-8 pt-4">
                "{review.text}"
              </p>
              
              <div className="pt-6 border-t border-slate-200">
                <p className="font-bold text-slate-900 text-sm tracking-wide">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
