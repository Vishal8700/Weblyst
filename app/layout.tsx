import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://theskitbit.com"),
  title: {
    default: "Weblyst | Digital Marketing & Web Development Solutions",
    template: "%s | Weblyst",
  },
  description:
    "Weblyst provides professional digital marketing and web development solutions. Fast, SEO-friendly websites, social media management, and Meta ads services to grow your business online.",
  keywords: [
    "digital marketing",
    "web development",
    "website building",
    "social media management",
    "Meta ads",
    "Facebook ads",
    "Instagram marketing",
    "SEO services",
    "fast websites",
    "responsive web design",
    "digital solutions",
    "online marketing",
  ],
  authors: [{ name: "Weblyst" }],
  creator: "Weblyst",
  publisher: "Weblyst",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theskitbit.com",
    title: "Weblyst | Digital Marketing & Web Development Solutions",
    description:
      "Professional digital marketing and web development solutions. Fast, SEO-friendly websites, social media management, and Meta ads services.",
    siteName: "Weblyst",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weblyst | Digital Marketing & Web Development Solutions",
    description:
      "Professional digital marketing and web development solutions. Fast, SEO-friendly websites, social media management, and Meta ads services.",
    creator: "@theskitbit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Favicon */}
        <link rel="icon" href="/icons/skitbit-white.svg" type="image/svg+xml" />

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
        <Suspense fallback={null}>
          <div className="fixed inset-0 z-0 bg-black">
            <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
          </div>
          <div className="relative z-10">{children}</div>
        </Suspense>

        {/* Vercel Speed Insights and Analytics components */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
