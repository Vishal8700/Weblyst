import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SocialMedia() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Social Media Management</h1>
          <p className="text-xl text-gray-300 text-center mb-8">
            Strategic social media management that builds engagement, grows your audience, and strengthens your brand.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="liquid-glass rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Services</h3>
              <ul className="space-y-3">
                {[
                  "Content strategy & planning",
                  "Daily content creation",
                  "Community management",
                  "Influencer collaboration",
                  "Performance analytics",
                  "Trend monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="liquid-glass rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Platforms We Manage</h3>
              <div className="space-y-2">
                {["Instagram", "Facebook", "LinkedIn", "TikTok", "Twitter/X", "YouTube"].map((platform) => (
                  <div key={platform} className="flex items-center gap-2 p-2 bg-purple-500/10 rounded">
                    <span className="text-purple-400">●</span>
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-purple-500 text-white font-medium rounded-lg px-8 py-3 text-lg
                         hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Link href="/contact">Grow Your Social Presence</Link>
            </Button>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
