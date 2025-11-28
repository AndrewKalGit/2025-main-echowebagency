import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service - Echo Web, LLC",
  description: "Terms of Service for Echo Web, LLC web design and SEO services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-semibold leading-tight text-[#2B3238]">Terms of Service</h1>
          <p className="mt-4 text-base font-medium text-[#2B3238]/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-lg mt-12 max-w-none">
            <div className="space-y-8 text-base font-medium leading-relaxed text-[#2B3238]/70">
              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">1. Agreement to Terms</h2>
                <p className="mt-4">
                  By accessing or using Echo Web, LLC's services, you agree to be bound by these Terms of Service and
                  all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                  from using or accessing our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">2. Services Provided</h2>
                <p className="mt-4">
                  Echo Web, LLC provides web design, development, SEO, and related digital marketing services. All
                  services are subject to the specific terms outlined in individual project agreements and proposals.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">3. Payment Terms</h2>
                <p className="mt-4">
                  All projects require a 50% deposit before work begins, with the remaining 50% due upon completion
                  before final delivery or launch. Late payments may incur a 5% monthly interest charge. All fees are
                  non-refundable once work has commenced.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">4. Project Timeline & Revisions</h2>
                <p className="mt-4">
                  Project timelines are estimates and may be affected by client responsiveness, content availability,
                  and scope changes. Each project includes 2 rounds of minor revisions and 1 round of major revisions as
                  outlined in pricing. Additional revisions will be billed at $25 for minor changes and $100 for major
                  changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">5. Intellectual Property</h2>
                <p className="mt-4">
                  Upon full payment, clients receive full ownership of custom code and designs created specifically for
                  their project (Full Handover option). With the Managed Service option, Echo Web retains ownership of
                  code and files while client retains rights to their content and brand materials. Third-party assets,
                  libraries, and frameworks remain property of their respective owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">6. Limitation of Liability</h2>
                <p className="mt-4">
                  Echo Web, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of our services. Our total liability shall not exceed the amount paid
                  for the specific service in question.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">7. Cancellation & Refunds</h2>
                <p className="mt-4">
                  Clients may cancel projects before work begins for a full refund of deposit. Once work has commenced,
                  deposits are non-refundable. If a client cancels mid-project, they will be billed for all work
                  completed to date at our hourly rate of $150/hour.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">8. Warranties & Support</h2>
                <p className="mt-4">
                  Full Handover projects include 30 days of post-launch support for bug fixes and minor adjustments.
                  Managed Service clients receive ongoing support as outlined in their monthly service agreement. We do
                  not warrant that our services will be uninterrupted or error-free.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">9. Changes to Terms</h2>
                <p className="mt-4">
                  Echo Web, LLC reserves the right to modify these terms at any time. Changes will be posted on this
                  page with an updated revision date. Continued use of our services after changes constitutes acceptance
                  of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">10. Governing Law</h2>
                <p className="mt-4">
                  These terms shall be governed by and construed in accordance with the laws of [Your State], without
                  regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#2B3238]">11. Contact Information</h2>
                <p className="mt-4">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:contact@echowebagency.com" className="text-[#2EA8F7] underline">
                     contact@echowebagency.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
