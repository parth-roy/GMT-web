import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { X, ArrowRight, Download, Truck, Navigation, Users } from "lucide-react"

const APPS = [
  { 
    id: "customer",  
    name: "GoMyTruck",             
    desc: "Customer app for booking mini trucks.",     
    iconSrc: "/gmt_icon.png",
    bg: "bg-blue-50",
    url: "https://play.google.com/store/apps/details?id=com.gomytruck.customer&pcampaignid=web_share"
  },
  { 
    id: "driver",   
    name: "GMT Captain",        
    desc: "Driver partner app to earn from trips.",     
    iconSrc: "/GMT_captain.png",
    bg: "bg-orange-50"
  },
  { 
    id: "workforce", 
    name: "GoMyTruck Workforce",   
    desc: "Workforce app for helpers & loaders.",        
    iconSrc: "/work-logo.png",
    bg: "bg-brand-50",
    url: "https://play.google.com/store/apps/details?id=com.gomytruck.workforce&pcampaignid=web_share"
  },
]

export default function AppDownloadModal({ isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen) return null

  const handleDownload = (id) => {
    const app = APPS.find(a => a.id === id)
    if (app && app.url) {
      window.open(app.url, '_blank')
    } else {
      alert("Play Store link coming soon!")
    }
    onClose()
  }

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all animate-in fade-in zoom-in duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Left Sidebar */}
        <div className="md:w-[35%] bg-brand-50 p-6 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 leading-tight">
            Download <br className="hidden sm:block" /><span className="text-brand-600">Our Apps</span>
          </h2>
          <p className="text-slate-500 mt-4 text-xs sm:text-sm leading-relaxed font-medium">
            Select the app you need. Our digital ecosystem is designed for customers, drivers, and workforce partners to connect seamlessly.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-[65%] p-4 sm:p-8 md:px-10 bg-white flex flex-col justify-center">
          <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-3 sm:mb-4">Select an App</h3>
          <div className="flex flex-col gap-3 sm:gap-4 overflow-y-auto max-h-[50vh] sm:max-h-none pr-2">
            {APPS.map((app) => {
              return (
                <button
                  key={app.id}
                  onClick={() => handleDownload(app.id)}
                  className="relative flex items-center w-full p-3 sm:p-5 rounded-2xl transition-all duration-500 group overflow-hidden bg-slate-50 border border-transparent hover:bg-brand-50 hover:shadow-[0_0_25px_rgba(0,31,63,0.15)] cursor-pointer text-left shrink-0"
                >
                  <div className={`w-14 h-14 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center rounded-xl sm:rounded-2xl ${app.bg} transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 p-2`}>
                    <img src={app.iconSrc} alt={app.name} className="w-full h-full object-contain drop-shadow-sm rounded-lg sm:rounded-xl" />
                  </div>
                  <div className="ml-4 sm:ml-6 flex-grow">
                    <h3 className="font-bold text-base sm:text-xl text-slate-800 group-hover:text-brand-700 transition-colors">{app.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 transition-transform duration-500 group-hover:-translate-y-1 line-clamp-2">{app.desc}</p>
                  </div>
                  <div className="ml-2 sm:ml-4 shrink-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                    <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
