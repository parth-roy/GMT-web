import React from "react"
import { Helmet } from "react-helmet-async"

/**
 * SEOHead — Reusable per-page SEO component for GoMyTruck.
 *
 * Usage:
 *   <SEOHead
 *     title="Mini Truck Booking Near Me | GoMyTruck"
 *     description="Book mini truck near you..."
 *     canonical="https://gomytruck.com/truck"
 *     jsonLd={[...]} // optional additional JSON-LD objects
 *   />
 */

const SITE_NAME = "GoMyTruck"
const BASE_URL = "https://gomytruck.com"
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`
const DEFAULT_TWITTER = "@gomytruck"

const DEFAULT_GLOBAL_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gomytruck.com/#organization",
      "name": "GoMyTruck by Parther Technologies",
      "url": "https://gomytruck.com",
      "logo": "https://gomytruck.com/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/gomytruck",
        "https://twitter.com/gomytruck"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gomytruck.com/#localbusiness",
      "name": "GoMyTruck",
      "image": "https://gomytruck.com/og-image.jpg",
      "url": "https://gomytruck.com",
      "telephone": "+919331488999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chiriyamore",
        "addressLocality": "Barrackpore",
        "addressRegion": "West Bengal",
        "postalCode": "700120",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.7667,
        "longitude": 88.3667
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ]
};

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_IMAGE,
  jsonLd = [],
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `GoMyTruck - Online Truck Booking, Mini Vehicle & Goods Transport Services Kolkata`
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      }
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={DEFAULT_TWITTER} />

      {/* JSON-LD Structured Data (additional, per-page) */}
      {[DEFAULT_GLOBAL_SCHEMA, ...jsonLd].map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
