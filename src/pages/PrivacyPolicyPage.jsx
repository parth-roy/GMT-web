import React from "react"

export default function PrivacyPolicyPage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#F0F6FF", minHeight: "100vh" }}>

      {/* ── Header ─────────────────────────────────────────── */}
      <header style={{
        background: "linear-gradient(135deg, #0A1628 0%, #1B3B6F 60%, #1a4fa0 100%)",
        color: "#fff",
        padding: "56px 24px 48px",
        textAlign: "center"
      }}>
        <div style={{
          display: "inline-block",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "999px",
          padding: "6px 18px",
          fontSize: "13px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "20px",
          color: "#93C5FD"
        }}>
          GoMyTruck Captain · Driver App
        </div>

        <h1 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "14px" }}>
          Privacy <span style={{ color: "#60A5FA" }}>Policy</span>
        </h1>

        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.70)", maxWidth: "520px", margin: "0 auto" }}>
          We are committed to protecting the privacy and security of our drivers.
        </p>

        <div style={{ marginTop: "28px", fontSize: "13px", color: "rgba(255,255,255,0.50)" }}>
          Package: com.parther.driver &nbsp;·&nbsp; Last updated: June 18, 2025 &nbsp;·&nbsp; Effective: June 18, 2025
        </div>
      </header>

      {/* ── Content ─────────────────────────────────────────── */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {[
            { icon: "📍", title: "Location Data", desc: "Used only during active trips for live tracking and navigation." },
            { icon: "🔒", title: "Secure Storage", desc: "Login tokens stored in Android Keystore — never in plain text." },
            { icon: "🚫", title: "No Ads", desc: "We never sell your personal data to advertisers or third parties." },
            { icon: "🗑️", title: "Data Deletion", desc: "You can request full account and data deletion at any time." },
          ].map((c, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "22px 20px", display: "flex", gap: "14px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "26px", lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>{c.icon}</div>
              <div>
                <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "4px", color: "#1E293B" }}>{c.title}</h3>
                <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sections */}
        {[
          {
            num: "1", title: "Introduction",
            content: (
              <>
                <p>This Privacy Policy applies to the <strong>GoMyTruck Captain</strong> mobile application (package name: <code>com.parther.driver</code>), developed and operated by <strong>Parther Technologies</strong> ("we", "us", or "our").</p>
                <p>GoMyTruck Captain is a driver-facing logistics platform that enables truck drivers and fleet owners to receive trip bookings, manage their fleet, track earnings, and complete deliveries across India.</p>
                <p>By using the GoMyTruck Captain app, you agree to the collection and use of information in accordance with this policy. If you do not agree, please uninstall the application.</p>
              </>
            )
          },
          {
            num: "2", title: "Data We Collect",
            content: (
              <>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1B3B6F", margin: "20px 0 8px" }}>2.1 Personal Information</h3>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", margin: "16px 0" }}>
                  <thead>
                    <tr>
                      {["Data Type", "Purpose", "Required?"].map(h => <th key={h} style={{ background: "#F0F6FF", color: "#0A1628", fontWeight: 700, textAlign: "left", padding: "10px 14px", border: "1px solid #E2E8F0" }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Full name", "Driver profile & identification", "Yes"],
                      ["Phone number", "OTP-based authentication & customer communication", "Yes"],
                      ["Profile photo", "Driver identity verification displayed to customers", "Optional"],
                      ["Government ID documents", "KYC & compliance verification (licence, RC, etc.)", "Yes"],
                    ].map((r, i) => (
                      <tr key={i}>
                        {r.map((cell, j) => <td key={j} style={{ padding: "10px 14px", border: "1px solid #E2E8F0", background: i % 2 === 1 ? "#FAFBFF" : "#fff" }}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1B3B6F", margin: "20px 0 8px" }}>2.2 Location Data</h3>
                <ul>
                  <li><strong>Precise GPS (Foreground):</strong> Collected while the app is open, used for navigation and real-time trip tracking.</li>
                  <li><strong>Precise GPS (Background):</strong> Collected during an <em>active trip only</em>, via an Android Foreground Service. The driver is always notified via a persistent system notification.</li>
                  <li>Location data is transmitted to our servers in real time during trips so customers and fleet owners can track shipment progress.</li>
                  <li>Background location collection <strong>stops automatically</strong> once a trip is completed or cancelled.</li>
                </ul>

                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1B3B6F", margin: "20px 0 8px" }}>2.3 Financial Data</h3>
                <ul>
                  <li>Trip earnings, payment ledger records, and loan details (if applicable) associated with your driver account.</li>
                  <li>No bank account or card details are stored in this app.</li>
                </ul>

                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1B3B6F", margin: "20px 0 8px" }}>2.4 Device & Technical Data</h3>
                <ul>
                  <li>Firebase Cloud Messaging (FCM) device token — for push notifications about new bookings and trip updates.</li>
                  <li>App crash reports via Sentry (anonymised, no PII included).</li>
                  <li>Network connectivity status — to show an offline warning banner.</li>
                </ul>

                <div style={{ background: "#EFF6FF", borderLeft: "4px solid #2563EB", borderRadius: "0 10px 10px 0", padding: "16px 20px", margin: "16px 0", fontSize: "14px", color: "#1B3B6F" }}>
                  <strong>We never collect:</strong> contacts, call logs, SMS messages, browsing history, installed apps list, microphone/audio data, or any advertising identifiers.
                </div>
              </>
            )
          },
          {
            num: "3", title: "How We Use Your Data",
            content: (
              <ul>
                <li><strong>Trip Operations:</strong> Matching drivers to bookings, live GPS tracking, route navigation, and delivery confirmation.</li>
                <li><strong>Authentication:</strong> OTP-based phone login. JWT tokens are stored securely using the Android Keystore.</li>
                <li><strong>Payments & Earnings:</strong> Displaying your earnings history, ledger balances, and loan repayment records.</li>
                <li><strong>Fleet Management:</strong> If you are a fleet owner, sharing truck location and trip status with your registered fleet drivers.</li>
                <li><strong>Push Notifications:</strong> Sending real-time alerts for new trip bookings and status updates via Firebase Cloud Messaging.</li>
                <li><strong>Security & Fraud Prevention:</strong> Detecting unusual account activity and protecting drivers from unauthorised access.</li>
                <li><strong>Legal Compliance:</strong> Retaining records as required by Indian transport and tax regulations.</li>
              </ul>
            )
          },
          {
            num: "4", title: "Data Sharing & Disclosure",
            content: (
              <>
                <p>We do not sell, rent, or trade your personal data. We share data only in the following limited circumstances:</p>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", margin: "16px 0" }}>
                  <thead>
                    <tr>
                      {["Recipient", "Data Shared", "Reason"].map(h => <th key={h} style={{ background: "#F0F6FF", color: "#0A1628", fontWeight: 700, textAlign: "left", padding: "10px 14px", border: "1px solid #E2E8F0" }}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Customers (Shippers)", "Driver name, photo, live location during trip", "So customers can track their shipment"],
                      ["Fleet Owner", "Trip status, truck location, earnings summary", "Fleet management features"],
                      ["Google Firebase", "FCM device token", "Push notification delivery"],
                      ["Sentry", "Anonymised crash logs", "App stability monitoring"],
                      ["Mapbox", "Map tile requests (no PII)", "In-app map rendering & navigation"],
                      ["Indian authorities", "As legally required", "Regulatory & legal compliance"],
                    ].map((r, i) => (
                      <tr key={i}>
                        {r.map((cell, j) => <td key={j} style={{ padding: "10px 14px", border: "1px solid #E2E8F0", background: i % 2 === 1 ? "#FAFBFF" : "#fff" }}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )
          },
          {
            num: "5", title: "Android Permissions Explained",
            content: (
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", margin: "16px 0" }}>
                <thead>
                  <tr>
                    {["Permission", "Why It's Needed"].map(h => <th key={h} style={{ background: "#F0F6FF", color: "#0A1628", fontWeight: 700, textAlign: "left", padding: "10px 14px", border: "1px solid #E2E8F0" }}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ACCESS_FINE_LOCATION", "Precise GPS for trip navigation and live tracking"],
                    ["ACCESS_BACKGROUND_LOCATION", "GPS tracking during active trips while the screen is off"],
                    ["FOREGROUND_SERVICE_LOCATION", "Keeps GPS active via a visible notification during trips"],
                    ["CAMERA", "Uploading driver profile photo and vehicle documents"],
                    ["CALL_PHONE", "Directly calling the customer from within the app"],
                    ["WAKE_LOCK", "Prevents screen from sleeping during active navigation"],
                    ["RECEIVE_BOOT_COMPLETED", "Restores notification listener after device restart"],
                    ["REQUEST_IGNORE_BATTERY_OPTIMIZATIONS", "Keeps background GPS alive on phones with aggressive battery management (MIUI, Realme UI)"],
                    ["VIBRATE", "Haptic alert for incoming booking notifications"],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td style={{ padding: "10px 14px", border: "1px solid #E2E8F0", background: i % 2 === 1 ? "#FAFBFF" : "#fff", fontFamily: "monospace", fontSize: "13px" }}>{r[0]}</td>
                      <td style={{ padding: "10px 14px", border: "1px solid #E2E8F0", background: i % 2 === 1 ? "#FAFBFF" : "#fff" }}>{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          },
          {
            num: "6", title: "Data Retention",
            content: (
              <ul>
                <li><strong>Account data:</strong> Retained for the lifetime of your active account, plus up to 5 years after deletion (as required by Indian GST and transport regulations).</li>
                <li><strong>Trip GPS data:</strong> Retained for 90 days after trip completion, then automatically deleted.</li>
                <li><strong>Crash logs (Sentry):</strong> Auto-deleted after 90 days.</li>
                <li><strong>Push tokens (FCM):</strong> Deleted upon logout or account deletion.</li>
              </ul>
            )
          },
          {
            num: "7", title: "Security",
            content: (
              <ul>
                <li>All data is transmitted over <strong>HTTPS (TLS 1.2+)</strong>.</li>
                <li>Authentication tokens (JWTs) are stored in the <strong>Android Keystore</strong> — hardware-backed secure storage.</li>
                <li>Our backend servers are hosted on DigitalOcean with firewall rules, private networking, and regular security audits.</li>
                <li>Passwords are <strong>never stored</strong> — we use OTP-only authentication.</li>
              </ul>
            )
          },
          {
            num: "8", title: "Your Rights & Choices",
            content: (
              <>
                <ul>
                  <li><strong>Access:</strong> You can view all your personal data within the app (Profile → My Documents, Earnings, Trip History).</li>
                  <li><strong>Correction:</strong> You can update your name and profile photo at any time from the Profile screen.</li>
                  <li><strong>Revoke Location:</strong> You can revoke background location permission in your phone's Settings at any time. Note: this will prevent trip tracking.</li>
                  <li><strong>Account & Data Deletion:</strong> To permanently delete your account and all associated data, email us at <a href="mailto:support@gomytruck.com" style={{ color: "#2563EB" }}>support@gomytruck.com</a> with subject "Delete My Account". We will process your request within 30 days.</li>
                </ul>
                <div style={{ background: "#EFF6FF", borderLeft: "4px solid #2563EB", borderRadius: "0 10px 10px 0", padding: "16px 20px", margin: "16px 0", fontSize: "14px", color: "#1B3B6F" }}>
                  <strong>Data Deletion Request:</strong> You can also submit a deletion request at <a href="mailto:support@gomytruck.com" style={{ color: "#2563EB" }}>support@gomytruck.com</a>
                </div>
              </>
            )
          },
          {
            num: "9", title: "Children's Privacy",
            content: <p>GoMyTruck Captain is intended for use by professional truck drivers and fleet operators who are <strong>18 years of age or older</strong>. We do not knowingly collect personal information from anyone under 18. If you believe a minor has registered, please contact us immediately at <a href="mailto:support@gomytruck.com" style={{ color: "#2563EB" }}>support@gomytruck.com</a>.</p>
          },
          {
            num: "10", title: "Changes to This Policy",
            content: <p>We may update this Privacy Policy from time to time. When we make significant changes, we will notify drivers via an in-app notification and update the "Last updated" date at the top of this page.</p>
          },
        ].map(({ num, title, content }) => (
          <div key={num} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px", padding: "36px 40px", marginBottom: "24px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#0A1628", marginBottom: "18px", paddingBottom: "12px", borderBottom: "2px solid #F0F6FF", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ background: "#2563EB", color: "#fff", fontSize: "12px", fontWeight: 800, borderRadius: "6px", padding: "3px 8px", flexShrink: 0 }}>{num}</span>
              {title}
            </h2>
            <div style={{ fontSize: "15px", color: "#1E293B", lineHeight: 1.75 }}>{content}</div>
          </div>
        ))}

        {/* Contact card */}
        <div style={{ background: "linear-gradient(135deg, #0A1628, #1B3B6F)", color: "#fff", borderRadius: "16px", padding: "36px 40px", marginBottom: "24px", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>Questions or Data Requests?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "20px" }}>For privacy concerns, data access requests, or account deletion, please reach out to us.</p>
          <a href="mailto:support@gomytruck.com" style={{ display: "inline-block", background: "#2563EB", color: "#fff", textDecoration: "none", padding: "12px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "15px" }}>
            support@gomytruck.com
          </a>
        </div>

        <div style={{ textAlign: "center", fontSize: "13px", color: "#64748B", paddingBottom: "40px" }}>
          © 2025 Parther Technologies · GoMyTruck Captain · com.parther.driver · All rights reserved.
        </div>
      </div>
    </div>
  )
}
