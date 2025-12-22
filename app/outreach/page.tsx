"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, LinkIcon, TrendingUp, Target } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function OutreachPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    
    // Get form values
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const website = formData.get("website") as string
    const message = formData.get("message") as string

    // Get current timestamp
    const now = new Date()
    const time = now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })

    // Prepare template params matching the email template
    const templateParams = {
      name: name,
      email: email,
      message: message,
      time: time,
      firstName: name.split(" ")[0] || name,
      lastName: name.split(" ").slice(1).join(" ") || "",
      businessName: "", // Not collected in this form
      phone: "", // Not collected in this form
      serviceType: "SEO Outreach",
      businessModel: "", // Not collected in this form
      appointmentStyle: "", // Not collected in this form
      revenueStreamType: "", // Not collected in this form
      serviceDescription: message,
      budget: "", // Not collected in this form
      timeline: "", // Not collected in this form
      launchDate: "", // Not collected in this form
      projectPriority: "", // Not collected in this form
      mainGoal: "SEO & Link Building",
      notes: `Website: ${website}\n\nOutreach Goals:\n${message}`,
      utmSource: "", // Could be captured from URL params
      utmMedium: "", // Could be captured from URL params
      utmCampaign: "", // Could be captured from URL params
      pageURL: window.location.href,
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
      submittedAt: time,
      leadQuality: "warm", // Default for outreach inquiries
      revenueTier: "growth", // Default for SEO services
    }

    try {
      // Dynamically import emailjs to avoid SSR issues
      const emailjs = (await import("@emailjs/browser")).default

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setSubmitStatus("success")
      // Reset form
      e.currentTarget.reset()
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">
              SEO Outreach & Link Building
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-[#2B3238]/70">
              Strategic partnerships that boost your domain authority and organic search rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Outreach Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#2B3238]">Our outreach process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#2B3238]/70">
              Building high-quality backlinks through genuine partnerships and valuable content.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
                <Target className="h-6 w-6 text-[#2EA8F7]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#2B3238]">Strategic Targeting</h3>
              <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                We identify high-authority websites in your industry and niche, focusing on sites with genuine traffic
                and engaged audiences. No spammy link farms.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
                <LinkIcon className="h-6 w-6 text-[#2EA8F7]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#2B3238]">Outreach Page Creation</h3>
              <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                We create valuable, SEO-optimized resource pages on your site that naturally attract backlinks and
                provide genuine value to your audience and linking partners.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2EA8F7]/10">
                <Mail className="h-6 w-6 text-[#2EA8F7]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#2B3238]">Personalized Email Campaigns</h3>
              <p className="mt-3 text-base font-medium text-[#2B3238]/70">
                Using proven templates, we craft personalized outreach emails that build relationships and secure
                high-quality backlinks through collaboration, not spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link Exchange System */}
      <section className="bg-[#F3F6F8] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#2B3238]">Strategic link exchange system</h2>
              <p className="mt-4 text-lg font-medium text-[#2B3238]/70">
                We don't just cold email for links. We create mutually beneficial partnerships that provide value for
                everyone involved.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2EA8F7]">
                    <span className="text-xs font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B3238]">Resource Pages</h3>
                    <p className="mt-1 text-base font-medium text-[#2B3238]/70">
                      We build comprehensive resource pages, calculators, and tools that other sites want to link to
                      because they provide genuine value.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2EA8F7]">
                    <span className="text-xs font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B3238]">Guest Posts</h3>
                    <p className="mt-1 text-base font-medium text-[#2B3238]/70">
                      Secure guest posting opportunities on authoritative sites with our targeted outreach and
                      high-quality content creation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2EA8F7]">
                    <span className="text-xs font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2B3238]">Partnership Collaborations</h3>
                    <p className="mt-1 text-base font-medium text-[#2B3238]/70">
                      Build long-term relationships with complementary businesses for ongoing link exchanges and
                      co-marketing opportunities.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#2B3238]">What you get</h3>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    5-10 high-quality backlinks per month (depends on industry and competition)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    Monthly reports with DA/DR scores and link placement details
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    All outreach email templates and response tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    Resource page creation and optimization on your site
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Outreach Template */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#2B3238]">Sample outreach template</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#2B3238]/70">
              Here's an example of how we approach outreach   personalized, valuable, and authentic.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">
            <div className="rounded-2xl bg-[#F3F6F8] p-6 font-mono text-sm">
              <p className="font-bold text-[#2B3238]">Subject: Resource for [Their Blog Topic]</p>
              <p className="mt-4 text-[#2B3238]/70">Hi [First Name],</p>
              <p className="mt-4 text-[#2B3238]/70">
                I came across your article on [specific topic] at [their site] and really appreciated your take on
                [specific insight from their content].
              </p>
              <p className="mt-4 text-[#2B3238]/70">
                I recently published a comprehensive guide on [related topic] that expands on some of the points you
                mentioned, particularly around [specific value prop]. It includes [specific feature: calculator, data,
                case studies, etc.] that your readers might find useful.
              </p>
              <p className="mt-4 text-[#2B3238]/70">
                Would you be interested in checking it out? If it's a good fit for your audience, I'd be honored if
                you'd consider linking to it from your [relevant article].
              </p>
              <p className="mt-4 text-[#2B3238]/70">
                Either way, keep up the great work on [their site]   I've subscribed to your newsletter and look forward
                to reading more.
              </p>
              <p className="mt-4 text-[#2B3238]/70">Best,</p>
              <p className="text-[#2B3238]/70">[Your Name]</p>
              <p className="text-[#2B3238]/70">[Your Company]</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-[#2B3238]">Why this works:</h3>
              <ul className="mt-4 space-y-2 text-base font-medium text-[#2B3238]/70">
                <li>• Personalized and shows we actually read their content</li>
                <li>• Focuses on providing value, not just asking for a favor</li>
                <li>• Builds a genuine relationship beyond just link exchanges</li>
                <li>• Leaves the door open without being pushy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Tracked */}
      <section className="bg-[#F3F6F8] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#2B3238]">Metrics we track</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-[#2B3238]/70">
              Transparent reporting so you know exactly what you're getting.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-4xl font-bold text-[#2EA8F7]">DA/DR</p>
              <p className="mt-2 text-sm font-semibold text-[#2B3238]">Domain Authority</p>
              <p className="mt-2 text-sm font-medium text-[#2B3238]/70">Track your site's authority score monthly</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-4xl font-bold text-[#2EA8F7]">Links/Mo</p>
              <p className="mt-2 text-sm font-semibold text-[#2B3238]">New Backlinks</p>
              <p className="mt-2 text-sm font-medium text-[#2B3238]/70">High-quality links acquired per month</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-4xl font-bold text-[#2EA8F7]">Referrals</p>
              <p className="mt-2 text-sm font-semibold text-[#2B3238]">Referral Traffic</p>
              <p className="mt-2 text-sm font-medium text-[#2B3238]/70">Traffic driven from backlinks</p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
              <p className="text-4xl font-bold text-[#2EA8F7]">Response</p>
              <p className="mt-2 text-sm font-semibold text-[#2B3238]">Response Rate</p>
              <p className="mt-2 text-sm font-medium text-[#2B3238]/70">Outreach email response and conversion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-[#2B3238]">Start your outreach campaign</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-[#2B3238]/70">
              Build organic traffic through SEO outreach. Let's discuss adding link
              building to your strategy.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-gray-400 bg-white p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="website">Your Website *</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  required
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <Label htmlFor="message">Tell us about your outreach goals *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                  placeholder="What are you hoping to achieve with link building? Any specific industries or sites you'd like to target?"
                />
              </div>

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
                  Thank you! Your outreach consultation request has been submitted successfully. We'll be in touch soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
                  There was an error submitting your request. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Request Outreach Consultation"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-[#2B3238]/70">
              Not an onboarded client yet?{" "}
              <Link href="/contact" className="text-[#2EA8F7] underline">
                Start with a website project
              </Link>{" "}
              and we can add SEO services later.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}