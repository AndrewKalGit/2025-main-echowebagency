import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle, ExternalLink } from "@/components/icons"
import projectsData from "@/data/projects.json"

// Define the project type
interface Project {
  slug: string
  title: string
  category: string
  client: string
  industry: string
  year: string
  image: string
  liveSite?: string
  challenge: string
  solution: string
  process: {
    design: string[]
    seo: string[]
  }
  results: Array<{
    metric: string
    before: string
    after: string
    change: string
  }>
  techStack: string[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
  featured?: boolean
}

interface PortfolioCaseStudyProps {
  params: Promise<{ slug: string }>
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: PortfolioCaseStudyProps
): Promise<Metadata> {
  const { slug } = await params
  const project = (projectsData as Project[]).find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Portfolio - Echo Web, LLC`,
    description: project.challenge,
    openGraph: {
      title: `${project.title} Case Study - Echo Web, LLC`,
      description: project.challenge,
      type: "article",
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.challenge,
      images: [project.image],
    },
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  return (projectsData as Project[]).map((project) => ({
    slug: project.slug,
  }))
}

export default async function PortfolioCaseStudy({ params }: PortfolioCaseStudyProps) {
  const { slug } = await params
  const project = (projectsData as Project[]).find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Generate JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.challenge,
    author: {
      "@type": "Organization",
      name: "Echo Web, LLC",
      url: "https://echowebagency.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Echo Web, LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://echowebagency.com/logo.png",
      },
    },
    datePublished: `${project.year}-01-01`,
    image: project.image,
  }

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                {project.category}
              </span>
              <span className="text-sm font-medium text-[#2B3238]/50">{project.year}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-[#2B3238] lg:text-5xl">{project.title}</h1>
            <p className="mt-4 text-lg font-medium text-[#2B3238]/70">
              {project.client} • {project.industry}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#F3F6F8] shadow-2xl">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#2B3238]">The Challenge</h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-[#2B3238]/70">{project.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#F3F6F8] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-[#2B3238]">The Solution</h2>
          <p className="mt-6 text-lg font-medium leading-relaxed text-[#2B3238]/70">{project.solution}</p>
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
                {project.process.design.map((step, index) => (
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
                {project.process.seo.map((step, index) => (
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
            {project.results.map((result, index) => (
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
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block rounded-2xl border-2 border-[#F3F6F8] bg-white px-4 py-2 text-sm font-medium text-[#2B3238]"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.liveSite && (
            <div className="mt-8">
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#2EA8F7] hover:text-[#2EA8F7]/80"
              >
                View live site <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#F3F6F8] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-2xl font-medium leading-relaxed text-[#2B3238]">"{project.testimonial.quote}"</p>
            <footer className="mt-6">
              <p className="text-base font-semibold text-[#2B3238]">{project.testimonial.author}</p>
              <p className="mt-1 text-sm font-medium text-[#2B3238]/70">{project.testimonial.role}</p>
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