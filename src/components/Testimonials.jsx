import React from "react"
import { Star, MessageSquare, Quote } from "lucide-react"

export default function Testimonials({ city }) {
  const allTestimonials = [
    {
      name: "Ramesh Trading Co.",
      role: "Wholesale Merchant",
      location: "Burrabazar, Kolkata",
      quote: "We use GoMyTruck every day to move textiles from Burrabazar to Howrah. Getting a Tata Ace instantly during peak hours used to be impossible, but now it's guaranteed within 15 minutes. Best goods transport in Kolkata!",
      rating: 5,
      type: "Local Business",
      avatar: null,
      logo: null,
      cityTarget: "Kolkata"
    },
    {
      name: "Sanjay Pal",
      role: "Hardware Shop Owner",
      location: "Chiriyamore, Barrackpore",
      quote: "Since GoMyTruck opened their HQ here in Barrackpore, we've shifted all our logistics to them. Booking a mini truck for local hardware deliveries is cheaper than local stands. Plus, the 100% damage guarantee gives peace of mind.",
      rating: 5,
      type: "Retail Partner",
      avatar: null,
      logo: null,
      cityTarget: "Barrackpore"
    },
    {
      name: "Anand Deshmukh",
      role: "Founder, Deshmukh Sweets & Savouries",
      location: "Pune, Maharashtra",
      quote: "As a sweets manufacturing business, fresh delivery is paramount. Before using GoMyTruck, we had continuous issues with local driver groups and price hikes. Now, with the custom Tata Ace fleet, we have 100% price transparency.",
      rating: 5,
      type: "Enterprise Partner",
      avatar: "/avatar_1.png",
      logo: "/logo_1.png"
    },
    {
      name: "Priya Nair",
      role: "Home Maker",
      location: "Bengaluru, Karnataka",
      quote: "I was extremely anxious about shifting my entire 3 BHK household. The Packers & Movers service from GoMyTruck was exceptional. They packed every glass item diligently, and shifted everything in under 5 hours.",
      rating: 5,
      type: "Shifting Customer",
      avatar: "/avatar_2.png",
      logo: null
    },
    {
      name: "Vikram Malhotra",
      role: "Supply Chain Head, ElectroMart India",
      location: "Gurugram, Delhi NCR",
      quote: "Integrating GoMyTruck' API into our distribution stack has been a game changer. Live GPS tracking allows our warehouse managers to keep labor ready exactly at the arrival time. Reduced idle time by 34%!",
      rating: 5,
      type: "Business Account",
      avatar: null,
      logo: "/logo_2.png"
    },
    {
      name: "Arjun Gupta",
      role: "E-Commerce Merchant",
      location: "Chennai, Tamil Nadu",
      quote: "I use their on-demand bike delivery for delivering premium customized jewelry across Chennai. Fares starting from ₹49 makes it cheaper than hiring a full-time delivery boy. Highly recommend!",
      rating: 4.8,
      type: "Regular Merchant",
      avatar: null,
      logo: null
    }
  ];

  // If a city is provided, prioritize testimonials that match the city, then fill the rest
  let testimonials = allTestimonials;
  if (city) {
    const cityMatches = allTestimonials.filter(t => t.cityTarget && t.cityTarget.toLowerCase() === city.toLowerCase());
    const others = allTestimonials.filter(t => !t.cityTarget || t.cityTarget.toLowerCase() !== city.toLowerCase());
    testimonials = [...cityMatches, ...others].slice(0, 4); // Keep it to 4 max
  } else {
    testimonials = allTestimonials.slice(0, 4);
  }

  return (
    <section id="testimonials" className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 -right-44 w-96 h-94 bg-brand-100 rounded-full blur-[120px] opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-600 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <MessageSquare size={13} />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            What Our Partners & Shifting Clients Say
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="text-slate-500 font-light text-base sm:text-lg">
            Read real feedback from small vendors, massive consumer brands, and households across major Indian cities who rely on us daily.
          </p>
        </div>

        {/* Testimonial Masonry/Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 hover:bg-brand-50 hover:shadow-xl hover:border-brand-100/40 transition-all duration-300 relative text-left group"
            >
              {/* Quote icon watermark */}
              <Quote size={80} className="absolute right-6 bottom-6 text-slate-200/40 group-hover:text-brand-100/40 pointer-events-none transition-colors" />

              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-50 border border-slate-100 text-brand-600 px-3 py-1 rounded-full shadow-sm">
                    {test.type}
                  </span>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < Math.floor(test.rating) ? "currentColor" : "none"} 
                      className={i < Math.floor(test.rating) ? "text-amber-400" : "text-slate-300"}
                    />
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-1.5">{test.rating}</span>
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6 relative z-10">
                "{test.quote}"
              </p>

              {/* Author Details with Avatars/Logos */}
              <div className="flex items-center gap-3.5 border-t border-slate-200/60 pt-5 relative z-10">
                {/* Avatar / Initials */}
                <div className="h-12 w-12 rounded-full bg-brand-100 border border-brand-200 text-brand-600 flex items-center justify-center font-bold text-sm shadow-sm overflow-hidden shrink-0">
                  {test.avatar ? (
                    <img src={test.avatar} alt={test.name} className="w-full h-full object-cover" />
                  ) : (
                    test.name.split(" ").map(n => n[0]).join("")
                  )}
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base tracking-wide flex items-center gap-2">
                    {test.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-snug max-w-[200px]">
                    {test.role} • <span className="text-slate-400">{test.location}</span>
                  </p>
                </div>

                {/* Company Logo (if available) */}
                {test.logo && (
                  <div className="h-10 w-24 shrink-0 bg-brand-50 border border-slate-100 rounded-lg p-1.5 flex items-center justify-center shadow-sm">
                    <img src={test.logo} alt="Company Logo" className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
