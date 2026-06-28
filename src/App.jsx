import React, { useState, Suspense, lazy } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import EstimateModal from "./components/EstimateModal"
import GetEstimateModal from "./components/GetEstimateModal"
import GlobalFABs from "./components/GlobalFABs"

// Code splitting — Lazily load all route pages to fix Vite chunk size warnings
const Home = lazy(() => import("./pages/Home"))
const TruckPage = lazy(() => import("./pages/TruckPage"))
const BikePage = lazy(() => import("./pages/BikePage"))
const ServicesPage = lazy(() => import("./pages/ServicesPage"))
const EnterprisePage = lazy(() => import("./pages/EnterprisePage"))
const AboutPage = lazy(() => import("./pages/AboutPage"))
const SupportPage = lazy(() => import("./pages/SupportPage"))
const DriversPage = lazy(() => import("./pages/DriversPage"))
const WorkforcePage = lazy(() => import("./pages/WorkforcePage"))

const PackersAndMoversPage = lazy(() => import("./pages/PackersAndMoversPage"))
const BookTruckOnlinePage = lazy(() => import("./pages/BookTruckOnlinePage"))
const MiniTruckBookingPage = lazy(() => import("./pages/MiniTruckBookingPage"))
const GoodsTransportPage = lazy(() => import("./pages/GoodsTransportPage"))
const FleetPartnerPage = lazy(() => import("./pages/FleetPartnerPage"))
const GoMyTruckVerifiedPage = lazy(() => import("./pages/GoMyTruckVerifiedPage"))
const TransportKolkataPage = lazy(() => import("./pages/TransportKolkataPage"))
const TransportBarrackporePage = lazy(() => import("./pages/TransportBarrackporePage"))
const ContactPage = lazy(() => import("./pages/ContactPage"))
const PricingPage = lazy(() => import("./pages/PricingPage"))
const LocalTransportPage = lazy(() => import("./pages/LocalTransportPage"))
const IntercityTransportPage = lazy(() => import("./pages/IntercityTransportPage"))
const BlogPage = lazy(() => import("./pages/BlogPage"))

const MiniTruckKolkataPage = lazy(() => import("./pages/MiniTruckKolkataPage"))
const PickupTruckKolkataPage = lazy(() => import("./pages/PickupTruckKolkataPage"))
const GoodsTransportKolkataPage = lazy(() => import("./pages/GoodsTransportKolkataPage"))
const TransportMSMEPage = lazy(() => import("./pages/TransportMSMEPage"))
const CommercialGoodsTransportPage = lazy(() => import("./pages/CommercialGoodsTransportPage"))
const TataAceKolkataPage = lazy(() => import("./pages/TataAceKolkataPage"))
const GoodsTransportBarrackporePage = lazy(() => import("./pages/GoodsTransportBarrackporePage"))
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"))
const DeleteAccountPage = lazy(() => import("./pages/DeleteAccountPage"))

const TermsPage = lazy(() => import("./pages/TermsPage"))
const PartnerTermsPage = lazy(() => import("./pages/PartnerTermsPage"))
const RefundPolicyPage = lazy(() => import("./pages/RefundPolicyPage"))

// A simple premium spinner for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-brand-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
)

