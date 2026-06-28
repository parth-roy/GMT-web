import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  MapPin,
  Clock,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import SEOHead from '../seo/SEOHead';

/* ─── JSON-LD schemas ─────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local Transport Services in Kolkata',
  description:
    'Same-day local goods transport in Kolkata. Book mini truck, Tata Ace, tempo or bike delivery across all Kolkata areas instantly with verified drivers.',
  provider: {
    '@type': 'Organization',
    name: 'GoMyTruck – GoMyTruck',
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
  serviceType: 'Intracity Goods Transport',
  url: 'https://gomytruck.in/local-transport',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://gomytruck.in/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Local Transport Services',
      item: 'https://gomytruck.in/local-transport',
    },
  ],
};

/* ─── Data ────────────────────────────────────────────────────── */
const reasons = [
  {
    icon: <Zap className="w-8 h-8 text-brand-600" />,
    title: 'Save Time',
    body: 'No phone calls, no waiting. Book your local truck in under 2 minutes from anywhere in Kolkata.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-brand-600" />,
    title: 'Transparent Price',
    body: 'Pay a clear per-km rate with zero hidden charges. No bargaining, no surprises at the destination.',
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-600" />,
    title: 'Verified Drivers',
    body: 'Every driver on our platform is background-checked, licensed and rated by previous customers.',
  },
];

const useCases = [
  {
    icon: '\uD83C\uDFE0',
    title: 'Home Shifting within Kolkata',
    desc: 'Move furniture, appliances & packed items door-to-door within the city, same day.',
  },
  {
    icon: '\uD83D\uDED2',
    title: 'Shop Stock Delivery',
    desc: 'Deliver wholesale stock, retail goods or raw materials to your shop quickly.',
  },
  {
    icon: '\uD83D\uDDA5\uFE0F',
    title: 'Office Relocation',
    desc: 'Shift workstations, files and office equipment with care across Kolkata.',
  },
  {
    icon: '\uD83C\uDFAA',
    title: 'Event Material Transport',
    desc: 'Transport decorations, equipment and setups for events, exhibitions & promotions.',
  },
];

const areas = [
  'Park Street',
  'Salt Lake',
  'New Town',
  'Howrah',
  'Dum Dum',
  'Behala',
  'Tollygunge',
  'Jadavpur',
  'Kasba',
  'Garia',
  'Barasat',
  'Barrackpore',
  'Ballygunge',
  'Ultadanga',
  'Shyambazar',
];

const stats = [
  { icon: <Clock className="w-7 h-7 text-brand-400" />, value: '~20 min', label: 'Avg. Pickup Time' },
  { icon: <MapPin className="w-7 h-7 text-brand-400" />, value: '50+ Areas', label: 'Coverage across Kolkata' },
  { icon: <Zap className="w-7 h-7 text-brand-400" />, value: '24 / 7', label: 'Always Available' },
];

