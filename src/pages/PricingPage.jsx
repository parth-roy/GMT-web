import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Plus,
  Minus,
  Truck,
  ArrowRight,
  CheckCircle,
  BadgeCheck,
} from 'lucide-react';
import SEOHead from '../seo/SEOHead';

/* ─────────────────────────── JSON-LD ─────────────────────────── */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GoMyTruck Truck Booking Service – Pricing',
    provider: {
      '@type': 'Organization',
      name: 'GoMyTruck by GoMyTruck',
      url: 'https://www.gomytruck.in',
      telephone: '+919331488999',
      email: 'hello@parthertech.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Chiriyamore, Barrackpore',
        addressLocality: 'North 24 Parganas',
        addressRegion: 'West Bengal',
        postalCode: '700120',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Kolkata',
    },
    description:
      'Transparent, distance-based truck booking charges in Kolkata. Per-km pricing for bike delivery, 3-wheeler tempo, Tata Ace and mini truck. No hidden fees.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Truck Rental Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Bike Delivery',
          price: '25',
          priceCurrency: 'INR',
          description: 'Base fare Rs.25, Rs.8/km – documents & parcels up to 10 kg',
        },
        {
          '@type': 'Offer',
          name: '3-Wheeler / Tempo',
          price: '80',
          priceCurrency: 'INR',
          description: 'Base fare Rs.80, Rs.12/km – small goods & furniture up to 500 kg',
        },
        {
          '@type': 'Offer',
          name: 'Tata Ace',
          price: '120',
          priceCurrency: 'INR',
          description:
            'Base fare Rs.120, Rs.15/km – business delivery & shop stock up to 750 kg',
        },
        {
          '@type': 'Offer',
          name: 'Mini Truck',
          price: '200',
          priceCurrency: 'INR',
          description:
            'Base fare Rs.200, Rs.18/km – large shifting & FTL up to 1500 kg',
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.gomytruck.in/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pricing',
        item: 'https://www.gomytruck.in/pricing',
      },
    ],
  },
];

/* ─────────────────────────── Data ─────────────────────────── */
const vehicles = [
  {
    id: 'bike',
    label: 'Bike Delivery',
    emoji: '🛵',
    baseFare: 25,
    perKm: 8,
    minFare: 40,
    capacity: 'Up to 10 kg',
    bestFor: 'Documents & light parcels',
    color: 'from-sky-50 to-white',
    accent: 'bg-sky-100 text-sky-700',
    popular: false,
  },
  {
    id: 'tempo',
    label: '3-Wheeler / Tempo',
    emoji: '🛺',
    baseFare: 80,
    perKm: 12,
    minFare: 150,
    capacity: 'Up to 500 kg',
    bestFor: 'Small goods & furniture',
    color: 'from-violet-50 to-white',
    accent: 'bg-violet-100 text-violet-700',
    popular: false,
  },
  {
    id: 'tata-ace',
    label: 'Tata Ace',
    emoji: '🚐',
    baseFare: 120,
    perKm: 15,
    minFare: 250,
    capacity: 'Up to 750 kg',
    bestFor: 'Business delivery & shop stock',
    color: 'from-brand-50 to-white',
    accent: 'bg-brand-100 text-brand-700',
    popular: true,
  },
  {
    id: 'mini-truck',
    label: 'Mini Truck',
    emoji: '🚛',
    baseFare: 200,
    perKm: 18,
    minFare: 400,
    capacity: 'Up to 1500 kg',
    bestFor: 'Large shifting & FTL loads',
    color: 'from-amber-50 to-white',
    accent: 'bg-amber-100 text-amber-700',
    popular: false,
  },
];

