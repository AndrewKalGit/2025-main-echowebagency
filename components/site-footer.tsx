import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-[#F3F6F8] bg-[#2B3238] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#2EA8F7]" />
              <span className="text-xl font-semibold text-white">Echo Web</span>
            </Link>
            <p className="mt-4 text-sm font-medium text-white/70">Your Online Revenue Stream</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#design" className="text-sm font-medium text-white/70 hover:text-white">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-sm font-medium text-white/70 hover:text-white">
                  SEO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm font-medium text-white/70 hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm font-medium text-white/70 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm font-medium text-white/70">
            © {new Date().getFullYear()} Echo Web, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
