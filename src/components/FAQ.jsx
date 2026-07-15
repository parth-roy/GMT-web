import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a truck online with GoMyTruck?",
    answer: "Enter the pickup and drop addresses, select a suitable vehicle, declare the goods and any workforce requirement, and review the current estimate. When you confirm, GoMyTruck creates the booking and begins looking for an eligible partner. Assignment and arrival times depend on route, vehicle, and partner availability."
  },
  {
    question: "How is a Tata Ace or truck estimate calculated?",
    answer: "The pricing service uses the selected vehicle, mapped distance and travel time, the current fuel surcharge and applicable demand rules. Loading help, waiting, tolls, tax, and other confirmed trip items can also affect the total. Use the booking form for the route-specific estimate rather than relying on a fixed per-kilometre claim."
  },
  {
    question: "Does GoMyTruck offer mini truck booking near me?",
    answer: "GoMyTruck currently publishes service information for Kolkata, Barrackpore, Howrah, Salt Lake, New Town, and supported routes from West Bengal. Submit the exact addresses to check route serviceability; a listed area does not guarantee that a particular vehicle is immediately available."
  },
  {
    question: "What are Full Truck Load (FTL) transport services?",
    answer: "Full Truck Load means one customer reserves the vehicle capacity for a shipment instead of sharing it with other consignments. It can suit bulk goods and factory-to-warehouse movements. Route acceptance, the assigned vehicle, loading scope, and transit plan are confirmed for each booking."
  },
  {
    question: "What is part load transport (PTL) and how does it work?",
    answer: "Part Load or LTL combines compatible consignments in shared capacity. It may reduce the vehicle space paid for, but handling and transit can differ from a dedicated truck. Ask the enterprise team whether PTL is available for your goods and route before planning the shipment."
  },
  {
    question: "How do I find return load online for my truck?",
    answer: "An approved driver or fleet account can review eligible marketplace loads and submit a bid where bidding is enabled. Matching uses factors such as route, vehicle type, status, and availability. Registration does not guarantee a return load or a minimum number of jobs."
  },
  {
    question: "How do truck owners attach their vehicle to GoMyTruck?",
    answer: "Submit the partner registration form, then provide the identity, driving, and commercial-vehicle documents requested for your role. GoMyTruck reviews eligibility before activation. Access, fees, available loads, earning terms, and settlement options are shown in the applicable partner workflow and can change."
  },
  {
    question: "Does GoMyTruck provide B2B logistics services for businesses?",
    answer: "Businesses can request scheduled or recurring transport, dedicated-capacity discussions, reporting, and integration discovery. The enterprise team confirms coverage, operating process, pricing, support, and any service level in a written commercial scope; these are not automatic website guarantees."
  },
  {
    question: "Can I request a pickup truck for the same day?",
    answer: "You can submit a same-day requirement, but acceptance and dispatch depend on the pickup area, vehicle type, goods, partner availability, and route conditions. Confirm the assigned partner and arrival details before relying on a delivery schedule."
  },
  {
    question: "Is GoMyTruck available for goods transport in West Bengal and Barrackpore?",
    answer: "GoMyTruck is based in Barrackpore and publishes local service pages for Barrackpore, Kolkata, Howrah, Salt Lake, and New Town, plus selected route pages. Actual serviceability and vehicle availability are checked for the submitted pickup, destination, date, and goods."
  }
];

// FAQPage JSON-LD Schema for Google rich results
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
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-24 bg-transparent relative overflow-hidden">
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
              Everything you need to know about online truck booking, mini truck hire, Tata Ace rent, FTL transport, and goods transport services with GoMyTruck.
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
                    aria-expanded={isOpen}
                    id={`faq-btn-${index}`}
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
  );
}
