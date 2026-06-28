import React from 'react';
import { Monitor, Zap, Hammer } from 'lucide-react';

export default function PackersExtraServices() {
  const services = [
    {
      icon: <Monitor size={28} className="text-brand-600" />,
      title: "Appliance Installation",
      desc: "Safe unmounting and re-installation of TVs, washing machines, and ACs by trained technicians."
    },
    {
      icon: <Zap size={28} className="text-brand-600" />,
      title: "Professional Electrician",
      desc: "Get fans, lights, and heavy appliances wired safely in your new home."
    },
    {
      icon: <Hammer size={28} className="text-brand-600" />,
      title: "Professional Carpenter",
      desc: "Custom fitting, bed assembly, and wardrobe dismantling by expert carpenters."
    }
  ];

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-4">
            Need an Extra Hand?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Make your move completely hassle-free. Add these premium services to your booking to get settled into your new home instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-brand-50 p-3 rounded-xl shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
