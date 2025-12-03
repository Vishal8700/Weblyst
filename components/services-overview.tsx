"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: "/icons/web-link.png",
    title: "Website Building",
    description:
      "Custom, high-performance websites that convert visitors into customers. Mobile-first design with SEO built-in.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
    href: "/services/website-building",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: "/icons/social-media.png",
    title: "Social Media Management",
    description:
      "Strategic content creation and community management to grow your brand presence across all platforms.",
    features: ["Content Creation", "Community Management", "Analytics", "Growth Strategy"],
    href: "/services/social-media",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "/icons/meta.png",
    title: "Meta Ads & Marketing",
    description: "Data-driven advertising campaigns on Facebook and Instagram that deliver measurable ROI.",
    features: ["Audience Targeting", "Creative Design", "A/B Testing", "Performance Reports"],
    href: "/services/meta-ads",
    gradient: "from-orange-500 to-red-500",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">Our Services</h2>
          <p className="text-lg text-gray-300">
            Comprehensive digital solutions tailored to help your business thrive in the online world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className="group liquid-glass rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:translate-y-[-8px] flex flex-col"
              >
                <div
                  className={`w-16 h-16 rounded-2xl liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg backdrop-blur-xl`}
                >
                  <Image src={service.icon} alt={service.title} width={32} height={32} className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-400/30 text-white hover:bg-purple-500/20 bg-transparent group/btn"
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
