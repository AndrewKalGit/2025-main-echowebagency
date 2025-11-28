import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"
import { LeadMagnetModal } from "@/components/LeadMagnetModal"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Echo Web, LLC",
  description: "Your Organic Online Revenue Stream",
  generator: "v0.app",
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE || "",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NMX2LNDKC1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NMX2LNDKC1');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        <LeadMagnetModal />
      </body>
    </html>
  )
}
