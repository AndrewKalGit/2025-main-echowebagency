"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [servicesOpen])

  return (
    <header ref={headerRef} className="rounded-lg mx-1 border-b border-gray-300 bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Echo Web" width={120} height={40} className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-background shadow-lg py-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services#design"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Web Design
                  </Link>
                  <Link
                    href="/services#seo"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    SEO
                  </Link>
                  <Link
                    href="/services#hosting"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Maintenance
                  </Link>
                  <Link
                    href="/outreach"
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Link Building (SEO)
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/portfolio"
              className={`text-sm font-medium transition-colors ${
                isActive("/portfolio") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive("/pricing") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive("/blog") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-2">
            <div className="space-y-1">
              <Link
                href="/services"
                onClick={closeMobileMenu}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive("/services")
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-gray-100 hover:text-primary"
                }`}
              >
                Services
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  href="/services#design"
                  onClick={closeMobileMenu}
                  className="block px-4 py-1.5 text-sm text-foreground/80 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                Web Design
                </Link>
                <Link
                  href="/services#seo"
                  onClick={closeMobileMenu}
                  className="block px-4 py-1.5 text-sm text-foreground/80 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                 SEO
                </Link>
                <Link
                  href="/services#hosting"
                  onClick={closeMobileMenu}
                  className="block px-4 py-1.5 text-sm text-foreground/80 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Maintenance
                </Link>
                <Link
                  href="/outreach"
                  onClick={closeMobileMenu}
                  className="block px-4 py-1.5 text-sm text-foreground/80 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Link Building (SEO)
                </Link>
              </div>
            </div>
            <Link
              href="/portfolio"
              onClick={closeMobileMenu}
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/portfolio")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-gray-100 hover:text-primary"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/pricing"
              onClick={closeMobileMenu}
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/pricing")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-gray-100 hover:text-primary"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/blog")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-gray-100 hover:text-primary"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive("/about")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-gray-100 hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block mx-4 mt-4 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-md text-center transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}