/**
 * Utility functions for standardized event tracking via GTM dataLayer.
 * Supports GA4, Meta Pixel, and other marketing tags.
 */

export const pushEvent = (eventName, eventParams = {}) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    })
  }
}

export const trackLead = (source, serviceType) => {
  pushEvent("generate_lead", {
    lead_source: source,
    service_type: serviceType,
  })
}

export const trackContact = (method) => {
  pushEvent(method === "phone" ? "click_call" : "click_whatsapp", {
    contact_method: method
  })
}

export const trackWhatsAppClick = (context) => {
  pushEvent("click_whatsapp", {
    click_context: context
  })
}

export const trackCallClick = (context) => {
  pushEvent("click_call", {
    click_context: context,
  })
}

export const trackBeginBooking = (context) => {
  pushEvent("begin_booking", {
    booking_context: context,
  })
}

export const trackBookingSubmitted = (bookingId, vehicleType) => {
  pushEvent("submit_booking", {
    booking_id: bookingId,
    vehicle_type: vehicleType,
  })
}

export const trackFleetRegistration = (vehicleType) => {
  pushEvent("driver_signup_submit", {
    vehicle_type: vehicleType
  })
}

export const trackEstimateRequested = (vehicleCategory) => {
  pushEvent("estimate_requested", {
    vehicle_category: vehicleCategory
  })
}
