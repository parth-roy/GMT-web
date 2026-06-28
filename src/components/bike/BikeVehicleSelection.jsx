import React from "react"
import { Weight, Zap } from "lucide-react"

const BIKE_VEHICLES = [
  {
    name: "Two Wheeler (Petrol)",
    img: "/bikes/bike.png",
    capacity: "20 kg",
    dimension: "1.5 × 1.5 × 1.5 ft",
    startingPrice: "₹49",
    tag: "Super Fast",
    desc: "Ideal for documents, keys, small parcels and fast intra-city drops.",
  },
  {
    name: "EV Scooter (Green)",
    img: "/bikes/scooter.png",
    capacity: "20 kg",
    dimension: "1.5 × 1.5 × 1.5 ft",
    startingPrice: "₹45",
    tag: "Eco Friendly",
    desc: "Zero-emission electric delivery — same speed, lower cost, greener city.",
  },
]

export default function BikeVehicleSelection({ city }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-display font-extrabold text-slate-900">
          Book a Two-Wheeler Delivery in {city}
        </h2>
        <p className="text-slate-500 mt-2 text-base">
          The fastest way to send documents, small parcels and urgent packages across the city.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {BIKE_VEHICLES.map((v) => (
          <div
            key={v.name}
            className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:shadow-lg hover:border-brand-300 transition-all cursor-pointer group"
          >
            {/* Tag */}
            <span className={`self-start text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-4 ${
              v.tag === "Eco Friendly"
                ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                : "bg-amber-100 text-amber-800 border-amber-200"
            }`}>
              {v.tag === "Eco Friendly" ? <Zap size={10} className="inline mr-1" /> : null}
              {v.tag}
            </span>

            {/* Image */}
            <div className="w-full bg-slate-50 rounded-xl overflow-hidden mb-5">
              <img
                src={v.img}
                alt={v.name}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="flex items-center gap-1 bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-bold">
                <Weight size={12} /> {v.capacity}
              </span>
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-xs font-bold">
                {v.dimension}
              </span>
            </div>

            <h3 className="text-lg font-display font-extrabold text-slate-900 group-hover:text-brand-700 transition-colors">
              {v.name}
            </h3>
            <p className="text-slate-500 text-sm mt-1 leading-relaxed flex-1">{v.desc}</p>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
              <span className="text-slate-400 text-xs font-medium">
                Starting from <span className="text-slate-800 font-extrabold text-sm">{v.startingPrice}</span>
              </span>
              <a href="#" className="text-brand-600 font-bold text-sm border-b border-dashed border-brand-400 pb-0.5 hover:text-brand-700 transition-colors">
                Get Estimate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
