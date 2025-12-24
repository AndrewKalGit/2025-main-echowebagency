import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Layout, Search, Calculator, Server } from "@/components/icons"

export const metadata: Metadata = {
  title: "Services - Echo Web, LLC",
  description:
    "Professional Website Services: CRO Focused Websites.",
  openGraph: {
    title: "Services - Echo Web, LLC",
    description: "Professional Website Services: CRO Focused Websites.",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">
              Optimize Revenue With SEO and Conversion Focused Web Design
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-[#2B3238]/70">
              Professional web services that transform visitors into revenue. No guesswork, just results.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg border-1 border-gray-300 hover:bg-[#2EA8F7]/90"
              >
                Book a consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-b border-[#F3F6F8] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#design" className="text-sm font-medium text-[#2EA8F7] hover:text-[#2EA8F7]/80">
              Web Design
            </a>
            <span className="text-[#2B3238]/30">•</span>
            <a href="#seo" className="text-sm font-medium text-[#2EA8F7] hover:text-[#2EA8F7]/80">
              SEO Services
            </a>
            {/* <span className="text-[#2B3238]/30">•</span>
            <a href="#resources" className="text-sm font-medium text-[#2EA8F7] hover:text-[#2EA8F7]/80">
              Resource Pages
            </a> */}
            <span className="text-[#2B3238]/30">•</span>
            <a href="#hosting" className="text-sm font-medium text-[#2EA8F7] hover:text-[#2EA8F7]/80">
              Hosting & Maintenance
            </a>
          </div>
        </div>
      </section>

      {/* Service 1: Web Design */}
      <section id="design" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
              <Layout className="h-8 w-8 text-[#2EA8F7]" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-[#2B3238]">CRO-First Web Design</h2>
              <p className="mt-4 text-lg font-medium text-[#2B3238]/70">
                Websites designed with one goal: turn visitors into customers. Every element, every section, every word
                is optimized for conversion.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg border-1 border-gray-300">
              <h3 className="text-2xl font-semibold text-[#2B3238]">What's Included</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Full Website Design:</strong> Multi-page websites
                    with modern, professional design
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Landing Pages:</strong> High-converting standalone
                    pages for specific campaigns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Navigation & UX:</strong> Intuitive site structure
                    that guides visitors to conversion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Copywriting:</strong> Conversion-focused messaging
                    that speaks to your audience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">UX Testing:</strong> User behavior analysis to
                    identify friction points
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">A/B Testing Setup:</strong> Test variations to
                    continuously improve conversion rates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Performance Optimization:</strong> Lightning-fast
                    load times (95+ PageSpeed scores)
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-[#F3F6F8] p-8 border-gray-300 border-2">
                <h3 className="text-xl font-semibold text-[#2B3238]">Timeline</h3>
                <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                  Typical projects: <strong className="font-semibold text-[#2B3238]">4-12 weeks</strong> from kickoff to
                  launch
                </p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/50">
                  Timeline varies based on scope, content availability, and revision rounds
                </p>
              </div>

              <div className="rounded-2xl bg-[#F3F6F8] p-8 p-8 border-gray-300 border-2">
                <h3 className="text-xl font-semibold text-[#2B3238]">Pricing</h3>
                <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                  Starting from <strong className="text-2xl font-semibold text-[#2EA8F7]">$5,000</strong>
                </p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/50">
                  Final pricing depends on page count, functionality, and custom features
                </p>
                <Link
                  href="/pricing"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2EA8F7] hover:text-[#2EA8F7]/80"
                >
                  View full pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
                <div className="rounded-2xl bg-[#F3F6F8] p-8 p-8 border-gray-300 border-2">
                <h3 className="text-xl font-semibold text-[#2B3238]">Our Base Website Stack</h3>
                <p className="mt-3 text-base font-semibold text-[#2B3238]">
                  Shopify & Next.js
                </p>
                <div className="mt-3 flex gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-[#96BE4E]">
                    <span className="text-sm font-bold text-white">Shopify</span>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-black">
                    <span className="text-sm font-bold text-white">Next.js</span>
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/80">
                  Shopify for e-commerce, Next.js for non e-commerce sites
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: SEO */}
      <section id="seo" className="bg-[#F3F6F8] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
              <Search className="h-8 w-8 text-[#2EA8F7]" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-[#2B3238]">SEO for Conversions</h2>
              <p className="mt-4 text-lg font-medium text-[#2B3238]/70">
                Strategic SEO services exclusively for our web design clients. We build your site, then help you
                dominate search results.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 border-1 border-gray-300 shadow-lg border-1 border-gray-300">
              <h3 className="text-2xl font-semibold text-[#2B3238]">What's Included</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Blog Strategy:</strong> Content calendar and
                    keyword targeting for your industry
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">SEO-Optimized Web Apps:</strong> Interactive tools
                    that attract backlinks naturally
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Link Building:</strong> White-hat backlink
                    acquisition from relevant sources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Local SEO:</strong> Google Business Profile
                    optimization and local citations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Technical SEO:</strong> Schema markup, site speed,
                    mobile optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Monthly Reporting:</strong> Track rankings,
                    traffic, and conversions from organic search
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg border-1 border-gray-300">
                <h3 className="text-xl font-semibold text-[#2B3238]">Timeline</h3>
                <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                  SEO is ongoing: <strong className="font-semibold text-[#2B3238]">3-6 months</strong> to see
                  significant results
                </p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/50">
                  Monthly retainer with quarterly strategy reviews and adjustments
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg border-1 border-gray-300">
                <h3 className="text-xl font-semibold text-[#2B3238]">Pricing</h3>
                <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                  Starting from <strong className="text-2xl font-semibold text-[#2EA8F7]">$1,000/month</strong>
                </p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/50">
                  Pricing based on industry competitiveness and content volume
                </p>
                <Link
                  href="/pricing"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2EA8F7] hover:text-[#2EA8F7]/80"
                >
                  View full pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-2xl border-2 border-[#2EA8F7] bg-[#2EA8F7]/5 p-6">
                <p className="text-sm font-semibold text-[#2B3238]">⚡ Available exclusively for Echo Web clients</p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/70">
                  We need to build your site first to ensure proper SEO foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Resource Pages & Web Apps */}
      <section id="resources" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
              <Calculator className="h-8 w-8 text-[#2EA8F7]" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-[#2B3238]">Custom Mini Web Apps for SEO & CRO</h2>
              <h3 className="text-2xl font-semibold text-[#2B3238]">(Assists with genearting traffic and conversion)</h3>
              <p className="mt-4 text-lg font-medium text-[#2B3238]/70">
                Interactive tools and calculators that provide value to visitors, build trust, and attract organic
                backlinks.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg border-1 border-gray-300">
              <h3 className="text-2xl font-semibold text-[#2B3238]">What We Build</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">ROI Calculators:</strong> Help prospects calculate
                    potential value of your services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Industry Tools:</strong> Custom calculators
                    specific to your niche
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Assessment Quizzes:</strong> Interactive lead
                    qualification tools
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Comparison Tools:</strong> Help users make informed
                    decisions (with your solution winning)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Lead Capture:</strong> Optional email capture for
                    detailed results
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-[#F3F6F8] p-8 p-8 border-gray-300 border-2">
                <h3 className="text-xl font-semibold text-[#2B3238]">Timeline</h3>
                <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                  Simple tools: <strong className="font-semibold text-[#2B3238]">1-2 weeks</strong>
                </p>
                <p className="mt-2 text-base font-medium text-[#2B3238]/70">
                  Complex web apps: <strong className="font-semibold text-[#2B3238]">3-6 weeks</strong>
                </p>
              </div>

              <div className="rounded-2xl bg-[#F3F6F8] p-8 p-8 border-gray-300 border-2">
                <h3 className="text-xl font-semibold text-[#2B3238]">Pricing</h3>
                <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                  Starting from <strong className="text-2xl font-semibold text-[#2EA8F7]">$500</strong>
                </p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/50">
                  Pricing based on complexity, integrations, and custom logic required
                </p>
              </div>

              <div className="rounded-2xl border-2 border-[#2EA8F7] bg-white p-6">
                <h4 className="font-semibold text-[#2B3238]">Why This Matters</h4>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/70">
                  Tools get shared, linked to, and used repeatedly. They're powerful for both lead generation and SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Hosting & Maintenance */}
      <section id="hosting" className="bg-[#F3F6F8] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
              <Server className="h-8 w-8 text-[#2EA8F7]" />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-semibold text-[#2B3238]">Hosting & Maintenance</h2>
              <p className="mt-4 text-lg font-medium text-[#2B3238]/70">
                We handle all the technical details so your site stays fast, secure, and online 24/7.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg border-1 border-gray-300">
              <h3 className="text-2xl font-semibold text-[#2B3238]">What's Included</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Premium Hosting:</strong> Fast, reliable hosting on
                    Vercel infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">SSL Certificate:</strong> Free SSL included for
                    security and SEO
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Daily Backups:</strong> Automatic backups with easy
                    restoration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Security Updates:</strong> Regular framework and
                    dependency updates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Performance Monitoring:</strong> Uptime tracking
                    and speed optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Content Updates:</strong> Text and image
                    updates (up to 2 hrs/month)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="font-semibold text-[#2B3238]">Priority Support:</strong> Email support with
                    48-hour response time
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg border-1 border-gray-300">
                <h3 className="text-xl font-semibold text-[#2B3238]">Pricing</h3>
                <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                  <strong className="text-2xl font-semibold text-[#2EA8F7]">$100/month</strong>
                </p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/50">
                  Includes hosting, maintenance, and support for standard sites
                </p>
              </div>

              <div className="rounded-2xl border-2 border-[#2EA8F7] bg-white p-6">
                <h4 className="font-semibold text-[#2EA8F7]">Special Offer</h4>
                <p className="mt-2 text-sm font-semibold text-[#2B3238]">
                  First month FREE with any web design package
                </p>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/70">
                  We'll host your new site free for 30 days so you can see the quality of our service
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg border-1 border-gray-300">
                <h4 className="font-semibold text-[#2B3238]">Need Custom Support?</h4>
                <p className="mt-2 text-sm font-medium text-[#2B3238]/70">
                  Additional development hours available at $50/hr for feature additions and major updates (will be billed on agreed timeframes).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="mx-auto max-w-6xl">    */}
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#2B3238]">How we compare</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-[#2B3238]/70">
              The boutique agency advantage: personal attention without the agency price tag.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border-2 border-[#F3F6F8] bg-white shadow-lg border-1 border-gray-400/80">
            <div className="overflow-x-auto">
                <table className="w-full">
                <thead className="border-b border-gray-400">
                  <tr className="bg-[#F3F6F8]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#2B3238]">Feature</th>
                  <th className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2B3238]">Freelancer</th>
                  <th className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">
                  Echo Web
                  </th>
                  <th className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2B3238]">Big Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F6F8]">
                  <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">Starting Cost</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">$500 - $2,000</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">
                  $5,000+
                  </td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">$10,000+</td>
                  </tr>
                  <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">Reliability</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">Variable</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">High</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">High</td>
                  </tr>
                  <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">Speed</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">1-4 weeks</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">
                  4-12 weeks
                  </td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">2-6 months</td>
                  </tr>
                  <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">Personalization</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">High</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">High</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">Low</td>
                  </tr>
                  <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">Revisions</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">Limited</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">
                  2-3 rounds
                  </td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">2-3 rounds</td>
                  </tr>
                  <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">Work Quality</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">Variable</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">
                  Professional
                  </td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">Professional</td>
                  </tr>
                  <tr>
                  <td className="px-6 py-4 text-sm font-medium text-[#2B3238]">Ongoing Support</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">Rare</td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-semibold text-[#2EA8F7] bg-[#2EA8F7]/5">
                  Included
                  </td>
                  <td className="border-b border-l border-gray-400 px-6 py-4 text-center text-sm font-medium text-[#2B3238]/70">Extra cost</td>
                  </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2EA8F7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-white">Ready to start your project?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/90">
              Let's discuss your goals and create a custom plan to grow your online revenue.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#2EA8F7] shadow-lg border-1 border-gray-300 hover:bg-white/95"
              >
                Book a consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-[#2EA8F7]"
              >
                Request pricing breakdown
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
