import React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Smartphone } from "lucide-react"

export default function Footer({ onScrollToSection }) {
  const cities = [
    { name: "Delhi NCR",     slug: "delhi-ncr" },
    { name: "Hyderabad",     slug: "hyderabad" },
    { name: "Bangalore",     slug: "bangalore" },
    { name: "Mumbai",        slug: "mumbai" },
    { name: "Vadodara",      slug: "vadodara" },
    { name: "Chandigarh",    slug: "chandigarh" },
    { name: "Jaipur",        slug: "jaipur" },
    { name: "Chennai",       slug: "chennai" },
    { name: "Kolkata",       slug: "kolkata" },
    { name: "Indore",        slug: "indore" },
    { name: "Ahmedabad",     slug: "ahmedabad" },
    { name: "Surat",         slug: "surat" },
    { name: "Nagpur",        slug: "nagpur" },
    { name: "Lucknow",       slug: "lucknow" },
    { name: "Pune",          slug: "pune" },
    { name: "Coimbatore",    slug: "coimbatore" },
    { name: "Kochi",         slug: "kochi" },
    { name: "Ludhiana",      slug: "ludhiana" },
    { name: "Nashik",        slug: "nashik" },
    { name: "Kanpur",        slug: "kanpur" },
    { name: "Visakhapatnam", slug: "visakhapatnam" },
    { name: "Trivandrum",    slug: "trivandrum" },
    // West Bengal local SEO cities
    { name: "Barrackpore",   slug: "barrackpore" },
    { name: "Howrah",        slug: "howrah" },
    { name: "Durgapur",      slug: "durgapur" },
  ]

  // Popular Searches — all keyword tiers mapped to site routes
  const popularSearches = [
    { label: "Online Truck Booking",         to: "/book-truck-online" },
    { label: "Mini Truck Booking Near Me",   to: "/mini-truck-booking" },
    { label: "Tata Ace on Rent",             to: "/mini-truck-booking" },
    { label: "Part Load Transport",          to: "/goods-transport-services" },
    { label: "Full Truck Load (FTL)",        to: "/intercity-transport" },
    { label: "Goods Transport Services",     to: "/goods-transport-services" },
    { label: "Local Transport Near Me",      to: "/local-transport" },
    { label: "Intercity Transport",          to: "/intercity-transport" },
    { label: "Find Return Load Online",      to: "/driver-partner" },
    { label: "Attach Truck to Company",      to: "/fleet-partner-registration" },
    { label: "B2B Logistics Services",       to: "/enterprise" },
    { label: "FMCG Transport Service",       to: "/enterprise" },
    { label: "Corporate Truck Rental",       to: "/enterprise" },
    { label: "Truck Booking Kolkata",        to: "/transport-services-kolkata" },
    { label: "Truck Booking Barrackpore",    to: "/transport-services-barrackpore" },
    { label: "Intercity Transport Booking",  to: "/intercity-transport" },
    { label: "Pickup Truck Near Me",         to: "/book-truck-online" },
    { label: "Lorry Load Matching",          to: "/driver-partner" },
    { label: "Same Day Truck Transport",     to: "/local-transport" },
    { label: "PTL Logistics",               to: "/intercity-transport" },
    { label: "Supply Chain Logistics",       to: "/enterprise" },
    { label: "Pricing & Fare Estimate",      to: "/pricing" },
    { label: "GoMyTruck Verified",           to: "/gomytruck-verified" },
  ]

  return (
    <footer id="support" className="bg-[#050505] text-white pt-16 pb-12 text-left relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Side / Right Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12">
          
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-1 sm:gap-1.5 cursor-pointer" onClick={() => onScrollToSection('home')}>
              <div className="relative flex items-center shrink-0">
                <img 
                  src="/logo.png" 
                  alt="GoMyTruck — Online Truck Booking & Goods Transport Services India" 
                  className="h-10 sm:h-14 w-auto object-contain" 
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <span className="font-sans font-bold text-[20px] sm:text-[24px] tracking-tight leading-none text-white">
                  Go<span className="text-orange-500">My</span>Truck
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.15em] uppercase mt-1 leading-none text-gray-400 whitespace-nowrap">
                  ASAN JARIYA TRANSPORT KA
                </span>
              </div>
            </div>

            {/* Company Description with WB Local SEO signals */}
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              India's trusted online truck booking platform. Book mini truck, Tata Ace, pickup truck &amp; FTL transport near you.
              Headquartered in <strong className="text-gray-300">Barrackpore, West Bengal</strong>.
              Serving Kolkata, West Bengal &amp; 500+ cities across India.
            </p>

            <div className="border-t border-dashed border-gray-700 w-full max-w-[200px]"></div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm">Follow us on</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/gomytruck" rel="noopener noreferrer" aria-label="GoMyTruck on Facebook" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"><Facebook size={16} fill="currentColor" className="text-gray-400" /></a>
                <a href="https://twitter.com/gomytruck" rel="noopener noreferrer" aria-label="GoMyTruck on Twitter" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"><Twitter size={16} fill="currentColor" className="text-gray-400" /></a>
                <a href="https://www.instagram.com/gomytruck" rel="noopener noreferrer" aria-label="GoMyTruck on Instagram" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"><Instagram size={16} className="text-gray-400" /></a>
                <a href="https://www.linkedin.com/company/gomytruck" rel="noopener noreferrer" aria-label="GoMyTruck on LinkedIn" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"><Linkedin size={16} fill="currentColor" className="text-gray-400" /></a>
                <a href="https://www.youtube.com/@gomytruck" rel="noopener noreferrer" aria-label="GoMyTruck on YouTube" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"><Youtube size={16} fill="currentColor" className="text-gray-400" /></a>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-700 w-full max-w-[200px]"></div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-brand-600 p-2 rounded-lg text-white">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[13px] leading-tight">Download our app now!</h4>
                  <p className="text-gray-400 text-[11px] mt-1">Scan the QR code to download</p>
                </div>
              </div>
              <div className="w-[110px] h-[110px] bg-white rounded-md p-1.5 shadow-lg">
                 <svg width="100%" height="100%" viewBox="0 0 100 100" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="100" fill="white"/>
                    <rect x="5" y="5" width="22" height="22" fill="black"/>
                    <rect x="9" y="9" width="14" height="14" fill="white"/>
                    <rect x="12" y="12" width="8" height="8" fill="black"/>
                    <rect x="73" y="5" width="22" height="22" fill="black"/>
                    <rect x="77" y="9" width="14" height="14" fill="white"/>
                    <rect x="80" y="12" width="8" height="8" fill="black"/>
                    <rect x="5" y="73" width="22" height="22" fill="black"/>
                    <rect x="9" y="77" width="14" height="14" fill="white"/>
                    <rect x="12" y="80" width="8" height="8" fill="black"/>
                    <rect x="40" y="40" width="25" height="25" fill="black"/>
                    <rect x="70" y="45" width="10" height="15" fill="black"/>
                    <rect x="40" y="75" width="15" height="15" fill="black"/>
                    <rect x="80" y="75" width="10" height="10" fill="black"/>
                    <rect x="5" y="40" width="15" height="10" fill="black"/>
                    <rect x="25" y="50" width="10" height="15" fill="black"/>
                    <rect x="45" y="10" width="15" height="10" fill="black"/>
                    <rect x="65" y="85" width="10" height="10" fill="black"/>
                    <rect x="25" y="30" width="5" height="5" fill="black"/>
                    <rect x="60" y="25" width="5" height="5" fill="black"/>
                    <rect x="85" y="35" width="10" height="5" fill="black"/>
                 </svg>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-14">
            
            {/* Top Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm tracking-wide">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="About GoMyTruck — Online Truck Booking Company India">About Us</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">Contact Us</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">Blog</Link></li>
                  <li><Link to="/gomytruck-verified" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">GoMyTruck Verified</Link></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm tracking-wide">Services</h4>
                <ul className="space-y-3">
                  <li><Link to="/truck" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Online truck booking & mini truck hire">Mini Truck Booking</Link></li>
                  <li><Link to="/truck" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Tata Ace on rent — per km pricing">Tata Ace on Rent</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="FTL full truck load transport services">FTL Transport</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Part load transport PTL logistics">Part Load (PTL)</Link></li>
                  <li><Link to="/enterprise" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="B2B enterprise logistics solutions">Enterprise Logistics</Link></li>
                  <li><Link to="/bike" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Two-wheeler courier & delivery service">Two Wheeler Courier</Link></li>
                  <li><Link to="/packers-and-movers" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Packers and movers service – GoMyTruck">Packers & Movers</Link></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm tracking-wide">Support</h4>
                <ul className="space-y-3">
                  <li><Link to="/support" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">Support Center</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">Contact Us</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">Pricing & Fare Estimate</Link></li>
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium">Terms of Service</Link></li>
                  <li><Link to="/partner-terms" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Driver partner terms and conditions">Driver Partner Terms</Link></li>
                  <li><Link to="/refund-cancellation" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Cancellation and refund rules">Refund & Cancellation</Link></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm tracking-wide">Truck Owners</h4>
                <ul className="space-y-3">
                  <li><Link to="/driver-partner" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Find return load online — load board India">Find Return Load</Link></li>
                  <li><Link to="/driver-partner" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Attach commercial vehicle to GoMyTruck">Attach Truck</Link></li>
                  <li><Link to="/driver-partner" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Truck owner registration — fleet platform">Register as Owner</Link></li>
                  <li><Link to="/driver-partner" className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium" title="Load board India — zero commission load booking">Load Board</Link></li>
                </ul>
              </div>
            </div>

            {/* Popular Searches — keyword-rich SEO block */}
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm tracking-wide">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    title={item.label}
                    className="px-2.5 py-1 bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 text-[11px] font-medium rounded-full transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Domestic Cities Grid */}
            <div className="space-y-5">
              <h4 className="text-white font-bold text-sm tracking-wide">Domestic Cities — Truck Booking</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-4">
                {cities.map((city, index) => (
                  <Link
                    key={index}
                    to="/truck"
                    title={`Truck booking in ${city.name} — mini truck & goods transport`}
                    className="text-gray-400 hover:text-white transition-colors text-[13px] font-medium"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="pt-8 border-t border-[#222222] text-left">
          <div className="space-y-1.5 text-gray-500 text-[11px] leading-relaxed max-w-4xl">
            <h4 className="text-gray-300 font-bold text-xs mb-3">Registered Office:</h4>
            <p>© 2026 Parther Technologies Pvt. Ltd.</p>
            <p>Chiriyamore, Barrackpore, North 24 Parganas, West Bengal, 700120, India</p>
            <p className="mt-5 pt-3">CIN : U62099WR2026PTC293183</p>
            <p>Email: <a href="mailto:hello@parthertech.com" className="hover:text-gray-300 transition-colors">hello@parthertech.com</a></p>
            <p>Phone: <a href="tel:+919331488999" className="hover:text-gray-300 transition-colors">+91 9331488999</a></p>
            <p className="mt-2 text-gray-600">
              GoMyTruck is India's trusted online truck booking platform — book mini truck, Tata Ace on rent,
              pickup truck, FTL &amp; part load transport services across Kolkata, West Bengal &amp; pan India.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
