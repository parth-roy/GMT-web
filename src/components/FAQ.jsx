import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Minus, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a truck online with GoMyTruck?",
    answer: "Booking a truck online with GoMyTruck is simple and instant. Enter your pickup and drop address, select your vehicle type (mini truck, Tata Ace, pickup truck, or full truck), fill in your cargo details, and get an instant price estimate. You can book 24/7 via our website or app. Same-day and urgent truck booking near me is also available."
  },
  {
    question: "What is the Tata Ace on rent price per km?",
    answer: "The Tata Ace on rent price per km varies by city and route. Typically, Tata Ace rent per km ranges from ₹12–₹18 for local city trips and slightly higher for intercity transport. GoMyTruck offers transparent, upfront pricing with no hidden charges. Use our estimate calculator to get the exact Tata Ace rental rate for your route."
  },
  {
    question: "Does GoMyTruck offer mini truck booking near me?",
    answer: "Yes! GoMyTruck provides mini truck booking near you across all major Indian cities. Whether you need a mini truck for shifting goods locally or transporting cargo within the city, our driver-partners are typically available within 15–20 minutes. We cover Delhi NCR, Mumbai, Bangalore, Kolkata, Hyderabad, Barrackpore, and 100+ cities across India."
  },
  {
    question: "What are Full Truck Load (FTL) transport services?",
    answer: "Full Truck Load (FTL) transport means you hire the entire truck exclusively for your shipment — giving you maximum speed, security, and direct delivery. GoMyTruck's FTL transport services cover both intra-city and intercity routes across India. FTL is ideal for bulk industrial goods, factory to warehouse, FMCG distribution, and B2B corporate logistics."
  },
  {
    question: "What is part load transport (PTL) and how does it work?",
    answer: "Part Load Transport (PTL) — also called LTL or less-than-truckload — lets you share truck space with other shippers, paying only for the portion you use. GoMyTruck's PTL logistics service is ideal for small to medium businesses that don't need a full truck. It's a cost-effective way to move goods between cities without booking an entire truck."
  },
  {
    question: "How do I find return load online for my truck?",
    answer: "Truck owners can find return loads online by registering on GoMyTruck. Our platform matches empty trucks with available loads on the same route, eliminating the costly problem of returning with an empty vehicle. Search by route, pickup date, and vehicle type. This is also called lorry load matching, load board, or empty truck load matching — all available on GoMyTruck."
  },
  {
    question: "How do truck owners attach their vehicle to GoMyTruck?",
    answer: "To attach your commercial vehicle to GoMyTruck, simply register as a driver-partner on our platform. Upload your vehicle documents, driving license, and RC. Once verified, you get access to our load board and can start accepting freight bookings immediately. We offer zero commission load booking on select routes and a dedicated fleet owner logistics platform."
  },
  {
    question: "Does GoMyTruck provide B2B logistics services for businesses?",
    answer: "Absolutely. GoMyTruck's Enterprise & B2B Logistics division serves FMCG companies, retail chains, factories, warehouses, and e-commerce brands. Services include dedicated fleet contracts, corporate truck rental, freight forwarding, supply chain logistics management, and API integration with your ERP system. Contact our Key Account team for enterprise logistics solutions."
  },
  {
    question: "Can I book a pickup truck for same-day transport near me?",
    answer: "Yes! GoMyTruck supports same-day truck transport and urgent truck booking near you. If you need a pickup truck or mini truck today, simply open the app or website, enter your route, and we'll match you with the nearest available vehicle. For same-day delivery, we recommend booking at least 2 hours in advance for best availability."
  },
  {
    question: "Is GoMyTruck available for goods transport in West Bengal and Barrackpore?",
    answer: "Yes! GoMyTruck is headquartered in Barrackpore, West Bengal and provides truck booking in Barrackpore, Kolkata, and across West Bengal. We offer mini truck rent Barrackpore, part load transport Kolkata, FMCG transport West Bengal, and full intercity goods transport services from West Bengal to all major Indian cities."
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