export default function App() {
  // isEstimateOpen / estimateData kept for legacy compatibility
  const [isEstimateOpen, setIsEstimateOpen] = useState(false)
  const [isSelectServiceOpen, setIsSelectServiceOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [estimateData, setEstimateData] = useState(null)
  const navigate = useNavigate()

  const handleOpenEstimate = () => {
    // Open the upgraded 2-step GetEstimateModal (selects vehicle + enters route + hits API)
    setIsSelectServiceOpen(true)
  }

  const handleScrollToSection = (id) => {
    if (id === "enterprise") {
      navigate("/enterprise")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (id === "services") {
      navigate("/")
      setTimeout(() => {
        const element = document.getElementById("services")
        if (element) element.scrollIntoView({ behavior: "smooth" })
        else window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    } else if (id === "driver-partner") {
      navigate("/driver-partner")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (id === "workforce") {
      navigate("/workforce")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (id === "support") {
      navigate("/support")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (id === "about") {
      navigate("/about")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Legacy: kept in case any sub-component calls onCalculateEstimate with pre-built data
  const handleCalculateEstimate = (data) => {
    setEstimateData(data)
    setIsEstimateOpen(true)
  }

  const handleSelectVehicle = (category) => {
    setSelectedService(category)
    if (category === "truck") navigate("/truck")
    else if (category === "bike") navigate("/bike")
    else if (category === "movers") navigate("/packers-and-movers")
    else navigate("/")
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar
        onOpenEstimate={handleOpenEstimate}
        onScrollToSection={handleScrollToSection}
      />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={
              <Home
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                onCalculateEstimate={handleCalculateEstimate}
                onOpenEstimate={handleOpenEstimate}
                onSelectVehicle={handleSelectVehicle}
              />
            } />
            <Route path="/truck" element={<TruckPage />} />
            <Route path="/bike" element={<BikePage />} />
            <Route path="/packers-and-movers" element={<PackersAndMoversPage />} />
            <Route path="/services" element={<ServicesPage onSelectVehicle={handleSelectVehicle} />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/driver-partner" element={<DriversPage />} />
            <Route path="/workforce" element={<WorkforcePage />} />
            {/* SEO Landing Pages */}
            <Route path="/book-truck-online" element={<BookTruckOnlinePage />} />
            <Route path="/mini-truck-booking" element={<MiniTruckBookingPage />} />
            <Route path="/goods-transport-services" element={<GoodsTransportPage />} />
            <Route path="/fleet-partner-registration" element={<FleetPartnerPage />} />
            <Route path="/gomytruck-verified" element={<GoMyTruckVerifiedPage />} />
            <Route path="/transport-services-kolkata" element={<TransportKolkataPage />} />
            <Route path="/transport-services-barrackpore" element={<TransportBarrackporePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/local-transport" element={<LocalTransportPage />} />
            <Route path="/intercity-transport" element={<IntercityTransportPage />} />
            <Route path="/blog" element={<BlogPage />} />

            {/* Exact URLs requested from the image list (Consolidated to Canonical) */}
            <Route path="/truck-booking-kolkata" element={<TransportKolkataPage />} />
            <Route path="/truck-booking-barrackpore" element={<TransportBarrackporePage />} />
            <Route path="/mini-truck-booking-kolkata" element={<MiniTruckKolkataPage />} />
            <Route path="/pickup-truck-booking-kolkata" element={<PickupTruckKolkataPage />} />
            <Route path="/goods-transport-kolkata" element={<GoodsTransportKolkataPage />} />
            <Route path="/local-transport-kolkata" element={<LocalTransportPage />} />
            <Route path="/intercity-transport-from-kolkata" element={<IntercityTransportPage />} />
            <Route path="/tata-ace-booking-kolkata" element={<TataAceKolkataPage />} />

            <Route path="/goods-transport-barrackpore" element={<GoodsTransportBarrackporePage />} />
            <Route path="/transport-service-for-msmes" element={<TransportMSMEPage />} />
            <Route path="/commercial-goods-transport" element={<CommercialGoodsTransportPage />} />
            <Route path="/fleet-partner-registration-india" element={<FleetPartnerPage />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/partner-terms" element={<PartnerTermsPage />} />
            <Route path="/refund-cancellation" element={<RefundPolicyPage />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Legacy EstimateModal — used if estimateData passed directly from a component */}
      <EstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
        estimateData={estimateData}
      />

      {/* Upgraded 2-step GetEstimateModal: selects service → fills route → calls live API */}
      <GetEstimateModal
        isOpen={isSelectServiceOpen}
        onClose={() => setIsSelectServiceOpen(false)}
        onSelectService={handleSelectVehicle}
      />

      {/* Global Floating Action Buttons for WhatsApp and Booking */}
      <GlobalFABs onOpenEstimate={handleOpenEstimate} />
    </div>
  )
}
