import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react"
import SEOHead from "../seo/SEOHead"

// ─── JSON-LD ────────────────────────────────────────────────────────────────
const jsonLdSchema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "GoMyTruck Knowledge Hub",
    "headline": "Logistics & Transport Blog | Truck Booking Tips, Guides & News",
    "description":
      "Read GoMyTruck's logistics blog for truck booking tips, goods transport guides, packing advice, and freight industry news. Learn how to save money on transport and move goods safely.",
    "url": "https://gomytruck.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "GoMyTruck",
      "url": "https://gomytruck.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gomytruck.com/go-my-truck-logo.png"
      }
    },
    "inLanguage": "en-IN"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gomytruck.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://gomytruck.com/blog" }
    ]
  }
]

// ─── Blog Posts ──────────────────────────────────────────────────────────────
const blogPosts = [
  {
    title: "How to Request a Truck Online in Kolkata",
    category: "Booking Guide",
    readTime: "5 min read",
    date: "Service guide",
    excerpt:
      "Review the route, vehicle, goods declaration, estimate, confirmation, and partner-assignment stages.",
    slug: "book-truck-online",
    href: "/book-truck-online",
  },
  /*
  {
    title: "How GoMyTruck Route Pricing Is Calculated",
    category: "Pricing",
    readTime: "4 min read",
    date: "Pricing guide",
    excerpt:
      "Understand base, distance, time, fuel, demand, workforce, GST, toll, and waiting components.",
    slug: "pricing",
    href: "/pricing",
  },
  */
  {
    title: "How to Scope a Packing and Moving Quote",
    category: "Moving Tips",
    readTime: "8 min read",
    date: "Moving guide",
    excerpt:
      "Declare inventory, access, packing materials, specialist work, vehicle, workforce, and timing before acceptance.",
    slug: "packers-and-movers",
    href: "/packers-and-movers",
  },
  {
    title: "FTL and PTL Transport Planning",
    category: "Freight Guide",
    readTime: "6 min read",
    date: "Freight guide",
    excerpt:
      "Compare dedicated and shared capacity, then confirm route-specific PTL availability and operating terms.",
    slug: "ftl-vs-ptl",
    href: "/truck",
  },
  {
    title: "Kolkata Transport Service Hubs",
    category: "Local Guide",
    readTime: "3 min read",
    date: "Local guide",
    excerpt:
      "Explore the Kolkata hub and linked local pages, then check exact route serviceability and current availability.",
    slug: "kolkata-hub",
    href: "/kolkata",
  },
  {
    title: "Declaring Goods for a Transport Request",
    category: "Packing Tips",
    readTime: "5 min read",
    date: "Goods guide",
    excerpt:
      "Review the goods category, description, weight, quantity, handling, restricted-goods declaration, and workforce fields.",
    slug: "declare-goods",
    href: "/goods-transport-services",
  },
]

// ─── Category Colour Map ─────────────────────────────────────────────────────
const categoryStyles = {
  "Booking Guide": {
    badge: "bg-green-100 text-green-700 border-green-200",
    bar: "bg-green-500",
    accentHover: "hover:text-green-600",
    linkHover: "group-hover:text-green-600",
  },
  Pricing: {
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    bar: "bg-blue-500",
    accentHover: "hover:text-blue-600",
    linkHover: "group-hover:text-blue-600",
  },
  "Moving Tips": {
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    bar: "bg-orange-500",
    accentHover: "hover:text-orange-600",
    linkHover: "group-hover:text-orange-600",
  },
  "Freight Guide": {
    badge: "bg-purple-100 text-purple-700 border-purple-200",
    bar: "bg-purple-500",
    accentHover: "hover:text-purple-600",
    linkHover: "group-hover:text-purple-600",
  },
  "Local Guide": {
    badge: "bg-brand-100 text-brand-700 border-brand-200",
    bar: "bg-brand-500",
    accentHover: "hover:text-brand-600",
    linkHover: "group-hover:text-brand-600",
  },
  "Packing Tips": {
    badge: "bg-red-100 text-red-700 border-red-200",
    bar: "bg-red-500",
    accentHover: "hover:text-red-600",
    linkHover: "group-hover:text-red-600",
  },
}

// ─── Blog Card ───────────────────────────────────────────────────────────────
function BlogCard({ post }) {
  const styles = categoryStyles[post.category] ?? categoryStyles["Booking Guide"]

  return (
    <a
      href={post.href}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      aria-label={`Read: ${post.title}`}
    >
      {/* Coloured accent bar */}
      <div className={`h-1.5 w-full ${styles.bar}`} />

      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Category badge */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${styles.badge}`}
          >
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
        </div>

        {/* Title — h2 for SEO */}
        <h2
          className={`text-slate-900 font-bold text-lg leading-snug transition-colors duration-200 ${styles.linkHover}`}
        >
          {post.title}
        </h2>

        {/* Excerpt — 2-line clamp */}
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Card footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>{post.date}</span>
            <span className="text-slate-200">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <span
            className={`flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:gap-2 transition-all duration-200 ${styles.linkHover}`}
          >
            Read More
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </a>
  )
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default function BlogPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <>
      <SEOHead
        title="Logistics & Transport Blog | Truck Booking Tips, Guides & News"
        description="Read GoMyTruck's logistics blog for truck booking tips, goods transport guides, packing advice, and freight industry news. Learn how to save money on transport and move goods safely."
        canonical="/blog"
        keywords="logistics blog, truck booking tips, goods transport guide, how to book truck online, transport advice India, freight tips, packing guide shifting, logistics knowledge hub"
        jsonLd={jsonLdSchema}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-100 pt-20 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-600 shadow-lg mb-6">
            <BookOpen className="w-7 h-7 text-white" />
          </div>

          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Knowledge Hub
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            GoMyTruck Knowledge Hub
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tips, guides &amp; industry insights for smarter logistics
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              6 linked service guides
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Practical, jargon-free guides
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Aligned with current platform flows
            </span>
          </div>
        </div>
      </section>

      {/* ── Blog Grid ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Service Guides</h2>
              <p className="text-slate-500 text-sm mt-1">
                Current explanations linked to the relevant service workflows
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              6 guides
            </span>
          </div>

          {/* Responsive 3-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">
            Ready to Book?
          </h2>
          <p className="text-slate-500 text-sm text-center mb-8">
            Explore our services or get an instant price estimate
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Book Truck Online */}
            <Link
              to="/book-truck-online"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-brand-50 hover:border-brand-200 transition-all duration-200 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-200">
                <ArrowRight className="w-4 h-4 text-brand-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm group-hover:text-brand-700 transition-colors duration-200">
                  Book a Truck Online
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Instant booking, any size</p>
              </div>
            </Link>

            {/* Pricing */}
            {/*
            <Link
              to="/pricing"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm group-hover:text-blue-700 transition-colors duration-200">
                  View Pricing
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Transparent fare breakdown</p>
              </div>
            </Link>
            */}

            {/* Goods Transport Services */}
            <Link
              to="/goods-transport-services"
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-green-50 hover:border-green-200 transition-all duration-200 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-200">
                <ArrowRight className="w-4 h-4 text-green-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm group-hover:text-green-700 transition-colors duration-200">
                  Goods Transport Services
                </p>
                <p className="text-xs text-slate-400 mt-0.5">FTL, PTL &amp; express delivery</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
