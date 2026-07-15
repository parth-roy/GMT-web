import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Plus, Minus, MessageCircleQuestion } from "lucide-react"

export default function PackersFAQ({ city }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: `How much do packers and movers cost in ${city}?`,
      answer: `The quote depends on the inventory volume and fragility, pickup and destination access, floors and lift access, packing materials, dismantling or appliance work, route, workforce, and schedule. Share a complete inventory so the team can confirm the scope and price.`
    },
    {
      question: `Do you provide packing materials?`,
      answer: `Packing materials can be included when listed in the confirmed quote. The team will specify the material types and quantities based on the declared inventory; do not assume every material or item is included without that scope.`
    },
    {
      question: `Are my goods insured during the move?`,
      answer: `Do not assume automatic insurance. Ask whether a protection option is available for the route and inventory, then review the provider, declared value, exclusions, excess, claim process, and proof of cover before the move.`
    },
    {
      question: `Can you dismantle and reassemble my bed/AC/TV?`,
      answer: `These services may require a suitable technician and must be listed in the confirmed scope. Declare every item and required task; appliance installation, electrical work, gas connections, and specialist handling should never be assumed.`
    },
    {
      question: `How far in advance should I book packers and movers in ${city}?`,
      answer: `Submit the requirement as early as possible, especially for larger inventories, restricted access, weekends, or intercity moves. The team confirms the date only after reviewing scope and capacity; urgent or next-day service is not guaranteed.`
    },
    {
      question: `Do you transport bikes and cars?`,
      answer: `Vehicle transport is a separate specialist requirement. Ask the team to confirm whether it is available for the route, the carrier and securing method, documentation, inspection record, protection terms, and delivery process.`
    }
  ]

  // FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100/50 border border-brand-200 text-brand-700 text-xs font-bold tracking-widest uppercase mb-4">
              <MessageCircleQuestion size={14} />
              Support &amp; FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
              Frequently Asked <span className="text-brand-600">Questions</span>
            </h2>
            <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
              Everything you need to know about house shifting and relocation services in {city}.
            </p>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index}
                  className={`bg-transparent border-b border-slate-200/60 transition-all duration-300 overflow-hidden ${
                    isOpen ? "" : "hover:border-brand-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-semibold text-base sm:text-lg pr-8 transition-colors ${
                      isOpen ? "text-brand-700" : "text-slate-800 group-hover:text-brand-600"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isOpen ? "bg-brand-600 text-white rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-600"
                    }`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="p-5 sm:p-6 pt-0 text-slate-600 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  )
}
