import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Echo Web, LLC",
  description: "Privacy Policy for Echo Web, LLC. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-semibold leading-tight text-[#2B3238]">Privacy Policy</h1>
          <p className="mt-4 text-base font-medium text-[#2B3238]/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg mt-12 max-w-none">
            <div className="space-y-8 text-base font-medium leading-relaxed text-[#2B3238]/70">
              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">1. Information We Collect</h2>
                <p className="mt-4">Echo Web, LLC collects information that you provide directly to us, including:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2">
                  <li>
                    <strong>Contact Information:</strong> Name, email address, phone number, and company name when you
                    fill out forms on our website
                  </li>
                  <li>
                    <strong>Project Information:</strong> Business details, project descriptions, budget information,
                    and other details you provide during consultation or booking
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Correspondence via email, contact forms, or other communication
                    channels
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you access and use our website, including IP
                    address, browser type, pages visited, and time spent on pages
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">2. How We Use Your Information</h2>
                <p className="mt-4">We use the information we collect to:</p>
                <ul className="ml-6 mt-3 list-disc space-y-2">
                  <li>Respond to your inquiries and provide requested services</li>
                  <li>Send you confirmation emails and project updates</li>
                  <li>Deliver lead magnets and free resources you've requested</li>
                  <li>Send marketing communications (only if you've opted in)</li>
                  <li>Improve our website and services based on usage patterns</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">3. Lead Magnet & Email Communications</h2>
                <p className="mt-4">
                  When you download a lead magnet or free resource from our website, you consent to receiving:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2">
                  <li>An immediate email with your requested resource and hosting voucher code</li>
                  <li>
                    Follow-up emails with helpful tips, resources, and information about our services (you can
                    unsubscribe at any time)
                  </li>
                </ul>
                <p className="mt-4">
                  We will never sell, rent, or share your email address with third parties for their marketing purposes.
                  You can unsubscribe from marketing emails at any time by clicking the unsubscribe link in any email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">4. Cookies & Tracking Technologies</h2>
                <p className="mt-4">
                  Our website uses cookies and similar tracking technologies to enhance your experience and analyze
                  usage patterns. Cookies used include:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for website functionality and security
                  </li>
                  <li>
                    <strong>Lead Magnet Cookies:</strong> Used to remember when you've accessed gated resources (expires
                    after 7 days)
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how visitors use our site to improve
                    performance
                  </li>
                </ul>
                <p className="mt-4">
                  By using our website and submitting forms, you consent to our use of cookies as described in this
                  policy. You can control cookie settings through your browser, but disabling cookies may affect website
                  functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">5. Data Sharing & Third Parties</h2>
                <p className="mt-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information with:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2">
                  <li>Service providers who assist with email delivery, hosting, and analytics</li>
                  <li>Professional advisors such as lawyers and accountants</li>
                  <li>Law enforcement or regulatory bodies when required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">6. GDPR & CCPA Compliance (Data Rights)</h2>
                <p className="mt-4">
                  If you are a resident of the European Union (GDPR) or California (CCPA), you have specific rights
                  regarding your personal data:
                </p>
                <ul className="ml-6 mt-3 list-disc space-y-2">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your data for marketing purposes
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> California residents can opt-out of the sale of personal information (we
                    do not sell data)
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:privacy@echoweb.com" className="text-[#2EA8F7] underline">
                    privacy@echoweb.com
                  </a>
                  . We will respond within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">7. Data Security</h2>
                <p className="mt-4">
                  We implement appropriate technical and organizational measures to protect your personal data from
                  unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">8. Data Retention</h2>
                <p className="mt-4">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  policy, unless a longer retention period is required by law. Contact and project information is
                  typically retained for 7 years for business and legal purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">9. Children's Privacy</h2>
                <p className="mt-4">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have collected information from a child, please contact
                  us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">10. Changes to This Policy</h2>
                <p className="mt-4">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                  updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">11. Contact Us</h2>
                <p className="mt-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-3">
                  Email:{" "}
                  <a href="mailto:contact@echowebagency.com" className="text-[#2EA8F7] underline">
                    contact@echowebagency.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
