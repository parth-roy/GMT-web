import React from "react"
import { ArrowRight, Package, Bike, Truck } from "lucide-react"
import { useNavigate } from "react-router-dom"

const ALL_SERVICES = [
  { id: "truck",  name: "Mini Truck / Tempo", icon: Truck,   route: "/truck" },
  { id: "bike",   name: "Two Wheelers",        icon: Bike,    route: "/bike"  },
  { id: "movers", name: "Packers and Movers",  icon: Package, route: "#"      },
]

export default function OtherServices({ currentService }) {
  const navigate = useNavigate()
  const services = ALL_SERVICES.filter((s) => s.id !== currentService)

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-left sm:text-center">
          Other Services to Choose From
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((srv) => (
            <button
              key={srv.id}
              onClick={() => srv.route !== "#" && navigate(srv.route)}
              className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-brand-300 hover:bg-brand-50 hover:shadow-lg transition-all group w-full text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-600 group-hover:scale-110 transition-transform">
                  <srv.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-700 transition-colors">
                  {srv.name}
                </h3>
              </div>
              <div className="text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all">
                <ArrowRight size={24} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
