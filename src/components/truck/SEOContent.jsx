import React from "react"
import { Truck, Package, MapPin, ArrowRight, BarChart2, Users } from "lucide-react"

export default function SEOContent({ city }) {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section 1: Online Truck Booking in {city} ── */}
        <div className="mb-14">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Truck size={28} className="text-brand-600 shrink-0" />
            Online Truck Booking in {city} — Instant, Transparent & Reliable
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base lg:text-lg text-left">
            <p>
              GoMyTruck is {city}'s most trusted platform for <strong>online truck booking</strong>. Whether you need to
              <strong> book a truck online</strong> for commercial cargo, household shifting, or industrial freight, our
              platform connects you with verified driver-partners within minutes. With same-day transport and instant
              booking available round the clock, GoMyTruck redefines how {city} moves its goods.
            </p>
            <p>
              Unlike traditional brokers, GoMyTruck offers 100% transparent pricing with no hidden charges. When you
              <strong> hire a truck for goods</strong> through our platform, you see the exact fare upfront — calculated
              based on distance, vehicle type, and cargo weight. Real-time GPS tracking keeps you informed from pickup to
              delivery. For <strong>urgent truck booking near me</strong> in {city}, we typically assign a driver within
              15–20 minutes.
            </p>
          </div>
        </div>

        {/* ── Section 2: Mini Truck & Tata Ace on Rent ── */}
        <div className="mb-14 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Package size={28} className="text-brand-600 shrink-0" />
            Mini Truck Booking &amp; Tata Ace on Rent in {city}
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base lg:text-lg text-left">
            <p>
              For light to medium loads within {city}, our <strong>mini truck booking near me</strong> service is the
              perfect solution. The <strong>Tata Ace on rent</strong> — India's most popular light commercial vehicle —
              is available at competitive per-km rates. The <strong>Tata Ace rent per km</strong> on GoMyTruck is
              transparent and starts as low as ₹12/km for local trips in {city}.
            </p>
            <p>
              Our <strong>pickup truck booking</strong> and <strong>pickup truck near me</strong> service covers all
              major neighbourhoods in {city}. Whether you're a small business owner, an e-commerce seller, or an
              individual moving household goods, our <strong>mini truck transport near me</strong> fleet is ready.
              You can also <strong>book Tata Ace online</strong> via our app in just 3 steps.
            </p>
          </div>

          {/* Mini pricing table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-3 font-semibold text-slate-700">Vehicle Type</th>
                  <th className="p-3 font-semibold text-slate-700">Capacity</th>
                  <th className="p-3 font-semibold text-slate-700">Est. Rate (per km)</th>
                  <th className="p-3 font-semibold text-slate-700">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-3 font-medium text-brand-700">Tata Ace / Mini Truck</td>
                  <td className="p-3">750 kg</td>
                  <td className="p-3">₹12–₹18/km</td>
                  <td className="p-3">Local city transport, small loads</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-3 font-medium text-brand-700">Pickup Truck</td>
                  <td className="p-3">1,000–1,500 kg</td>
                  <td className="p-3">₹16–₹24/km</td>
                  <td className="p-3">Medium cargo, shop deliveries</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-3 font-medium text-brand-700">14-ft / 17-ft Truck</td>
                  <td className="p-3">3–5 tonnes</td>
                  <td className="p-3">₹22–₹35/km</td>
                  <td className="p-3">Intercity, FTL shipments</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-3 font-medium text-brand-700">19-ft / 22-ft Container</td>
                  <td className="p-3">8–10 tonnes</td>
                  <td className="p-3">₹30–₹50/km</td>
                  <td className="p-3">Industrial, factory to warehouse</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Section 3: FTL & Part Load Transport ── */}
        <div className="mb-14">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
            <BarChart2 size={28} className="text-brand-600 shrink-0" />
            Full Truck Load (FTL) &amp; Part Load Transport (PTL) Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 text-slate-600 leading-relaxed text-base lg:text-lg text-left">
              <h3 className="text-xl font-bold text-slate-800">Full Truck Load (FTL) Transport</h3>
              <p>
                <strong>Full truck load services</strong> (FTL) give you exclusive use of the entire vehicle for your
                cargo — ensuring faster delivery, higher security, and no co-loading. FTL is ideal for
                <strong> intercity transport booking</strong>, large commercial shipments, factory-to-distribution-centre
                freight, and bulk B2B orders. GoMyTruck's FTL network covers 500+ routes across India.
              </p>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed text-base lg:text-lg text-left">
              <h3 className="text-xl font-bold text-slate-800">Part Load Transport (PTL / LTL)</h3>
              <p>
                <strong>Part load transport</strong> (PTL) — also known as less-than-truckload (LTL) — lets you share
                truck capacity and pay only for what you use. This is perfect for small businesses, e-commerce sellers,
                and SMEs shipping goods between cities. Our <strong>PTL logistics</strong> service maintains the same
                safety and tracking standards as FTL at a fraction of the cost.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 4: Near-Me & Local Transport in {city} ── */}
        <div className="mb-14 bg-brand-50/50 rounded-2xl p-8 border border-brand-100">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
            <MapPin size={28} className="text-brand-600 shrink-0" />
            Local Goods Transport Service Near Me in {city}
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base lg:text-lg text-left">
            <p>
              Finding a reliable <strong>goods carrier near me</strong> in {city} has never been easier. GoMyTruck's
              local fleet of mini trucks and pickup trucks is spread across {city}'s key neighbourhoods, ensuring
              that when you search for <strong>transport service near me</strong> or{" "}
              <strong>local goods transport near me</strong>, you find an available vehicle fast. Our
              <strong> nearest transport agency</strong> network covers every corner of {city}.
            </p>
            <p>
              We also serve as the go-to <strong>transport company near me</strong> for businesses with recurring
              delivery needs. From <strong>commercial truck rental</strong> for retail distribution to{" "}
              <strong>local transport service near me</strong> for daily last-mile deliveries, GoMyTruck adapts to
              your schedule. <strong>Affordable goods transport</strong> doesn't mean compromising on reliability —
              our transparent pricing and verified drivers ensure a premium experience every time.
            </p>

            {/* Near-Me Keyword Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Truck booking near me",
                "Mini truck booking near me",
                "Pickup truck near me",
                "Transport service near me",
                "Goods carrier near me",
                `Tata Ace on rent near me`,
                `Local truck stand nearby`,
                "Nearest transport agency",
                "Transport contractors near me",
                "Truck rental near me"
              ].map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-brand-200 text-brand-700 text-xs font-semibold rounded-full shadow-sm">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 5: West Bengal & Barrackpore Local SEO ── */}
        <div className="mb-14">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
            Truck Booking in West Bengal &amp; Barrackpore
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-base lg:text-lg text-left">
            <p>
              GoMyTruck is proudly headquartered in Barrackpore, West Bengal, giving us a unique advantage in serving
              the region. We provide <strong>truck booking in Barrackpore</strong>, <strong>transport service in
              Barrackpore</strong>, and are among the top <strong>transporters in Barrackpore</strong>. Our
              local network extends to cover all of North 24 Parganas and Greater Kolkata.
            </p>
            <p>
              For businesses across West Bengal, GoMyTruck provides <strong>truck booking in Kolkata</strong>,
              <strong> FMCG transport in West Bengal</strong>, <strong>part load transport from Kolkata</strong> to
              major Indian cities, and dedicated <strong>Kolkata transport company</strong> services for corporate
              clients. Whether you need <strong>mini truck rent in Barrackpore</strong> or a full fleet solution,
              we are your local logistics partner.
            </p>

            {/* WB city pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Truck booking Barrackpore",
                "Transport service Barrackpore",
                "Mini truck rent Barrackpore",
                "Goods transport Barrackpore",
                "Truck booking Kolkata",
                "Truck booking West Bengal",
                "FMCG transport West Bengal",
                "Part load transport Kolkata",
                "Kolkata transport company",
                "Transporters in Barrackpore"
              ].map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-full shadow-sm">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 6: Why GoMyTruck ── */}
        <div className="mb-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Users size={28} className="text-brand-600 shrink-0" />
            Why GoMyTruck is the Best Goods Transport Service in {city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Instant Online Booking", desc: "Book truck online in under 60 seconds. No phone calls, no haggling — just a transparent, upfront price." },
              { title: "Verified Driver-Partners", desc: "Every driver is background-checked, licensed, and trained. Your goods are always in safe hands." },
              { title: "Real-Time GPS Tracking", desc: "Track your shipment live from pickup to delivery. Full visibility, zero anxiety." },
              { title: "Pan India Network", desc: "From Barrackpore to Bangalore, our fleet covers 500+ cities and towns across India." },
              { title: "Affordable & Transparent", desc: "No broker commissions, no hidden fees. What you see in the estimate is what you pay." },
              { title: "24/7 Customer Support", desc: "Our operations team is available round the clock to resolve any issue with your booking instantly." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex gap-3">
                <ArrowRight size={18} className="text-brand-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
