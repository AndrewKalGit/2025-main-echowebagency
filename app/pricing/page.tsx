import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertCircle, Clock, DollarSign, FileText, Zap } from "@/components/icons"
import Header from "@/components/Header" // Import global Header component
import Footer from "@/components/Footer" // Import global Footer component

export const metadata: Metadata = {
  title: "Pricing - Echo Web, LLC",
  description:
    "Transparent pricing for web design, SEO, and hosting services. Starting from $5,000 with clear revision policies and no surprises.",
  openGraph: {
    title: "Pricing - Echo Web, LLC",
    description: "Professional web services with transparent pricing. No surprises, just results.",
    type: "website",
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">Transparent pricing</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-[#2B3238]/70">
              No hidden fees, no surprises. Professional web services with clear pricing and policies.
            </p>
          </div>
        </div>
      </section>
      {/* Pricing Blocks */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Web Design Pricing */}
            <div className="rounded-2xl border-2 border-[#2EA8F7] bg-white p-8 shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-[#2B3238]">Web Design</h2>
                  <p className="mt-2 text-base font-medium text-[#2B3238]/70">CRO-first websites that drive revenue</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
                  <Zap className="h-6 w-6 text-[#2EA8F7]" />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-semibold text-[#2EA8F7]">$5,000</span>
                  <span className="text-base font-medium text-[#2B3238]/70">starting price</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#2B3238]">What's Included</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Modern, responsive web design (5-10 pages)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Conversion-focused copywriting and UX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Mobile optimization and performance tuning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Analytics setup and goal tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      SEO foundation (meta tags, schema, sitemap)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Documented maintainable code, CMS, or website from builder</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Training documentation for your team</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-[#F3F6F8] p-6">
                <h3 className="text-base font-semibold text-[#2B3238]">Revision Policy</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      <strong className="font-semibold text-[#2B3238]">3 minor revisions</strong> included (text edits,
                      color tweaks, image swaps)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      <strong className="font-semibold text-[#2B3238]">2 major revision</strong> included (layout
                      changes, navigation restructure)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Additional minor revisions: <strong className="font-semibold text-[#2B3238]">$25 each</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Additional major revisions: <strong className="font-semibold text-[#2B3238]">$100 each</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-[#F3F6F8] p-6">
                <h3 className="text-base font-semibold text-[#2B3238]">Billing & Timeline</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      <strong className="font-semibold text-[#2B3238]">50% deposit</strong> to start project
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      <strong className="font-semibold text-[#2B3238]">50% due</strong> before launch
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Typical timeline: <strong className="font-semibold text-[#2B3238]">2-4 weeks</strong> from kickoff
                      to launch
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* SEO Pricing */}
            <div className="rounded-2xl border-2 border-gray-400 bg-white p-8 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-[#2B3238]">SEO Services</h2>
                  <p className="mt-2 text-base font-medium text-[#2B3238]/70">For onboarded clients only</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F6F8]">
                  <Zap className="h-6 w-6 text-[#2B3238]" />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-semibold text-[#2B3238]">$1,000</span>
                  <span className="text-base font-medium text-[#2B3238]/70">per month</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[#2B3238]">What's Included</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Comprehensive keyword research and strategy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Monthly blog content (4-6 posts)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Technical SEO optimization and monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">White-hat link building and outreach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Monthly performance reports and strategy calls
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-[#F3F6F8] p-6">
                <h3 className="text-base font-semibold text-[#2B3238]">Contract Terms</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3">
                    <FileText className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      <strong className="font-semibold text-[#2B3238]">3-month minimum</strong> commitment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Monthly billing, cancel anytime after minimum
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0 text-[#2B3238]/50" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Results typically visible in <strong className="font-semibold text-[#2B3238]">3-6 months</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border-2 border-[#2EA8F7] bg-[#2EA8F7]/5 p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#2B3238]">Availability Note</h4>
                    <p className="mt-1 text-sm font-medium text-[#2B3238]/70">
                      SEO services are exclusively available to clients who have completed a web design project with us.
                      This ensures proper SEO foundation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#2B3238] px-8 py-4 text-base font-semibold text-[#2B3238] hover:bg-[#2B3238] hover:text-white"
                >
                  Contact for SEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hosting & Maintenance */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#2B3238]">Hosting & Maintenance</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#2B3238]/70">
              Keep your site running smoothly with our managed hosting service.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-white p-8 shadow-lg border-1 border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#2B3238]">Monthly Maintenance Plan</h3>
                <p className="mt-2 text-base font-medium text-[#2B3238]/70">Premium hosting plus ongoing support</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-semibold text-[#2EA8F7]">$100</div>
                <div className="text-sm font-medium text-[#2B3238]/70">per month</div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-base font-semibold text-[#2B3238]">Hosting Includes</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Premium Vercel hosting infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      SSL certificate and security monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Daily automated backups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Performance monitoring and optimization
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-[#2B3238]">Support Includes</h4>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      <strong className="font-semibold text-[#2B3238]">Up to 5 content change requests</strong> per
                      month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Minor text, image, and styling updates
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">Plugin and framework security updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-sm font-medium text-[#2B3238]/70">
                      Email support with 24-hour response time
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[#F3F6F8] p-6">
              <h4 className="text-base font-semibold text-[#2B3238]">Request Overage Fee</h4>
              <p className="mt-2 text-sm font-medium text-[#2B3238]/70">
                Need more than 5 content changes in a month? Additional requests are billed at{" "}
                <strong className="font-semibold text-[#2B3238]">$5 per request</strong> after your included 5 are used.
              </p>
              <p className="mt-3 text-sm font-medium text-[#2B3238]/50">
                Major feature additions or development work is billed separately at $120/hour.
              </p>
            </div>

            {/* <div className="mt-8 rounded-2xl border-2 border-[#2EA8F7] bg-[#2EA8F7]/5 p-6">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2EA8F7]">Special Promo: 1 Month Free Hosting</h4>
                  <p className="mt-1 text-sm font-medium text-[#2B3238]/70">
                    Download our{" "}
                    <Link href="/resources" className="font-semibold text-[#2EA8F7] hover:text-[#2EA8F7]/80">
                      Web Design Starter Pack
                    </Link>{" "}
                    to receive a voucher for{" "}
                    <strong className="font-semibold text-[#2B3238]">1 month of free hosting</strong> when you start a
                    new project with us.
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#2B3238]/50">
                    Single use per project. Cannot be combined with other offers.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* SLA & Support Details */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
        <h2 className="text-4xl font-semibold text-[#2B3238]">Service Level Agreement</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#2B3238]/70">
          What you can expect from our support and maintenance services.
        </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
        <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg border-1 border-gray-300">
            <h3 className="text-lg font-semibold text-[#2B3238]">Response Times</h3>
            <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <Clock className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
            <div>
              <p className="text-sm font-semibold text-[#2B3238]">Emergency Issues</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">
            Site down or critical errors: 4-hour response
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
            <div>
              <p className="text-sm font-semibold text-[#2B3238]">Standard Support</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">
            General questions and updates: 24-hour response
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
            <div>
              <p className="text-sm font-semibold text-[#2B3238]">Content Changes</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">
            Updates completed within 2-3 business days
              </p>
            </div>
          </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg border-1 border-gray-300">
            <h3 className="text-lg font-semibold text-[#2B3238]">Uptime Guarantee</h3>
            <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
            <div>
              <p className="text-sm font-semibold text-[#2B3238]">99.9% Uptime</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">Industry-leading hosting reliability</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
            <div>
              <p className="text-sm font-semibold text-[#2B3238]">24/7 Monitoring</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">Automatic alerts for any downtime</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
            <div>
              <p className="text-sm font-semibold text-[#2B3238]">Quick Recovery</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">Fast restoration from daily backups</p>
            </div>
          </li>
            </ul>
          </div>
        </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#2EA8F7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-white">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/90">
              Book a free consultation to discuss your project and get a custom quote.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#2EA8F7] shadow-lg hover:bg-white/95"
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-[#2EA8F7]"
              >
                Get Free Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
