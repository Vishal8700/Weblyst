import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MetaAds() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Meta Ads & Campaigns</h1>
          <p className="text-xl text-gray-300 text-center mb-8">
            Targeted advertising campaigns that reach your ideal customers and deliver measurable ROI.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="liquid-glass rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Campaign Management</h3>
              <ul className="space-y-3">
                {[
                  "Audience research & targeting",
                  "Creative design & copywriting",
                  "Campaign setup & optimization",
                  "A/B testing",
                  "Daily monitoring & adjustments",
                  "ROI tracking & reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="liquid-glass rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">What We Optimize For</h3>
              <ul className="space-y-3">
                {[
                  "Lead generation",
                  "E-commerce sales",
                  "Website traffic",
                  "App downloads",
                  "Brand awareness",
                  "Customer retention",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-purple-500 text-white font-medium rounded-lg px-8 py-3 text-lg
                         hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Link href="/contact">Start Your Ad Campaign</Link>
            </Button>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
