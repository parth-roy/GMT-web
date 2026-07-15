import React, { useState } from "react"
import SEOHead from "../seo/SEOHead"

export default function DeleteAccountPage() {
  const [phone, setPhone] = useState("")
  const [reason, setReason] = useState("")
  const [emailOpened, setEmailOpened] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!phone.trim()) return
    const subject = encodeURIComponent("Delete My Account")
    const body = encodeURIComponent(`Registered phone: +91 ${phone}\nReason: ${reason || "Not provided"}\n\nPlease contact me to verify this account-deletion request.`)
    window.location.href = `mailto:support@gomytruck.com?subject=${subject}&body=${body}`
    setEmailOpened(true)
  }

  const s = {
    page: { fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#F0F6FF", minHeight: "100vh" },
    header: {
      background: "linear-gradient(135deg, #0A1628 0%, #7B1111 60%, #b91c1c 100%)",
      color: "#fff", padding: "56px 24px 48px", textAlign: "center",
    },
    badge: {
      display: "inline-block", background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.25)", borderRadius: "999px",
      padding: "6px 18px", fontSize: "13px", letterSpacing: "0.06em",
      textTransform: "uppercase", marginBottom: "20px", color: "#FCA5A5",
    },
    h1: { fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "14px" },
    subtext: { fontSize: "16px", color: "rgba(255,255,255,0.70)", maxWidth: "480px", margin: "0 auto" },
    container: { maxWidth: "680px", margin: "0 auto", padding: "48px 24px 80px" },
    card: { background: "#fff", border: "1px solid #E2E8F0", borderRadius: "20px", padding: "40px", marginBottom: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" },
    warning: { background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "12px", padding: "18px 20px", marginBottom: "28px", fontSize: "14px", color: "#991B1B" },
    label: { display: "block", fontSize: "14px", fontWeight: 700, color: "#1E293B", marginBottom: "8px" },
    input: {
      width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0", borderRadius: "12px",
      fontSize: "15px", fontFamily: "inherit", color: "#1E293B", outline: "none",
      boxSizing: "border-box", background: "#FAFBFF",
    },
    textarea: {
      width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0", borderRadius: "12px",
      fontSize: "15px", fontFamily: "inherit", color: "#1E293B", outline: "none",
      boxSizing: "border-box", background: "#FAFBFF", minHeight: "100px", resize: "vertical",
    },
    btn: {
      width: "100%", padding: "14px", background: "#DC2626", color: "#fff", border: "none",
      borderRadius: "14px", fontWeight: 700, fontSize: "16px", cursor: "pointer", fontFamily: "inherit",
      marginTop: "8px",
    },
    infoBox: { background: "#F0F6FF", border: "1px solid #BFDBFE", borderRadius: "12px", padding: "18px 20px", marginBottom: "20px", fontSize: "14px", color: "#1E40AF" },
    success: { textAlign: "center", padding: "40px 20px" },
  }

  const whatDeleted = [
    "Your account and phone number",
    "All personal profile data (name, photo, documents)",
    "Your trip history and earnings records",
    "All GPS and location data",
    "Your FCM push notification token",
  ]

  const retained = [
    "Trip transaction records (retained for 5 years as required by Indian GST law)",
    "Anonymised aggregate statistics (no personal identifiers)",
  ]

  return (
    <div style={s.page}>
      <SEOHead
        title="Delete a GoMyTruck Account"
        description="Request deletion of a GoMyTruck account and associated personal data after identity verification."
        canonical="/delete-account"
        noIndex
      />
      {/* Header */}
      <header style={s.header}>
        <div style={s.badge}>GoMyTruck Captain</div>
        <h1 style={s.h1}>Delete <span style={{ color: "#FCA5A5" }}>Account</span></h1>
        <p style={s.subtext}>Request permanent deletion of your account and all associated data.</p>
      </header>

      <div style={s.container}>

        {/* Warning */}
        <div style={s.card}>
          <div style={s.warning}>
            <strong>⚠️ This action is permanent and cannot be undone.</strong> Once deleted, your account cannot be recovered.
          </div>

          <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1628", marginBottom: "16px" }}>What will be deleted</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "24px" }}>
            {whatDeleted.map((item, i) => (
              <li key={i} style={{ fontSize: "14px", color: "#374151", marginBottom: "8px" }}>
                <span style={{ color: "#DC2626", marginRight: "6px" }}>✗</span> {item}
              </li>
            ))}
          </ul>

          <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1628", marginBottom: "16px" }}>What will be retained</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "8px" }}>
            {retained.map((item, i) => (
              <li key={i} style={{ fontSize: "14px", color: "#374151", marginBottom: "8px" }}>
                <span style={{ color: "#6B7280", marginRight: "6px" }}>ℹ</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div style={s.card}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0A1628", marginBottom: "8px" }}>Submit Deletion Request</h2>
          <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "24px" }}>
            Fill in your registered phone number below. We will verify your identity and process the deletion within 30 days.
          </p>

          <div style={s.infoBox}>
            📧 Alternatively, email us at <strong>support@gomytruck.com</strong> with subject <strong>"Delete My Account"</strong>
          </div>

          {emailOpened && (
            <div role="status" style={{ ...s.infoBox, background: "#ECFDF5", borderColor: "#A7F3D0", color: "#065F46" }}>
              Your email app was opened with a prepared request. You must review it and press Send; GoMyTruck has not received anything until the email is sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="delete-account-phone" style={s.label}>Registered Phone Number *</label>
              <input
                id="delete-account-phone"
                name="phone"
                style={s.input}
                type="tel"
                placeholder="Enter your 10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                required
                maxLength={10}
                minLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                autoComplete="tel-national"
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label htmlFor="delete-account-reason" style={s.label}>Reason for deletion (optional)</label>
              <textarea
                id="delete-account-reason"
                name="reason"
                style={s.textarea}
                placeholder="Tell us why you're leaving (helps us improve)..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <button
              type="submit"
              style={s.btn}
            >
              🗑️ Prepare Deletion Request Email
            </button>
          </form>
        </div>

        {/* Footer note */}
        <p style={{ textAlign: "center", fontSize: "13px", color: "#94A3B8" }}>
          © 2026 Parther Technologies · GoMyTruck Captain ·{" "}
          <a href="/legal/privacy-policy" style={{ color: "#2563EB" }}>Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}
