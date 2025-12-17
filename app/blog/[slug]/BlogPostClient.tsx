"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Download } from "@/components/icons"

import { ROICalculator } from "@/components/ROICalculator"
import { ComparisonTable } from "@/components/ComparisonTable"
import { PricingCalculator } from "@/components/PricingCalculator"
import { InteractiveQuiz } from "@/components/InteractiveQuiz"
import { ProcessDiagram } from "@/components/ProcessDiagram"
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"
import { StatsShowcase } from "@/components/StatsShowcase"
import { InteractiveChecklist } from "@/components/InteractiveChecklist"

// Define the blog post type
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  sections?: Array<{
    heading: string
    content: string
    keyPoint?: string
    image?: string
  }>
  author: string
  date: string
  readingTime: string
  tags: string[]
  topic: string
  image: string
  recommended?: boolean
  interactive?: {
    type: string
    component?: string
    data?: any
  }
  additionalInteractive?: {
    type: string
    data?: any
  }
}

export default function BlogPostClient({
  post,
  recommendedPosts,
  sidebarPosts,
}: {
  post: BlogPost
  recommendedPosts: BlogPost[]
  sidebarPosts: BlogPost[]
}) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section-id]")
      let currentSection = ""

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.getAttribute("data-section-id") || ""
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const offset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }

  const renderInteractiveComponent = (interactive?: any) => {
    if (!interactive) return null

    switch (interactive.type) {
      case "calculator":
        return <ROICalculator />
      case "comparisonTable":
        return <ComparisonTable data={interactive.data} />
      case "pricingCalculator":
        return <PricingCalculator data={interactive.data} />
      case "quiz":
        return <InteractiveQuiz data={interactive.data} />
      case "processDiagram":
        return <ProcessDiagram data={interactive.data} />
      case "beforeAfterSlider":
        return <BeforeAfterSlider data={interactive.data} />
      case "statsShowcase":
        return <StatsShowcase data={interactive.data} />
      case "checklist":
        return <InteractiveChecklist data={interactive.data} />
      default:
        return null
    }
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://echowebagency.com/blog/${post.slug}`,
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Hero */}
      <article className="bg-gradient-to-b from-[#F3F6F8] to-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2EA8F7] hover:text-[#2EA8F7]/80"
          >
            ← Back to blog
          </Link>

          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-block rounded-2xl bg-[#2EA8F7]/10 px-4 py-1 text-sm font-semibold text-[#2EA8F7]">
                {post.topic}
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-2xl border-2 border-[#F3F6F8] bg-white px-3 py-1 text-xs font-medium text-[#2B3238]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#2B3238] lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm font-medium text-[#2B3238]/70">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Hero Image */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#F3F6F8] shadow-xl">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content with Sidebars */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Sidebar - Table of Contents */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 rounded-2xl bg-[#F3F6F8] p-6">
                <h3 className="text-lg font-semibold text-[#2B3238]">Key Points</h3>
                <nav className="mt-4 space-y-2">
                  {post.sections?.map((section, index) => {
                    const sectionId = `section-${index}`
                    return (
                      <button
                        key={index}
                        onClick={() => scrollToSection(sectionId)}
                        className={`flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          activeSection === sectionId
                            ? "bg-[#2EA8F7] text-white"
                            : "text-[#2B3238]/70 hover:bg-white hover:text-[#2B3238]"
                        }`}
                      >
                       <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span className="font-medium">
                          {section.keyPoint || section.heading}
                        </span>
                      </button>
                    )
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-6">
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="space-y-6">
                  {post.content.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg leading-relaxed text-[#2B3238]/90"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Primary Interactive Component (appears after intro) */}
                {post.interactive && (
                  <div className="my-12">
                    {renderInteractiveComponent(post.interactive)}
                  </div>
                )}

                {/* Sections with Images */}
                {post.sections && post.sections.length > 0 && (
                  <div className="mt-12 space-y-12">
                    {post.sections.map((section, index) => {
                      const sectionId = `section-${index}`
                      return (
                        <div
                          key={index}
                          id={sectionId}
                          data-section-id={sectionId}
                        >
                          <h2 className="text-3xl font-semibold text-[#2B3238]">
                            {section.heading}
                          </h2>
                          <div className="mt-6 space-y-4">
                            {section.content.split("\n\n").map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className="text-base leading-relaxed text-[#2B3238]/80"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {/* Optional Section Image */}
                          {section.image && (
                            <div className="mt-6 overflow-hidden rounded-xl shadow-lg">
                              <img
                                src={section.image}
                                alt={section.heading}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Additional Interactive Component (appears after sections) */}
                {post.additionalInteractive && (
                  <div className="my-12">
                    {renderInteractiveComponent(post.additionalInteractive)}
                  </div>
                )}

                {/* CTA Block */}
                <div className="mt-16 rounded-2xl bg-[#2EA8F7] p-8 text-center text-white shadow-lg">
                  <h3 className="text-2xl font-semibold">
                    Ready to see these strategies in action?
                  </h3>
                  <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-white/90">
                    Let's discuss how we can apply these principles to your website
                    and drive measurable results.
                  </p>
                  <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#2EA8F7] hover:bg-white/95"
                    >
                      Book a consultation
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    {/* <button className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-[#2EA8F7]">
                      <Download className="h-5 w-5" />
                      Get the starter pack
                    </button> */}
                  </div>
                </div>
              </div>
            </main>

            {/* Right Sidebar - Recommended Posts */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl bg-[#F3F6F8] p-6">
                  <h3 className="text-lg font-semibold text-[#2B3238]">
                    {recommendedPosts.length > 0 ? "Recommended" : "Related Articles"}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {sidebarPosts.map((sidebarPost) => (
                      <Link
                        key={sidebarPost.slug}
                        href={`/blog/${sidebarPost.slug}`}
                        className="group block rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="aspect-video overflow-hidden rounded-lg bg-[#F3F6F8]">
                          <img
                            src={sidebarPost.image || "/placeholder.svg"}
                            alt={sidebarPost.title}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <h4 className="mt-3 text-sm font-semibold text-[#2B3238] group-hover:text-[#2EA8F7]">
                          {sidebarPost.title}
                        </h4>
                        <div className="mt-2 flex items-center gap-2 text-xs text-[#2B3238]/60">
                          <span>{sidebarPost.readingTime}</span>
                          <span>•</span>
                          <span>{sidebarPost.topic}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="rounded-2xl bg-[#2EA8F7]/10 p-6">
                  <h3 className="text-lg font-semibold text-[#2B3238]">
                    Share this article
                  </h3>
                  <div className="mt-4 flex gap-3">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2EA8F7] text-white hover:bg-[#2EA8F7]/90">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2EA8F7] text-white hover:bg-[#2EA8F7]/90">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2EA8F7] text-white hover:bg-[#2EA8F7]/90">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}