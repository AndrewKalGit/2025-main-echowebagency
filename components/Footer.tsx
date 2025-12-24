import Link from "next/link"
import Image from "next/image"
import logo from "../public/logo.png"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-12 text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="Echo Web" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              Building revenue channels for businesses with websites that convert.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#cro" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Ongoing SEO & CRO
                </Link>
              </li>
              <li>
                <Link href="/services#hosting" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Hosting & Maintenance
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
                {/* <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary">
                  Blog
                </Link> */}
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
               <ul className="mt-5 space-y-2">
               <li>
                <a href="tel:7325957217" className="flex text-sm font-medium text-muted-foreground hover:text-primary">
                 <Phone className="mr-2 h-4 w-4"/>
                  Call
                </a>
              </li>
               <li>
                <a href="mailto:contact@echowebagency.com" className="flex text-sm font-medium text-muted-foreground hover:text-primary">
                  <Mail className="mr-2 h-4 w-4"/>  Email
                </a>
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
