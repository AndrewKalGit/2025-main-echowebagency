import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Filter } from "@/components/icons"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Portfolio - Echo Web, LLC",
  description: "Case studies and examples of our CRO-first web design and SEO work for service-based businesses.",
  openGraph: {
    title: "Portfolio - Echo Web, LLC",
    description: "Case studies and examples of our CRO-first web design and SEO work.",
    type: "website",
  },
}

// Placeholder portfolio data
const portfolioItems = [
  {
    slug: "fitness-coach-website",
    title: "Fitness Coach Website",
    category: "Landing Page",
    description: "High-converting landing page that increased consultation bookings by 240%.",
    image: "/fitness-coach-website.jpg",
    results: "+240% bookings",
  },
  {
    slug: "real-estate-agent-site",
    title: "Real Estate Agent Site",
    category: "Service Page",
    description: "SEO-optimized service pages drove 10x organic traffic growth.",
    image: "/real-estate-website-hero.png",
    results: "10x organic traffic",
  },
  {
    slug: "consulting-firm-redesign",
    title: "Consulting Firm Redesign",
    category: "Campaign",
    description: "Complete brand refresh with strategic messaging and CRO elements.",
    image: "/consulting-firm-website.jpg",
    results: "85% time on site increase",
  },
  {
    slug: "roi-calculator-tool",
    title: "ROI Calculator Tool",
    category: "Mini-Webapp",
    description: "Interactive calculator that generates qualified leads automatically.",
    image: "/calculator-interface.png",
    results: "120 leads/month",
  },
  {
    slug: "law-firm-landing-page",
    title: "Law Firm Landing Page",
    category: "Landing Page",
    description: "Professional landing page with trust-building elements and clear CTAs.",
    image: "/law-firm-website.png",
    results: "+180% consultation requests",
  },
  {
    slug: "dental-practice-site",
    title: "Dental Practice Site",
    category: "Service Page",
    description: "Local SEO-optimized website with online booking integration.",
    image: "/dental-practice-website.jpg",
    results: "+300% online bookings",
  },
]

const categories = ["All", "Landing Page", "Service Page", "Campaign", "Mini-Webapp"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">Our work</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-[#2B3238]/70">
              Real results for service-based businesses. Every project focused on conversion and revenue growth.
            </p>
          </div>
        </div>
      </section>


      {/* Category Filters 
      <section className="border-b border-[#F3F6F8] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#2B3238]/50" />
              <span className="text-sm font-medium text-[#2B3238]/70">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-2xl px-4 py-2 text-sm font-medium transition-colors ${
                    category === "All" ? "bg-[#2EA8F7] text-white" : "bg-[#F3F6F8] text-[#2B3238] hover:bg-[#2EA8F7]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
       */}

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F3F6F8]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-2xl bg-[#2EA8F7]/10 px-3 py-1 text-xs font-semibold text-[#2EA8F7]">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-[#2B3238]">{project.results}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#2B3238]">{project.title}</h3>
                  <p className="mt-2 text-base font-medium text-[#2B3238]/70">{project.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2EA8F7] group-hover:text-[#2EA8F7]/80">
                    View case study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2EA8F7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-white">Ready to see results like these?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/90">
              Let's discuss how we can grow your online revenue with CRO-first design and strategic SEO.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#2EA8F7] shadow-lg hover:bg-white/95"
              >
                Start your project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}
