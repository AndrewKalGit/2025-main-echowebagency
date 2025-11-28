"use client"

import { useState, useEffect } from "react"
import { X } from "@/components/icons"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("acceptedCookies")
    if (consent === null) {
      setShowBanner(true)
    } else if (consent === "true") {
      // Load GA4 if cookies accepted
      loadGA4()
    }
    setIsLoaded(true)
  }, [])

  const loadGA4 = () => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (!GA_ID) return

    // Load GA4 script
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script1)

    // Initialize GA4
    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `
    document.head.appendChild(script2)

    console.log("[v0] Google Analytics loaded")
  }

  const handleAccept = () => {
    localStorage.setItem("acceptedCookies", "true")
    setShowBanner(false)
    loadGA4()
  }

  const handleDecline = () => {
    localStorage.setItem("acceptedCookies", "false")
    setShowBanner(false)
  }

  if (!isLoaded || !showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-[#F3F6F8] bg-white p-4 shadow-lg sm:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#2B3238]">Cookie Preferences</h3>
            <p className="mt-1 text-sm font-medium text-[#2B3238]/70">
              We use cookies to improve your experience and understand how visitors use our site. By accepting, you
              agree to our use of analytics cookies.{" "}
              <a href="/privacy" className="text-[#2EA8F7] underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              onClick={handleDecline}
              className="rounded-2xl border-2 border-[#F3F6F8] bg-white px-6 py-2 text-sm font-semibold text-[#2B3238] hover:bg-[#F3F6F8]"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-2xl bg-[#2EA8F7] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#2EA8F7]/90"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CookieSettings() {
  const [isOpen, setIsOpen] = useState(false)

  const handleReset = () => {
    localStorage.removeItem("acceptedCookies")
    window.location.reload()
  }

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="text-sm font-medium text-white/70 hover:text-white">
        Cookie Settings
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-[#2B3238]">Cookie Settings</h3>
          <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-[#F3F6F8]">
            <X className="h-5 w-5 text-[#2B3238]" />
          </button>
        </div>
        <p className="mt-4 text-sm font-medium text-[#2B3238]/70">
          Manage your cookie preferences. You can change these settings at any time.
        </p>
        <button
          onClick={handleReset}
          className="mt-6 w-full rounded-2xl bg-[#2EA8F7] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2EA8F7]/90"
        >
          Reset Cookie Preferences
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-3 w-full rounded-2xl border-2 border-[#F3F6F8] px-6 py-3 text-sm font-semibold text-[#2B3238] hover:bg-[#F3F6F8]"
        >
          Close
        </button>
      </div>
    </div>
  )
}
