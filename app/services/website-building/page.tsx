import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WebsiteBuilding() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Professional Website Building</h1>
          <p className="text-xl text-gray-300 text-center mb-8">
            Beautiful, fast, and conversion-focused websites designed to help your business thrive online.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="liquid-glass rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">What We Deliver</h3>
              <ul className="space-y-3">
                {[
                  "Custom, responsive design",
                  "Mobile-first development",
                  "SEO optimization",
                  "Fast loading performance",
                  "Contact & inquiry forms",
                  "Analytics integration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="liquid-glass rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Process</h3>
              <ol className="space-y-3">
                {["Discovery & Strategy", "Design Concepts", "Development", "Testing & QA", "Launch & Support"].map(
                  (step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-purple-500 text-white font-medium rounded-lg px-8 py-3 text-lg
                         hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Link href="/contact">Start Your Website Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
