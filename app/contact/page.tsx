"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Mail, Linkedin, Twitter, ArrowRight, CheckCircle, Phone } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    serviceType: "",
    businessModel: "",
    appointmentStyle: "",
    revenueStreamType: "",
    serviceDescription: "",
    mainGoal: "",
    notes: "",
    budget: "",
    timeline: "",
    launchDate: "",
    projectPriority: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

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
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      message: formData.serviceDescription,
      time: time,
      firstName: formData.firstName,
      lastName: formData.lastName,
      businessName: formData.businessName,
      phone: formData.phone,
      serviceType: formData.serviceType,
      businessModel: formData.businessModel,
      appointmentStyle: formData.appointmentStyle,
      revenueStreamType: formData.revenueStreamType,
      serviceDescription: formData.serviceDescription,
      budget: formData.budget,
      timeline: formData.timeline,
      launchDate: formData.launchDate,
      projectPriority: formData.projectPriority,
      mainGoal: formData.mainGoal,
      notes: formData.notes,
      utmSource: new URLSearchParams(window.location.search).get("utm_source") || "direct",
      utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || "none",
      utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || "none",
      pageURL: window.location.href,
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
      submittedAt: time,
      leadQuality: "new",
      revenueTier: "starter",
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

      setIsSubmitted(true)
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        businessName: "",
        email: "",
        phone: "",
        serviceType: "",
        businessModel: "",
        appointmentStyle: "",
        revenueStreamType: "",
        serviceDescription: "",
        mainGoal: "",
        notes: "",
        budget: "",
        timeline: "",
        launchDate: "",
        projectPriority: "",
      })
    } catch (error) {
      console.error("EmailJS error:", error)
      alert("There was an error sending your message. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-foreground lg:text-6xl">
              Let's talk about your project
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-muted-foreground">
              Feel free to call, text, email, or set up a call with us. We're happy to answer your questions and help
              your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="border-gray-300 border-2 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-semibold text-foreground">Send us a message</h2>
              <p className="mt-3 text-base font-medium text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-2xl bg-green-50 p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
                  <h3 className="mt-4 text-2xl font-semibold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-base font-medium text-muted-foreground">
                    Thanks for reaching out! We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-2 rounded-2xl border-2 border-gray-300 shadow-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-2 rounded-2xl border-2 border-gray-300 shadow-sm"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="mt-2 rounded-2xl border-2 border-gray-300 shadow-sm"
                      placeholder="Your Company LLC"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 rounded-2xl border-2 border-gray-300 shadow-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 rounded-2xl border-2 border-gray-300 shadow-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-background px-4 text-base font-medium text-foreground shadow-sm focus:border-primary focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="service-page">Service Page</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="full-website">Full Website</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="mainGoal">Main Goal *</Label>
                    <select
                      id="mainGoal"
                      name="mainGoal"
                      required
                      value={formData.mainGoal}
                      onChange={handleInputChange}
                      className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-background px-4 text-base font-medium text-foreground shadow-sm focus:border-primary focus:outline-none"
                    >
                      <option value="">What's your primary goal?</option>
                      <option value="increase-leads">Increase Leads</option>
                      <option value="boost-sales">Boost Sales</option>
                      <option value="build-brand">Build Brand Awareness</option>
                      <option value="improve-seo">Improve SEO</option>
                      <option value="modernize-site">Modernize Website</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="serviceDescription">Project Description *</Label>
                    <Textarea
                      id="serviceDescription"
                      name="serviceDescription"
                      rows={6}
                      required
                      value={formData.serviceDescription}
                      onChange={handleInputChange}
                      className="mt-2 rounded-2xl border-2 border-gray-300 shadow-sm"
                      placeholder="Tell us about your project, goals, or questions..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Input
                      id="budget"
                      name="budget"
                      type="number"
                      min="2500"
                      step="500"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-2 rounded-2xl border-2 border-gray-300 shadow-sm"
                      placeholder="5000"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg ring-2 ring-primary/20 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-2xl bg-secondary p-8">
                <h3 className="text-2xl font-semibold text-foreground">Prefer to book directly?</h3>
                <p className="mt-3 text-base font-medium text-muted-foreground">
                  Skip the form and schedule a consultation call right away.
                </p>
                <Link
                  href="/booking"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg ring-2 ring-primary/20 hover:bg-primary/90"
                >
                  Book a consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="rounded-2xl bg-card p-8 shadow-lg border-2 border-gray-300">
                <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
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

              <div className="rounded-2xl bg-card p-8 shadow-lg border-2 border-gray-300">
                <h3 className="text-2xl font-semibold text-foreground">Follow Us</h3>
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://linkedin.com/company/echowebagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground hover:bg-primary hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/echowebllc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground hover:bg-primary hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-primary/10 p-8">
                <h3 className="text-xl font-semibold text-foreground">Response Time</h3>
                <p className="mt-3 text-base font-medium text-muted-foreground">
                  We typically respond to all inquiries within 72 hours during business days. For urgent matters, please
                  mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
              Common questions about our process, timelines, and policies.
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-card p-8 shadow-lg border-2 border-gray-300">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  What's your typical project process?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  Our process includes: 1) Discovery call to understand your business and goals, 2) Strategy document
                  outlining approach and deliverables, 3) Design mockups for your approval, 4) Development and CRO
                  implementation, 5) Testing and revisions, 6) Launch and handover with documentation. The entire
                  process typically takes 4-6 weeks depending on project scope.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  How long does a typical website project take?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  Most service page or landing page projects take 4-6 weeks from kickoff to launch. Full website
                  redesigns can take 8-10 weeks. Mini web apps and calculators typically take 2-3 weeks. Timeline
                  depends on content readiness, revision rounds, and project complexity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  What's your revision policy?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  Each project includes 3 rounds of minor revisions (copy changes, color adjustments, small layout
                  tweaks) and 2 round of major revisions (significant design changes). Additional revisions are billed
                  at $25 for minor changes and $100 for major changes. This ensures we're aligned early and keeps
                  projects on schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  Do you transfer all code and files after completion?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  Yes, with the Full Handover option. You receive all source code, design files, documentation, and
                  deployment guides. The site is yours to host anywhere. Alternatively, our Managed Service option keeps
                  the code with us while we handle hosting, updates, and maintenance ongoing. Both options included in
                  the base project price.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  Can I make updates to the website myself after launch?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  Absolutely. With Full Handover, you own all code and can edit freely or hire any developer. We provide
                  complete documentation showing how everything works. With Managed Service, you can request content
                  updates and we will handle it for you (included up to 5 requests/month at $100/month hosting fee).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  What's included in your SEO services?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  SEO services include: keyword research, on-page SEO
                  optimization, blog content strategy, local SEO setup, link building outreach, and monthly performance
                  reports. Pricing starts at $1,000/month with a 6-month minimum commitment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  Do you offer payment plans?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  Yes. Standard payment structure is 50% deposit to begin, 50% on launch. For projects over $5,000, we
                  can arrange milestone-based payments. All payments via ACH, wire, or credit card (3% processing fee).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground">
                  What if I'm not happy with the results?
                </AccordionTrigger>
                <AccordionContent className="text-base font-medium text-muted-foreground">
                  We include revision rounds to ensure satisfaction before launch. If there are concerns after initial
                  designs, we'll work with you to get it right. Our goal is a website that genuinely helps your business
                  grow. We measure success by your conversions and revenue, not just a pretty design.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}