import React, { useState, useEffect } from "react"
import { Menu, X, ChevronRight, PhoneCall } from "lucide-react"

export default function Navbar({ onOpenEstimate, onScrollToSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("vahan_access_token"))
    // Check local storage occasionally for cross-tab login sync (optional but good)
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("vahan_access_token"))
    }
    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("auth_changed", handleStorageChange)

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("auth_changed", handleStorageChange)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("vahan_access_token")
    setIsLoggedIn(false)
    window.location.reload() // Reload to clear all modals and state
  }

  const navItems = [
    { name: "Enterprise", id: "enterprise" },
    { name: "Driver Partner", id: "driver-partner" },
    { name: "Workforce", id: "workforce" },
    { name: "About", id: "about" },
    { name: "Support", id: "support" }
  ]

  const handleNavClick = (id) => {
    setIsOpen(false)
    onScrollToSection(id)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-brand-50/80 backdrop-blur-md shadow-md py-1 border-b border-slate-200/50"
        : "bg-brand-50 py-1.5 border-b border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-0.5">

          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center gap-1 sm:gap-1.5 cursor-pointer" onClick={() => onScrollToSection('home')}>
            <div className="relative flex items-center">
              <img
                src="/logo-320.webp"
                alt="GoMyTruck Logo"
                width="320"
                height="213"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <span className="font-sans font-bold text-[17px] sm:text-[20px] tracking-tight leading-none text-slate-900">
                Go<span className="text-orange-500">My</span>Truck
              </span>
              <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.15em] uppercase mt-0.5 leading-none text-slate-500 whitespace-nowrap">
                ASAN JARIYA TRANSPORT KA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-semibold text-sm transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all hover:after:w-full text-slate-600 hover:text-brand-600 after:bg-brand-600`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-300"></div>

            <div className="flex items-center gap-4">
              <a 
                href="tel:9331488999" 
                className="flex items-center gap-1.5 font-bold text-sm transition-colors text-slate-700 hover:text-brand-600"
              >
                <PhoneCall size={15} className="text-brand-500" />
                <span className="hidden lg:inline">9331488999</span>
              </a>

              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="font-bold text-sm text-slate-600 hover:text-rose-600 transition-colors px-2"
                >
                  Logout
                </button>
              )}

              <button
                onClick={onOpenEstimate}
                className="btn-ripple bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-4 py-1.5 rounded-lg shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <span className="relative z-10">Get Estimate</span>
                <ChevronRight size={16} className="relative z-10" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="tel:9331488999" 
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              title="Call Support"
            >
              <PhoneCall size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors text-slate-800 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-screen border-t border-slate-200" : "max-h-0 pointer-events-none"
      }`}>
        <div className="bg-brand-50/95 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className="block w-full text-left px-4 py-3 text-base font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-colors"
            >
              {item.name}
            </button>
          ))}
          
          <div className="h-px bg-slate-200 my-4"></div>
          
          <div className="grid grid-cols-2 gap-3 px-2">
            <a
              href="tel:9331488999"
              className="flex items-center justify-center gap-2 border border-slate-300 text-slate-800 font-bold py-3 rounded-lg text-sm hover:bg-slate-50 active:scale-98 transition-all"
            >
              <PhoneCall size={16} className="text-brand-600" />
              <span>Call Toll-Free</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEstimate();
              }}
              className="btn-ripple bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm py-3 px-4 rounded-lg shadow-md shadow-brand-500/20 active:scale-98 transition-all"
            >
              <span className="relative z-10">Get an Estimate</span>
            </button>
          </div>
          
          {isLoggedIn && (
            <div className="px-2 mt-4">
              <button
                onClick={handleLogout}
                className="w-full border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100 font-bold text-sm py-3 px-4 rounded-lg active:scale-98 transition-all"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
