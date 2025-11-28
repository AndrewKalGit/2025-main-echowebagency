"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Download, CheckCircle } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { sendLeadEmail } from "@/app/actions/send-email"

async function sendLead(formValues: any) {
  try {
    const result = await sendLeadEmail(formValues)
    console.log("Server Action Response:", result)
    return true
  } catch (error) {
    console.error("Server Action Error:", error)
    return false
  }
}

export default function LeadMagnetPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const [isGated, setIsGated] = useState(true)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    serviceType: "lead-magnet",
    businessModel: "not_provided",
    appointmentStyle: "not_provided",
    revenueStreamType: "not_provided",
    serviceDescription: "",
    mainGoal: "not_provided",
    notes: "",
    budget: "not_provided",
    timeline: "not_provided",
    launchDate: "",
    projectPriority: "not_provided",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get("token")
    const cookieToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("resource_token="))
      ?.split("=")[1]

    if (token || cookieToken) {
      setIsGated(false)
    }
  }, [])

  const resourceData: Record<string, { title: string; description: string }> = {
    "web-design-starter-pack": {
      title: "Web Design Starter Pack (Checklist)",
      description: "Your complete guide to planning and launching a high-converting website.",
    },
    "website-roi-calculator": {
      title: "Website ROI Calculator",
      description: "Calculate the potential return on investment for your website project.",
    },
    "template-checklists": {
      title: "Template Checklists",
      description: "Pre-built checklists for common web projects and SEO audits.",
    },
    "seo-outreach-template": {
      title: "SEO Outreach Template",
      description: "Email templates for successful link building and partnership outreach.",
    },
  }

  const resource = resourceData[slug] || {
    title: "Free Resource",
    description: "Download your free resource.",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const turnstileToken = (window as any).turnstile?.getResponse()

    if (!turnstileToken) {
      alert("Please complete the verification to submit the form.")
      setIsSubmitting(false)
      return
    }

    const submissionPayload = {
      ...formData,
       name: `${formData.firstName} ${formData.lastName}`.trim(),
      turnstileToken,
      // Auto-tracked data
      utmSource: new URLSearchParams(window.location.search).get("utm_source") || "direct",
      utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || "none",
      utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || "none",
      pageURL: window.location.href,
      deviceType: navigator.userAgent,
      submittedAt: new Date().toISOString(),
      // Internal tags
      leadQuality: "new",
      revenueTier: "starter",
      formType: "lead-magnet",
      resourceSlug: slug,
    }

    // Send to Server Action
    await sendLead(submissionPayload)

    // Also send to API
    await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissionPayload),
    })

    const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 7)
    document.cookie = `resource_token=${token}; expires=${expiryDate.toUTCString()}; path=/`
    window.history.replaceState({}, "", `?token=${token}`)

    setIsGated(false)
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (isGated) {
    return (
      <div className="min-h-screen bg-white">
        {/* Gated Form */}
        <section className="py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-semibold leading-tight text-[#2B3238] lg:text-5xl">{resource.title}</h1>
              <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-[#2B3238]/70">{resource.description}</p>
            </div>

            <div className="mt-12 rounded-2xl border border-gray-400 bg-white p-8 shadow-md">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-[#2B3238]">Get instant access</h2>
                <p className="mt-2 text-base font-medium text-[#2B3238]/70">
                  Fill out the form below to download your free resource and receive 1 month of free hosting.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-2 rounded-2xl border-gray-300 shadow-sm"
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
                      className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                    placeholder="Your Company LLC"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceDescription">What are you working on?</Label>
                  <textarea
                    id="serviceDescription"
                    name="serviceDescription"
                    rows={4}
                    value={formData.serviceDescription}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-base font-medium text-[#2B3238] shadow-sm placeholder:text-[#2B3238]/50 focus:border-[#2EA8F7] focus:outline-none"
                    placeholder="Tell us about your website project or business goals..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 rounded border-[#F3F6F8] text-[#2EA8F7] focus:ring-[#2EA8F7]"
                  />
                  <Label htmlFor="consent" className="text-sm font-medium text-[#2B3238]/70">
                    I agree to receive marketing communications and understand that Echo Web uses cookies to personalize
                    my experience. I can unsubscribe at any time. *
                  </Label>
                </div>

                <div
                  className="cf-turnstile"
                  data-sitekey="1x00000000000000000000AA"
                  data-theme="light"
                  data-size="invisible"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Download Free Resource"}
                  <Download className="h-5 w-5" />
                </button>
              </form>

              <p className="mt-6 text-center text-sm font-medium text-[#2B3238]/50">
                Your information is secure and will never be shared.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Ungated view - show download
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Success & Download Section */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mt-8 text-4xl font-semibold leading-tight text-[#2B3238] lg:text-5xl">Success!</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-[#2B3238]/70">
              Your resource is ready to download. We've also sent a copy to your email with your 1 month free hosting
              voucher.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border-2 border-[#2EA8F7] bg-[#2EA8F7]/5 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#2B3238]">{resource.title}</h2>
            <p className="mt-2 text-base font-medium text-[#2B3238]/70">{resource.description}</p>

            <a
              href={`/resources/${slug}.pdf`}
              download
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90"
            >
              <Download className="h-5 w-5" />
              Download Resource
            </a>

            <div className="mt-8 rounded-2xl bg-white p-6">
              <h3 className="font-semibold text-[#2B3238]">Your Free Hosting Voucher</h3>
              <p className="mt-2 text-sm font-medium text-[#2B3238]/70">
                Use code: <span className="font-mono font-bold text-[#2EA8F7]">ECHO1MONTH</span> when you sign up for
                any web design package to receive 1 month of free professional hosting.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-[#2B3238]">What's next?</h3>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium text-[#2B3238]/70">
              Ready to put these resources to work? Book a consultation to discuss your website project.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90"
              >
                Book a consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#F3F6F8] p-8">
            <h3 className="text-xl font-semibold text-[#2B3238]">More free resources</h3>
            <p className="mt-2 text-base font-medium text-[#2B3238]/70">
              Check out our other free tools and templates.
            </p>
            <Link
              href="/resources"
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-[#2EA8F7] hover:text-[#2EA8F7]/80"
            >
              Browse all resources <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
