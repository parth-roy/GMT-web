import React from "react"
import { MapPin } from "lucide-react"

// Per-city: 2-3 verified Wikimedia Commons URLs.
// Areas cycle through them via index % imgs.length so adjacent pills show different images.
// Every URL below has been verified by fetching the actual Wikimedia Commons file page.
const CITY_DATA = {
  Kolkata: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kolkata_maidan.jpg/330px-Kolkata_maidan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Howrah_Bridge-_Kolkata%2C_Howrah%2C_West_Bengal-_DSC_0007.jpg/330px-Howrah_Bridge-_Kolkata%2C_Howrah%2C_West_Bengal-_DSC_0007.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/330px-Victoria_Memorial_situated_in_Kolkata.jpg",
    ],
    areas: ["Park Street", "Salt Lake", "New Town", "Howrah", "Dum Dum", "Behala", "Barasat", "Ballygunge", "Shyambazar", "Tollygunge", "Jadavpur", "Ultadanga", "Kasba", "Rajarhat", "Garden Reach"],
  },
  Mumbai: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mumbai_Bandra-Worli_Sea_Link.jpg/330px-Mumbai_Bandra-Worli_Sea_Link.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/330px-Mumbai_03-2016_30_Gateway_of_India.jpg",
    ],
    areas: ["Andheri", "Bandra", "Borivali", "Thane", "Navi Mumbai", "Powai", "Kurla", "Goregaon", "Malad", "Dadar", "Worli", "Chembur"],
  },
  Delhi: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jama_Masjid_2011.jpg/330px-Jama_Masjid_2011.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/330px-India_Gate_in_New_Delhi_03-2016.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lotus_Temple_in_New_Delhi.jpg/330px-Lotus_Temple_in_New_Delhi.jpg",
    ],
    areas: ["Connaught Place", "Dwarka", "Rohini", "Lajpat Nagar", "Janakpuri", "Saket", "Noida", "Gurgaon", "Ghaziabad", "Faridabad", "Pitampura", "Karol Bagh"],
  },
  Bengaluru: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg/330px-View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Vidhana_Soudha_Bangalore.jpg/330px-Vidhana_Soudha_Bangalore.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ISKCON_Temple_Bangalore.jpg/330px-ISKCON_Temple_Bangalore.jpg",
    ],
    areas: ["Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "BTM Layout", "Electronic City", "Jayanagar", "Marathahalli", "Sarjapur Road", "Bannerghatta"],
  },
  Hyderabad: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Downtown_hyderabad_drone.webp/330px-Downtown_hyderabad_drone.webp",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Charminar_-_Hyderabad.jpg/330px-Charminar_-_Hyderabad.jpg",
    ],
    areas: ["Banjara Hills", "Jubilee Hills", "Gachibowli", "HITEC City", "Secunderabad", "Kukatpally", "Ameerpet", "LB Nagar", "Uppal", "Kompally"],
  },
  Chennai: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chennai_Central.jpg/330px-Chennai_Central.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Marina_Beach_Chennai.jpg/330px-Marina_Beach_Chennai.jpg",
    ],
    areas: ["T. Nagar", "Anna Nagar", "Velachery", "Adyar", "Tambaram", "Porur", "Perambur", "Sholinganallur", "Chromepet", "Avadi"],
  },
  Pune: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pune_West_skyline_-_March_2017.jpg/330px-Pune_West_skyline_-_March_2017.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Shaniwar_Wada_fort%2C_Pune.jpg/330px-Shaniwar_Wada_fort%2C_Pune.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Aga_Khan_Palace_Pune.jpg/330px-Aga_Khan_Palace_Pune.jpg",
    ],
    areas: ["Kothrud", "Baner", "Viman Nagar", "Hinjewadi", "Wakad", "Hadapsar", "Kalyani Nagar", "Pimpri", "Chinchwad", "Kondhwa"],
  },
  Ahmedabad: {
    imgs: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sabarmati_riverside.jpg/330px-Sabarmati_riverside.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sabarmati_Ashram.jpg/330px-Sabarmati_Ashram.jpg",
    ],
    areas: ["Navrangpura", "Satellite", "Bopal", "Maninagar", "Vastrapur", "SG Highway", "Thaltej", "Gota", "Naroda", "Chandkheda", "CTM", "Vatva"],
  },
}

const FALLBACK_IMG = "/hero-bg.webp"

export default function AreasWeServe({ city }) {
  const data = CITY_DATA[city]
  if (!data) return null

  const { imgs, areas } = data

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Areas We Serve in {city}
            </h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto lg:mx-0 rounded-full" />
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              GoMyTruck provides fast, reliable delivery across{" "}
              <span className="font-bold text-brand-600">{areas.length}+ key areas</span> in{" "}
              <span className="font-bold text-brand-600">{city}</span>. Whether you're shifting
              homes, moving goods, or running a business — our trusted driver-partners cover every
              neighbourhood so your delivery is never far away.
            </p>
          </div>

          {/* Area pill tags */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {areas.map((name, idx) => {
              const img = imgs[idx % imgs.length]
              return (
                <div
                  key={name}
                  className="group relative flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full text-slate-700 font-semibold hover:border-brand-500 hover:text-brand-600 hover:shadow-md transition-all cursor-default"
                >
                  <MapPin size={14} className="text-brand-500 shrink-0" />
                  <span>{name}</span>

                  {/* Hover image tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 h-32 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden border-[3px] border-white pointer-events-none scale-95 group-hover:scale-100 origin-bottom">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-3 text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
                      {name}
                    </span>
                  </div>

                  {/* Tooltip arrow */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-3 h-3 bg-white rotate-45 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 pointer-events-none shadow-sm" />
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
