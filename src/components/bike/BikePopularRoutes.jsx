import React from "react"

const destinations = ["Salt Lake", "Howrah", "New Town", "Tollygunge", "Dum Dum", "Behala", "Jadavpur", "Barasat", "Garden Reach"]

export default function BikePopularRoutes({ city }) {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-left text-3xl font-extrabold text-slate-900 sm:text-center">Common Delivery Areas from {city}</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">The route and price are calculated from the exact addresses. These area names are planning examples, not fixed distance, fare, or availability promises.</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((area) => (
            <div key={area} className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700">{city} to {area}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
