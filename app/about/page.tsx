import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, TrendingUp, Users, FileText, Award, CheckCircle, Phone, Mail } from "@/components/icons"

export const metadata: Metadata = {
  title: "About - Echo Web, LLC",
  description:
    "Learn about Echo Web: boutique web design and SEO agency focused on revenue-driven results for service businesses.",
  openGraph: {
    title: "About - Echo Web, LLC",
    description: "Boutique web design and SEO agency focused on revenue-driven results.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-foreground lg:text-6xl">About Echo Web</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-muted-foreground">
              Your Organic Online Revenue Stream
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-foreground">Our Story</h2>
            <div className="mt-6 space-y-4 text-base font-medium leading-relaxed text-muted-foreground">
              <p>
                Echo Web started in a Discord server. What began as helping friends and community members grow their
                businesses online evolved into something bigger—a boutique agency dedicated to building
                revenue-generating websites for service-based businesses.
              </p>
              <p>
                We're a small team of developers, designers, and digital strategy experts who genuinely care about your
                success. We operate remotely via Google Meet and calls, working with clients across the country to
                create websites that don't just look good—they bring in business.
              </p>
              <p>
                Our approach is simple: we focus on what actually matters. No fluff, no corporate jargon, just real
                conversations about how to turn your website into a reliable revenue stream. We measure success by the
                leads you generate, the bookings you get, and the growth you see.
              </p>
              <p>
                Right now, we're a boutique operation that works with a limited number of clients at a time. That's
                intentional. We want to give every project the attention it deserves. Our vision? To keep growing
                thoughtfully, scale into a full agency, and help even more businesses succeed online—without losing the
                personal touch that makes us different.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Measure */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-foreground">What we measure</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
              Success isn't about traffic numbers or vanity metrics. It's about business outcomes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Revenue Impact</h3>
              <p className="mt-3 text-base font-medium text-muted-foreground">
                The ultimate measure: how much revenue your website generates through online conversions and qualified
                leads.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Bookings & Leads</h3>
              <p className="mt-3 text-base font-medium text-muted-foreground">
                Consultation requests, appointment bookings, and contact form submissions from qualified prospects.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Conversion Rate</h3>
              <p className="mt-3 text-base font-medium text-muted-foreground">
                The percentage of visitors who take your desired action. Small improvements here create massive impact.
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Client Retention</h3>
              <p className="mt-3 text-base font-medium text-muted-foreground">
                For ongoing clients: month-over-month growth in organic traffic, rankings, and conversion performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Policy */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-foreground">Documentation & ownership</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
              Your website, your choice. We offer flexible options to match your needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Full Handover</h3>
                  <p className="mt-3 text-base font-medium text-muted-foreground">
                    We build your site, document everything, and hand it over completely. You get:
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">
                    Complete source code with detailed comments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">
                    Deployment guide for your hosting provider
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">Content management documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">
                    30 days of post-launch support included
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-sm font-medium text-muted-foreground/70">
                Best for: Businesses with in-house developers or established dev relationships
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Managed Service</h3>
                  <p className="mt-3 text-base font-medium text-muted-foreground">
                    We build, host, and maintain your site ongoing. You focus on your business while we handle:
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">
                    Premium hosting and SSL certificates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">
                    Security updates and performance monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">
                    Monthly content updates (up to 2 hours)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base font-medium text-muted-foreground">
                    Priority support with 24-hour response time
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-sm font-medium text-muted-foreground/70">
                Best for: Businesses that want hands-off website management
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-base font-medium text-muted-foreground">
              Both options include the same high-quality code, professional design, and conversion optimization. You can
              also switch from managed service to full handover at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-foreground">A boutique agency by design</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
              Small team, big results, genuine relationships
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-card p-8 shadow-lg">
            <p className="text-base font-medium leading-relaxed text-muted-foreground">
              Echo Web is made up of developers, designers, and digital strategists who work together to build websites
              that actually perform. We keep our client roster intentionally small so we can dedicate real time and
              attention to your project.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
              When you work with us, you're working with people who genuinely care about your success. We're available
              for calls, happy to answer questions, and committed to making sure your website becomes a valuable
              business asset.
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-foreground">
              We partner with trusted specialists for copywriting and advanced SEO when needed, but you'll always know
              who's working on your project and why.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-card p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground">Get in touch</h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground">
              Feel free to call, text, email, or set up a call with us. We're happy to answer your questions and help
              your business grow.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:contact@echowebagency.com"
                  className="text-base font-medium text-muted-foreground hover:text-primary"
                >
                  contact@echowebagency.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:7325957217" className="text-base font-medium text-muted-foreground hover:text-primary">
                  732-595-7217
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-primary-foreground">Let's talk about your website</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-primary-foreground/90">
              We're here to help your business grow online. Reach out anytime—let's set up a consultation and explore
              your next digital revenue stream.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-background px-8 py-4 text-base font-semibold text-primary shadow-lg hover:bg-background/95"
              >
                Contact us
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:7325957217"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-primary-foreground/20 bg-transparent px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
              >
                <Phone className="h-5 w-5" />
                Call 732-595-7217
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
