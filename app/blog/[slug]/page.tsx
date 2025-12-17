import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Download } from "@/components/icons"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import blogsData from "@/data/blogs.json"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const post = blogsData.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found - Echo Web, LLC",
      description: "The blog post you are looking for could not be found.",
    }
  }

  return {
    title: `${post.title} - Blog - Echo Web, LLC`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = blogsData.find((p) => p.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  // Generate JSON-LD schema for Article
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
      "@id": `https://echowebagency.com/blog/${slug}`,
    },
  }

  // Related posts based on same topic
  const relatedPosts = blogsData.filter((p) => p.topic === post.topic && p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SiteHeader />

      {/* Article Hero */}
      <article className="bg-gradient-to-b from-[#F3F6F8] to-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2EA8F7] hover:text-[#2EA8F7]/80"
          >
            ← Back to blog
          </Link>

          <div className="mt-8">
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

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#2B3238] lg:text-5xl">{post.title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-medium text-[#2B3238]/70">
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
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#F3F6F8] shadow-2xl">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl font-medium leading-relaxed text-[#2B3238]/90">{post.content}</p>

            {/* Placeholder for long-form content sections */}
            <div className="mt-12 space-y-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#2B3238]">Understanding the basics</h2>
                <p className="mt-4 text-base font-medium leading-relaxed text-[#2B3238]/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-[#2B3238]">Key strategies</h2>
                <p className="mt-4 text-base font-medium leading-relaxed text-[#2B3238]/70">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Component Slot */}
          <div className="mt-16 rounded-2xl bg-[#F3F6F8] p-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#2B3238]">Interactive Tool</h3>
              <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-[#2B3238]/70">
                Placeholder for calculators, ROI tools, or other interactive components related to this article.
              </p>
            </div>
          </div>

          {/* Inline CTA Block */}
          <div className="mt-16 rounded-2xl bg-[#2EA8F7] p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-semibold">Ready to see these strategies in action?</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-white/90">
              Let's discuss how we can apply these principles to your website and drive measurable results.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#2EA8F7] hover:bg-white/95"
              >
                Book a consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-[#2EA8F7]">
                <Download className="h-5 w-5" />
                Get the starter pack
              </button>
            </div>
          </div>

          {/* More Content */}
          <div className="mt-16 space-y-8">
            <div>
              <h2 className="text-3xl font-semibold text-[#2B3238]">Implementation steps</h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#2B3238]/70">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-[#2B3238]">Measuring success</h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#2B3238]/70">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#F3F6F8] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-[#2B3238]">Related blogs</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#F3F6F8]">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <span className="inline-block rounded-2xl bg-[#2EA8F7]/10 px-3 py-1 text-xs font-semibold text-[#2EA8F7]">
                        {relatedPost.topic}
                      </span>
                      <span className="text-xs font-medium text-[#2B3238]/50">{relatedPost.readingTime}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#2B3238] group-hover:text-[#2EA8F7]">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#2B3238]/70">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}
