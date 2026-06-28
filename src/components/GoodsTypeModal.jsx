import React, { useState } from "react"
import { X } from "lucide-react"

const GOODS_TYPES = [
  "Timbers / Plywoods / Papers",
  "Electronics / Consumer Durables",
  "General Goods",
  "Building Materials",
  "Event Management / Hospitality",
  "Machines / Equipments / Spare Parts",
  "Textiles / Garments / Fashion Accessories",
  "Furnitures / Home Furnishings",
  "House Shifting / Packers and Movers"
]

export default function GoodsTypeModal({ isOpen, onClose, onSelect }) {
  if (!isOpen) return null

  const [selected, setSelected] = useState(null)

  const handleBookNow = () => {
    if (selected) {
      onSelect(selected)
    }
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]">
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#333]">Select Goods Type</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 cursor-pointer">
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-2 custom-scrollbar">
          {GOODS_TYPES.map((type, idx) => (
            <div 
              key={idx}
              onClick={() => setSelected(type)}
              className={`py-4 border-b border-slate-100 cursor-pointer font-medium text-sm transition-colors ${selected === type ? 'text-blue-600 font-bold' : 'text-[#444] hover:text-[#222]'}`}
            >
              {type}
            </div>
          ))}
        </div>

        <div className="p-6 pt-4 border-t border-slate-100">
          <button 
            onClick={handleBookNow}
            disabled={!selected}
            className={`w-full py-3.5 rounded-xl font-bold transition-all ${selected ? 'bg-[#1e5eff] hover:bg-blue-700 text-white shadow-lg active:scale-95' : 'bg-slate-300 text-white cursor-not-allowed'}`}
          >
            Book Now
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}} />
    </div>
  )
}
