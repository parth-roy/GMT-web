import React, { useState, Suspense, lazy } from "react"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import EstimateModal from "./components/EstimateModal"
import GetEstimateModal from "./components/GetEstimateModal"
import GlobalFABs from "./components/GlobalFABs"

import Home from "./pages/Home"
import TruckPage from "./pages/TruckPage"
import PricingPage from "./pages/PricingPage"
import ContactPage from "./pages/ContactPage"

// Code splitting — Lazily load secondary routes
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
const LocalTransportPage = lazy(() => import("./pages/LocalTransportPage"))
const IntercityTransportPage = lazy(() => import("./pages/IntercityTransportPage"))
const BlogPage = lazy(() => import("./pages/BlogPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))

const MiniTruckKolkataPage = lazy(() => import("./pages/MiniTruckKolkataPage"))
const PickupTruckKolkataPage = lazy(() => import("./pages/PickupTruckKolkataPage"))
const GoodsTransportKolkataPage = lazy(() => import("./pages/GoodsTransportKolkataPage"))
const TransportMSMEPage = lazy(() => import("./pages/TransportMSMEPage"))
const CommercialGoodsTransportPage = lazy(() => import("./pages/CommercialGoodsTransportPage"))
const TataAceKolkataPage = lazy(() => import("./pages/TataAceKolkataPage"))
const GoodsTransportBarrackporePage = lazy(() => import("./pages/GoodsTransportBarrackporePage"))

const LegalDocumentView = lazy(() => import("./pages/LegalDocumentView"))
const DeleteAccountPage = lazy(() => import("./pages/DeleteAccountPage"))

// A simple premium spinner for Suspense fallback
const PageLoader = () => (
  <div className="py-32 w-full flex items-center justify-center bg-transparent">
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

            {/* NEW SILO ARCHITECTURE ROUTES */}
            <Route path="/kolkata/truck-booking" element={<TransportKolkataPage />} />
            <Route path="/barrackpore/truck-booking" element={<TransportBarrackporePage />} />
            <Route path="/kolkata/mini-truck-booking" element={<MiniTruckKolkataPage />} />
            <Route path="/kolkata/pickup-truck-rent" element={<PickupTruckKolkataPage />} />
            <Route path="/kolkata/goods-transport" element={<GoodsTransportKolkataPage />} />
            <Route path="/kolkata/tata-ace-booking" element={<TataAceKolkataPage />} />
            <Route path="/barrackpore/goods-transport" element={<GoodsTransportBarrackporePage />} />
            
            <Route path="/services/transport-for-msmes" element={<TransportMSMEPage />} />
            <Route path="/services/commercial-goods-transport" element={<CommercialGoodsTransportPage />} />
            <Route path="/services/fleet-partner-registration-india" element={<FleetPartnerPage />} />
            
            <Route path="/intercity/kolkata" element={<IntercityTransportPage />} />
            <Route path="/local-transport/kolkata" element={<LocalTransportPage />} />

            {/* REDIRECTS FROM OLD FLAT ARCHITECTURE TO NEW SILOS */}
            <Route path="/truck-booking-kolkata" element={<Navigate to="/kolkata/truck-booking" replace />} />
            <Route path="/truck-booking-barrackpore" element={<Navigate to="/barrackpore/truck-booking" replace />} />
            <Route path="/mini-truck-booking-kolkata" element={<Navigate to="/kolkata/mini-truck-booking" replace />} />
            <Route path="/pickup-truck-booking-kolkata" element={<Navigate to="/kolkata/pickup-truck-rent" replace />} />
            <Route path="/goods-transport-kolkata" element={<Navigate to="/kolkata/goods-transport" replace />} />
            <Route path="/local-transport-kolkata" element={<Navigate to="/local-transport/kolkata" replace />} />
            <Route path="/intercity-transport-from-kolkata" element={<Navigate to="/intercity/kolkata" replace />} />
            <Route path="/tata-ace-booking-kolkata" element={<Navigate to="/kolkata/tata-ace-booking" replace />} />

            <Route path="/goods-transport-barrackpore" element={<Navigate to="/barrackpore/goods-transport" replace />} />
            <Route path="/transport-service-for-msmes" element={<Navigate to="/services/transport-for-msmes" replace />} />
            <Route path="/commercial-goods-transport" element={<Navigate to="/services/commercial-goods-transport" replace />} />
            <Route path="/fleet-partner-registration-india" element={<Navigate to="/services/fleet-partner-registration-india" replace />} />
            
            {/* Legal Pages */}
            <Route path="/legal/privacy-policy" element={<LegalDocumentView documentId="privacy-policy" title="Privacy Policy" />} />
            <Route path="/legal/terms" element={<LegalDocumentView documentId="terms-conditions" title="Terms & Conditions" />} />
            <Route path="/terms" element={<Navigate to="/legal/terms" replace />} />
            <Route path="/legal/partner-terms" element={<LegalDocumentView documentId="partner-agreement" title="Independent Partner Agreement" />} />
            <Route path="/legal/refund-cancellation" element={<LegalDocumentView documentId="cancellation-policy" title="Cancellation & Refund Policy" />} />
            <Route path="/legal/community-guidelines" element={<LegalDocumentView documentId="community-guidelines" title="Community Guidelines" />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
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
