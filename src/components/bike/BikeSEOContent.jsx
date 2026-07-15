import React from "react"

export default function BikeSEOContent({ city }) {
  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
          Two-Wheeler Delivery Service in {city}
        </h2>

        <div className="space-y-4 text-slate-600 leading-relaxed text-lg text-left">
          <p>
            GoMyTruck accepts two-wheeler delivery requests for eligible documents and small parcels in supported parts of {city}. Enter the exact route, describe the item accurately, and review current serviceability and the route-based estimate before confirming.
          </p>
          <p>
            Partner identity and vehicle documents are reviewed during onboarding. Assignment, pickup time, tracking availability, and delivery time depend on partner supply, route conditions, the item, and the confirmed booking. Restricted, unsafe, oversized, or incorrectly declared items may be refused.
          </p>
        </div>
      </div>
    </section>
  )
}
