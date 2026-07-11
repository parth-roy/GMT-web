import React, { useState, useEffect, useRef } from "react"
import { MapPin, Loader2 } from "lucide-react"
import { fetchAutocomplete, fetchPlaceDetails } from "../api/pricingApi"

export default function AddressAutocomplete({ 
  label, 
  placeholder, 
  onAddressSelect, 
  className = "",
  id = "",
  autoComplete = "off"
}) {
  const [query, setQuery] = useState("")
  const [predictions, setPredictions] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const wrapperRef = useRef(null)
  const debounceRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = (e) => {
    const val = e.target.value
    setQuery(val)
    
    // Clear previous timeout
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    if (!val.trim()) {
      setPredictions([])
      setIsOpen(false)
      return
    }

    setLoading(true)
    setIsOpen(true)

    // Debounce the API call by 300ms
    debounceRef.current = setTimeout(async () => {
      try {
        const results = await fetchAutocomplete(val)
        setPredictions(results)
      } catch (err) {
        console.error("Autocomplete error:", err)
        setPredictions([])
      } finally {
        setLoading(false)
      }
    }, 300)
  }

  const handleSelect = async (prediction) => {
    setQuery(prediction.description)
    setIsOpen(false)
    setPredictions([])

    try {
      // We pass the full address string back for basic form display,
      // but also the placeId so the parent can fetch exact details if needed,
      // or we can fetch details right here and pass { address, lat, lng } back.
      // Let's fetch details here to be robust and prevent needing another geocode later.
      const details = await fetchPlaceDetails(prediction.placeId)
      onAddressSelect({
        address: prediction.description,
        lat: details.lat,
        lng: details.lng
      })
    } catch (err) {
      console.error("Place details error:", err)
      // Fallback: just return the address string, parent will geocode it
      onAddressSelect({
        address: prediction.description,
        lat: null,
        lng: null
      })
    }
  }

  return (
    <div className={`relative flex flex-col ${className}`} ref={wrapperRef}>
      <label htmlFor={id} className="text-[10px] sm:text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => { if (query.trim()) setIsOpen(true) }}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
      />

      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden max-h-60 overflow-y-auto">
          {loading && predictions.length === 0 ? (
            <div className="flex items-center gap-2 p-3 text-xs text-slate-500">
              <Loader2 size={14} className="animate-spin" /> Searching...
            </div>
          ) : predictions.length > 0 ? (
            <ul>
              {predictions.map((p) => (
                <li 
                  key={p.placeId} 
                  onClick={() => handleSelect(p)}
                  className="flex items-start gap-2 p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0"
                >
                  <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-slate-800 line-clamp-1">{p.mainText}</span>
                    <span className="text-xs text-slate-500 line-clamp-1">{p.secondaryText}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : query.trim() && !loading ? (
            <div className="p-3 text-xs text-slate-500">No results found</div>
          ) : null}
        </div>
      )}
    </div>
  )
}
