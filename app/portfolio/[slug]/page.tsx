import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, ExternalLink } from "@/components/icons"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// This would be generated dynamically based on the slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  return {
    title: `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} - Portfolio - Echo Web, LLC`,
    description: "Case study showing measurable results from our CRO-first web design and SEO services.",
    openGraph: {
      title: `${slug} Case Study - Echo Web, LLC`,
      description: "Detailed case study with results, process, and tech stack.",
      type: "article",
    },
  }
}

export default async function PortfolioCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Placeholder data - in production this would come from a CMS or database
  const caseStudy = {
    slug,
    title: "Fitness Coach Website",
    category: "Landing Page",
    client: "Personal Training Studio",
    industry: "Health & Fitness",
    year: "2024",
    image: "/fitness-coach-website.jpg",
    liveSite: "https://example.com",
    challenge:
      "The client had a basic website that wasn't generating leads. Despite having paid ads running, the conversion rate was under 2%. They needed a landing page that would turn traffic into consultation bookings.",
    solution:
      "We created a CRO-first landing page with clear value propositions, social proof, and strategic CTAs. The design emphasized before/after transformations and included a simplified booking flow.",
    process: {
      design: [
        "Conducted competitor analysis of top-performing fitness landing pages",
        "Created wireframes focused on conversion flow",
        "Designed high-fidelity mockups with strong visual hierarchy",
        "A/B tested two headline variations",
        "Implemented mobile-first responsive design",
      ],
      seo: [
        'Keyword research targeting "personal trainer [city]" and related terms',
        "Optimized on-page SEO (title tags, meta descriptions, H1-H6 structure)",
        "Implemented local business schema markup",
        "Optimized Core Web Vitals for 95+ PageSpeed score",
        "Set up Google Analytics 4 and conversion tracking",
      ],
    },
    results: [
      { metric: "Conversion Rate", before: "1.8%", after: "6.2%", change: "+244%" },
      { metric: "Consultation Bookings", before: "12/month", after: "41/month", change: "+242%" },
      { metric: "Page Load Time", before: "4.2s", after: "1.1s", change: "-74%" },
      { metric: "Bounce Rate", before: "68%", after: "42%", change: "-38%" },
    ],
    techStack: [
      "Next.js 15 (App Router)",
      "React Server Components",
      "TailwindCSS",
      "TypeScript",
      "Vercel hosting",
      "Calendly integration",
      "Google Analytics 4",
    ],
    testimonial: {
      quote:
        "Echo Web completely transformed my online presence. The new landing page pays for itself every single month.",
      author: "Sarah Johnson",
      role: "Fitness Coach & Business Owner",
    },
  }

  // Generate JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.challenge,
    author: {
      "@type": "Organization",
      name: "Echo Web, LLC",
      url: "https://echoweb.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Echo Web, LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://echoweb.com/logo.png",
      },
    },
    datePublished: `${caseStudy.year}-01-01`,
    image: caseStudy.image,
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
        >
          {JSON.stringify(jsonLd)}
        </script>
        {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2EA8F7] hover:text-[#2EA8F7]/80"
          >
            ← Back to portfolio
          </Link>
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-block rounded-2xl bg-[#2EA8F7]/10 px-4 py-1 text-sm font-semibold text-[#2EA8F7]">
                {caseStudy.category}
              </span>
              <span className="text-sm font-medium text-[#2B3238]/50">{caseStudy.year}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-[#2B3238] lg:text-5xl">{caseStudy.title}</h1>
            <p className="mt-4 text-lg font-medium text-[#2B3238]/70">
              {caseStudy.client} • {caseStudy.industry}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#F3F6F8] shadow-2xl">
            <img
              src={caseStudy.image || "/placeholder.svg"}
              alt={caseStudy.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#2B3238]">The Challenge</h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-[#2B3238]/70">{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#F3F6F8] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#2B3238]">The Solution</h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-[#2B3238]/70">{caseStudy.solution}</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#2B3238]">The Process</h2>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Design Steps */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2B3238]">Design & CRO</h3>
              <ul className="mt-6 space-y-4">
                {caseStudy.process.design.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-base font-medium text-[#2B3238]/70">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO Steps */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2B3238]">SEO & Technical</h3>
              <ul className="mt-6 space-y-4">
                {caseStudy.process.seo.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                    <span className="text-base font-medium text-[#2B3238]/70">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#2EA8F7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold text-white">The Results</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="rounded-2xl bg-white p-6 text-center shadow-lg">
                <p className="text-sm font-semibold text-[#2B3238]/70">{result.metric}</p>
                <p className="mt-2 text-3xl font-semibold text-[#2EA8F7]">{result.change}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-[#2B3238]/50">
                  <span>{result.before}</span>
                  <ArrowRight className="h-3 w-3" />
                  <span>{result.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#2B3238]">Tech Stack</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {caseStudy.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block rounded-2xl border-2 border-[#F3F6F8] bg-white px-4 py-2 text-sm font-medium text-[#2B3238]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={caseStudy.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#2EA8F7] hover:text-[#2EA8F7]/80"
            >
              View live site <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#F3F6F8] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-2xl font-medium leading-relaxed text-[#2B3238]">"{caseStudy.testimonial.quote}"</p>
            <footer className="mt-6">
              <p className="text-base font-semibold text-[#2B3238]">{caseStudy.testimonial.author}</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">{caseStudy.testimonial.role}</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-b from-[#F3F6F8] to-white p-12 text-center">
            <h2 className="text-3xl font-semibold text-[#2B3238]">Ready for results like these?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#2B3238]/70">
              Let's discuss how we can grow your online revenue with CRO-first design and strategic SEO.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90"
              >
                Start your project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#2B3238] px-8 py-4 text-base font-semibold text-[#2B3238] hover:bg-[#2B3238] hover:text-white"
              >
                View more case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
