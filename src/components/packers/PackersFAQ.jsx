import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Plus, Minus, MessageCircleQuestion } from "lucide-react"

export default function PackersFAQ({ city }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: `How much do packers and movers cost in ${city}?`,
      answer: `The cost of packers and movers in ${city} depends on the size of your home, the volume of goods, and the distance. Typically, local shifting within ${city} starts at ₹3,000 for a 1 RK, ₹4,500 for a 1 BHK, and ₹6,000 for a 2 BHK. With GoMyTruck, you get a fixed, transparent price before booking with no hidden fees.`
    },
    {
      question: `Do you provide packing materials?`,
      answer: `Yes, we provide 100% of the packing materials required for a safe move. Our experts use high-quality corrugated boxes, bubble wrap, stretch film, foam sheets, and sealing tape to ensure zero damage to your belongings during transit.`
    },
    {
      question: `Are my goods insured during the move?`,
      answer: `Yes, GoMyTruck offers transit insurance options to cover any unforeseen damages during the moving process. You can opt for comprehensive insurance during the booking process for complete peace of mind.`
    },
    {
      question: `Can you dismantle and reassemble my bed/AC/TV?`,
      answer: `Absolutely. Our team includes professional carpenters and technicians who will safely dismantle heavy furniture (beds, wardrobes) and uninstall electronics (TVs, ACs) at your old home, and reassemble/reinstall them at your new destination.`
    },
    {
      question: `How far in advance should I book packers and movers in ${city}?`,
      answer: `For local house shifting in ${city}, we recommend booking at least 2-3 days in advance. For intercity relocation from ${city}, booking 5-7 days prior ensures we can allocate the best fleet and team for your specific requirements. However, we also accommodate urgent next-day moves subject to availability.`
    },
    {
      question: `Do you transport bikes and cars?`,
      answer: `Yes, we provide dedicated vehicle transport services. We use specialized car carriers and bike transport trucks with proper strapping and wheel chocks to ensure your vehicle reaches the destination without a single scratch.`
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
