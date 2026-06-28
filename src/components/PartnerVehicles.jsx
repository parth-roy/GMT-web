import React from "react"
import { CheckCircle2 } from "lucide-react"

const vehicles = [
  {
    category: "Two Wheelers",
    models: "Bike, Scooty",
    capacity: "Up to 20 Kg",
    imgSrc: "/bikes/bike.png",
    fallbackIcon: "🏍️"
  },
  {
    category: "3-Wheelers",
    models: "Piaggio Ape, Champion",
    capacity: "Up to 500 Kg",
    imgSrc: "/trucks/3-Wheeler.png",
    fallbackIcon: "🛺"
  },
  {
    category: "Light Commercial",
    models: "Tata Ace, Mahindra Jeeto",
    capacity: "750 Kg - 1 Ton",
    imgSrc: "/trucks/Tata Ace.png",
    fallbackIcon: "🛻"
  },
  {
    category: "Medium Commercial",
    models: "Bolero Pickup, Tata 407",
    capacity: "1.5 Ton - 2.5 Ton",
    imgSrc: "/trucks/Bolero-Pickup.png",
    fallbackIcon: "🚚"
  },
  {
    category: "Heavy Trucks",
    models: "14ft, 17ft, 19ft, Containers",
    capacity: "3 Ton - 10+ Ton",
    imgSrc: "/trucks/14ft-Truck.png",
    fallbackIcon: "🚛"
  }
]

export default function PartnerVehicles() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
            Vehicles We Accept
          </h2>
          <p className="text-lg text-slate-600">
            From bikes to multi-axle trucks, we have daily loads available for every category across our network.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {vehicles.map((v, idx) => (
            <div 
              key={idx} 
              className="bg-white border-2 border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col text-center hover:border-brand-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              {/* Image Container matching Services.jsx */}
              <div className="w-full mb-6 bg-slate-50 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={v.imgSrc} 
                  alt={v.category} 
                  className="w-full h-auto mix-blend-multiply"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-6xl hidden py-8">{v.fallbackIcon}</span>
              </div>

              <h3 className="text-xl font-display font-extrabold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{v.category}</h3>
              <p className="text-sm font-medium text-slate-500 mb-6 h-10">{v.models}</p>
              
              <div className="mt-auto inline-flex items-center justify-center gap-2 bg-brand-50 border border-brand-100 px-4 py-2 rounded-xl text-sm font-bold text-brand-700 w-full">
                <CheckCircle2 size={16} className="text-brand-500" />
                {v.capacity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
