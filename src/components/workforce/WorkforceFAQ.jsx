import React, { useState } from "react"
import { Plus, Minus, MessageCircleQuestion } from "lucide-react"

const faqs = [
  {
    q: "Do I need my own vehicle to join?",
    a: "No! If you are joining as a Delivery Executive or Helper/Loader, you do not need your own vehicle. Drivers only need a valid commercial driving license."
  },
  {
    q: "How often will I get paid?",
    a: "We process payouts every week directly to your registered bank account. You can track your daily earnings in the GoMyTruck Workforce app."
  },
  {
    q: "What documents are required for registration?",
    a: "You will need your Aadhaar Card, PAN Card, and Bank Account details. If you are applying as a Driver, a valid Driving License is also mandatory."
  },
  {
    q: "Can I choose my own working hours?",
    a: "Yes, we offer flexible shifts. You can log into the app and choose to accept jobs whenever you are available."
  },
  {
    q: "Is there any registration fee?",
    a: "No, joining GoMyTruck Workforce is completely free. We do not charge any registration or onboarding fees."
  }
]

export default function WorkforceFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100/50 border border-brand-200 text-brand-700 text-xs font-bold tracking-widest uppercase mb-4">
            <MessageCircleQuestion size={14} />
            Support &amp; FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="text-brand-600">Questions</span>
          </h2>
          <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
            Everything you need to know about joining GoMyTruck Workforce.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div 
                key={index}
                className={`bg-transparent border-b border-slate-200/60 transition-all duration-300 overflow-hidden ${
                  isOpen ? "" : "hover:border-brand-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base sm:text-lg pr-8 transition-colors ${
                    isOpen ? "text-brand-700" : "text-slate-800 group-hover:text-brand-600"
                  }`}>
                    {faq.q}
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
                      {faq.a}
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
