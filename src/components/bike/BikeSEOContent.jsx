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
            When it comes to fast and affordable two-wheeler delivery in {city}, GoMyTruck is your
            most trusted partner. Whether you need to send urgent documents, small parcels, food
            packages, or business samples across the city, our network of verified bike delivery
            partners ensures your shipment reaches its destination quickly and safely. With
            complete fare transparency and no hidden charges, you get peace of mind from pickup
            to drop-off.
          </p>
          <p>
            Our dedicated two-wheeler partners in {city} are thoroughly verified, trained, and
            equipped to handle your deliveries with speed and care. Book a bike delivery instantly
            on our platform, track your parcel in real-time, and experience a seamless last-mile
            logistics solution. From individual quick deliveries to high-volume business dispatch,
            GoMyTruck is powering {city}'s fastest delivery network — one ride at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
