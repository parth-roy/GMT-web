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
              Trusted Packers and Movers in {city}
            </h2>
            <p>
              Relocating can be stressful, but with GoMyTruck, your move is completely seamless. We are recognized as the <strong>best packers and movers in {city}</strong> because we handle your belongings as if they were our own. From careful packing to safe transportation, our professional team manages everything end-to-end.
            </p>
            <p>
              Whether you are looking for <strong>house shifting services in {city}</strong> or <strong>office relocation</strong>, our trained executives use high-quality packaging materials like bubble wrap, foam sheets, and sturdy cartons to ensure a careful and secure transit. 
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              {[
                "Fixed, transparent pricing with zero hidden costs.",
                "Multiple stops allowed on the same route.",
                "Safe, reliable, and verified driver-partners.",
                "Dedicated shift manager for end-to-end support.",
                "Premium multi-layer packing for fragile items."
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
              Estimated Shifting Charges in {city}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white text-sm">
                    <th className="p-4 font-semibold w-1/2">Property Type</th>
                    <th className="p-4 font-semibold w-1/2">Starting Price (Est.)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Box size={16} className="text-slate-400" /> Few Items / 1 RK
                    </td>
                    <td className="p-4 font-bold text-brand-700">₹2,500 - ₹3,500</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Home size={16} className="text-slate-400" /> 1 BHK Shifting
                    </td>
                    <td className="p-4 font-bold text-brand-700">₹3,500 - ₹5,500</td>
                  </tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Home size={16} className="text-slate-400" /> 2 BHK Shifting
                    </td>
                    <td className="p-4 font-bold text-brand-700">₹5,000 - ₹8,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="p-4 font-medium text-slate-700 flex items-center gap-2">
                      <Home size={16} className="text-slate-400" /> 3 BHK Shifting
                    </td>
                    <td className="p-4 font-bold text-brand-700">₹8,500 - ₹12,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">
              * Note: Prices are indicative and vary based on the volume of goods, distance, and floor level.
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
                { step: "02", title: "Get Instant Quote", desc: "Receive a transparent, fixed price estimate based on your inventory." },
                { step: "03", title: "We Pack & Load", desc: "Our expert team arrives on time, packs everything securely, and loads the truck." },
                { step: "04", title: "Move & Settle", desc: "We transport safely, unload, and help you set up your new space." }
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
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">What We Move</h3>
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
