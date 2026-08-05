import React, { useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowLeft, Clock, Tag, Calendar, User } from "lucide-react"
import SEOHead from "../seo/SEOHead"

const blogPosts = {
  "kolkata-northeast-freight-market-report": {
    title: "Kolkata to North-East Freight Market Report",
    category: "Market Report",
    readTime: "4 min read",
    date: "Aug 2026",
    author: "GoMyTruck Research",
    excerpt: "The definitive guide to container shipping rates, capacity challenges, and seasonal fluctuations on the Kolkata to Guwahati corridor.",
    content: (
      <>
        <div className="prose prose-slate max-w-none">
          <p className="lead text-xl text-slate-600 mb-8 font-medium">
            The North-East freight corridor connecting Kolkata to Guwahati is one of India's most critical logistics arteries, moving thousands of tonnes of FMCG, industrial goods, and e-commerce parcels daily.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Current Freight Rates</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            With rising demand for structured capacity and organized fleets, pricing transparency has become a core requirement for enterprises and SMEs alike. Our latest market analysis highlights key benchmarks for this route.
          </p>
          
          <div className="bg-brand-50 border-l-4 border-brand-600 p-6 rounded-r-xl mb-8 my-8 shadow-sm">
            <p className="text-lg font-semibold text-brand-900 m-0 leading-relaxed">
              The average freight rate for a 32ft container from Kolkata to Guwahati is ₹65,000. GoMyTruck facilitates this at a transparent 5% platform commission.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Capacity and Seasonality</h3>
          <p className="mb-6 text-slate-600 leading-relaxed">
            During the monsoon season, capacity often tightens due to challenging terrain and localized disruptions, pushing spot rates up by 15-20%. Shippers using GoMyTruck's Private Bid Marketplace can secure capacity faster by leveraging our network of verified fleets.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Choose GoMyTruck?</h3>
          <ul className="space-y-4 mb-8 text-slate-600">
            <li className="flex items-start">
              <span className="text-brand-600 mr-3 mt-1 text-lg">✓</span>
              <span><strong className="text-slate-900">Transparent Pricing:</strong> No hidden middleman markups. Direct matching between shippers and fleet owners.</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-600 mr-3 mt-1 text-lg">✓</span>
              <span><strong className="text-slate-900">Verified Fleets:</strong> VAHAN/SARATHI validated operators ensuring compliance and safety for your goods.</span>
            </li>
            <li className="flex items-start">
              <span className="text-brand-600 mr-3 mt-1 text-lg">✓</span>
              <span><strong className="text-slate-900">Real-time Tracking:</strong> Complete visibility from dispatch to Proof of Delivery (POD).</span>
            </li>
          </ul>

          <p className="text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-xl border border-slate-100">
            Optimize your North-East supply chain with GoMyTruck today. Our digital freight network ensures you get the right vehicle at the right price, every time.
          </p>
        </div>
      </>
    )
  }
}

export default function BlogPostPage({ postKey }) {
  const { slug } = useParams()
  const actualKey = postKey || slug

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [actualKey])

  const post = blogPosts[actualKey]

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const jsonLdSchema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "datePublished": "2026-08-01",
      "publisher": {
        "@type": "Organization",
        "name": "GoMyTruck",
        "logo": {
          "@type": "ImageObject",
          "url": "https://gomytruck.com/go-my-truck-logo.png"
        }
      }
    }
  ]

  return (
    <>
      <SEOHead
        title={`${post.title} | GoMyTruck Blog`}
        description={post.excerpt}
        canonical={`/blog/${actualKey}`}
        jsonLd={jsonLdSchema}
      />

      {/* Premium Dark Hero */}
      <section className="bg-slate-900 pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
          <div className="w-96 h-96 bg-brand-500 rounded-full blur-[100px] mix-blend-screen" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 mb-8 text-sm font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article className="prose prose-slate prose-lg max-w-none">
            {post.content}
          </article>
          
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-500">Logistics & Market Insights</p>
                </div>
             </div>
             <Link 
               to="/book-truck-online"
               className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white rounded-xl font-semibold hover:bg-brand-700 transition-all duration-200 shadow-lg shadow-brand-600/20 hover:-translate-y-0.5"
             >
               Book a Truck Now
             </Link>
          </div>
        </div>
      </section>
    </>
  )
}
