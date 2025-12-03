"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 " />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto liquid-glass rounded-3xl p-8 md:p-12 border border-purple-400/30 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free consultation today and get a custom strategy tailored to your business goals. No commitment
            required - just actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-purple-500 text-white font-medium rounded-xl px-8 py-6 text-lg
                         hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]
                         transition-all group"
            >
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400/30 text-white font-medium rounded-xl px-8 py-6 text-lg
                         hover:bg-purple-500/10 transition-all bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6">Response within 24 hours | No spam, we promise</p>
        </div>
      </div>
    </section>
  )
}
