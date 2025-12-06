"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Download } from "@/components/icons"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if modal has already been shown this session
    if (sessionStorage.getItem("leadMagnetShown") === "true") {
      setHasShown(true)
      return
    }

    // Check if cookies are accepted
    const cookiesAccepted = localStorage.getItem("acceptedCookies") === "true"
    if (!cookiesAccepted) return

    let timeoutPassed = false
    let scrollPassed = false

    // Wait 3.5 seconds
    const timer = setTimeout(() => {
      timeoutPassed = true
      if (scrollPassed && !hasShown) {
        showModal()
      }
    }, 3500)

    // Check scroll position
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent >= 50) {
        scrollPassed = true
        if (timeoutPassed && !hasShown) {
          showModal()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [hasShown])


  // Change to true to always show the modal for production and testing
  const showModal = () => {
    setIsOpen(false)
    setHasShown(false)
    sessionStorage.setItem("leadMagnetShown", "true")
  }

  const handleGetResource = () => {
    router.push("/lead-magnet/web-design-starter-pack")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#2B3238]">Free Website Starter Pack</DialogTitle>
          <DialogDescription className="text-base font-medium text-[#2B3238]/70">
            Get our comprehensive guide to building a high-converting website, plus 1 month of free hosting valued at
            $100
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-2xl bg-[#F3F6F8] p-4">
            <h4 className="font-semibold text-[#2B3238]">What you get:</h4>
            <ul className="mt-3 space-y-2 text-sm font-medium text-[#2B3238]/70">
              <li className="flex items-start gap-2">
                <span className="text-[#2EA8F7]">✓</span>
                <span>Complete website planning checklist</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2EA8F7]">✓</span>
                <span>CRO best practices guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2EA8F7]">✓</span>
                <span>1 month free hosting voucher (valued at $100)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2EA8F7]">✓</span>
                <span>Launch timeline template</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleGetResource}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2EA8F7] px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90"
          >
            <Download className="h-5 w-5" />
            Download Now
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-sm font-medium text-[#2B3238]/70 hover:text-[#2B3238]"
          >
            Maybe later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
