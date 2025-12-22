"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { sendLeadEmail } from "@/app/actions/send-email"
import { getTurnstileConfig } from "@/app/actions/get-turnstile-config"

async function sendLead(formValues: any) {
  try {
    const result = await sendLeadEmail(formValues)
    console.log("EmailJS Response:", result)
    return true
  } catch (error) {
    console.error("EmailJS Error:", error)
    return false
  }
}

export default function BookingPage() {
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
    consent: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [turnstileSiteKey, setTurnstileSiteKey] = useState("")

  useEffect(() => {
    getTurnstileConfig().then((config) => setTurnstileSiteKey(config.siteKey))
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
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
      formType: "booking",
    }

    await sendLead(submissionPayload)

    await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissionPayload),
    })

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader />

        {/* Success Message */}
        <section className="py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="mt-8 text-4xl font-semibold leading-tight text-[#2B3238] lg:text-5xl">
                Consultation Requested!
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-[#2B3238]/70">
                Thanks for your interest, {formData.firstName}! We've received your consultation request and will reach
                out within 24 hours to schedule a time that works for you.
              </p>
            </div>

            <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[#2B3238]">What happens next?</h2>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="text-[#2B3238]">Check your email:</strong> You'll receive a confirmation email
                    with next steps and some prep questions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="text-[#2B3238]">Schedule your call:</strong> We'll send calendar options for a
                    30-45 minute discovery call.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="text-[#2B3238]">Discovery call:</strong> We'll discuss your goals, review your
                    current site (if applicable), and outline a strategy.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#2EA8F7]" />
                  <span className="text-base font-medium text-[#2B3238]/70">
                    <strong className="text-[#2B3238]">Receive proposal:</strong> Within 48 hours of our call, you'll
                    receive a detailed proposal with timeline and pricing.
                  </span>
                </li>
              </ul>
            </div>

            {/* <div className="mt-12 rounded-2xl bg-[#F3F6F8] p-8">
              <h3 className="text-xl font-semibold text-[#2B3238]">While you wait, check out these resources</h3>
              <div className="mt-6 space-y-3">
                <Link
                  href="/resources"
                  className="flex items-center justify-between rounded-2xl bg-white p-4 hover:shadow-md"
                >
                  <span className="text-base font-medium text-[#2B3238]">Download our free starter pack</span>
                  <ArrowRight className="h-5 w-5 text-[#2EA8F7]" />
                </Link>
                <Link
                  href="/portfolio"
                  className="flex items-center justify-between rounded-2xl bg-white p-4 hover:shadow-md"
                >
                  <span className="text-base font-medium text-[#2B3238]">Browse our portfolio</span>
                  <ArrowRight className="h-5 w-5 text-[#2EA8F7]" />
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center justify-between rounded-2xl bg-white p-4 hover:shadow-md"
                >
                  <span className="text-base font-medium text-[#2B3238]">Read our blog</span>
                  <ArrowRight className="h-5 w-5 text-[#2EA8F7]" />
                </Link>
              </div>
            </div> */}
          </div>
        </section>

        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F3F6F8] to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold leading-tight text-[#2B3238] lg:text-6xl">Book Your Consultation</h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium text-[#2B3238]/70">
              Tell us about your project and we'll schedule a free 30-minute strategy call.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-400 bg-white p-8 shadow-md">
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
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-300 shadow-sm"
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
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                  placeholder="Your Business LLC"
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
                    className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                    placeholder="john@business.com"
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
                    className="mt-2 rounded-2xl border-gray-300 shadow-sm"
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
                  className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-white px-4 text-base font-medium text-[#2B3238] shadow-sm focus:border-[#2EA8F7] focus:outline-none"
                >
                  <option value="">Select a service...</option>
                  <option value="service-page">Service Page</option>
                  <option value="appointment-booking">Appointment / Booking System</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="seo">SEO</option>
                  <option value="full-website">Full Website</option>
                  <option value="mini-webapp">eCommerce</option>
                </select>
              </div>

              <div>
                <Label htmlFor="businessModel">Business Model *</Label>
                <select
                  id="businessModel"
                  name="businessModel"
                  required
                  value={formData.businessModel}
                  onChange={handleInputChange}
                  className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-white px-4 text-base font-medium text-[#2B3238] shadow-sm focus:border-[#2EA8F7] focus:outline-none"
                >
                  <option value="">Select your business model...</option>
                  <option value="b2b">B2B (Business to Business)</option>
                  <option value="b2c">B2C (Business to Consumer)</option>
                  <option value="both">Both B2B and B2C</option>
                </select>
              </div>

              <div>
                <Label htmlFor="appointmentStyle">Appointment Style</Label>
                <select
                  id="appointmentStyle"
                  name="appointmentStyle"
                  value={formData.appointmentStyle}
                  onChange={handleInputChange}
                  className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-white px-4 text-base font-medium text-[#2B3238] shadow-sm focus:border-[#2EA8F7] focus:outline-none"
                >
                  <option value="">Select if applicable...</option>
                  <option value="instant-booking">Instant Booking</option>
                  <option value="request-approval">Request & Approval</option>
                  <option value="calendar-sync">Calendar Sync</option>
                  <option value="not-applicable">Not Applicable</option>
                </select>
              </div>

              <div>
                <Label htmlFor="revenueStreamType">Revenue Stream Type</Label>
                <select
                  id="revenueStreamType"
                  name="revenueStreamType"
                  value={formData.revenueStreamType}
                  onChange={handleInputChange}
                  className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-white px-4 text-base font-medium text-[#2B3238] shadow-sm focus:border-[#2EA8F7] focus:outline-none"
                >
                  <option value="">Select revenue type...</option>
                  <option value="lead-generation">Lead Generation</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="subscriptions">Subscriptions</option>
                  <option value="bookings">Bookings / Appointments</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="serviceDescription">Service/Product Description *</Label>
                <Textarea
                  id="serviceDescription"
                  name="serviceDescription"
                  rows={4}
                  required
                  value={formData.serviceDescription}
                  onChange={handleInputChange}
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                  placeholder="Describe the services or products your business offers..."
                />
              </div>

              <div>
                <Label htmlFor="mainGoal">Main Goal *</Label>
                <select
                  id="mainGoal"
                  name="mainGoal"
                  required
                  value={formData.mainGoal}
                  onChange={handleInputChange}
                  className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-white px-4 text-base font-medium text-[#2B3238] shadow-sm focus:border-[#2EA8F7] focus:outline-none"
                >
                  <option value="">What's your primary goal?</option>
                  <option value="leads">Lead Gen</option>
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="seo">SEO</option>
                </select>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="budget">Budget Range *</Label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-white px-4 text-base font-medium text-[#2B3238] shadow-sm focus:border-[#2EA8F7] focus:outline-none"
                  >
                    <option value="">Select budget range...</option>
                    <option value="2500-5000">$5,000 - $10,000</option>
                    <option value="5000-10000">$10,000 - $20,000</option>
                    <option value="10000-20000">$20,000 - $30,000</option>
                    <option value="20000+">$30,000+</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="timeline">Desired Timeline</Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                    placeholder="e.g., 4-6 weeks, ASAP, Flexible"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="launchDate">Planned Launch Date</Label>
                <Input
                  id="launchDate"
                  name="launchDate"
                  type="date"
                  value={formData.launchDate}
                  onChange={handleInputChange}
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                />
              </div>

              <div>
                <Label htmlFor="projectPriority">Project Priority *</Label>
                <select
                  id="projectPriority"
                  name="projectPriority"
                  required
                  value={formData.projectPriority}
                  onChange={handleInputChange}
                  className="mt-2 h-9 w-full rounded-2xl border border-gray-300 bg-white px-4 text-base font-medium text-[#2B3238] shadow-sm focus:border-[#2EA8F7] focus:outline-none"
                >
                  <option value="">How urgent is this project?</option>
                  <option value="urgent">Urgent (1 month)</option>
                  <option value="high">High (2 months)</option>
                  <option value="medium">Medium (3 months)</option>
                  <option value="low">Low (3+ months)</option>
                </select>
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="mt-2 rounded-2xl border-gray-300 shadow-sm"
                  placeholder="Any other details, questions, or requirements..."
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
                  I agree to receive communications from Echo Web regarding my consultation and understand that my
                  information will be used according to the{" "}
                  <Link href="/privacy" className="text-[#2EA8F7] underline">
                    Privacy Policy
                  </Link>
                  . *
                </Label>
              </div>

              {turnstileSiteKey && (
                <div
                  className="cf-turnstile"
                  data-sitekey={turnstileSiteKey}
                  data-theme="light"
                  data-size="invisible"
                />
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm font-medium text-[#2B3238]/50">
              We'll respond within 24 hours to schedule your free consultation call.
            </p>
          </div>

          <div className="mt-8 rounded-2xl bg-[#F3F6F8] p-6">
            <p className="text-center text-sm font-medium text-[#2B3238]/70">
              Prefer to email us directly?{" "}
              <a href="mailto:contact@echowebagency.com" className="text-[#2EA8F7] underline">
                contact@echowebagency.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
