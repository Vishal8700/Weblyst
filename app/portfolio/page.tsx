"use client"

import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ExternalLink, TrendingUp, Users, DollarSign, Eye } from "lucide-react"
import Link from "next/link"

const categories = ["All", "Website Building", "Social Media", "Meta Ads"]

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Website Building",
    client: "TechStart Inc.",
    image: "/modern-ecommerce-mockup.png",
    description: "Full-featured online store with payment integration and inventory management",
    results: [
      { icon: TrendingUp, value: "250%", label: "Sales Increase" },
      { icon: Users, value: "15K", label: "Monthly Visitors" },
    ],
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Fashion Brand Campaign",
    category: "Social Media",
    client: "StyleHub",
    image: "/fashion-instagram-social-media-campaign.jpg",
    description: "Managed social presence across Instagram, TikTok, and Pinterest with viral content strategy",
    results: [
      { icon: Users, value: "500K+", label: "Followers Gained" },
      { icon: Eye, value: "10M", label: "Impressions" },
    ],
    tags: ["Instagram", "TikTok", "Content Strategy"],
  },
  {
    title: "SaaS Lead Generation",
    category: "Meta Ads",
    client: "CloudNine Software",
    image: "/b2b-saas-marketing-dashboard.jpg",
    description: "Targeted B2B advertising campaign focusing on qualified lead generation",
    results: [
      { icon: DollarSign, value: "$5", label: "Cost Per Lead" },
      { icon: TrendingUp, value: "400%", label: "ROI" },
    ],
    tags: ["Facebook Ads", "LinkedIn", "B2B"],
  },
  {
    title: "Restaurant Chain Website",
    category: "Website Building",
    client: "GreenLeaf Organics",
    image: "/restaurant-website-with-online-ordering.jpg",
    description: "Multi-location website with online ordering and reservation system",
    results: [
      { icon: TrendingUp, value: "40%", label: "More Reservations" },
      { icon: Users, value: "8K", label: "Monthly Orders" },
    ],
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Startup Launch Campaign",
    category: "Social Media",
    client: "FinServe App",
    image: "/startup-launch-social-media-campaign-fintech.jpg",
    description: "Launch campaign across Instagram & LinkedIn building brand awareness",
    results: [
      { icon: Users, value: "25K", label: "Community Members" },
      { icon: Eye, value: "5M", label: "Reach" },
    ],
    tags: ["LinkedIn", "Instagram", "Launch Strategy"],
  },
  {
    title: "Real Estate Ads",
    category: "Meta Ads",
    client: "Roberts & Co. Realty",
    image: "/real-estate-facebook-ads-campaign.jpg",
    description: "Property showcase with targeted buyer audience and lead nurturing",
    results: [
      { icon: Users, value: "60", label: "Leads/Month" },
      { icon: DollarSign, value: "3x", label: "ROI" },
    ],
    tags: ["Facebook Ads", "Real Estate", "Retargeting"],
  },
  {
    title: "Healthcare Portal",
    category: "Website Building",
    client: "MedConnect",
    image: "/healthcare-patient-portal-website.jpg",
    description: "Secure patient portal with appointment scheduling and telehealth integration",
    results: [
      { icon: Users, value: "5K", label: "Active Patients" },
      { icon: TrendingUp, value: "60%", label: "Booking Rate" },
    ],
    tags: ["HIPAA", "React", "Telehealth"],
  },
  {
    title: "Fitness Influencer Growth",
    category: "Social Media",
    client: "FitLife Studio",
    image: "/fitness-influencer-instagram-content.jpg",
    description: "Content strategy and community management for fitness brand",
    results: [
      { icon: Users, value: "200K", label: "Followers" },
      { icon: Eye, value: "2M", label: "Monthly Views" },
    ],
    tags: ["Instagram", "YouTube", "TikTok"],
  },
  {
    title: "E-Learning Ads Campaign",
    category: "Meta Ads",
    client: "SkillUp Academy",
    image: "/online-course-facebook-ads-education.jpg",
    description: "Course enrollment campaign with video ads and lookalike audiences",
    results: [
      { icon: Users, value: "2K", label: "Enrollments" },
      { icon: DollarSign, value: "$12", label: "Cost Per Signup" },
    ],
    tags: ["Facebook Ads", "Video Ads", "Education"],
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Work</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore the successful projects we've delivered for businesses across various industries. Real results,
              real growth.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project) => (
              <Card
                key={project.title}
                className="liquid-glass border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <Button size="sm" className="bg-purple-500 text-white hover:bg-purple-600">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-purple-300 mb-3">{project.client}</p>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Results */}
                  <div className="flex gap-4 mb-4">
                    {project.results.map((result, i) => {
                      const Icon = result.icon
                      return (
                        <div key={i} className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-purple-400" />
                          <div>
                            <span className="text-lg font-bold text-white">{result.value}</span>
                            <span className="text-xs text-gray-400 block">{result.label}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto liquid-glass rounded-3xl p-8 md:p-12 border border-purple-400/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want Results Like These?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom strategy to achieve your business goals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-purple-500 text-white font-medium rounded-xl px-8 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </main>
  )
}
