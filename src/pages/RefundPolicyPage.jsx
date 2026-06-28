import React from "react"
import SEOHead from "../seo/SEOHead"

export default function RefundPolicyPage() {
  return (
    <>
      <SEOHead
        title="Cancellation & Refund Policy"
        description="Understand the cancellation and refund rules for bookings made through GoMyTruck."
        canonical="/refund-cancellation"
      />
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-2xl p-8 md:p-12 mt-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Cancellation & Refund Policy</h1>
          <p className="text-sm text-slate-500 mb-8">Last updated: June 2026</p>

          <div className="prose prose-blue max-w-none text-slate-700">
            <p>
              Parther Technologies Pvt. Ltd. ("GoMyTruck") strives to provide a seamless logistics experience. Please review our policy regarding cancellations and refunds for transport bookings.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Cancellation by Customer</h2>
            <p>
              <strong>Before Dispatch:</strong> You may cancel your booking without penalty if the assigned vehicle has not yet departed for the pickup location. Any pre-paid amount will be fully refunded to your wallet or original payment method.<br/><br/>
              <strong>After Dispatch:</strong> If you cancel after the driver has departed or arrived at the pickup location, a cancellation fee may apply to compensate the driver for fuel and time.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Cancellation by Driver / GoMyTruck</h2>
            <p>
              In the rare event that a driver cancels your trip or we cannot fulfill the booking due to vehicle breakdown or unavailability, you will not be charged. If a prepayment was made, a 100% refund will be initiated immediately.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Refund Processing</h2>
            <p>
              Approved refunds will be processed back to the original method of payment within 5-7 business days, depending on your bank or payment gateway's processing times. Wallet refunds are processed instantly.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Disputed Fares</h2>
            <p>
              If you believe you were incorrectly charged for tolls, waiting time, or distance, please raise a ticket through the app or contact support within 24 hours of trip completion. We will review the GPS logs and adjust the fare if an error occurred.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Contact Support</h2>
            <p>
              For any refund-related queries, please email us at support@gomytruck.com with your Booking ID.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
