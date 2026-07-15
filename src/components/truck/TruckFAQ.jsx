import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Plus, Minus, MessageCircleQuestion } from "lucide-react"

export default function TruckFAQ({ city }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: `How do I book a mini truck online in ${city}?`,
      answer: `Enter the pickup and destination in ${city}, choose a vehicle, declare the goods and any loading help, and review the current estimate. After confirmation, GoMyTruck looks for an eligible partner. Assignment and arrival are subject to route and vehicle availability.`,
    },
    {
      question: `How is a Tata Ace estimate in ${city} calculated?`,
      answer: `The pricing service uses the mapped route, estimated travel time, selected vehicle, current fuel surcharge, and applicable demand rules. Loading help, waiting, tolls, tax, and confirmed trip changes can affect the total. Check the estimate for the actual route instead of relying on a fixed per-kilometre rate.`,
    },
    {
      question: `What areas in ${city} does GoMyTruck's truck service cover?`,
      answer: `Published pages describe supported hubs and routes around ${city}. Enter both exact addresses to check serviceability. Coverage information does not guarantee immediate availability of a specific vehicle at every locality.`,
    },
    {
      question: `How does Full Truck Load (FTL) transport work from ${city}?`,
      answer: `FTL reserves the vehicle capacity for one customer's declared shipment. It can suit bulk or factory-to-warehouse goods. GoMyTruck confirms the route, selected vehicle, operating scope, and availability for each booking.`,
    },
    {
      question: `Can I book part load transport (PTL) from ${city} to another city?`,
      answer: `PTL availability depends on compatible capacity, goods, schedule, and destination. Ask the enterprise team to confirm whether a shared-load option is operating for your specific ${city} route.`,
    },
    {
      question: `How do I find return load online for my truck in ${city}?`,
      answer: `Approved drivers and fleets can review eligible marketplace loads and bid where that mode is enabled. Opportunities depend on vehicle, route, timing, and customer demand; a return load is not guaranteed.`,
    },
    {
      question: "How do I attach my commercial vehicle to GoMyTruck?",
      answer: `Register at gomytruck.com/driver-partner and provide the requested identity, driving, and vehicle documents. Activation follows review. Loads, fees, earnings, and settlement terms are shown in the applicable partner workflow and are not guaranteed by registration.`,
    },
    {
      question: "What B2B logistics services does GoMyTruck offer?",
      answer: "Businesses can discuss recurring transport, dedicated-capacity requirements, reporting, and integration discovery with the enterprise team. Coverage, pricing, support, and any service level apply only when confirmed in a written commercial scope.",
    },
    {
      question: "What happens if the truck breaks down during delivery?",
      answer: "Use the support option for the active booking and follow the operations team's instructions. Any replacement vehicle, transfer plan, protection option, or cost depends on the incident and the terms confirmed for that trip.",
    },
    {
      question: `Can I submit a scheduled or same-day request in ${city}?`,
      answer: `The website can accept a request at any time. That is not a promise of round-the-clock operations or same-day dispatch: the team must confirm serviceability, the assigned partner, and timing for the requested route.`,
    }
  ]

  // FAQPage JSON-LD schema for Truck page
  const truckFaqSchema = {
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
          {JSON.stringify(truckFaqSchema)}
        </script>
      </Helmet>

      <section className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200">
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
              Everything you need to know about truck booking, mini truck hire, Tata Ace rent, FTL & PTL transport in {city}.
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
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer outline-none group"
                    aria-expanded={isOpen}
                    id={`truck-faq-btn-${index}`}
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
