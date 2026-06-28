import React, { useState } from "react"
import { Weight, Ruler } from "lucide-react"

const LIGHT_VEHICLES = [
  {
    name: "3 Wheeler",
    img: "/trucks/3-Wheeler.png",
    capacity: "500 kg",
    dimension: "5100 × 1800 mm",
    startingPrice: "₹80",
    desc: "Ideal for small parcels, courier drops & intra-city deliveries.",
  },
  {
    name: "E-Loader",
    img: "/trucks/E-Loader.png",
    capacity: "500 kg",
    dimension: "2600 × 1700 mm",
    startingPrice: "₹80",
    desc: "Eco-friendly open flatbed for light goods & last-mile delivery.",
  },
  {
    name: "Tata Ace",
    img: "/trucks/Tata Ace.png",
    capacity: "750 kg",
    dimension: "3800 × 1850 mm",
    startingPrice: "₹150",
    desc: "The go-to mini truck for household goods & commercial loads.",
  },
]

const HEAVY_VEHICLES = [
  {
    name: "Pickup",
    img: "/trucks/Pickup.png",
    capacity: "1,000 kg",
    dimension: "5200 × 1750 mm",
    startingPrice: "₹300",
    desc: "Open flatbed pickup — great for construction material & bulk items.",
  },
  {
    name: "Bolero Pickup",
    img: "/trucks/Bolero-Pickup.png",
    capacity: "1,250 kg",
    dimension: "4950 × 1900 mm",
    startingPrice: "₹350",
    desc: "Rugged 4WD pickup built for heavy loads across any terrain.",
  },
  {
    name: "14 ft Truck",
    img: "/trucks/14ft-Truck.png",
    capacity: "2,500 kg",
    dimension: "14 ft × 7.5 ft",
    startingPrice: "₹500",
    desc: "Enclosed box truck for furniture shifting, factory goods & more.",
  },
  {
    name: "17 ft Truck",
    img: "/trucks/17ft-Truck.png",
    capacity: "5,000 kg",
    dimension: "17 ft × 7.5 ft",
    startingPrice: "₹800",
    desc: "High-capacity box truck for large-scale commercial transport.",
  },
  {
    name: "20 ft Truck",
    img: "/trucks/20ft-Truck.png",
    capacity: "10,000 kg",
    dimension: "20 ft × 12 ft",
    startingPrice: "₹1,200",
    desc: "Heavy-duty multi-axle truck for industrial & bulk cargo loads.",
  },
]

function VehicleCard({ vehicle }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:shadow-lg hover:border-brand-300 transition-all cursor-pointer group">

      {/* Image area */}
      <div className="w-full bg-slate-50 rounded-xl mb-5 overflow-hidden">
        <img
          src={vehicle.img}
          alt={vehicle.name}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className="flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-bold">
          <Weight size={12} />
          {vehicle.capacity}
        </span>
        <span className="flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-bold">
          <Ruler size={12} />
          {vehicle.dimension}
        </span>
      </div>

      {/* Name + desc */}
      <h3 className="text-lg font-display font-extrabold text-slate-900 group-hover:text-brand-700 transition-colors">
        {vehicle.name}
      </h3>
      <p className="text-slate-500 text-sm mt-1 leading-relaxed flex-1">
        {vehicle.desc}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
        <span className="text-slate-400 text-xs font-medium">
          Starting from{" "}
          <span className="text-slate-800 font-extrabold text-sm">{vehicle.startingPrice}</span>
        </span>
        <a
          href="#"
          className="text-brand-600 font-bold text-sm border-b border-dashed border-brand-400 pb-0.5 hover:text-brand-700 hover:border-brand-700 transition-colors"
        >
          Get Estimate
        </a>
      </div>

    </div>
  )
}

export default function VehicleSelection({ city }) {
  const [activeTab, setActiveTab] = useState("light")

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-display font-extrabold text-slate-900">
          Book Mini Trucks in {city}
        </h2>
        <p className="text-slate-500 mt-2 text-base">
          Choose from our verified fleet — from lightweight delivery vehicles to heavy-haul trucks.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-8 border-b border-slate-200 mb-10">
        <button
          onClick={() => setActiveTab("light")}
          className={`pb-4 px-2 font-bold transition-colors border-b-2 -mb-px ${
            activeTab === "light"
              ? "text-brand-600 border-brand-600"
              : "text-slate-500 border-transparent hover:text-slate-700"
          }`}
        >
          Light Vehicles
          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-semibold ${
            activeTab === "light" ? "bg-brand-100 text-brand-700" : "bg-slate-100 text-slate-500"
          }`}>
            up to 750 kg
          </span>
        </button>
        <button
          onClick={() => setActiveTab("heavy")}
          className={`pb-4 px-2 font-bold transition-colors border-b-2 -mb-px ${
            activeTab === "heavy"
              ? "text-brand-600 border-brand-600"
              : "text-slate-500 border-transparent hover:text-slate-700"
          }`}
        >
          Heavy Vehicles
          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-semibold ${
            activeTab === "heavy" ? "bg-brand-100 text-brand-700" : "bg-slate-100 text-slate-500"
          }`}>
            750 kg+
          </span>
        </button>
      </div>

      {/* Light grid — 3 cards */}
      {activeTab === "light" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {LIGHT_VEHICLES.map((v) => (
            <VehicleCard key={v.name} vehicle={v} />
          ))}
        </div>
      )}

      {/* Heavy grid — 5 cards, 3-col wraps to 2+3 naturally */}
      {activeTab === "heavy" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {HEAVY_VEHICLES.map((v) => (
            <VehicleCard key={v.name} vehicle={v} />
          ))}
        </div>
      )}

    </section>
  )
}
