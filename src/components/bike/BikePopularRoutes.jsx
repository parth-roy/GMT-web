import React from "react"

// Intra-city popular bike delivery routes per city
const CITY_ROUTES = {
  Kolkata: [
    { area: "Salt Lake",    distance: 8,  fare: 120 },
    { area: "Howrah",       distance: 5,  fare: 80  },
    { area: "New Town",     distance: 15, fare: 180 },
    { area: "Tollygunge",   distance: 7,  fare: 100 },
    { area: "Dum Dum",      distance: 10, fare: 140 },
    { area: "Behala",       distance: 8,  fare: 120 },
    { area: "Jadavpur",     distance: 6,  fare: 90  },
    { area: "Barasat",      distance: 18, fare: 210 },
    { area: "Garden Reach", distance: 11, fare: 150 },
  ],
  Mumbai: [
    { area: "Bandra",       distance: 8,  fare: 120 },
    { area: "Andheri",      distance: 10, fare: 140 },
    { area: "Thane",        distance: 20, fare: 220 },
    { area: "Kurla",        distance: 7,  fare: 110 },
    { area: "Goregaon",     distance: 12, fare: 160 },
    { area: "Navi Mumbai",  distance: 25, fare: 280 },
    { area: "Borivali",     distance: 16, fare: 190 },
    { area: "Powai",        distance: 11, fare: 150 },
    { area: "Mulund",       distance: 15, fare: 180 },
  ],
  Delhi: [
    { area: "Noida",        distance: 15, fare: 180 },
    { area: "Gurgaon",      distance: 18, fare: 210 },
    { area: "Lajpat Nagar", distance: 10, fare: 140 },
    { area: "Dwarka",       distance: 14, fare: 170 },
    { area: "Rohini",       distance: 12, fare: 160 },
    { area: "Janakpuri",    distance: 11, fare: 150 },
    { area: "Faridabad",    distance: 22, fare: 250 },
    { area: "Saket",        distance: 8,  fare: 120 },
    { area: "Karol Bagh",   distance: 6,  fare: 100 },
  ],
  Bengaluru: [
    { area: "Koramangala",  distance: 6,  fare: 100 },
    { area: "Whitefield",   distance: 20, fare: 220 },
    { area: "Indiranagar",  distance: 5,  fare: 90  },
    { area: "Electronic City", distance: 18, fare: 200 },
    { area: "Hebbal",       distance: 12, fare: 160 },
    { area: "Sarjapur Road",distance: 15, fare: 180 },
    { area: "HSR Layout",   distance: 8,  fare: 120 },
    { area: "Jayanagar",    distance: 7,  fare: 110 },
    { area: "Marathahalli", distance: 14, fare: 170 },
  ],
  Hyderabad: [
    { area: "Banjara Hills",distance: 6,  fare: 100 },
    { area: "HITEC City",   distance: 12, fare: 160 },
    { area: "Secunderabad", distance: 8,  fare: 120 },
    { area: "LB Nagar",     distance: 14, fare: 170 },
    { area: "Kukatpally",   distance: 10, fare: 140 },
    { area: "Uppal",        distance: 12, fare: 160 },
    { area: "Ameerpet",     distance: 5,  fare: 90  },
    { area: "Gachibowli",   distance: 14, fare: 170 },
    { area: "Kompally",     distance: 18, fare: 200 },
  ],
  Chennai: [
    { area: "T. Nagar",     distance: 8,  fare: 120 },
    { area: "Adyar",        distance: 10, fare: 140 },
    { area: "Velachery",    distance: 12, fare: 160 },
    { area: "Anna Nagar",   distance: 7,  fare: 110 },
    { area: "Tambaram",     distance: 20, fare: 220 },
    { area: "Sholinganallur",distance: 18, fare: 200 },
    { area: "Porur",        distance: 14, fare: 170 },
    { area: "Perambur",     distance: 9,  fare: 130 },
    { area: "Chromepet",    distance: 16, fare: 190 },
  ],
  Pune: [
    { area: "Baner",        distance: 8,  fare: 120 },
    { area: "Hinjewadi",    distance: 14, fare: 170 },
    { area: "Hadapsar",     distance: 10, fare: 140 },
    { area: "Kothrud",      distance: 7,  fare: 110 },
    { area: "Viman Nagar",  distance: 8,  fare: 120 },
    { area: "Wakad",        distance: 10, fare: 140 },
    { area: "Pimple Saudagar", distance: 12, fare: 160 },
    { area: "Kalyani Nagar",distance: 6,  fare: 100 },
    { area: "Kondhwa",      distance: 11, fare: 150 },
  ],
  Ahmedabad: [
    { area: "Satellite",    distance: 8,  fare: 120 },
    { area: "SG Highway",   distance: 12, fare: 160 },
    { area: "Bopal",        distance: 14, fare: 170 },
    { area: "Maninagar",    distance: 7,  fare: 110 },
    { area: "Thaltej",      distance: 10, fare: 140 },
    { area: "Chandkheda",   distance: 12, fare: 160 },
    { area: "Navrangpura",  distance: 5,  fare: 90  },
    { area: "Naroda",       distance: 10, fare: 140 },
    { area: "Vastrapur",    distance: 9,  fare: 130 },
  ],
}

const FALLBACK_ROUTES = [
  { area: "City Centre",   distance: 5,  fare: 80  },
  { area: "North Zone",    distance: 10, fare: 140 },
  { area: "South Zone",    distance: 12, fare: 160 },
]

export default function BikePopularRoutes({ city }) {
  const routes = CITY_ROUTES[city] || FALLBACK_ROUTES

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-left sm:text-center">
          Popular Delivery Routes in {city}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="text-slate-600 font-medium group-hover:text-brand-800 transition-colors">
                to {route.area} ({route.distance} Kms)
              </div>
              <div className="text-slate-500 text-sm">
                fare from <span className="font-bold text-slate-900 group-hover:text-brand-700">₹{route.fare}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