const howItWorks = [
  {
    icon: <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />,
    heading: 'Distance-based transparent pricing',
    body: 'Your fare = Base fare + (Distance in km x per-km rate). That is it. No surge multipliers, no fuel surcharge, no night charge surprises.',
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />,
    heading: 'Zero hidden fees — ever',
    body: 'The price you see in the app or on our website is the price you pay. Tolls, if applicable, are communicated upfront and split fairly.',
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />,
    heading: 'Final amount confirmed before booking',
    body: 'Enter pick-up and drop locations, choose your vehicle type, and review the exact amount before you confirm your booking.',
  },
];

const faqs = [
  {
    q: 'How is the truck booking fare calculated?',
    a: 'Your fare is calculated as: Base Fare + (Distance in km x Per-km Rate). For example, a 10 km trip in a Tata Ace would be Rs.120 + (10 x Rs.15) = Rs.270. Minimum fare applies if the total is below the minimum.',
  },
  {
    q: 'Are there any hidden charges in truck booking?',
    a: 'No. GoMyTruck follows a zero-hidden-charges policy. The fare estimate shown before booking is what you pay. Tolls, if any, are disclosed separately before you confirm.',
  },
  {
    q: 'What if the route changes mid-trip?',
    a: 'If the destination changes after the trip has started, additional kilometres will be billed at the standard per-km rate for the chosen vehicle type. The driver will update the trip details accordingly.',
  },
  {
    q: 'Is loading and unloading included in the price?',
    a: 'Loading and unloading assistance is not included in the base fare by default. You can add a helper/labour service at the time of booking for a nominal additional charge.',
  },
  {
    q: 'Do truck booking prices vary by time of day?',
    a: 'Standard rates apply for most bookings. During peak demand windows (e.g., month-end or festival seasons) a surge adjustment may apply — you will always see this reflected in your fare estimate before confirming.',
  },
];

/* ─────────────────────────── Sub-components ─────────────────── */

