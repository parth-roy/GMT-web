import React, { useState, useEffect } from "react"
import { X, Check, Truck, Bike, Package, MapPin, ShieldAlert, PhoneCall, Loader2, AlertCircle } from "lucide-react"
import { geocodeAddress, fetchEstimate, fetchVehicles, SERVICE_TO_VEHICLE_TYPE } from "../api/pricingApi"

/**
 * EstimateModal
 * This modal is opened from the Home page after the user selects a vehicle type
 * via the GetEstimateModal (service selector). It collects pickup city, drop city,
 * weight, phone, then calls the REAL server pricing API to get an estimate.
 *
 * Props:
 *  isOpen      - boolean
 *  onClose     - () => void
 *  estimateData - { service, pickupCity, dropCity, weight, phone, pickupPin, dropPin }
 *               NOTE: pickupCity/dropCity may be city names (strings). We geocode them.
 */

const SERVICE_ICONS = { bike: Bike, truck: Truck, movers: Package }
const SERVICE_LABELS = { bike: "Two Wheeler (Bike)", truck: "Truck / Tata Ace", movers: "Packers & Movers" }

const VALID_COUPONS = ["VAHAN150", "VAHANFIRST"]

export default function EstimateModal({ isOpen, onClose, estimateData }) {
  if (!isOpen || !estimateData) return null

  // ── Coupon State ──────────────────────────────────────────────────────────
  const [coupon, setCoupon] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [couponError, setCouponError] = useState("")

  // ── Step State (1: Quote/Form  2: Allocating  3: Confirmed) ──────────────
  const [step, setStep] = useState(1)

  // ── Contact Form (shown in Step 1 after estimate) ─────────────────────────
  const [custName, setCustName] = useState("")
  const [custEmail, setCustEmail] = useState("")
  const [custAddress, setCustAddress] = useState("")

  // ── API / Loading ─────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(true)
  const [apiError, setApiError] = useState("")
  const [liveEstimate, setLiveEstimate] = useState(null)   // FareEstimateResponse from server
  const [vehicles, setVehicles] = useState([])

  // ── Allocation Animation ──────────────────────────────────────────────────
  const [allocationProgress, setAllocationProgress] = useState(0)
  const [driverAssigned, setDriverAssigned] = useState(null)
  const [bookingId, setBookingId] = useState("")

  // ── Reset & fetch estimate when modal opens ───────────────────────────────
  useEffect(() => {
    if (!isOpen) return
    setStep(1)
    setCouponApplied(false)
    setCoupon("")
    setCouponError("")
    setCustName("")
    setCustEmail("")
    setCustAddress("")
    setAllocationProgress(0)
    setLiveEstimate(null)
    setApiError("")
    setLoading(true)
    fetchLiveEstimate()
  }, [isOpen])

  const fetchLiveEstimate = async () => {
    try {
      const vehicleType = SERVICE_TO_VEHICLE_TYPE[estimateData.service] || "TRUCK"

      // Geocode pickup & drop (they come as city names from the form)
      const pickupQuery = estimateData.pickupPin
        ? `${estimateData.pickupCity} ${estimateData.pickupPin}`
        : estimateData.pickupCity || "Kolkata"

      const dropQuery = estimateData.dropPin
        ? `${estimateData.dropCity} ${estimateData.dropPin}`
        : estimateData.dropCity || "Howrah"

      const [pickupCoords, dropCoords, vehicleList] = await Promise.all([
        geocodeAddress(pickupQuery),
        geocodeAddress(dropQuery),
        fetchVehicles().catch(() => []),  // non-blocking
      ])

      setVehicles(vehicleList)

      const estimate = await fetchEstimate({
        pickupLat: pickupCoords.lat,
        pickupLng: pickupCoords.lng,
        dropLat: dropCoords.lat,
        dropLng: dropCoords.lng,
        vehicleType,
      })

      setLiveEstimate(estimate)
    } catch (err) {
      setApiError(err.message || "Could not calculate estimate. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // ── Allocation animation when step changes to 2 ───────────────────────────
  useEffect(() => {
    if (step === 2) {
      const interval = setInterval(() => {
        setAllocationProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            const drivers = [
              { name: "Satish Yadav", rating: "4.8", phone: "98123 45678", plate: "MH-01-EE-3294" },
              { name: "Gurpreet Singh", rating: "4.9", phone: "98234 56789", plate: "KA-03-GH-8821" },
              { name: "Muthu Krishnan", rating: "4.7", phone: "98345 67890", plate: "DL-2C-SS-1104" },
              { name: "Rajesh Shinde", rating: "4.9", phone: "98456 78901", plate: "PN-12-KL-4450" }
            ]
            setDriverAssigned(drivers[Math.floor(Math.random() * drivers.length)])
            setBookingId("VHN-" + Math.floor(100000 + Math.random() * 900000))
            setStep(3)
            return 100
          }
          return prev + 10
        })
      }, 350)
      return () => clearInterval(interval)
    }
  }, [step])

  // ── Coupon ────────────────────────────────────────────────────────────────
  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (VALID_COUPONS.includes(coupon.trim().toUpperCase())) {
      setCouponApplied(true)
      setCouponError("")
    } else {
      setCouponError("Invalid coupon code. Try VAHAN150.")
    }
  }

  // ── Confirm Booking (moves to allocation step) ────────────────────────────
  const handleConfirmBooking = (e) => {
    e.preventDefault()
    if (!custName.trim() || !custAddress.trim()) {
      alert("Please fill out your Name and pickup address.")
      return
    }
    setStep(2)
  }

  // ── Derived fare values (from REAL API) ───────────────────────────────────
  const discountAmount = couponApplied ? 150 : 0
  const baseFare        = liveEstimate?.baseFare ?? 0
  const distanceFare    = liveEstimate?.distanceFare ?? 0
  const loadingCharge   = liveEstimate?.loadingCharge ?? 0
  const insuranceCharge = liveEstimate?.insuranceCharge ?? 0
  const distanceKm      = liveEstimate?.estimatedDistanceKm ?? 0
  const subTotal        = Math.max(0, baseFare + distanceFare + loadingCharge + insuranceCharge - discountAmount)
  const cgst            = subTotal * 0.09
  const sgst            = subTotal * 0.09
  const tollEstimates   = distanceKm > 500 ? 450 : distanceKm > 100 ? 120 : 0
  const totalEstimatedFare = subTotal + cgst + sgst + tollEstimates

  const IconComponent = SERVICE_ICONS[estimateData.service] || Truck
  const serviceLabel  = SERVICE_LABELS[estimateData.service] || "Truck"

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-brand-50 border border-slate-100 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden z-10 grid lg:grid-cols-12 max-h-[90vh]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all z-25 cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* ── LEFT: Details & Form ─────────────────────────────────── */}
        <div className="lg:col-span-7 p-6 sm:p-8 overflow-y-auto text-left max-h-[90vh]">

          {/* ── LOADING STATE ─────────────────────────── */}
          {loading && (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <div className="relative h-16 w-16 flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-20"></span>
                <Loader2 size={32} className="animate-spin text-brand-600 relative z-10" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-slate-800">Calculating your estimate…</h3>
                <p className="text-xs text-slate-500 mt-1">We're fetching live pricing from our server.</p>
              </div>
            </div>
          )}

          {/* ── ERROR STATE ───────────────────────────── */}
          {!loading && apiError && (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
              <div className="p-4 bg-rose-50 rounded-full">
                <AlertCircle size={40} className="text-rose-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Could not get estimate</h3>
                <p className="text-sm text-slate-500 mt-1 max-w-xs">{apiError}</p>
              </div>
              <button
                onClick={() => { setLoading(true); setApiError(""); fetchLiveEstimate() }}
                className="bg-brand-500 text-white font-bold px-5 py-2 rounded-xl text-sm hover:bg-brand-600 transition-colors cursor-pointer"
              >
                Try Again
              </button>
            </div>
          )}

          {/* ── STEP 1: QUOTE ─────────────────────────── */}
          {!loading && !apiError && step === 1 && liveEstimate && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-extrabold text-slate-900">Your Booking Quote</h3>
                <p className="text-xs text-slate-500 mt-1">Live pricing from our server — transparent and accurate.</p>
              </div>

              {/* Booking Summary Banner */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex gap-4">
                <div className="p-3 rounded-xl bg-brand-500 text-white h-fit shadow-md">
                  <IconComponent size={22} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-tight">
                    {serviceLabel} Selected
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Route: <span className="text-slate-700 font-semibold">{estimateData.pickupCity}</span>
                    {" → "}
                    <span className="text-slate-700 font-semibold">{estimateData.dropCity}</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    Distance: <span className="text-brand-600 font-bold">{distanceKm} km</span>
                    {" | "}
                    ETA: <span className="text-slate-700 font-semibold">{liveEstimate.estimatedDurationMinutes} mins</span>
                    {estimateData.weight && (
                      <> | Load: <span className="text-slate-700 font-semibold">{estimateData.weight} kg</span></>
                    )}
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <h4 className="font-display font-bold text-slate-800 text-sm border-b border-slate-100 pb-1.5 uppercase tracking-wider">
                  Confirm Your Contact & Address
                </h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Your Full Name</label>
                    <input
                      type="text" required
                      placeholder="e.g. Arjun Sharma"
                      value={custName}
                      onChange={(e) => setCustName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email (For Invoice)</label>
                    <input
                      type="email"
                      placeholder="e.g. arjun@gmail.com"
                      value={custEmail}
                      onChange={(e) => setCustEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Complete Pick-up Address</label>
                  <textarea
                    required rows={2}
                    placeholder="e.g. Flat 402, Sai Flora Apartments, Near Metro Station"
                    value={custAddress}
                    onChange={(e) => setCustAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-brand-500/10 hover:shadow-brand-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Booking (Pay on Delivery)</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ── STEP 2: ALLOCATING ────────────────────── */}
          {step === 2 && (
            <div className="py-16 text-center space-y-6">
              <div className="relative h-24 w-24 mx-auto flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-20"></span>
                <span className="animate-ping absolute inline-flex h-2/3 w-2/3 rounded-full bg-brand-500 opacity-45"></span>
                <div className="relative p-5 bg-brand-500 text-white rounded-full shadow-xl">
                  <Truck size={36} className="animate-bounce" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-display font-extrabold text-slate-900">Matching Nearby Driver</h3>
                <p className="text-sm text-slate-500 max-w-sm mx-auto">
                  Our algorithm is scanning verified GoMyTruck partners in {estimateData.pickupCity} within 3 km of your pickup zone...
                </p>
              </div>
              <div className="max-w-xs mx-auto space-y-1.5">
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-brand-500 h-full transition-all duration-300" style={{ width: `${allocationProgress}%` }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>Searching Fleet</span>
                  <span>{allocationProgress}%</span>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3: CONFIRMED ─────────────────────── */}
          {step === 3 && driverAssigned && (
            <div className="space-y-6">
              <div className="bg-emerald-500 text-white rounded-2xl p-5 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4 shadow-xl">
                <div>
                  <h3 className="text-xl font-display font-extrabold flex items-center justify-center sm:justify-start gap-1.5 leading-tight">
                    <Check size={20} className="stroke-[3px]" /> Booking Confirmed!
                  </h3>
                  <p className="text-xs text-emerald-100 mt-1 leading-snug">
                    Your transport booking is confirmed. SMS tracking details sent to <span className="font-bold">+91 {estimateData.phone}</span>.
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 bg-emerald-600 px-3.5 py-1.5 rounded-lg font-mono font-bold text-xs uppercase tracking-widest text-center">
                  ID: {bookingId}
                </div>
              </div>

              <div className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 space-y-4">
                <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">Your Assigned Fleet Partner</h4>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-base shadow-md">
                      {driverAssigned.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm sm:text-base">{driverAssigned.name}</h5>
                      <p className="text-xs text-slate-500 font-medium">Verified Partner ★ {driverAssigned.rating}</p>
                    </div>
                  </div>
                  <span className="inline-block bg-brand-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-slate-800 shadow-sm uppercase tracking-wider">
                    {driverAssigned.plate}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-200/50 grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${driverAssigned.phone}`}
                    className="flex items-center justify-center gap-1.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-xs shadow-md shadow-brand-500/10 active:scale-98 transition-all"
                  >
                    <PhoneCall size={13} />
                    <span>Call Driver Partner</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold py-2.5 rounded-lg text-xs transition-all active:scale-98"
                  >
                    Close & Track Order
                  </button>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4 text-left">
                <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider pb-1.5 border-b border-slate-100">Live Status Tracker</h4>
                <div className="relative pl-6 space-y-5 border-l border-slate-200">
                  <div className="relative">
                    <div className="absolute -left-[30px] top-0.5 h-4 w-4 rounded-full bg-brand-500 border-4 border-white shadow-md shadow-brand-500/20"></div>
                    <h5 className="font-bold text-xs text-brand-600">Booking Confirmed</h5>
                    <p className="text-[11px] text-slate-500">Driver dispatched from nearby terminal.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] top-0.5 h-4 w-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
                    <h5 className="font-bold text-xs text-slate-600">Driver Arriving at Pickup (ETA 14 mins)</h5>
                    <p className="text-[11px] text-slate-400">Driver will verify OTP before loading cargo.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] top-0.5 h-4 w-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
                    <h5 className="font-bold text-xs text-slate-600">In Transit to {estimateData.dropCity}</h5>
                    <p className="text-[11px] text-slate-400">Live tracking link will be shared via WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: Fare Breakdown ────────────────────────────────── */}
        <div className="lg:col-span-5 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-100 p-6 sm:p-8 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
          <div className="space-y-5 text-left">
            <h4 className="font-display font-extrabold text-slate-800 text-lg">Fare Breakdown</h4>

            {loading ? (
              <div className="space-y-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-4 bg-slate-200 animate-pulse rounded-full" style={{ width: `${60 + i * 8}%` }}></div>
                ))}
              </div>
            ) : apiError ? (
              <p className="text-xs text-slate-400 italic">Fare details unavailable.</p>
            ) : (
              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Base Booking Fare</span>
                  <span className="font-bold text-slate-700">₹{baseFare.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Distance Charges ({distanceKm} km)</span>
                  <span className="font-bold text-slate-700">₹{distanceFare.toLocaleString("en-IN")}</span>
                </div>
                {loadingCharge > 0 && (
                  <div className="flex justify-between text-slate-500 font-medium">
                    <span>Loading Charge</span>
                    <span className="font-bold text-slate-700">₹{loadingCharge}</span>
                  </div>
                )}
                {couponApplied && (
                  <div className="flex justify-between text-emerald-600 font-semibold bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                    <span>Discount (Coupon Applied)</span>
                    <span>-₹150</span>
                  </div>
                )}

                <div className="h-px bg-slate-200"></div>

                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Toll, Permit & Parking Estimates</span>
                  <span className="font-bold text-slate-700">₹{tollEstimates.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Central GST (9%)</span>
                  <span className="font-bold text-slate-700">₹{cgst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>State GST (9%)</span>
                  <span className="font-bold text-slate-700">₹{sgst.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Coupon Input (Step 1 only) */}
            {!loading && !apiError && step === 1 && (
              <div className="pt-2">
                {!couponApplied ? (
                  <form onSubmit={handleApplyCoupon} className="space-y-1">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        className="w-full bg-brand-50 border border-slate-200 rounded-lg py-1.5 px-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-all uppercase"
                      />
                      <button
                        type="submit"
                        className="bg-brand-500 hover:bg-brand-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && (
                      <span className="text-rose-500 text-[10px] font-semibold block">{couponError}</span>
                    )}
                    <span className="text-[10px] text-slate-400 font-semibold block">
                      Use coupon{" "}
                      <span
                        className="text-brand-600 underline font-bold cursor-pointer"
                        onClick={() => setCoupon("VAHAN150")}
                      >
                        VAHAN150
                      </span>{" "}
                      for flat ₹150 off.
                    </span>
                  </form>
                ) : (
                  <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg text-xs font-semibold text-emerald-700 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Check size={14} className="stroke-[3px]" />
                      <span>Code VAHAN150 Applied</span>
                    </div>
                    <button
                      onClick={() => setCouponApplied(false)}
                      className="text-[10px] text-slate-400 hover:text-rose-500 underline font-bold"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Total */}
          {!loading && !apiError && (
            <div className="pt-6 border-t border-slate-200/60 mt-6 space-y-4 text-left">
              <div className="flex justify-between items-baseline">
                <span className="font-display font-extrabold text-slate-800 text-base">Total Estimated Fare</span>
                <span className="font-display font-extrabold text-brand-600 text-2xl">
                  ₹{Math.round(totalEstimatedFare).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="bg-slate-100 rounded-xl p-3.5 flex items-start gap-2.5">
                <ShieldAlert size={16} className="text-slate-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-500 leading-normal">
                  Estimated fare is calculated based on real-time distance via our server. Tolls, state permit charges and custom parking will be charged on actuals directly by driver partner.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
