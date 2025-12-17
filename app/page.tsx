import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, TrendingUp, Zap } from "@/components/icons"

export const metadata: Metadata = {
  title: "Echo Web,LLC | Build Organic Revenue Channels for Your Business",
  description:
    "Turn your website into a predictable revenue stream. We build and optimize digital channels that attract qualified buyers and convert them into sales.",
  openGraph: {
    title: "Echo Web, LLC | Build Organic Revenue Channels for Your Business",
    description:
      "Turn your website into a predictable revenue stream. We build digital channels that attract qualified buyers and convert them into sales.",
    type: "website",
  },
}

export default function HomePage() {
  // Placeholder blog data
  const recentBlogs = [
    {
      slug: "seo-basics-for-small-business",
      title: "How to Rank for Keywords That Actually Drive Revenue",
      excerpt: "Not all traffic is valuable. Learn how to target searches that bring in qualified buyers.",
      date: "2024-03-15",
    },
    {
      slug: "cro-optimization-tips",
      title: "5 Ways to Turn More Website Visitors Into Customers",
      excerpt: "Small conversion improvements create exponential revenue growth. Here's where to start.",
      date: "2024-03-10",
    },
    {
      slug: "website-performance-matters",
      title: "Why Your Website Speed Directly Impacts Revenue",
      excerpt: "Slow sites lose sales. Fast sites convert better. The data proves it.",
      date: "2024-03-05",
    },
    {
      slug: "choosing-web-agency",
      title: "How to Choose a Partner Who Understands Revenue Growth",
      excerpt: "What to look for when your business needs more than just a pretty website.",
      date: "2024-02-28",
    },
  ]

  // Placeholder portfolio data
  const portfolioHighlights = [
    {
      slug: "fitness-coach-website",
      title: "Fitness Clientele Building System",
      description: "Created a digital channel that consistently generates 240% more consultation bookings.",
      image: "/fitness-coach-website.jpg",
      // Yoku
    },
    {
      slug: "creative-media-production-group",
      title: "Creative Media Production Group Growth",
      description: "Transforemed their website that now brings in 4x more organic traffic every month.",
      image: "/real-estate-website-hero.png",
      // Nathan
    },
    {
      slug: "boxing-training-client",
      title: "Boxing Training Client Acquisition",
      description: "Developed a website that drives a 150% increase in booked clients for boxing training services.",
      image: "/boxing-training-website.jpg",
      // Andrew (me)
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-100/80 to-blue-200/70 py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white/25 p-10 rounded-3xl shadow-xl">
          <div className="text-center">
        <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl">
          Optimize sales or lead generation for your product or service
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-balance text-xl leading-relaxed text-muted-foreground">
          We design and build websites that work with your systems using SEO and conversion-focused designs to generate an optimize sales and leads generation 
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-md border-1 border-gray-300 transition-all hover:scale-105 hover:shadow-xl"
          >
            See How We Helped Other Businesses
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary/50 bg-background px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/20 hover:bg-secondary/50"
          >
           Book Directly for a Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
          </div>
        </div>
      </section>

      {/* How it works overview */}
      <section className="bg-gradient-to-tr from-white via-blue-100/80 to-blue-200/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="flex gap-4 shadow-xl p-4 rounded-2xl">
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Attract qualified buyers</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Show up when your ideal customers are actively searching for solutions. We position your business to
                  capture demand at the exact moment it matters.
                </p>
              </div>
            </div>
            <div className="flex gap-4 shadow-xl p-4 rounded-2xl">
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Guide them to convert</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Every element is designed to move prospects toward the sale. Clear messaging, strategic positioning,
                  and frictionless paths to purchase.
                </p>
              </div>
            </div>
            <div className="flex gap-4 shadow-xl p-4 rounded-2xl">
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
                  <Code className="h-7 w-7 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Grow predictably</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  No operational strain. We work your revenue channel, bringing in qualified leads and sales while you
                  focus on delivering your core service. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground">How we optimize your products and services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We use design, strategy, UX, and SEO to create a system that attracts buyers and converts them into
              customers.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-card p-10 shadow-md border-1 border-gray-300 ring-1 ring-border/50 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-foreground">Digital systems that convert</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We build websites and landing pages designed around one goal: turning visitors into revenue. Every
                decision is made with your business outcomes in mind, not aesthetics alone.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
              >
                See what we build <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-3xl bg-card p-10 shadow-md border-1 border-gray-300 ring-1 ring-border/50 transition-all hover:shadow-xl">
              <h3 className="text-2xl font-bold text-foreground">Organic visibility that lasts</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Strategic search positioning puts your business in front of qualified buyers at the exact moment they
                need you. Sustainable traffic growth, not temporary spikes.
              </p>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Learn how it works <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground">Websites We Have Optimized</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Real businesses generating measurable revenue growth.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {portfolioHighlights.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group overflow-hidden rounded-3xl bg-card shadow-md border-1 border-gray-300 ring-1 ring-border/50 transition-all hover:shadow-xl hover:ring-primary/20"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary">{project.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex-col items-center justify">
            <h2 className="text-4xl font-bold text-foreground pb-2">Industry Trends & Insights</h2>
            <h3 className="pb-1 text-lg font-medium text-muted-foreground">Latest insights on SEO, conversion optimization, and revenue growth</h3>
            <Link href="/blog" className="text-base font-semibold text-primary transition-colors hover:text-primary/80">
              View all posts
            </Link>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {recentBlogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl bg-card p-6 shadow-md border-1 border-gray-300 ring-1 ring-border/50 transition-all hover:shadow-lg hover:ring-primary/20"
              >
                <time className="text-sm font-medium text-primary/70">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <h3 className="mt-4 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground">Built for revenue growth</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Everything you need to turn your website into a reliable revenue stream.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">You own everything</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Full code ownership, complete documentation. No vendor lock-in, no surprises.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">Track what matters</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Analytics and insights focused on revenue impact, not vanity metrics.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">Fast everywhere</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Speed directly impacts conversion. We optimize for performance on every device.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">Mobile-first approach</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Most buyers browse on mobile. Your channel works flawlessly everywhere.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">Built to be found</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Technical foundation designed for search visibility from day one.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-bold text-foreground">Ongoing support</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We're here when you need us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-primary-foreground">Ready to build your revenue generating website?</h2>
              <p className="mt-3 text-lg leading-relaxed text-primary-foreground/95">
                Projects start at $5,000. Let's discuss how we can create predictable organic growth for your business.
              </p>
            </div>
            <div className="flex flex-col gap-3 xl:flex-row">
              <Link
                href="/contact"
                className="min-w-xs inline-flex justify-center items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-semibold text-primary shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                Talk about revenue goals <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="min-w-xs inline-flex items-center justify-center gap-2 rounded-full border-4 border-white/70 bg-transparent px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground/10"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
