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
  pushEvent("contact", {
    contact_method: method
  })
}

export const trackWhatsAppClick = (context) => {
  pushEvent("whatsapp_click", {
    click_context: context
  })
}

export const trackFleetRegistration = (vehicleType) => {
  pushEvent("fleet_registration_submitted", {
    vehicle_type: vehicleType
  })
}

export const trackEstimateRequested = (vehicleCategory) => {
  pushEvent("estimate_requested", {
    vehicle_category: vehicleCategory
  })
}
