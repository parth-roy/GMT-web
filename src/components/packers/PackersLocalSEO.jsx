import React from "react"
import { Link } from "react-router-dom"

const localPages = [
  ["Packers and movers in Kolkata", "/kolkata/packers-and-movers"],
  ["Kolkata transport hub", "/kolkata"],
  ["Barrackpore transport hub", "/barrackpore"],
  ["Howrah goods transport", "/howrah/goods-transport"],
  ["Salt Lake goods transport", "/salt-lake/goods-transport"],
  ["New Town goods transport", "/new-town/goods-transport"],
]

export default function PackersLocalSEO({ city }) {
  return (
    <section className="border-t border-slate-200 bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-center text-2xl font-bold text-slate-800">Local Moving and Transport Information</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">Review the relevant {city} service page, then submit exact addresses and inventory for a scope and availability check.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {localPages.map(([label, href]) => (
            <Link key={href} to={href} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-brand-400 hover:text-brand-700">{label}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}
