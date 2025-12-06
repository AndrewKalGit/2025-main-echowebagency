"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Search, TrendingUp, Download } from "@/components/icons"
import blogsData from "@/data/blogs.json"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("All")

  // Sort by recency first, then boost by engagement score for trending
  const trendingPosts = useMemo(() => {
    return [...blogsData]
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        const recencyScore = (dateB - dateA) * 0.7
        const engagementDiff = (b.engagementScore - a.engagementScore) * 0.3
        return recencyScore + engagementDiff
      })
      .slice(0, 4)
  }, [])

  const allTopics = ["All", ...Array.from(new Set(blogsData.map((post) => post.topic)))]
  const allTags = Array.from(new Set(blogsData.flatMap((post) => post.tags)))

  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesTopic = selectedTopic === "All" || post.topic === selectedTopic
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesTopic && matchesSearch
    })
  }, [searchQuery, selectedTopic])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">Blog</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-[#2B3238]/70">
              Practical insights on web design, SEO, and conversion optimization for service-based businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-[#2EA8F7]" />
            <h2 className="text-3xl font-semibold text-[#2B3238]">Trending now</h2>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trendingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-[#F3F6F8] transition-all border-1 border-gray-300 hover:shadow-xl hover:ring-[#2EA8F7]/20"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F3F6F8]">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-[#2EA8F7]/10 px-3 py-1 text-xs font-semibold text-[#2EA8F7]">
                      {post.topic}
                    </span>
                    <span className="text-xs font-medium text-[#2B3238]/50">{post.readingTime}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#2B3238] group-hover:text-[#2EA8F7]">{post.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[#2B3238]/70">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="border-y border-[#F3F6F8] bg-[#F3F6F8]/50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="h-5 w-5 text-[#2B3238]/40" />
                </div>
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border-2 border-gray-400 bg-white py-3 pl-12 pr-4 text-base font-medium text-[#2B3238] placeholder:text-[#2B3238]/40 focus:border-[#2EA8F7] focus:outline-none focus:ring-2 focus:ring-[#2EA8F7]/20 transition-all"
                />
              </div>
              <div className="mt-2 min-h-[20px]">
                {(searchQuery || selectedTopic !== "All") && (
                  <p className="text-sm font-medium text-[#2B3238]/50">
                    Showing {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""}
                    {selectedTopic !== "All" && ` in ${selectedTopic}`}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {allTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    topic === selectedTopic
                      ? "bg-[#2EA8F7] text-white shadow-md"
                      : "bg-white text-[#2B3238] ring-1 ring-[#F3F6F8] hover:ring-[#2EA8F7]/20 hover:bg-[#2EA8F7]/5"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <section className="bg-[#F3F6F8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-[#2B3238]">
                {selectedTopic === "All" ? "All blogs" : `${selectedTopic}`}
              </h2>
              {filteredPosts.length === 0 ? (
                <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-md">
                  <p className="text-lg font-medium text-[#2B3238]/70">No blogs found matching your search.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedTopic("All")
                    }}
                    className="mt-4 text-base font-semibold text-[#2EA8F7] hover:text-[#2EA8F7]/80"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow border-1 border-gray-300 hover:shadow-lg"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-[#F3F6F8]">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2">
                          <span className="inline-block rounded-2xl bg-[#2EA8F7]/10 px-3 py-1 text-xs font-semibold text-[#2EA8F7]">
                            {post.topic}
                          </span>
                          <span className="text-xs font-medium text-[#2B3238]/50">{post.readingTime}</span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-[#2B3238] group-hover:text-[#2EA8F7]">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-[#2B3238]/70">{post.excerpt}</p>
                        <time className="mt-4 block text-xs font-medium text-[#2B3238]/50">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-[#2EA8F7] p-8 text-white shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold">Free Starter Pack</h3>
                <p className="mt-3 text-base font-medium text-white/90">
                  Get our comprehensive guide to building a high-converting website, plus 1 month free hosting.
                </p>
                <Link
                  href="/lead-magnet/web-design-starter-pack"
                  className="mt-6 block w-full rounded-2xl bg-white px-6 py-3 text-center text-base font-semibold text-[#2EA8F7] hover:bg-white/95"
                >
                  Download Now
                </Link>
              </div>

              {/* Popular Tags */}
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#2B3238]">Popular Topics</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="rounded-2xl border-2 border-[#F3F6F8] bg-white px-3 py-1 text-sm font-medium text-[#2B3238] hover:border-[#2EA8F7] hover:text-[#2EA8F7]"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Resources Links */}
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#2B3238]">Resources</h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/services"
                      className="flex items-center justify-between text-base font-medium text-[#2B3238]/70 hover:text-[#2EA8F7]"
                    >
                      <span>Our Services</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="flex items-center justify-between text-base font-medium text-[#2B3238]/70 hover:text-[#2EA8F7]"
                    >
                      <span>Case Studies</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="flex items-center justify-between text-base font-medium text-[#2B3238]/70 hover:text-[#2EA8F7]"
                    >
                      <span>Pricing</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center justify-between text-base font-medium text-[#2B3238]/70 hover:text-[#2EA8F7]"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
            <h2 className="text-4xl font-semibold text-white">Ready to grow your online revenue?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/90">
              Let's discuss how we can help your service business attract more customers and increase conversions.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#2EA8F7] shadow-lg hover:bg-white/95"
              >
                Book a consultation
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
