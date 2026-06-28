import React from "react"

// Popular long-distance routes per city.
// Each entry: destination city, approx distance in km, starting fare in INR.
const CITY_ROUTES = {
  Kolkata: [
    { city: "Asansol",       distance: 200, fare: 3500 },
    { city: "Durgapur",      distance: 165, fare: 3000 },
    { city: "Siliguri",      distance: 595, fare: 9500 },
    { city: "Bhubaneswar",   distance: 440, fare: 7000 },
    { city: "Patna",         distance: 580, fare: 9000 },
    { city: "Ranchi",        distance: 390, fare: 6500 },
    { city: "Dhanbad",       distance: 270, fare: 4500 },
    { city: "Haldia",        distance: 125, fare: 2200 },
    { city: "Kharagpur",     distance: 115, fare: 2000 },
  ],
  Mumbai: [
    { city: "Pune",          distance: 150, fare: 2800 },
    { city: "Nashik",        distance: 170, fare: 3200 },
    { city: "Surat",         distance: 285, fare: 5000 },
    { city: "Nagpur",        distance: 870, fare: 13000 },
    { city: "Aurangabad",    distance: 335, fare: 5800 },
    { city: "Kolhapur",      distance: 380, fare: 6500 },
    { city: "Ahmedabad",     distance: 530, fare: 8500 },
    { city: "Goa",           distance: 590, fare: 9500 },
    { city: "Vadodara",      distance: 410, fare: 7000 },
  ],
  Delhi: [
    { city: "Jaipur",        distance: 280, fare: 5000 },
    { city: "Agra",          distance: 230, fare: 4200 },
    { city: "Chandigarh",    distance: 250, fare: 4500 },
    { city: "Lucknow",       distance: 555, fare: 8800 },
    { city: "Amritsar",      distance: 450, fare: 7500 },
    { city: "Haridwar",      distance: 210, fare: 3800 },
    { city: "Meerut",        distance: 70,  fare: 1500 },
    { city: "Dehradun",      distance: 300, fare: 5200 },
    { city: "Mathura",       distance: 180, fare: 3400 },
  ],
  Bengaluru: [
    { city: "Chennai",       distance: 350, fare: 6000 },
    { city: "Hyderabad",     distance: 570, fare: 9000 },
    { city: "Mysuru",        distance: 145, fare: 2600 },
    { city: "Mangaluru",     distance: 350, fare: 6200 },
    { city: "Coimbatore",    distance: 365, fare: 6400 },
    { city: "Pune",          distance: 840, fare: 13000 },
    { city: "Goa",           distance: 580, fare: 9500 },
    { city: "Hubli",         distance: 410, fare: 7000 },
    { city: "Bellary",       distance: 310, fare: 5500 },
  ],
  Hyderabad: [
    { city: "Bengaluru",     distance: 570, fare: 9000 },
    { city: "Chennai",       distance: 625, fare: 10000 },
    { city: "Vijayawada",    distance: 275, fare: 5000 },
    { city: "Nagpur",        distance: 500, fare: 8200 },
    { city: "Warangal",      distance: 145, fare: 2600 },
    { city: "Nellore",       distance: 370, fare: 6500 },
    { city: "Pune",          distance: 565, fare: 9200 },
    { city: "Mumbai",        distance: 710, fare: 11500 },
    { city: "Tirupati",      distance: 545, fare: 8800 },
  ],
  Chennai: [
    { city: "Bengaluru",     distance: 350, fare: 6000 },
    { city: "Coimbatore",    distance: 500, fare: 8000 },
    { city: "Madurai",       distance: 460, fare: 7500 },
    { city: "Hyderabad",     distance: 625, fare: 10000 },
    { city: "Vijayawada",    distance: 435, fare: 7200 },
    { city: "Vellore",       distance: 135, fare: 2500 },
    { city: "Pondicherry",   distance: 150, fare: 2800 },
    { city: "Salem",         distance: 340, fare: 5800 },
    { city: "Tirupati",      distance: 155, fare: 2900 },
  ],
  Pune: [
    { city: "Mumbai",        distance: 150, fare: 2800 },
    { city: "Nashik",        distance: 210, fare: 3800 },
    { city: "Aurangabad",    distance: 235, fare: 4200 },
    { city: "Kolhapur",      distance: 230, fare: 4200 },
    { city: "Nagpur",        distance: 705, fare: 11000 },
    { city: "Bengaluru",     distance: 840, fare: 13000 },
    { city: "Hyderabad",     distance: 565, fare: 9200 },
    { city: "Goa",           distance: 455, fare: 7500 },
    { city: "Solapur",       distance: 245, fare: 4400 },
  ],
  Ahmedabad: [
    { city: "Sabar Kantha",  distance: 112, fare: 2000 },
    { city: "Bharuch",       distance: 112, fare: 4000 },
    { city: "Banas Kantha",  distance: 216, fare: 2500 },
    { city: "Surat",         distance: 265, fare: 4500 },
    { city: "Vadodara",      distance: 111, fare: 2100 },
    { city: "Rajkot",        distance: 215, fare: 3800 },
    { city: "Mehsana",       distance: 75,  fare: 1500 },
    { city: "Bhavnagar",     distance: 170, fare: 3200 },
    { city: "Jamnagar",      distance: 305, fare: 5200 },
  ],
}

const FALLBACK_ROUTES = [
  { city: "Nearby City 1",  distance: 80,  fare: 1500 },
  { city: "Nearby City 2",  distance: 150, fare: 2800 },
  { city: "Nearby City 3",  distance: 220, fare: 4000 },
]

export default function PopularRoutes({ city }) {
  const routes = CITY_ROUTES[city] || FALLBACK_ROUTES

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-slate-900 mb-8 text-left sm:text-center">
          Popular Long Distance Routes from {city}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="text-slate-600 font-medium group-hover:text-brand-800 transition-colors">
                to {route.city} ({route.distance} Kms)
              </div>
              <div className="text-slate-500 text-sm">
                fare from <span className="font-bold text-slate-900 group-hover:text-brand-700">₹{route.fare.toLocaleString("en-IN")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
