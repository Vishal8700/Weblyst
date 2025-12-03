import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "10 Essential Elements Every Business Website Needs",
      excerpt: "Learn the key features that make a website effective for conversions and user engagement.",
      category: "Website Design",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      slug: "essential-website-elements",
    },
    {
      id: 2,
      title: "Social Media Strategy 2024: What's Working Right Now",
      excerpt: "Discover the latest trends and strategies that are driving engagement and growth on social platforms.",
      category: "Social Media",
      author: "Emma Rodriguez",
      date: "Jan 12, 2024",
      readTime: "7 min read",
      slug: "social-media-strategy-2024",
    },
    {
      id: 3,
      title: "Meta Ads ROI: How to Optimize Your Facebook Ad Spend",
      excerpt: "Practical tips to maximize your return on investment with Meta advertising campaigns.",
      category: "Advertising",
      author: "David Park",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      slug: "meta-ads-roi-optimization",
    },
    {
      id: 4,
      title: "The Ultimate Guide to Building Your Brand on Instagram",
      excerpt: "Step-by-step approach to creating a cohesive and engaging Instagram presence.",
      category: "Social Media",
      author: "Emma Rodriguez",
      date: "Jan 8, 2024",
      readTime: "8 min read",
      slug: "instagram-brand-guide",
    },
    {
      id: 5,
      title: "Website Performance Optimization: Speed = Conversions",
      excerpt: "Why page speed matters and how to improve your website's performance metrics.",
      category: "Website Design",
      author: "Michael Chen",
      date: "Jan 5, 2024",
      readTime: "5 min read",
      slug: "website-performance-optimization",
    },
    {
      id: 6,
      title: "Content Marketing for Small Businesses: Where to Start",
      excerpt: "A beginner's guide to creating content that attracts and retains customers.",
      category: "Marketing",
      author: "Sarah Johnson",
      date: "Jan 1, 2024",
      readTime: "6 min read",
      slug: "content-marketing-guide",
    },
  ]

  const categories = [
    { name: "Website Design", count: 8 },
    { name: "Social Media", count: 12 },
    { name: "Advertising", count: 10 },
    { name: "Marketing", count: 15 },
  ]

  const resources = [
    {
      title: "Free Website Checklist",
      description: "Download our complete checklist to ensure your website has everything needed for success.",
      icon: "📋",
    },
    {
      title: "Social Media Content Calendar",
      description: "Editable monthly calendar to help you plan and organize your social media content.",
      icon: "📅",
    },
    {
      title: "Meta Ads Best Practices Guide",
      description: "Comprehensive guide with proven strategies and optimization techniques.",
      icon: "📊",
    },
    {
      title: "Brand Guidelines Template",
      description: "Template to help you establish consistent branding across all platforms.",
      icon: "🎨",
    },
    {
      title: "SEO Checklist",
      description: "Essential on-page and technical SEO factors to boost your search rankings.",
      icon: "🔍",
    },
    {
      title: "Video Marketing Playbook",
      description: "Step-by-step guide to creating and distributing video content effectively.",
      icon: "🎬",
    },
  ]

  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <section className="container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl text-gray-300">
            Expert insights, tips, and resources to help your business succeed online. Learn from our team's years of
            digital marketing experience.
          </p>
        </div>

        {/* Featured Article */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="liquid-glass rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all">
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-purple-500/20 border-purple-400/50 text-purple-300">
                  Featured
                </Badge>
                <Badge variant="outline" className="bg-blue-500/20 border-blue-400/50 text-blue-300">
                  Website Design
                </Badge>
              </div>
              <h2 className="text-3xl font-bold mb-4">{articles[0].title}</h2>
              <p className="text-gray-300 mb-6">{articles[0].excerpt}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{articles[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{articles[0].date}</span>
                </div>
                <span>{articles[0].readTime}</span>
              </div>
              <Link
                href={`/blog/${articles[0].slug}`}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium"
              >
                Read Article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {/* Main Articles */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Latest Articles</h3>
            <div className="space-y-6">
              {articles.slice(1).map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <Card className="liquid-glass border border-purple-500/20 hover:border-purple-400/50 transition-all cursor-pointer">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <Badge
                            variant="outline"
                            className="bg-purple-500/20 border-purple-400/50 text-purple-300 mb-3"
                          >
                            {article.category}
                          </Badge>
                          <CardTitle className="text-xl text-white hover:text-purple-300 transition-colors">
                            {article.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{article.excerpt}</p>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <span>{article.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/blog?category=${cat.name.toLowerCase()}`}
                    className="flex items-center justify-between p-2 rounded hover:bg-purple-500/10 transition-colors"
                  >
                    <span className="text-gray-300 hover:text-purple-300">{cat.name}</span>
                    <span className="text-xs bg-purple-500/20 px-2 py-1 rounded text-purple-300">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest digital marketing insights delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-slate-800 border border-purple-500/20 rounded px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-purple-400/50 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium rounded px-3 py-2 text-sm transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Free Resources</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Download our free tools and templates to accelerate your digital transformation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="liquid-glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{resource.description}</p>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center gap-1">
                  Download <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
