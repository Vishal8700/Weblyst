import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Resources() {
  const resources = [
    {
      title: "Free Website Checklist",
      description:
        "Complete pre-launch checklist to ensure your website is ready for success. Includes design, functionality, SEO, and performance checks.",
      category: "Website Design",
      format: "PDF Checklist",
      downloads: "2.4K",
    },
    {
      title: "Social Media Content Calendar",
      description: "Editable Excel spreadsheet to plan and organize your social media content for the entire month.",
      category: "Social Media",
      format: "Excel Template",
      downloads: "3.1K",
    },
    {
      title: "Meta Ads Best Practices Guide",
      description:
        "Comprehensive guide with proven strategies, optimization techniques, and real-world examples for Facebook and Instagram ads.",
      category: "Advertising",
      format: "PDF Guide",
      downloads: "1.8K",
    },
    {
      title: "Brand Guidelines Template",
      description:
        "Professional template to establish consistent branding across all marketing channels and platforms.",
      category: "Branding",
      format: "Word Document",
      downloads: "1.2K",
    },
    {
      title: "SEO Checklist",
      description: "Essential on-page and technical SEO factors to boost your search rankings and visibility.",
      category: "Website Design",
      format: "PDF Checklist",
      downloads: "2.9K",
    },
    {
      title: "Video Marketing Playbook",
      description: "Step-by-step guide to creating, filming, and distributing video content that drives engagement.",
      category: "Video Marketing",
      format: "PDF Playbook",
      downloads: "1.5K",
    },
    {
      title: "Email Marketing Template",
      description: "Ready-to-customize email templates for campaigns, newsletters, and promotional content.",
      category: "Email Marketing",
      format: "HTML Templates",
      downloads: "980",
    },
    {
      title: "Customer Testimonial Form",
      description: "Professional form template to collect video and written testimonials from satisfied clients.",
      category: "Marketing",
      format: "Google Form",
      downloads: "740",
    },
    {
      title: "Competitor Analysis Spreadsheet",
      description: "Structured spreadsheet to analyze competitors and identify opportunities in your market.",
      category: "Strategy",
      format: "Excel Template",
      downloads: "1.6K",
    },
  ]

  const categories = ["All", "Website Design", "Social Media", "Advertising", "Branding", "Video Marketing"]

  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Free Resources</h1>
          <p className="text-xl text-gray-300">
            Download our collection of tools, templates, and guides to help you succeed in your digital transformation
            journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === "All" ? "bg-purple-500 text-white" : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              className="liquid-glass border border-purple-500/20 hover:border-purple-400/50 transition-all flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-300 bg-purple-500/20 px-2 py-1 rounded">
                    {resource.category}
                  </span>
                  <span className="text-xs text-gray-400">{resource.format}</span>
                </div>
                <CardTitle className="text-lg text-white">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-gray-300 text-sm mb-6 flex-grow">{resource.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                </div>
                <Button className="w-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 font-medium rounded">
                  Download Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-16 liquid-glass rounded-xl p-8 border border-purple-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Custom Resources?</h2>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Let us know and we'll create custom templates tailored to your business
            needs.
          </p>
          <Button
            asChild
            className="bg-purple-500 text-white font-medium rounded-lg px-6 py-2
                       hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
