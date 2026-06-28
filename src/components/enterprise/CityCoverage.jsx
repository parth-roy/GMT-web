import React from "react"
import { MapPin } from "lucide-react"

export default function CityCoverage() {
  const cities = [
    "Ahmedabad", "Bangalore", "Chandigarh", "Chennai", "Coimbatore", 
    "Delhi NCR", "Hyderabad", "Indore", "Jaipur", "Kochi", 
    "Kolkata", "Lucknow", "Ludhiana", "Mumbai", "Nagpur", 
    "Pune", "Surat", "Vadodara", "Kanpur", "Bhopal", "Patna"
  ]

  const cityImages = {
    "Ahmedabad": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sabarmati_riverside.jpg/330px-Sabarmati_riverside.jpg",
    "Bangalore": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg/330px-View_from_Visvesvaraya_Industrial_and_Technological_Museum_%282025%29_02.jpg",
    "Chandigarh": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Open_Hand_monument%2C_Chandigarh.jpg/330px-Open_Hand_monument%2C_Chandigarh.jpg",
    "Chennai": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chennai_Central.jpg/330px-Chennai_Central.jpg",
    "Coimbatore": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CHIL_SEZ.jpg/330px-CHIL_SEZ.jpg",
    "Delhi NCR": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jama_Masjid_2011.jpg/330px-Jama_Masjid_2011.jpg",
    "Hyderabad": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Downtown_hyderabad_drone.png/330px-Downtown_hyderabad_drone.png",
    "Indore": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Indore_Rajwada01.jpg/330px-Indore_Rajwada01.jpg",
    "Jaipur": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/330px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
    "Kochi": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kochi_Skyline.jpg/330px-Kochi_Skyline.jpg",
    "Kolkata": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kolkata_maidan.jpg/330px-Kolkata_maidan.jpg",
    "Lucknow": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Harzratganj_Market%2C_Lucknow.jpg/330px-Harzratganj_Market%2C_Lucknow.jpg",
    "Ludhiana": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gurudwara-shri-dukhniwaran-sahib.jpg/330px-Gurudwara-shri-dukhniwaran-sahib.jpg",
    "Mumbai": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mumbai_Bandra-Worli_Sea_Link.jpg/330px-Mumbai_Bandra-Worli_Sea_Link.jpg",
    "Nagpur": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Deekshabhoomi_-_panoramio.jpg/330px-Deekshabhoomi_-_panoramio.jpg",
    "Pune": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pune_West_skyline_-_March_2017.jpg/330px-Pune_West_skyline_-_March_2017.jpg",
    "Surat": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bharthana_Althan_area.jpg/330px-Bharthana_Althan_area.jpg",
    "Vadodara": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/LakshmiVilas_Palace.jpg/330px-LakshmiVilas_Palace.jpg",
    "Kanpur": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J.K._Temple_%28cropped%29.jpg/330px-J.K._Temple_%28cropped%29.jpg",
    "Bhopal": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Deewali_New_market.jpg/330px-Deewali_New_market.jpg",
    "Patna": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Patna_high_court1.jpg/330px-Patna_high_court1.jpg"
  }

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Area */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              We Are Transforming Cities
            </h2>
            <div className="w-16 h-1 bg-brand-500 mx-auto lg:mx-0 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              GoMyTruck is revolutionizing the logistics landscape across India. Spanning across <span className="font-bold text-brand-600">10+ major cities</span> with a dedicated network of over <span className="font-bold text-brand-600">7.5TH+ trusted driver-partners</span>, we provide lightning-fast, highly scalable, and reliable transportation solutions. Whether you are a local distributor or a nationwide enterprise, our cutting-edge fleet is built to power your entire supply chain effortlessly.
            </p>
          </div>

          {/* City List Grid / Tags */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {cities.map((city, idx) => {
              const imgSrc = cityImages[city] || "https://images.unsplash.com/photo-1514222134-b57fbb8ce0ee?auto=format&fit=crop&q=80&w=400";
              
              return (
                <div 
                  key={idx}
                  className="group relative flex items-center gap-1.5 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full text-slate-700 font-semibold hover:border-brand-500 hover:text-brand-600 hover:shadow-md transition-all cursor-default"
                >
                  <MapPin size={14} className="text-brand-500" />
                  <span>{city}</span>

                  {/* Hover Image Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 h-32 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden border-[3px] border-white pointer-events-none scale-95 group-hover:scale-100 origin-bottom">
                    <img 
                      src={imgSrc} 
                      alt={`${city} landmark`} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                    <span className="absolute bottom-2 left-3 text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
                      {city}
                    </span>
                  </div>
                  
                  {/* Tooltip Arrow */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 w-3 h-3 bg-white rotate-45 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40 pointer-events-none shadow-sm"></div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}


