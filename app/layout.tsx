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
  description: "Digital Marketing Agency Specializing in SEO, Web Design, and Conversion Optimization.",
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE || "",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://echowebagency.com",
    title: "Echo Web, LLC",
    description: "Digital Marketing Agency Specializing in SEO, Web Design, and Conversion Optimization.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Echo Web, LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Echo Web, LLC",
    description: "Digital Marketing Agency Specializing in SEO, Web Design, and Conversion Optimization.",
    images: ["/og-image.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Echo Web, LLC",
  },
  other: {
    "facebook:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:locale": "en_US",
    "og:site_name": "Echo Web, LLC",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
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
