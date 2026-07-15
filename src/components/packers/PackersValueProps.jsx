import React from 'react';
import { ShieldCheck, Banknote, Wrench } from 'lucide-react';

export default function PackersValueProps() {
  const props = [
    {
      icon: <ShieldCheck size={32} className="text-brand-600" />,
      title: "Reliable Shifting Service",
      desc: "The quote states the agreed packing materials, handling scope, and inventory assumptions for the move."
    },
    {
      icon: <Banknote size={32} className="text-brand-600" />,
      title: "Scope-Based Quote",
      desc: "Pricing is prepared from the inventory, floors, access, distance, packing needs, workforce, and schedule you provide."
    },
    {
      icon: <Wrench size={32} className="text-brand-600" />,
      title: "Expert Handling & Assembly",
      desc: "Dismantling, appliance work, reassembly, and specialist handling apply only when they are listed in the confirmed scope."
    }
  ];

  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.map((prop, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="bg-brand-50 p-4 rounded-full mb-4">
                {prop.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{prop.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
