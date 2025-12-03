import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Users, Target, Zap, Award } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Weblyst - Your Digital Growth Partner",
  description:
    "Learn about Weblyst's mission to help modern businesses thrive online through professional website building, social media management, and Meta ads services.",
  openGraph: {
    title: "About Us | Weblyst - Your Digital Growth Partner",
    description:
      "Learn about Weblyst's mission to help modern businesses thrive online through professional website building, social media management, and Meta ads services.",
  },
}

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Weblyst",
    url: "https://theskitbit.com",
    logo: "https://theskitbit.com/icons/skitbit-white.svg",
    description:
      "Weblyst provides comprehensive digital solutions including website building, social media management, and Meta ads services for modern businesses.",
    sameAs: [
      "https://www.instagram.com/theskitbit",
      "https://twitter.com/theskitbit",
      "https://www.youtube.com/@skitbitinternational",
    ],
  }

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business growth and ROI.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Quick turnaround times without compromising on quality or attention to detail.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Premium design and development standards in everything we deliver.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <main className="min-h-screen text-white">
        <SiteHeader />

        {/* Hero Section */}
        <section className="relative py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 flex items-center justify-center gap-2">
                <Image src="/icons/skitbit-white.svg" alt="Weblyst logo" width={32} height={32} className="w-8 h-8" />
                <p className="text-sm uppercase tracking-[0.25em] text-purple-300/80">About Weblyst</p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
                <span className="block">Your Complete</span>
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Growth Partner
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We help modern businesses thrive online through professional website building, strategic social media
                management, and data-driven Meta advertising campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-purple-500/20">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Our Mission</h2>
                <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                  At Weblyst, we believe every business deserves a powerful digital presence. Our mission is to provide
                  comprehensive, affordable, and effective digital solutions that help businesses of all sizes compete
                  and succeed in the online world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Values</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <div
                      key={index}
                      className="liquid-glass rounded-2xl p-6 border border-purple-500/20 text-center hover:border-purple-400/40 transition-all"
                    >
                      <div className="w-16 h-16 rounded-2xl liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-xl">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-400">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What We Do</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="liquid-glass rounded-2xl p-8 border border-purple-500/20">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center mb-4 backdrop-blur-xl">
                    <Image src="/icons/web-link.png" alt="Website Building" width={32} height={32} className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Website Building</h3>
                  <p className="text-gray-300">
                    Custom, high-performance websites designed to convert visitors into customers. Mobile-first, SEO-optimized,
                    and built for speed.
                  </p>
                </div>

                <div className="liquid-glass rounded-2xl p-8 border border-purple-500/20">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center mb-4 backdrop-blur-xl">
                    <Image src="/icons/social-media.png" alt="Social Media" width={32} height={32} className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Social Media</h3>
                  <p className="text-gray-300">
                    Strategic content creation and community management to grow your brand presence across Instagram, TikTok,
                    and all major platforms.
                  </p>
                </div>

                <div className="liquid-glass rounded-2xl p-8 border border-purple-500/20">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center mb-4 backdrop-blur-xl">
                    <Image src="/icons/meta.png" alt="Meta Ads" width={32} height={32} className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Meta Ads</h3>
                  <p className="text-gray-300">
                    Data-driven advertising campaigns on Facebook and Instagram that deliver measurable ROI and qualified
                    leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Meet Our Leadership</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* CEO */}
                <div className="liquid-glass rounded-2xl p-8 border border-purple-500/20 text-center hover:border-purple-400/40 transition-all">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-purple-500/30">
                    <Image
                      src="/professional-man-headshot.png"
                      alt="CEO"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">John Doe</h3>
                  <p className="text-purple-400 mb-4">Chief Executive Officer</p>
                  <p className="text-sm text-gray-400 mb-6">
                    Leading Weblyst's vision to empower businesses through innovative digital solutions.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="mailto:ceo@weblyst.com"
                      className="w-10 h-10 rounded-full liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center hover:border-purple-400/60 transition-all"
                      aria-label="Email CEO"
                    >
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center hover:border-purple-400/60 transition-all"
                      aria-label="CEO LinkedIn"
                    >
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* CTO */}
                <div className="liquid-glass rounded-2xl p-8 border border-purple-500/20 text-center hover:border-purple-400/40 transition-all">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-purple-500/30">
                    <Image
                      src="/professional-woman-headshot.png"
                      alt="CTO"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Jane Smith</h3>
                  <p className="text-purple-400 mb-4">Chief Technology Officer</p>
                  <p className="text-sm text-gray-400 mb-6">
                    Driving technical excellence and innovation across all our digital solutions.
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="mailto:cto@weblyst.com"
                      className="w-10 h-10 rounded-full liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center hover:border-purple-400/60 transition-all"
                      aria-label="Email CTO"
                    >
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/janesmith"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center hover:border-purple-400/60 transition-all"
                      aria-label="CTO LinkedIn"
                    >
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's work together to transform your digital presence and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-purple-500 text-white font-medium rounded-lg px-8 py-3 text-base
                             hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]
                             transition-all"
                >
                  <a href="/contact">Get Started</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-400/30 text-white font-medium rounded-lg px-8 py-3 text-base
                             hover:bg-purple-500/10 transition-all bg-transparent"
                >
                  <a href="/portfolio">View Our Work</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <AppverseFooter />
      </main>
    </>
  )
}
