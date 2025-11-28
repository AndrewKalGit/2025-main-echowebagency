import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-b border-[#F3F6F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#2EA8F7]" />
            <span className="text-xl font-semibold text-[#2B3238]">Echo Web</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/services" className="text-sm font-medium text-[#2B3238] hover:text-[#2EA8F7]">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-[#2B3238] hover:text-[#2EA8F7]">
              Portfolio
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#2B3238] hover:text-[#2EA8F7]">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#2B3238] hover:text-[#2EA8F7]">
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl bg-[#2EA8F7] px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#2EA8F7]/90"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
