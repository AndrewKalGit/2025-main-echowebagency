import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, Calculator, CheckSquare, Mail } from "@/components/icons"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Free Resources - Echo Web, LLC",
  description: "Download free web design checklists, calculators, and templates to grow your online revenue.",
  openGraph: {
    title: "Free Resources - Echo Web, LLC",
    description: "Free web design tools and resources for service-based businesses.",
    type: "website",
  },
}

export default function ResourcesPage() {
  const resources = [
    {
      slug: "web-design-starter-pack",
      title: "Web Design Starter Pack (Checklist)",
      description:
        "Complete checklist for planning and launching a high-converting website. Includes design brief template, content planning worksheet, and pre-launch checklist.",
      icon: CheckSquare,
      category: "Planning",
    },
    {
      slug: "website-roi-calculator",
      title: "Website ROI Calculator",
      description:
        "Calculate the potential return on investment for your website redesign or new site. See projected revenue increase based on conversion improvements.",
      icon: Calculator,
      category: "Tools",
    },
    {
      slug: "template-checklists",
      title: "Template Checklists",
      description:
        "Pre-built checklists for common web projects: landing pages, service pages, blog setup, SEO audits, and more.",
      icon: FileText,
      category: "Templates",
    },
    {
      slug: "seo-outreach-template",
      title: "SEO Outreach Template",
      description:
        "Email templates for link building outreach, guest post pitches, and partnership requests. Proven to get responses.",
      icon: Mail,
      category: "SEO",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
     {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">Free Resources</h1>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium text-[#2B3238]/70">
              Get 1 month free hosting with any download.
            </h2>
                 <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-[#2B3238]/70">
              Tools, templates, and checklists to help you build a high-converting website. 
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.slug}
                  href={`/lead-magnet/${resource.slug}`}
                  className="group overflow-hidden rounded-2xl border-2 border-[#F3F6F8] bg-white p-8 shadow-lg border-1 border-gray-300 transition-all hover:border-[#2EA8F7] hover:shadow-xl"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-[#2EA8F7]/10 transition-colors group-hover:bg-[#2EA8F7]">
                      <Icon className="h-8 w-8 text-[#2EA8F7] transition-colors group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block rounded-2xl bg-[#F3F6F8] px-3 py-1 text-xs font-semibold text-[#2B3238]">
                        {resource.category}
                      </span>
                      <h3 className="mt-3 text-2xl font-semibold text-[#2B3238] group-hover:text-[#2EA8F7]">
                        {resource.title}
                      </h3>
                      <p className="mt-3 text-base font-medium text-[#2B3238]/70">{resource.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-base font-semibold text-[#2EA8F7]">
                        <span>Download free</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bonus Offer Banner */}
      <section className="bg-[#2EA8F7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-semibold">Plus: Get 1 month free hosting</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/90">
              Every resource download includes a voucher for 1 month of free professional hosting when you become a
              client.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#F3F6F8] p-12 text-center">
            <h2 className="text-4xl font-semibold text-[#2B3238]">Need a custom solution?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#2B3238]/70">
              Our team can build custom tools, calculators, and resources tailored to your business needs.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90"
              >
                Book a consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
