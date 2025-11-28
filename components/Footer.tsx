import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-12 text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/full-logo.png" alt="Echo Web" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              Building organic revenue channels for businesses
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
                <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary">
                 Organic Revenue Stream
                </Link>
               <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  CRO
                </Link>
              <li>
                <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  SEO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            © {currentYear} Echo Web, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
