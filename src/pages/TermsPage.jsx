import React from "react"
import SEOHead from "../seo/SEOHead"

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions"
        description="Read the Terms and Conditions for using GoMyTruck services. Understand our policies on truck booking, goods transport, and user responsibilities."
        canonical="/terms"
      />
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-2xl p-8 md:p-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Terms & Conditions</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: June 2026</p>

          <div className="prose prose-blue max-w-none text-slate-700">
            <p>
              Welcome to GoMyTruck, a logistics-tech platform operated by Parther Technologies Pvt. Ltd. 
              By accessing or using our website, mobile applications, or services, you agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Use of Service</h2>
            <p>
              GoMyTruck connects users seeking transportation services ("Customers") with independent third-party transport providers ("Driver Partners" or "Fleet Owners"). 
              We are a technology platform facilitating logistics and do not operate our own fleet of vehicles unless explicitly stated for specific enterprise contracts.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. User Accounts</h2>
            <p>
              You must provide accurate and complete information when creating an account. You are responsible for safeguarding your login credentials (OTP/Password) and are liable for all activities under your account.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Bookings and Payments</h2>
            <p>
              Fare estimates provided on the platform are based on distance, vehicle type, and current market dynamics. Final fares may vary based on actual route taken, waiting time, and tolls. Payments must be settled as agreed (cash or digital wallet) upon completion of the service.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Goods Restrictions</h2>
            <p>
              Customers are strictly prohibited from booking transport for illegal, hazardous, explosive, or highly flammable materials. GoMyTruck and its partners hold zero tolerance for the transportation of contraband.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Liability</h2>
            <p>
              GoMyTruck acts as an intermediary. While we verify our partners, we are not directly liable for damages, delays, or loss of goods during transit unless explicitly covered under a specialized enterprise SLA. We recommend securing transit insurance for high-value goods.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Modifications to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions regarding these terms, please contact us at:<br/>
              <strong>Parther Technologies Pvt. Ltd.</strong><br/>
              Barrackpore, Kolkata, West Bengal<br/>
              Support Email: support@gomytruck.com
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
