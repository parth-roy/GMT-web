import React, { useEffect, useRef, useState } from "react"
import { DollarSign, Route, ShieldCheck, Map, Smartphone } from "lucide-react"

const benefitsData = [
  {
    icon: DollarSign,
    title: "Earning Terms Per Load",
    description: "Review the quoted or awarded amount and the applicable trip terms before accepting work. Income varies with completed loads.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    image: "/benefits/earning-terms.webp"
  },
  {
    icon: Route,
    title: "Route-Matched Opportunities",
    description: "Review loads for eligible vehicles and routes, including possible return directions. Platform does not guarantee return load.",
    color: "text-brand-600",
    bgColor: "bg-brand-50",
    image: "/benefits/route-matched.webp"
  },
  {
    icon: ShieldCheck,
    title: "Documented Onboarding",
    description: "Identity, driving, and commercial-vehicle documents are reviewed before activation. Approval is based on eligibility rules.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    image: "/benefits/documented-onboarding.webp"
  },
  {
    icon: Map,
    title: "Accept Suitable Work",
    description: "Choose whether to accept or bid on an available load after reviewing its route, goods, vehicle requirement, and timing.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    image: "/benefits/accept-work.webp"
  },
  {
    icon: Smartphone,
    title: "Easy to Use App",
    description: "Review eligible loads, manage accepted work, use trip navigation, and view recorded earnings in the partner workflow.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    image: "/benefits/easy-app.webp"
  }
]

const PremiumCard = ({ benefit, index, isVisible }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 120}ms`,
        transitionProperty: 'opacity, transform, box-shadow, border-color',
        transitionDuration: '400ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className="group relative bg-white rounded-[28px] p-8 md:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-500/30 transition-all overflow-hidden flex flex-col h-[480px] lg:h-[500px] cursor-default"
    >
      {/* Content Top */}
      <div className="relative z-20 flex-shrink-0 flex flex-col justify-start mt-2">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors duration-400 ease-out">
          {benefit.title}
        </h3>
        <p className="text-slate-700 font-medium text-sm leading-relaxed pr-2">
          {benefit.description}
        </p>
      </div>

      {/* Image Bottom Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[70%] z-10 pointer-events-none overflow-hidden rounded-b-[28px]">
        {/* Gradient Overlay for text readability at the top */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-white/60 to-transparent z-10 h-[50%]" />
        
        {/* Illustration with Parallax and Gentle Float */}
        <div 
          className="w-full h-full animate-float transition-transform duration-400 ease-out relative"
          style={{ transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)` }}
        >
          <img
            src={benefit.image}
            alt={benefit.title}
            className="w-full h-full object-cover object-bottom opacity-100 group-hover:scale-[1.06] transition-transform duration-400 ease-out"
          />
        </div>
      </div>
    </div>
  )
}

export default function PartnerBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-[#FAFAFA] relative overflow-hidden">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center max-w-3xl mx-auto mb-20 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-6">
            Why Drive With GoMyTruck?
          </h2>
          <p className="text-xl text-slate-600">
            The platform supports onboarding, load discovery, bidding, trip execution, and internal earnings records without promising a minimum income or load volume.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, idx) => (
            <PremiumCard key={idx} benefit={benefit} index={idx} isVisible={isVisible} />
          ))}

          {/* Call out card */}
          <div 
            onClick={(e) => {
              e.stopPropagation()
              window.scrollTo({top: 0, behavior: 'smooth'})
              window.dispatchEvent(new Event('open_partner_registration'))
            }} 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: `${benefitsData.length * 120}ms`,
              transitionProperty: 'opacity, transform, box-shadow, border-color',
              transitionDuration: '500ms',
            }}
            className="group relative bg-white rounded-[28px] p-8 md:p-10 border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 hover:border-brand-500/30 transition-all overflow-hidden flex flex-col h-[480px] lg:h-[500px] cursor-pointer"
          >
            {/* Content Top */}
            <div className="relative z-20 flex-shrink-0 flex flex-col justify-start mt-2">
              <h3 className="text-3xl font-display font-extrabold mb-3 text-slate-900 group-hover:text-brand-600 transition-colors duration-400">Ready to start?</h3>
              <p className="text-slate-700 font-medium text-sm leading-relaxed mb-6 pr-2">
                Complete the registration form above. The onboarding team will review it and contact you when the relevant capacity is available.
              </p>
              <button 
                className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-6 rounded-xl transition-colors w-max shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50"
              >
                Register Now
              </button>
            </div>

            {/* Image Bottom Background */}
            <div className="absolute bottom-0 left-0 right-0 h-[70%] z-10 pointer-events-none overflow-hidden rounded-b-[28px]">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-white/60 to-transparent z-10 h-[50%]" />
              <div className="w-full h-full animate-float transition-transform duration-400 ease-out relative">
                <img src="/benefits/ready-to-start.webp" alt="Ready" className="w-full h-full object-cover object-bottom opacity-100 group-hover:scale-[1.06] transition-transform duration-400 ease-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
