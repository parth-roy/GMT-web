import React, { useState } from "react"
import { Plus, Minus, MessageCircleQuestion } from "lucide-react"

export default function BikeFAQ({ city }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: `How do I book a two-wheeler delivery in ${city}?`,
      answer: `Enter the pickup and destination, describe the parcel, and review the estimate. Confirmation creates the request and starts partner matching; it does not guarantee immediate assignment or pickup. Tracking is available only when supported by the active trip workflow.`,
    },
    {
      question: `Which areas in ${city} does GoMyTruck bike delivery cover?`,
      answer: `Enter both exact addresses to check current serviceability in ${city}. A published city page does not mean that every locality has an immediately available bike partner.`,
    },
    {
      question: "What is the maximum weight a two-wheeler delivery can carry?",
      answer: "The booking flow uses a 20 kg planning ceiling for the bike category, but size, shape, fragility, safety, and local rules also matter. Use a goods vehicle for anything unsuitable for safe two-wheeler transport.",
    },
    {
      question: "How fast is a two-wheeler delivery compared to other vehicles?",
      answer: "A two-wheeler can be practical for a small local parcel, but GoMyTruck does not promise a percentage time saving. Pickup and delivery time depend on partner availability, traffic, route, weather, and the confirmed trip.",
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100/50 border border-brand-200 text-brand-700 text-xs font-bold tracking-widest uppercase mb-4">
            <MessageCircleQuestion size={14} />
            Support & FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="text-brand-600">Questions</span>
          </h2>
          <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
            Everything you need to know about two-wheeler delivery in {city}.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`bg-transparent border-b border-slate-200/60 transition-all duration-300 overflow-hidden ${isOpen ? "" : "hover:border-brand-300"}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer outline-none group"
                >
                  <span className={`font-semibold text-base sm:text-lg pr-8 transition-colors ${isOpen ? "text-brand-700" : "text-slate-800 group-hover:text-brand-600"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? "bg-brand-600 text-white rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-600"}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="p-5 sm:p-6 pt-0 text-slate-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
