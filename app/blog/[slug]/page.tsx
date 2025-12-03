import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"

export default function BlogArticle({ params }: { params: { slug: string } }) {
  // This is a template - in a real app, you'd fetch from a CMS or database
  const article = {
    title: "10 Essential Elements Every Business Website Needs",
    author: "Sarah Johnson",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "Website Design",
    content: `
      <p>In today's digital landscape, your website is often the first impression potential customers have of your business. But not all websites are created equal. To truly stand out and drive conversions, your site needs certain essential elements.</p>

      <h2>1. Clear Value Proposition</h2>
      <p>Visitors should immediately understand what your business does and why they should care. Your value proposition should be prominently displayed above the fold, ideally in a compelling headline and subheading.</p>

      <h2>2. Mobile Responsiveness</h2>
      <p>With over 60% of web traffic coming from mobile devices, your website must look and function perfectly on all screen sizes. This isn't optional—it's essential for both user experience and SEO.</p>

      <h2>3. Fast Loading Speed</h2>
      <p>Studies show that 40% of visitors will leave a website if it takes more than 3 seconds to load. Optimize images, leverage caching, and use a CDN to ensure lightning-fast performance.</p>

      <h2>4. Clear Call-to-Action (CTA)</h2>
      <p>Every page should have a clear, compelling call-to-action that guides visitors toward your desired conversion goal. Use contrasting colors and compelling copy.</p>

      <h2>5. Professional Design</h2>
      <p>Your design should reflect your brand identity and build trust with visitors. Consistent typography, color scheme, and layout make a huge difference.</p>

      <h2>6. Easy Navigation</h2>
      <p>Visitors should be able to find what they're looking for in just a few clicks. Keep your menu simple and organize content logically.</p>

      <h2>7. Contact Information</h2>
      <p>Make it easy for interested prospects to reach you. Include multiple contact options: email, phone, contact form, or chat.</p>

      <h2>8. Trust Signals</h2>
      <p>Include testimonials, case studies, client logos, and security badges to build credibility and trust with potential customers.</p>

      <h2>9. Quality Content</h2>
      <p>Your website copy should clearly communicate your value and benefits. Use short paragraphs, bullet points, and engaging language.</p>

      <h2>10. SEO Optimization</h2>
      <p>Implement proper title tags, meta descriptions, header tags, and keyword optimization to improve your search visibility.</p>

      <p>These 10 elements work together to create a website that not only looks great but actually performs and converts visitors into customers. Ready to audit your website? Download our free checklist below.</p>
    `,
    relatedArticles: [
      { title: "Website Performance Optimization: Speed = Conversions", slug: "website-performance-optimization" },
      { title: "Social Media Strategy 2024: What's Working Right Now", slug: "social-media-strategy-2024" },
      { title: "The Ultimate Guide to Building Your Brand on Instagram", slug: "instagram-brand-guide" },
    ],
  }

  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <article className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <div className="inline-block bg-purple-500/20 border border-purple-400/50 text-purple-300 px-3 py-1 rounded text-sm">
              {article.category}
            </div>
          </div>

          {/* Article Content */}
          <div className="liquid-glass rounded-xl p-8 border border-purple-500/20 mb-12 prose prose-invert max-w-none">
            <div className="space-y-4 text-gray-300">
              {article.content.split("<h2>").map((section, i) => {
                if (i === 0) {
                  return <div key={i} dangerouslySetInnerHTML={{ __html: section }} />
                }
                return (
                  <div key={i}>
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{"<h2>" + section.split("</h2>")[0]}</h2>
                    <div dangerouslySetInnerHTML={{ __html: section.split("</h2>")[1] }} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="liquid-glass rounded-xl p-8 border border-purple-500/20 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your website?</h3>
            <p className="text-gray-300 mb-6">
              Let our team help you implement these elements and more to drive real results.
            </p>
            <Button
              asChild
              className="bg-purple-500 text-white font-medium rounded-lg px-8 py-3
                         hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>

          {/* Related Articles */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid gap-4">
              {article.relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="liquid-glass rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/50 transition-all group"
                >
                  <h4 className="font-semibold group-hover:text-purple-300 transition-colors">{related.title}</h4>
                  <div className="flex items-center gap-2 text-purple-400 text-sm mt-2">
                    Read more <span>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <AppverseFooter />
    </main>
  )
}
