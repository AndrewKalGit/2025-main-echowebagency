"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "../public/vectorlogo.png"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
    <header className="rounded-xl border-b border-gray-300 bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Echo Web" width={120} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors ${
                isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Services
            </Link>
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
             {/* <Link
              href="/resources"
              className={`text-sm font-medium transition-colors ${
                isActive("/resources") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Resources
            </Link> */}
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
        </div>
      </div>
    </header>
  )
}
