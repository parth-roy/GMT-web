import React from "react"
import ReactMarkdown from "react-markdown"
import { Shield } from "lucide-react"
import SEOHead from "../seo/SEOHead"
import privacyPolicy from "../../public/legal/privacy-policy.md?raw"
import termsConditions from "../../public/legal/terms-conditions.md?raw"
import partnerAgreement from "../../public/legal/partner-agreement.md?raw"
import cancellationPolicy from "../../public/legal/cancellation-policy.md?raw"
import communityGuidelines from "../../public/legal/community-guidelines.md?raw"

const documents = {
  "privacy-policy": { title: "Privacy Policy", canonical: "/legal/privacy-policy", content: privacyPolicy },
  "terms-conditions": { title: "Terms & Conditions", canonical: "/legal/terms", content: termsConditions },
  "partner-agreement": { title: "Independent Partner Agreement", canonical: "/legal/partner-terms", content: partnerAgreement },
  "cancellation-policy": { title: "Cancellation & Refund Policy", canonical: "/legal/refund-cancellation", content: cancellationPolicy },
  "community-guidelines": { title: "Community Guidelines", canonical: "/legal/community-guidelines", content: communityGuidelines },
}

export default function StaticLegalDocument({ documentId }) {
  const document = documents[documentId]
  // The page shell owns the single H1; remove the matching Markdown title.
  const content = document.content.replace(/^#\s+[^\r\n]+\r?\n+/, "")
  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-16">
      <SEOHead
        title={document.title}
        description={`Read the current GoMyTruck ${document.title.toLowerCase()} for customers, driver partners, fleet owners and workforce partners.`}
        canonical={document.canonical}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <header className="bg-brand-600 px-6 sm:px-10 py-10 text-white rounded-t-2xl flex items-center gap-4">
          <div className="p-3 bg-white/10 rounded-xl"><Shield aria-hidden="true" /></div>
          <div><h1 className="text-3xl sm:text-4xl font-black">{document.title}</h1><p className="text-brand-200 mt-1">GoMyTruck logistics platform</p></div>
        </header>
        <article className="bg-white border border-slate-200 rounded-b-2xl p-6 sm:p-12 prose prose-slate max-w-none prose-a:text-brand-700">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
}