function PricingCard({ vehicle }) {
  const {
    label,
    emoji,
    baseFare,
    perKm,
    minFare,
    capacity,
    bestFor,
    color,
    accent,
    popular,
  } = vehicle;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border ${
        popular
          ? 'border-brand-500 shadow-xl shadow-brand-100 scale-[1.02]'
          : 'border-slate-200 shadow-md hover:shadow-xl'
      } bg-gradient-to-b ${color} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <span className="inline-flex items-center gap-1 bg-brand-600 text-white text-xs font-semibold px-4 py-1 rounded-b-xl tracking-wide">
            <BadgeCheck className="w-3.5 h-3.5" />
            Most Popular
          </span>
        </div>
      )}

      <div className={`p-6 ${popular ? 'pt-9' : ''} flex flex-col gap-4 grow`}>
        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="text-4xl">{emoji}</span>
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              {label}
            </h3>
            <span
              className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${accent}`}
            >
              {capacity}
            </span>
          </div>
        </div>

        {/* Fare details */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white rounded-xl py-3 px-1 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Base Fare</p>
            <p className="text-xl font-extrabold text-slate-900">
              &#8377;{baseFare}
            </p>
          </div>
          <div className="bg-white rounded-xl py-3 px-1 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Per Km</p>
            <p className="text-xl font-extrabold text-brand-600">
              &#8377;{perKm}
            </p>
          </div>
          <div className="bg-white rounded-xl py-3 px-1 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Min Fare</p>
            <p className="text-xl font-extrabold text-slate-900">
              &#8377;{minFare}
            </p>
          </div>
        </div>

        {/* Best for */}
        <p className="text-sm text-slate-600 flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
          <span>
            <span className="font-semibold text-slate-700">Best for: </span>
            {bestFor}
          </span>
        </p>

        {/* CTA */}
        <div className="mt-auto pt-2">
          <Link
            to="/book-truck-online"
            className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
              popular
                ? 'bg-brand-600 text-white hover:bg-brand-700'
                : 'bg-slate-900 text-white hover:bg-slate-700'
            }`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800 text-sm sm:text-base">
          {faq.q}
        </span>
        <span className="shrink-0 text-brand-600">
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-slate-50 border-t border-slate-100">
          <p className="text-slate-600 text-sm leading-relaxed pt-3">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleFaq = (idx) => setOpenFaq((prev) => (prev === idx ? null : idx));

  return (
    <>
      <SEOHead
        title="Truck Booking Charges in Kolkata | Fare Calculator & Pricing Guide"
        description="Know GoMyTruck truck booking charges before you book. Transparent per-km pricing for 3-wheeler, Tata Ace, mini truck & full truck. Get an instant fare estimate online."
        canonical="/pricing"
        keywords="truck booking charges, truck booking fare, mini truck rent per km, Tata Ace rent price, transport charges Kolkata, logistics pricing, truck rental rates India, freight cost calculator, tempo rent charges"
        jsonLd={jsonLd}
      />

      {/* ── Hero ── */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-600/20 border border-brand-500/30 text-brand-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Truck className="w-3.5 h-3.5" />
            Honest Pricing &middot; Always
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Transparent Truck Booking Prices &mdash;{' '}
            <span className="text-brand-400">No Hidden Charges</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            From bike deliveries to full-size mini trucks, every fare on
            GoMyTruck is calculated upfront so you know exactly what you&apos;ll
            pay before you confirm.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book-truck-online"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors"
            >
              Get Fare Estimate <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/truck"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-7 py-3 rounded-xl transition-colors"
            >
              View Vehicles
            </Link>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-50 border-b border-slate-200 px-4 py-2.5"
      >
        <ol className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <li>
            <Link to="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-slate-800 font-medium">Pricing</li>
        </ol>
      </nav>

      {/* ── Pricing cards ── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Vehicle-wise Fare Rates
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
              Choose the vehicle that fits your load. Every price below is the
              live rate &mdash; no surprises at checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {vehicles.map((v) => (
              <PricingCard key={v.id} vehicle={v} />
            ))}
          </div>

          {/* Legend */}
          <p className="mt-8 text-center text-xs text-slate-400">
            * Prices are indicative and may vary slightly based on exact route.
            Final fare shown before booking confirmation. GST applicable as per
            government norms.
          </p>
        </div>
      </section>

      {/* ── How pricing works ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              How Our Pricing Works
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Simple. Fair. Always in your favour.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {howItWorks.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-200 transition-colors"
              >
                {item.icon}
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">
                    {item.heading}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fare Calculator Teaser ── */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-600 to-brand-800">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <BadgeCheck className="w-3.5 h-3.5" />
            Instant Quote
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Get Your Exact Fare Estimate
          </h2>
          <p className="text-brand-100 text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Enter your pick-up and drop locations, pick a vehicle, and get your
            exact fare in seconds &mdash; before you commit to anything.
          </p>
          <Link
            to="/book-truck-online"
            className="inline-flex items-center gap-3 bg-white text-brand-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:bg-brand-50 transition-all duration-200 text-base"
          >
            Calculate My Fare Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-5 text-brand-200 text-xs">
            No registration needed &middot; Instant estimate &middot; Book in 60
            seconds
          </p>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Pricing FAQs
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Common questions about truck booking charges answered.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <FaqItem
                key={idx}
                faq={faq}
                isOpen={openFaq === idx}
                onToggle={() => toggleFaq(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links / footer CTA ── */}
      <section className="py-14 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-slate-900 mb-6 text-center">
            Explore More on GoMyTruck
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                to: '/book-truck-online',
                title: 'Book a Truck Online',
                desc: 'Instant booking in 60 seconds',
                icon: '📦',
              },
              {
                to: '/truck',
                title: 'All Vehicle Types',
                desc: 'Compare trucks for your load',
                icon: '🚚',
              },
              {
                to: '/mini-truck-booking',
                title: 'Mini Truck Booking',
                desc: 'Tata Ace & tempo on demand',
                icon: '🚐',
              },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-3xl">{link.icon}</span>
                <div>
                  <p className="font-bold text-slate-800 group-hover:text-brand-600 transition-colors text-sm">
                    {link.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-500 ml-auto mt-1 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
