import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Plus, Minus, MessageCircleQuestion } from "lucide-react"

export default function TruckFAQ({ city }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: `How do I book a mini truck online in ${city}?`,
      answer: `Booking a mini truck online in ${city} with GoMyTruck takes less than 60 seconds. Enter your pickup and drop address, choose your vehicle (mini truck, Tata Ace, pickup truck, or full truck), submit your cargo details, and get an instant price estimate. Same-day and urgent mini truck booking near me in ${city} is available 24/7 via our app and website.`,
    },
    {
      question: `What is the Tata Ace on rent price per km in ${city}?`,
      answer: `The Tata Ace on rent price per km in ${city} ranges from ₹12–₹18/km for local city trips, depending on the distance and time of day. For intercity Tata Ace rental, rates are slightly higher. GoMyTruck shows you the exact fare upfront — no haggling, no hidden fees. You can also book Tata Ace online via our platform for immediate or scheduled trips in ${city}.`,
    },
    {
      question: `What areas in ${city} does GoMyTruck's truck service cover?`,
      answer: `GoMyTruck covers all major neighbourhoods and surrounding areas within ${city}. Whether you are in the city centre or on the outskirts, our driver-partners are available for mini truck booking near me, pickup truck bookings, and FTL shipments. Our local network ensures the nearest transport agency is always close to your location in ${city}.`,
    },
    {
      question: `How does Full Truck Load (FTL) transport work from ${city}?`,
      answer: `Full Truck Load (FTL) transport from ${city} gives you exclusive use of the vehicle for your shipment. It's ideal for bulk industrial goods, factory-to-warehouse transfers, FMCG distribution, and corporate freight. FTL is faster and more secure than part load transport because your cargo doesn't share space. GoMyTruck offers FTL services on 500+ intercity routes from ${city}.`,
    },
    {
      question: `Can I book part load transport (PTL) from ${city} to another city?`,
      answer: `Yes! GoMyTruck's part load transport (PTL) service from ${city} lets you pay for only the truck space your goods need. It's perfect for small businesses, startups, and individuals who don't have enough goods to fill a full truck. PTL logistics from ${city} is available to all major Indian cities — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and more.`,
    },
    {
      question: `How do I find return load online for my truck in ${city}?`,
      answer: `Truck owners in ${city} can find return loads online by signing up on GoMyTruck's load board. After completing a delivery, you can browse available freight on the same or nearby routes, eliminating empty return trips. Our lorry load matching platform uses smart algorithms to suggest the best return load bookings for your vehicle type and route.`,
    },
    {
      question: "How do I attach my commercial vehicle to GoMyTruck?",
      answer: `Attaching your truck to GoMyTruck is simple. Register as a driver-partner at gomytruck.com/driver-partner, upload your documents (RC, driving licence, insurance), and complete our quick verification. Once approved, you get immediate access to our online load board in ${city} and across India. We offer zero commission load booking on select routes and a dedicated fleet owner logistics dashboard.`,
    },
    {
      question: "What B2B logistics services does GoMyTruck offer?",
      answer: "GoMyTruck's B2B and enterprise logistics services include dedicated fleet contracts, corporate truck rental, FMCG transport service, industrial goods transport, warehouse transport services, supply chain logistics management, and API integration with your ERP. Ideal for retail distribution logistics, contract logistics companies, and businesses needing freight forwarding services with SLA guarantees.",
    },
    {
      question: "What happens if the truck breaks down during delivery?",
      answer: "GoMyTruck has a 24/7 rapid-response protocol for vehicle breakdowns. Our operations team immediately dispatches a backup vehicle to transfer your goods, minimising disruption to your supply chain. Comprehensive cargo insurance is also available at checkout for peace of mind on both FTL and part load transport bookings.",
    },
    {
      question: `Is GoMyTruck's truck service available 24 hours in ${city}?`,
      answer: `Yes, GoMyTruck operates round-the-clock in ${city}. You can make an instant truck booking, same-day truck transport booking, or pre-schedule a vehicle at any time — day or night. Our operations and customer support teams are available 24/7, 365 days a year, to ensure your goods keep moving when you need them to.`,
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
