"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Users, Zap, Target } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Website Building",
      description: "Professional, high-converting websites tailored to your business needs",
      icon: Zap,
      benefits: ["Mobile-responsive design", "SEO optimized", "Fast loading speeds", "Easy to maintain"],
    },
    {
      title: "Social Media Management",
      description: "Strategic content and community management to grow your presence",
      icon: Users,
      benefits: ["Content strategy", "Daily posting", "Engagement tracking", "Community growth"],
    },
    {
      title: "Meta Ads Campaigns",
      description: "Targeted advertising campaigns that drive results and ROI",
      icon: Target,
      benefits: ["Strategic targeting", "Creative design", "Performance tracking", "Continuous optimization"],
    },
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">Why Choose Weblyst</h2>
        <p className="text-lg text-gray-300">
          We combine expertise, creativity, and data-driven strategies to deliver exceptional digital solutions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.title} className="liquid-glass border border-purple-500/20">
              <CardHeader>
                <Icon className="h-8 w-8 text-purple-400 mb-3" />
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
