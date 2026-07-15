import React, { useState } from "react"
import { Plus, Minus, MessageCircleQuestion } from "lucide-react"

export default function EnterpriseFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What makes GoMyTruck Enterprise different for B2B?",
      answer: "GoMyTruck can assess scheduled distribution, recurring vehicle needs, reporting, and integration requirements. The exact operating model, billing terms, access, and coverage are defined in an approved commercial scope."
    },
    {
      question: "How does GoMyTruck support massive supply chain demands?",
      answer: "Share route volumes, shipment characteristics, vehicle classes, timing, and escalation needs. GoMyTruck will assess capacity and propose a workflow. Fleet availability and service levels apply only when explicitly agreed in writing."
    },
    {
      question: "What is the onboarding timeline for corporate accounts?",
      answer: "The timeline depends on KYC, commercial review, route and capacity validation, integration scope, and signed agreements. The enterprise team will provide a project timeline after discovery."
    },
    {
      question: "Who do I contact if my business faces an operational issue?",
      answer: "The agreement identifies the support channels, operating contacts, escalation path, and support window for the account. Do not assume a dedicated manager or round-the-clock response unless it is included in that scope."
    },
    {
      question: "How do I monitor my company's total logistics spend?",
      answer: "Available booking, tracking, invoice, and reporting capabilities are demonstrated during discovery. Any custom report, departmental control, or integration requirement must be confirmed before contracting."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-100/50 border border-brand-200 text-brand-700 text-xs font-bold tracking-widest uppercase mb-4">
            <MessageCircleQuestion size={14} />
            Enterprise FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="text-brand-600">Questions</span>
          </h2>
          <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
            Everything you need to know about setting up and managing your Enterprise account.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`bg-transparent border-b border-slate-200/60 transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "" 
                    : "hover:border-brand-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer outline-none group"
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
  )
}
