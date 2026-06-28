import React from 'react';
import { Link } from 'react-router-dom';

export default function PackersLocalSEO({ city }) {
  // Mock data - in a real app, these could be fetched based on the selected city
  const areas = [
    "Salt Lake", "New Town", "Ballygunge", "Alipore", "Jadavpur", 
    "Behala", "Dum Dum", "Rajarhat", "Tollygunge", "Garia"
  ];
  
  const cities = [
    "Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Chennai", 
    "Pune", "Ahmedabad", "Surat", "Jaipur", "Lucknow"
  ];

  const routes = [
    `${city} to Delhi`, `${city} to Mumbai`, `${city} to Bangalore`, 
    `${city} to Pune`, `${city} to Hyderabad`, `${city} to Chennai`,
    `${city} to Patna`, `${city} to Bhubaneswar`, `${city} to Guwahati`
  ];

  return (
    <section className="bg-slate-100 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-slate-800 mb-8 text-center">
          Popular Packers and Movers Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Areas Link Cloud */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Areas in {city}
            </h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area, i) => (
                <Link 
                  key={i} 
                  to="/packers-and-movers" 
                  title={`Packers and Movers in ${area}, ${city}`}
                  className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 hover:text-brand-700 hover:border-brand-300 text-xs font-medium rounded transition-colors shadow-sm"
                >
                  Packers and Movers in {area}
                </Link>
              ))}
            </div>
          </div>

          {/* Cities Link Cloud */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Top Cities
            </h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((c, i) => (
                <Link 
                  key={i} 
                  to="/packers-and-movers" 
                  title={`Packers and Movers in ${c}`}
                  className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 hover:text-brand-700 hover:border-brand-300 text-xs font-medium rounded transition-colors shadow-sm"
                >
                  Packers and Movers in {c}
                </Link>
              ))}
            </div>
          </div>

          {/* Routes Link Cloud */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Intercity Shifting Routes
            </h3>
            <div className="flex flex-wrap gap-2">
              {routes.map((route, i) => (
                <Link 
                  key={i} 
                  to="/packers-and-movers" 
                  title={`Packers and Movers from ${route}`}
                  className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 hover:text-brand-700 hover:border-brand-300 text-xs font-medium rounded transition-colors shadow-sm"
                >
                  {route}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
