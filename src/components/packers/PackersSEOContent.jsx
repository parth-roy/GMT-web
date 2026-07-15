import React from 'react';
import { CheckCircle2, Box, Home, Truck } from 'lucide-react';

export default function PackersSEOContent({ city }) {
  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* City Overview & Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <h2 className="text-3xl font-display font-bold text-slate-900">
              Plan a Packing and Moving Requirement in {city}
            </h2>
            <p>
              A moving quote should start with a complete inventory and a clear operating scope. GoMyTruck collects the route, preferred date, property type, and contact details so the team can assess the required vehicle, packing, handling, and workforce.
            </p>
            <p>
              For <strong>house shifting services in {city}</strong> or an <strong>office relocation</strong>, confirm item quantities, fragile or high-value goods, floors and lift access, parking distance, dismantling, appliance work, packing materials, and unpacking before accepting the quote.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              {[
                "Written inventory and scope before confirmation.",
                "Route, access, workforce, and vehicle assumptions stated.",
                "Driver and vehicle documents reviewed during onboarding.",
                "Optional specialist work confirmed separately.",
                "Packing materials listed in the accepted quote."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={20} className="text-brand-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Table */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
              What Determines a Moving Quote in {city}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white text-sm">
                    <th className="p-4 font-semibold w-1/2">Scope factor</th>
                    <th className="p-4 font-semibold w-1/2">Details to provide</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Box size={16} className="text-slate-400" /> Inventory
                    </td>
                    <td className="p-4 text-slate-700">Item list, quantity, size, weight, and fragility</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Home size={16} className="text-slate-400" /> Property access
                    </td>
                    <td className="p-4 text-slate-700">Floor, lift, stairs, parking distance, and entry limits</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Truck size={16} className="text-slate-400" /> Transport
                    </td>
                    <td className="p-4 text-slate-700">Exact route, vehicle, stops, date, and timing constraints</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Home size={16} className="text-slate-400" /> Optional work
                    </td>
                    <td className="p-4 text-slate-700">Packing, dismantling, appliances, unpacking, and assembly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">
              The final amount is the accepted quote for the declared scope. Undeclared items or changed site conditions may require review before work continues.
            </p>
          </div>
        </div>

        {/* How it Works & Items Moved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16 pt-16 border-t border-slate-200">
          
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">How to Book in 4 Easy Steps</h3>
            <div className="space-y-6">
              {[
                { step: "01", title: "Share Your Requirements", desc: "Enter your pickup and drop location, along with your moving date." },
                { step: "02", title: "Review the Scope", desc: "Confirm what is included, excluded, assumed, and charged before accepting a quote." },
                { step: "03", title: "Confirm Capacity", desc: "The team confirms the date, vehicle, workforce, materials, and any specialist provider." },
                { step: "04", title: "Follow the Move Plan", desc: "Use the confirmed inventory, handover checks, trip updates, and delivery sign-off process." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-brand-100 text-brand-700 font-bold rounded-full flex items-center justify-center font-display">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Inventory Categories to Declare</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Household Furniture", items: "Beds, Sofas, Wardrobes, Dining Tables" },
                { title: "Heavy Appliances", items: "Fridges, Washing Machines, ACs, TVs" },
                { title: "Fragile Items", items: "Glassware, Crockery, Mirrors, Electronics" },
                { title: "Kitchen Utensils", items: "Pots, Pans, Microwaves, Gas Stoves" },
                { title: "Vehicles", items: "Bike Transport, Scooty Shifting" },
                { title: "Office Assets", items: "Desks, Chairs, Computers, Printers" }
              ].map((group, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{group.title}</h4>
                  <p className="text-slate-500 text-xs">{group.items}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
