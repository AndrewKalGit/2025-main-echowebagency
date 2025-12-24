"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Filter } from "@/components/icons"
import Footer from "@/components/Footer"
import projectsData from "@/data/projects.json"

// Todo: Make 3 projets and case studies for them and add them to the projects.json file 12/23/2025 due: 12/27/2025

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
  description?: string
  quickResult?: string
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get all unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set(projectsData.map((project: Project) => project.category))
    return ["All", ...Array.from(cats).sort()]
  }, [])

  // Filter projects by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") {
      return projectsData as Project[]
    }
    return (projectsData as Project[]).filter(
      (item) => item.category === selectedCategory
    )
  }, [selectedCategory])

  // Generate description from challenge if not provided
  const getDescription = (project: Project) => {
    if (project.description) return project.description
    // Take first sentence from challenge as fallback
    return project.challenge.split('.')[0] + '.'
  }

  // Get a quick result summary
  const getQuickResult = (project: Project) => {
    if (project.quickResult) return project.quickResult
    // Use the first result's change as fallback
    if (project.results && project.results.length > 0) {
      return project.results[0].change + ' ' + project.results[0].metric.toLowerCase()
    }
    return 'View results'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">
              Our work
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-[#2B3238]/70">
              Real results for service-based businesses. Every project focused on conversion and revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Category Section */}
      <section className="border-b border-[#F3F6F8] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#2B3238]/50" />
              <span className="text-sm font-medium text-[#2B3238]/70">
                Filter by type:
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-2xl px-4 py-2 text-sm font-medium transition-colors ${
                    category === selectedCategory
                      ? "bg-[#2EA8F7] text-white"
                      : "bg-[#F3F6F8] text-[#2B3238] hover:bg-[#2EA8F7]/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-[#2B3238]/70">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-lg transition-shadow hover:shadow-xl"
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
                      <span className="text-xs font-semibold text-[#2B3238]">
                        {getQuickResult(project)}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#2B3238]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-[#2B3238]/70">
                      {getDescription(project)}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2EA8F7] group-hover:text-[#2EA8F7]/80">
                      View case study <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2EA8F7] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-white">
              Ready to see results like these?
            </h2>
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
      <Footer />
    </div>
  )
}