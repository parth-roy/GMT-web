import React, { useState } from "react"
import { Sparkles, Navigation, Dumbbell, ShieldAlert, BadgeCent } from "lucide-react"

export default function Services({ onSelectVehicle }) {
  const [filterWeight, setFilterWeight] = useState(500)

  // Expanded fleet data with 2-3 vehicles per category
  const fleet = [
    // 0-20kg
    {
      id: "bike-petrol", cat: "0-20", title: "Two Wheeler (Petrol)", image: "/bikes/bike.png", capacity: "20 kg", dimensions: "1.5 x 1.5 x 1.5 ft", basePrice: "₹49", perKm: "₹10/km", ideal: "Documents, keys, small boxes, fast delivery.", tag: "Super Fast", tagColor: "bg-amber-100 text-amber-800 border-amber-200"
    },
    {
      id: "bike-ev", cat: "0-20", title: "EV Scooter (Green)", image: "/bikes/scooter.png", capacity: "20 kg", dimensions: "1.5 x 1.5 x 1.5 ft", basePrice: "₹45", perKm: "₹8/km", ideal: "Eco-friendly instant local delivery.", tag: "Eco Friendly", tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
    },

    // 21-500kg
    {
      id: "auto-petrol", cat: "21-500", title: "Three Wheeler Auto", image: "/trucks/3-Wheeler.png", capacity: "500 kg", dimensions: "5.5 x 4.5 x 4 ft", basePrice: "₹199", perKm: "₹18/km", ideal: "Crates, small appliances, inventory.", tag: "Most Popular", tagColor: "bg-brand-100 text-brand-800 border-brand-200"
    },
    {
      id: "auto-ev", cat: "21-500", title: "EV Cargo Auto", image: "/trucks/E-Loader.png", capacity: "500 kg", dimensions: "5.5 x 4.5 x 4 ft", basePrice: "₹189", perKm: "₹15/km", ideal: "Local shops, green urban logistics.", tag: "Zero Emission", tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
    },

    // 501-850kg
    {
      id: "ace-standard", cat: "501-850", title: "Tata Ace (Chota Hathi)", image: "/trucks/Tata Ace.png", capacity: "850 kg", dimensions: "7 x 4.8 x 4.8 ft", basePrice: "₹349", perKm: "₹22/km", ideal: "Furniture, commercial goods, hardware.", tag: "Versatile", tagColor: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      id: "super-carry", cat: "501-850", title: "Maruti Super Carry", image: "/trucks/Tata Ace.png", capacity: "740 kg", dimensions: "7.1 x 4.9 x 4.8 ft", basePrice: "₹339", perKm: "₹21/km", ideal: "FMCG, hardware, textiles, fast transit.", tag: "Economical", tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200"
    },
    {
      id: "ace-ht", cat: "501-850", title: "Tata Ace High Deck", image: "/trucks/Tata Ace.png", capacity: "850 kg", dimensions: "7 x 4.8 x 6 ft", basePrice: "₹399", perKm: "₹24/km", ideal: "Tall items, secure cargo, electronics.", tag: "Extra Height", tagColor: "bg-purple-100 text-purple-800 border-purple-200"
    },

    // 851-1500kg
    {
      id: "bolero", cat: "851-1500", title: "Bolero Pickup (1.5T)", image: "/trucks/Bolero-Pickup.png", capacity: "1,500 kg", dimensions: "8.5 x 5 x 5 ft", basePrice: "₹499", perKm: "₹26/km", ideal: "Heavy machinery, building raw materials.", tag: "Heavy Duty", tagColor: "bg-rose-100 text-rose-800 border-rose-200"
    },
    {
      id: "dost", cat: "851-1500", title: "Ashok Leyland Dost", image: "/trucks/Pickup.png", capacity: "1,500 kg", dimensions: "8.8 x 5.2 x 5 ft", basePrice: "₹529", perKm: "₹27/km", ideal: "Agricultural produce, crates, heavy loads.", tag: "Spacious", tagColor: "bg-orange-100 text-orange-800 border-orange-200"
    },

    // 1501-3500kg+
    {
      id: "eicher-14", cat: "1501-3500", title: "Eicher 14ft (3.4 Ton)", image: "/trucks/14ft-Truck.png", capacity: "3,400 kg", dimensions: "14 x 6 x 6.5 ft", basePrice: "₹1,199", perKm: "₹35/km", ideal: "Bulk goods, 2-3 BHK shifting.", tag: "Enterprise", tagColor: "bg-slate-800 text-slate-100 border-slate-700"
    },
    {
      id: "canter-17", cat: "1501-3500", title: "Tata 407 / 17ft", image: "/trucks/17ft-Truck.png", capacity: "4,000 kg", dimensions: "17 x 6.5 x 7 ft", basePrice: "₹1,499", perKm: "₹40/km", ideal: "Factory supply, massive moves, pallets.", tag: "Maximum Load", tagColor: "bg-red-100 text-red-800 border-red-200"
    }
  ]

  const getRecommendedCategory = (weight) => {
    if (weight <= 20) return "0-20"
    if (weight <= 500) return "21-500"
    if (weight <= 850) return "501-850"
    if (weight <= 1500) return "851-1500"
    return "1501-3500"
  }

  const activeCategory = getRecommendedCategory(filterWeight)
  const displayedVehicles = fleet.filter(v => v.cat === activeCategory)

  const handleSelect = (vehicleId) => {
    let category = "truck"
    if (vehicleId.includes("bike")) category = "bike"
    if (vehicleId === "movers") category = "movers"
    
    onSelectVehicle(category)
  }

  return (
    <section id="services" className="py-24 bg-brand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-brand-200">
            <Sparkles size={14} className="text-brand-500" />
            <span>Versatile Fleet</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Transport Fleet For Every Business & Shifting Need
          </h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 font-medium text-lg sm:text-xl">
            From envelopes to entire factory raw materials, our extensive network of verified driver partners ensures safe, on-time delivery across any terrain.
          </p>
        </div>

        {/* Interactive Weight Slider */}
        <div className="max-w-3xl mx-auto mb-16 bg-white p-6 sm:p-10 rounded-[2rem] border border-slate-200 shadow-xl">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-extrabold text-2xl text-slate-900">Cargo Weight Estimator</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">Slide to find the recommended vehicles for your load.</p>
            </div>
            <div className="bg-slate-900 text-white font-black text-2xl px-6 py-2 rounded-xl shadow-md border-b-4 border-brand-500">
              {filterWeight} kg
            </div>
          </div>
          
          <input 
            type="range" 
            min="1" 
            max="3500" 
            step="10" 
            value={filterWeight} 
            onChange={(e) => setFilterWeight(Number(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-500 mb-2"
          />
          <div className="flex justify-between text-[11px] font-black text-slate-400 uppercase px-1">
            <span>1 kg</span>
            <span>3500+ kg</span>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-slate-100 flex items-center justify-center gap-3">
            <span className="text-base font-bold text-slate-500 uppercase tracking-widest">Recommended Vehicles:</span>
            <span className="text-xl font-black text-brand-600 bg-brand-50 px-4 py-1 rounded-lg">
              {displayedVehicles.length} Options Found
            </span>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVehicles.map((vehicle) => {
            return (
              <div 
                key={vehicle.id} 
                className="group relative bg-white border-2 border-slate-200 hover:border-brand-500 rounded-[2rem] p-8 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between animate-in fade-in slide-in-from-bottom-8"
              >
                <div>
                  {/* Tag */}
                  <span className={`absolute top-6 right-6 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border z-10 ${vehicle.tagColor}`}>
                    {vehicle.tag}
                  </span>

                  {/* High-quality 3D Image placeholder space */}
                  {/* Changed background to white and removed mix-blend to solve artifacting on solid white images */}
                  <div className="w-full mb-6 bg-slate-50 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-full h-auto"
                    />
                  </div>

                  <h3 className="text-2xl font-display font-extrabold mb-2 text-slate-900 group-hover:text-brand-600 transition-colors">
                    {vehicle.title}
                  </h3>

                  {/* Vehicle Stats */}
                  <div className="grid grid-cols-2 gap-4 my-6 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-1.5">
                        <Dumbbell size={12} className="text-brand-500" /> Capacity
                      </span>
                      <span className="text-base font-black text-slate-800 mt-1">{vehicle.capacity}</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest flex items-center gap-1.5">
                        <Navigation size={12} className="text-brand-500" /> Dimensions
                      </span>
                      <span className="text-base font-black text-slate-800 mt-1">{vehicle.dimensions}</span>
                    </div>
                  </div>

                  {/* Pricing Info */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Starting at</span>
                    <span className="text-3xl font-black text-slate-900">{vehicle.basePrice}</span>
                    <span className="text-xs text-brand-700 font-bold bg-brand-100 px-2.5 py-1 rounded-md">{vehicle.perKm}</span>
                  </div>

                  {/* Description */}
                  <div className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-5 text-left mb-6">
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                      <ShieldAlert size={14} className="text-amber-500" /> Ideal For
                    </p>
                    <p className="text-slate-600 font-medium text-sm">{vehicle.ideal}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleSelect(vehicle.id)}
                  className="w-full font-bold text-sm py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer bg-slate-900 text-white shadow-xl hover:bg-brand-600 hover:shadow-brand-500/30"
                >
                  <BadgeCent size={18} />
                  <span className="tracking-wide">Select {vehicle.title.split(' ')[0]}</span>
                </button>
              </div>
            )
          })}

          {/* Packers & Movers Dedicated Card */}
          <div 
            className="relative bg-slate-900 border-2 border-slate-800 hover:border-emerald-500 rounded-[2rem] p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 flex flex-col justify-between hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
          >
            <div>
              <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 z-10">
                Premium Service
              </span>

              <div className="w-full h-48 mb-6 bg-slate-800/50 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <Sparkles size={80} className="text-emerald-500/40 group-hover:text-emerald-400 transition-colors duration-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white mb-2 tracking-wide">
                Packers & Movers
              </h3>

              <div className="grid grid-cols-2 gap-4 my-6 bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Full Shifting
                  </span>
                  <span className="text-base font-black text-emerald-400 mt-1">End-to-End</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Packaging
                  </span>
                  <span className="text-base font-black text-emerald-400 mt-1">Multi-Layered</span>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Starting at</span>
                <span className="text-3xl font-black text-white">₹2,999</span>
                <span className="text-xs text-emerald-300 font-bold bg-emerald-900/50 px-2.5 py-1 rounded-md">Includes Labor</span>
              </div>

              <div className="text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-5 text-left mb-6">
                <p className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-2">
                  What's Included:
                </p>
                <p className="text-slate-300 font-medium text-sm">
                  Bubble wrapping, loading/unloading, secure sealed container transport, and unpacking at destination with insurance.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleSelect("movers")}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black text-sm py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-emerald-500/20"
            >
              <Sparkles size={18} />
              <span className="tracking-wide">Book Shifting Service</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
