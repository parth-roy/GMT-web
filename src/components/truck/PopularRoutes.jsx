import React from "react"

const routes = ["Asansol", "Durgapur", "Siliguri", "Haldia", "Kharagpur", "Bhubaneswar", "Patna", "Ranchi", "Dhanbad"]

export default function PopularRoutes({ city }) {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-3 text-left text-3xl font-extrabold text-slate-900 sm:text-center">Common Route Enquiries from {city}</h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-slate-600">Distance, tolls, vehicle suitability, price, and capacity are checked for the exact addresses. These destinations are enquiry examples, not fixed fares or guaranteed coverage.</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((destination) => (
            <div key={destination} className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-700">{city} to {destination}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