/* ─── Component ───────────────────────────────────────────────── */
export default function LocalTransportPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEOHead
        title="Local Transport Services in Kolkata | Same-Day Goods Delivery & Truck Booking"
        description="Book local transport services in Kolkata for same-day goods delivery. Mini truck, Tata Ace, bike delivery & tempo available across all Kolkata areas. Instant booking, verified drivers."
        canonical="/local-transport"
        keywords="local transport services, local goods transport Kolkata, same day delivery Kolkata, local truck booking, local tempo service, local mini truck, goods delivery Kolkata, intracity transport, local lorry booking, same day truck Kolkata"
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* decorative gradient blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-600 opacity-20 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-500 opacity-10 blur-2xl pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center gap-6">
          {/* badge */}
          <span className="inline-flex items-center gap-2 bg-brand-600/20 text-brand-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full ring-1 ring-brand-600/40">
            <Zap className="w-3.5 h-3.5" /> Same-Day City Delivery
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Local Transport Services{' '}
            <span className="text-brand-400">in Kolkata</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Book a verified mini truck, tempo or Tata Ace for same-day goods
            delivery anywhere across Kolkata &mdash; in under 2&nbsp;minutes.
            Transparent pricing. No bargaining. Just go.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              to="/book-truck-online"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 active:scale-95 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-900/40 transition-all duration-200"
            >
              Book Local Truck Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:9331488999"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl ring-1 ring-white/20 transition-all duration-200"
            >
              📞 Call: 93314 88999
            </a>
          </div>

          {/* trust strip */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-6 text-slate-400 text-sm">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" /> Verified Drivers
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" /> GPS-Tracked Vehicles
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" /> Zero Hidden Charges
            </span>
          </div>
        </div>
      </section>

      {/* ── 3 Reasons Section ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              3 Reasons to Book Local Transport Online
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Skip the hassle of roadside negotiation. Here&apos;s why thousands of
              Kolkata residents trust GoMyTruck.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group flex flex-col gap-4 p-8 rounded-2xl border border-slate-100 hover:border-brand-200 bg-slate-50 hover:bg-brand-50 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm group-hover:shadow-brand-100 transition-shadow">
                  {r.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{r.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use-Case Grid ──────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What Can You Transport Locally?
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              From home shifting to event logistics &mdash; our fleet handles it all
              across Kolkata on the same day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex flex-col gap-3 p-6 bg-white rounded-2xl border border-slate-100 hover:border-brand-300 hover:shadow-lg transition-all duration-200 group"
              >
                <span className="text-4xl">{uc.icon}</span>
                <h3 className="text-base font-bold text-slate-800 group-hover:text-brand-600 transition-colors">
                  {uc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas Covered ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4" /> Service Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Areas Covered in Kolkata
            </h2>
            <p className="mt-3 text-slate-500 max-w-lg mx-auto">
              We operate across all major neighbourhoods of Kolkata. If you
              don&apos;t see your area, just call us &mdash; we&apos;ll sort it out.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-brand-50 text-brand-700 border border-brand-200 text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-100 transition-colors cursor-default"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-500" />
                {area}
              </span>
            ))}
          </div>

          <p className="text-center mt-8 text-slate-500 text-sm">
            Need coverage in another area?{' '}
            <a
              href="https://wa.me/919331488999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 font-semibold hover:underline"
            >
              WhatsApp us →
            </a>
          </p>
        </div>
      </section>

      {/* ── Speed / Stats Section ──────────────────────────────── */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How Fast Is Local Transport?
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">
              Speed is our promise. Here&apos;s what you can expect when you book
              with GoMyTruck in Kolkata.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-brand-600 transition-colors"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-700">
                  {s.icon}
                </div>
                <span className="text-4xl font-extrabold text-white">
                  {s.value}
                </span>
                <span className="text-slate-400 text-sm text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────── */}
      <section className="bg-brand-600 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Ready for Same-Day Delivery in Kolkata?
          </h2>
          <p className="text-brand-100 text-lg max-w-xl">
            Book your local truck online right now &mdash; no calls needed. Our
            verified drivers are standing by across the city.
          </p>
          <Link
            to="/book-truck-online"
            className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-10 py-4 rounded-xl shadow-xl hover:bg-brand-50 active:scale-95 transition-all duration-200"
          >
            Book Local Truck <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── SEO Article & FAQs ───────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2 className="text-3xl font-bold text-slate-900 mt-0 mb-6 text-center">Fast & Reliable Local Transport Services in Kolkata</h2>
          <p>
            Navigating the bustling, narrow lanes of Kolkata requires a logistics partner who understands the city's unique geography. <strong>GoMyTruck</strong> provides top-tier <strong>local transport services in Kolkata</strong>, ensuring your goods are delivered quickly and safely, no matter where you are located. From the busy commercial hubs of Burrabazar and Posta to the modern IT corridors of Salt Lake and New Town, our fleet is equipped to handle every local shifting and delivery requirement.
          </p>
          <p>
            Local transport is the lifeblood of urban commerce. Whether you are a small business owner needing daily stock replenishment, a family moving to a new apartment in South Kolkata, or a distributor handling last-mile deliveries for e-commerce giants, you need vehicles that are prompt and drivers who are professional. GoMyTruck bridges this gap with technology, offering instant bookings, transparent pricing, and live tracking for absolute peace of mind.
          </p>
          
          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Comprehensive Local Goods Transport Solutions</h3>
          <p>
            We cater to a diverse array of local transport needs. Our services are designed to be flexible, accommodating varying load capacities and route requirements:
          </p>
          <ul className="space-y-2 mb-8">
            <li><strong>House & Room Shifting:</strong> Moving within Kolkata? We provide right-sized vehicles like <Link to="/mini-truck-booking-kolkata" className="text-brand-600 font-semibold hover:underline">Mini Trucks</Link> and Tata Aces, perfect for shifting 1BHKs, PG luggage, and individual rooms through narrow alleys without a hitch.</li>
            <li><strong>B2B Logistics & Retail Distribution:</strong> For SMEs and wholesalers, we offer dedicated fleet assignments. Transport raw materials to your factory in Howrah, or distribute finished FMCG products to retailers across North and South 24 Parganas effortlessly.</li>
            <li><strong>Heavy Commercial Deliveries:</strong> When a Tata Ace isn't enough, book our sturdy <Link to="/pickup-truck-booking-kolkata" className="text-brand-600 font-semibold hover:underline">Pickup Trucks</Link> (like the Bolero Pickup). They are ideal for transporting construction materials, heavy machinery, and bulk wholesale goods up to 1.5 tons.</li>
            <li><strong>E-Commerce & Courier Last-Mile:</strong> Speed is critical for e-commerce. We partner with courier hubs to provide agile vehicles for rapid, same-day local distribution to end customers.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Why GoMyTruck is Kolkata's Preferred Local Transporter</h3>
          <p>
            The local transport market is often plagued by unreliable service, hidden costs, and unavailable vehicles. GoMyTruck eliminates these pain points entirely:
          </p>
          <ol className="space-y-4 mb-8">
            <li><strong>Instant Availability:</strong> With thousands of verified driver partners spread across the city, we guarantee vehicle allocation within 15 to 30 minutes of booking.</li>
            <li><strong>100% Transparent Pricing:</strong> We calculate fares based on the exact distance between pickup and drop points via GPS. No haggling, no unexpected demands for extra money from drivers. What you see is what you pay.</li>
            <li><strong>Wide Range of Vehicles:</strong> Our fleet includes everything from two-wheelers for fast document delivery to Tata Aces, Bolero Pickups, and larger 14-ft trucks. We match the right vehicle to your specific cargo volume, saving you money.</li>
            <li><strong>Real-Time Tracking:</strong> Know exactly where your goods are. Our app provides live GPS tracking from the moment the vehicle leaves the pickup point until it reaches the destination.</li>
          </ol>

          <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Frequently Asked Questions (FAQs)</h3>
          <div className="space-y-4 not-prose mt-6">
            <details className="group bg-slate-50 border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                How do I book a local transport vehicle in Kolkata?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                It is incredibly simple. Just visit our <Link to="/book-truck-online" className="text-brand-600 font-semibold hover:underline">booking page</Link> or send us a message on WhatsApp. Enter your pickup and drop locations, choose the vehicle type, and confirm. A truck will be assigned instantly.
              </p>
            </details>
            <details className="group bg-slate-50 border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Do you provide labor for loading and unloading?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes, driver-helper or additional labor options are available during the booking process for a nominal extra charge. This ensures your goods are loaded and unloaded safely without you having to lift a finger.
              </p>
            </details>
            <details className="group bg-slate-50 border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Are there any "No Entry" timing restrictions for local trucks?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Kolkata traffic police impose "No Entry" timings for large commercial vehicles during peak hours. However, smaller vehicles like the Tata Ace generally face fewer restrictions. Our system automatically routes your booking and advises on the best dispatch time to avoid delays.
              </p>
            </details>
            <details className="group bg-slate-50 border border-slate-200 rounded-xl p-6 open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900">
                Can I transport goods from Kolkata to Barrackpore or Howrah?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Absolutely! Our local transport services cover the entire Kolkata Metropolitan Area, including seamless transport to <Link to="/goods-transport-barrackpore" className="text-brand-600 font-semibold hover:underline">Barrackpore</Link>, Howrah, Hooghly, and parts of North/South 24 Parganas.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── Internal Links ─────────────────────────────────────── */}
      <section className="bg-slate-50 py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Explore More Transport Services
          </h2>
          <p className="text-slate-500 mb-8 text-sm">
            GoMyTruck connects you to a full range of logistics solutions across
            Kolkata and beyond.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                to: '/transport-services-kolkata',
                label: 'Transport Services in Kolkata',
                desc: 'Full city-wide goods transport solutions.',
                icon: <Truck className="w-5 h-5" />,
              },
              {
                to: '/transport-services-barrackpore',
                label: 'Transport in Barrackpore',
                desc: 'Dedicated logistics for Barrackpore & North 24 Pgs.',
                icon: <MapPin className="w-5 h-5" />,
              },
              {
                to: '/book-truck-online',
                label: 'Book Truck Online',
                desc: 'Instant truck booking in 2 minutes flat.',
                icon: <Zap className="w-5 h-5" />,
              },
              {
                to: '/mini-truck-booking',
                label: 'Mini Truck Booking',
                desc: 'Tata Ace, Bolero Pickup & small tempos.',
                icon: <Truck className="w-5 h-5" />,
              },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex flex-col gap-2 p-5 bg-white rounded-xl border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all duration-200"
              >
                <span className="flex items-center gap-2 text-brand-600 font-semibold text-sm group-hover:text-brand-700">
                  {link.icon} {link.label}
                </span>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {link.desc}
                </p>
                <span className="flex items-center gap-1 text-brand-500 text-xs font-medium mt-auto group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Breadcrumb (visible) ───────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-t border-slate-100 py-3"
      >
        <ol className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link to="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
          </li>
          <li className="text-slate-800 font-medium">
            Local Transport Services
          </li>
        </ol>
      </nav>
    </>
  );
}
