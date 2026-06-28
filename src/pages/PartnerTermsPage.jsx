import React from "react"
import SEOHead from "../seo/SEOHead"

export default function PartnerTermsPage() {
  return (
    <>
      <SEOHead
        title="Fleet & Driver Partner Terms"
        description="Terms and conditions for driver partners and fleet owners attaching their trucks to GoMyTruck."
        canonical="/partner-terms"
      />
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-2xl p-8 md:p-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Fleet Partner Terms</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: June 2026</p>

          <div className="prose prose-blue max-w-none text-slate-700">
            <p>
              These Partner Terms govern the relationship between Parther Technologies Pvt. Ltd. ("GoMyTruck") and commercial transport providers ("Partners", "Driver Partners", "Fleet Owners") who attach their vehicles to the GoMyTruck platform.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Eligibility and Documentation</h2>
            <p>
              To become a verified Partner, you must provide valid and current documentation, including but not limited to: Driving License, Vehicle Registration (RC), Commercial Insurance, Fitness Certificate, and Aadhar/PAN for identity verification.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Independent Contractor Status</h2>
            <p>
              Partners operate as independent contractors. Nothing in these terms creates an employer-employee relationship, partnership, or joint venture between GoMyTruck and the Partner.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Lead Generation and Payouts</h2>
            <p>
              GoMyTruck acts as a lead generation and marketplace platform. Earning estimates provided in marketing materials (e.g., "Earn up to ₹45,000") are projections based on high-performance metrics and are not guaranteed minimum incomes. Payouts, commissions, and platform fees will be calculated as per the active rate card.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Zero Tolerance Policy</h2>
            <p>
              GoMyTruck strictly prohibits driving under the influence of alcohol or drugs, harassment, discrimination, or transporting illegal/contraband goods. Violation of the Zero Tolerance Policy will result in immediate suspension and potential legal action.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Account Suspension</h2>
            <p>
              We reserve the right to suspend or terminate a Partner's access to the platform for poor performance ratings, policy violations, or fraudulent activity.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Contact</h2>
            <p>
              Fleet Onboarding Support: fleet@gomytruck.com<br/>
              Registered Office: Barrackpore, Kolkata
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
