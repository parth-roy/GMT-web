import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import SEOHead from "../seo/SEOHead"
import PartnerHero from "../components/PartnerHero"
import PartnerBenefits from "../components/PartnerBenefits"
import PartnerVehicles from "../components/PartnerVehicles"
import PartnerHowItWorks from "../components/PartnerHowItWorks"
import PartnerTestimonials from "../components/PartnerTestimonials"
import PartnerFAQ from "../components/PartnerFAQ"

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fleet Partner Registration — GoMyTruck",
    "provider": { "@type": "Organization", "name": "GoMyTruck", "url": "https://gomytruck.com" },
    "areaServed": "India",
    "serviceType": "Fleet Partner Registration, Truck Attachment, Fleet Owner Onboarding",
    "description": "Register your fleet with GoMyTruck. Attach your commercial vehicles and earn consistent income with zero idle time. India's largest truck booking platform for fleet owners."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
      { "@type": "ListItem", "position": 2, "name": "Fleet Partner Registration", "item": "https://gomytruck.com/fleet-partner-registration" }
    ]
  }
]

export default function FleetPartnerPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <SEOHead
        title="Fleet Partner Registration | Attach Your Trucks & Earn — GoMyTruck"
        description="Register your truck fleet with GoMyTruck and earn consistent income. Fleet owners can attach multiple commercial vehicles, access load board, get regular bookings and return loads across India. Register free."
        canonical="/fleet-partner-registration"
        keywords="fleet partner registration, fleet owner registration, attach truck to company, commercial vehicle registration, truck fleet onboarding, transport company tie up, fleet management logistics, attach fleet to GoMyTruck, truck owner earn money, logistics fleet partner, return load for fleet, fleet truck booking India"
        jsonLd={schema}
      />
      
      <main className="font-sans">
        <PartnerHero isFleetOwner={true} />
        <PartnerVehicles />
        <PartnerHowItWorks />
        <PartnerBenefits />
        <PartnerTestimonials />
        {/* Note: I'm omitting PartnerFAQ here because this page already has a custom FAQ below in the SEO article */}
      </main>

      {/* SEO Article & FAQs */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2 className="text-3xl font-bold text-slate-900 mt-0 mb-6 text-center">Join the GoMyTruck Fleet Partner Program</h2>
          <p>
            The Indian logistics sector is booming, but many independent fleet owners struggle with idle vehicles, inconsistent bookings, and delayed payments from traditional brokers. <strong>GoMyTruck</strong> is here to change that. By registering for our <strong>Fleet Partner Registration</strong> program, you can attach your commercial vehicles to our tech-driven platform and secure a steady stream of verified loads.
          </p>
          <p>
            Whether you own a single <Link to="/tata-ace-booking-kolkata" className="text-brand-600 font-semibold hover:underline">Tata Ace</Link> or manage a massive fleet of multi-axle 19-ft trucks, our platform connects you directly with high-volume enterprise clients, SMEs, and individual customers. We eliminate the middlemen, allowing you to maximize the earning potential of every vehicle in your fleet.
          </p>
          
          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Why Attach Your Fleet to GoMyTruck?</h3>
          <p>
            Attaching your commercial vehicles to GoMyTruck offers unparalleled advantages over the traditional transport broker model:
          </p>
          <ul className="space-y-2 mb-8">
            <li><strong>Zero Idle Time:</strong> Our advanced load-matching algorithm ensures that as soon as your truck drops off a shipment, a return load is already lined up. We cover both local routes and <Link to="/intercity-transport-from-kolkata" className="text-brand-600 font-semibold hover:underline">intercity transport</Link>, minimizing empty return trips that eat into your fuel budget.</li>
            <li><strong>Guaranteed Timely Payments:</strong> Say goodbye to chasing brokers for your money. GoMyTruck operates on a transparent, digitized payment system. Your payments are processed automatically and credited directly to your bank account on time, every time.</li>
            <li><strong>High-Quality Demand:</strong> You get direct access to our massive network of verified B2B enterprise clients and regular e-commerce distributors who require daily freight movement.</li>
            <li><strong>Complete Control:</strong> You decide your operating routes. Whether you want your trucks running locally within Kolkata, or across West Bengal to Durgapur and Asansol, our Partner App lets you choose loads that fit your fleet's schedule.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Which Vehicles Can Be Attached?</h3>
          <p>
            We accommodate almost every commercial vehicle category in our network to meet the diverse <Link to="/goods-transport-services-kolkata" className="text-brand-600 font-semibold hover:underline">goods transport</Link> needs of our clients:
          </p>
          <ol className="space-y-4 mb-8">
            <li><strong>Light Commercial Vehicles (LCV):</strong> Tata Ace (Chota Hathi), Mahindra Maxximo, Ashok Leyland Dost, and Piaggio Ape. Perfect for intracity logistics.</li>
            <li><strong>Medium Commercial Vehicles (MCV):</strong> <Link to="/pickup-truck-booking-kolkata" className="text-brand-600 font-semibold hover:underline">Bolero Pickup</Link>, Tata 407, and 14-ft Eicher trucks. Ideal for mid-mile distribution and heavy B2B deliveries.</li>
            <li><strong>Heavy Commercial Vehicles (HCV):</strong> 17-ft, 19-ft, 22-ft containers, and open-body trucks for long-haul intercity freight.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Frequently Asked Questions (FAQs)</h3>
          <div className="space-y-4 not-prose mt-6">
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Is there any registration fee to become a Fleet Partner?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                No, registration is completely free. We do not charge upfront fees to onboard fleet owners. Our revenue model is based on a transparent, small platform fee applied only when you successfully complete a trip through us.
              </p>
            </details>
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                What documents are required for registration?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                You will need to provide standard commercial vehicle documentation: RC Book, Fitness Certificate, Commercial Insurance, Pollution Under Control (PUC) certificate, and the driving license/Aadhar card of the assigned driver.
              </p>
            </details>
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Can I attach a vehicle if I am an individual driver-owner?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Absolutely! Our platform is open to large transport companies and independent driver-owners alike. Whether you drive your own truck or hire drivers, you are welcome to join.
              </p>
            </details>
            <details className="group bg-white border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                How do I receive trip requests?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Once registered and verified, you will be given access to the GoMyTruck Partner App. You will receive real-time notifications for trip requests in your area, which you can accept with a single tap.
              </p>
            </details>
          </div>

          <div className="my-10 bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center not-prose">
            <h3 className="text-2xl font-bold text-slate-900 mt-0 mb-4">Start Earning Today</h3>
            <p className="text-slate-600 mb-6">
              Attach your truck today and transform your transport business with consistent daily loads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://play.google.com/store/apps/details?id=com.gomytruck.partner" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                Download Partner App
              </a>
              <a href="https://wa.me/919331488999?text=Hi%20GoMyTruck,%20I%20want%20to%20register%20my%20truck%20as%20a%20Fleet%20Partner" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

