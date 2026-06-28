import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Do I need my own vehicle to join?",
    answer: "No! If you are joining as a Delivery Executive or Helper/Loader, you do not need your own vehicle. Drivers only need a valid commercial driving license."
  },
  {
    question: "How often will I get paid?",
    answer: "We process payouts every week directly to your registered bank account. You can track your daily earnings in the GoMyTruck Workforce app."
  },
  {
    question: "What documents are required for registration?",
    answer: "You will need your Aadhaar Card, PAN Card, and Bank Account details. If you are applying as a Driver, a valid Driving License is also mandatory."
  },
  {
    question: "Can I choose my own working hours?",
    answer: "Yes, we offer flexible shifts. You can log into the app and choose to accept jobs whenever you are available."
  },
  {
    question: "Is there any registration fee?",
    answer: "No, joining GoMyTruck Workforce is completely free. We do not charge any registration or onboarding fees."
  }
]

export default function WorkforceFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about joining GoMyTruck Workforce.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === idx 
                  ? 'border-blue-500 bg-blue-50/30' 
                  : 'border-slate-100 hover:border-slate-200 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={`font-bold pr-8 ${
                  openIndex === idx ? 'text-blue-900' : 'text-slate-900'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === idx ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx 
                    ? 'max-h-96 opacity-100 pb-6 px-6' 
                    : 'max-h-0 opacity-0 px-6'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
