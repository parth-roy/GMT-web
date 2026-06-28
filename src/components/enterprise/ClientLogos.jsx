import React from "react"

export default function ClientLogos() {
  const clients = [
    "/our_clients/Garden Reach Ship Builders & Engineers Limited, Kolkata.png",
    "/our_clients/Hindustan Aeronautics Ltd.png",
    "/our_clients/Public Health Engineering Dept.png",
    "/our_clients/SENBO Engineering Ltd.png",
    "/our_clients/Bhushan Power & Steel Ltd.png",
  ]

  // Duplicate the array twice to ensure seamless infinite looping without blank spaces
  const loopingClients = [...clients, ...clients]

  return (
    <section className="w-full bg-slate-50 py-12 sm:py-16 border-b border-slate-100 overflow-hidden">
      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 25s linear infinite;
            width: max-content;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest">
          Our Clients
        </h2>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        
        {/* Animated Track */}
        <div className="flex animate-infinite-scroll gap-12 sm:gap-24 items-center group-hover:[animation-play-state:paused] pr-12 sm:pr-24">
          {loopingClients.map((client, idx) => (
            <img 
              key={idx} 
              src={client} 
              alt="Client Logo" 
              className="h-16 sm:h-24 w-auto object-contain hover:-translate-y-2 hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-sm"
            />
          ))}
        </div>

        {/* Optional Gradient Fades on edges for smoothness */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  )
}
