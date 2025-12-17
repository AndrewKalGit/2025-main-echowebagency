import Link from 'next/link'
import { Home, ArrowRight } from '@/components/icons'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="text-center">
        {/* <div className="mb-8 flex items-center justify-center gap-2">
          <div className="h-12 w-12 rounded-lg bg-[#2EA8F7]" />
          <span className="text-2xl font-semibold text-[#2B3238]">Echo Web</span>
        </div> */}

        <h1 className="text-9xl font-bold text-[#2EA8F7]">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-[#2B3238]">Page not found</h2>
        <p className="mx-auto mt-4 max-w-md text-lg font-medium text-[#2B3238]/70">
          Sorry, we couldn't find the page you're looking for. It may have been moved or deleted.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#2EA8F7] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2EA8F7]/90"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#2EA8F7] bg-white px-8 py-4 text-base font-semibold text-[#2EA8F7] hover:bg-[#F3F6F8]"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-sm font-medium text-[#2B3238]/70">Looking for something specific?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-sm font-medium text-[#2EA8F7] underline hover:no-underline">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-[#2EA8F7] underline hover:no-underline">
              Portfolio
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#2EA8F7] underline hover:no-underline">
              Blog
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-[#2EA8F7] underline hover:no-underline">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
