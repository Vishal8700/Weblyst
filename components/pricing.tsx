"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const PRICING_PLANS = [
  {
    name: "Startup Package",
    price: "$1,999",
    description: "Perfect for small businesses just starting out",
    features: [
      "5-page professional website",
      "Basic SEO setup",
      "Social media profile setup",
      "Initial content creation",
      "3 months support",
    ],
  },
  {
    name: "Growth Package",
    price: "$4,999",
    description: "Ideal for growing businesses ready to scale",
    features: [
      "10-page custom website",
      "Advanced SEO optimization",
      "Social media management (2 platforms)",
      "Meta ads campaign setup",
      "Monthly analytics reports",
      "6 months support",
    ],
    featured: true,
  },
  {
    name: "Enterprise Package",
    price: "Custom",
    description: "Full-service solution for established businesses",
    features: [
      "Unlimited page website",
      "Full digital marketing suite",
      "Social media management (all platforms)",
      "Dedicated ads manager",
      "Weekly performance reviews",
      "Custom integrations",
      "12 months support",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="text-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-300">
            Choose the perfect package for your business needs. All plans include our expertise and dedication to your
            success.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`liquid-glass rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.featured ? "border-purple-400/50 lg:scale-105 liquid-glass-enhanced" : "border-purple-500/20"
              }`}
            >
              <CardHeader className="space-y-3 pb-4">
                <div className="text-lg font-semibold text-purple-300">{plan.name}</div>
                <div className="flex items-end gap-2 text-white">
                  <div className="text-3xl font-bold tracking-tight">{plan.price}</div>
                  {plan.price !== "Custom" && <span className="text-sm text-gray-400">/project</span>}
                </div>
                <p className="text-sm text-gray-300">{plan.description}</p>
                <Button
                  asChild
                  className={`w-full rounded-lg py-2 font-medium transition-all ${
                    plan.featured
                      ? "bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
                      : "bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                  }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardHeader>
              <CardContent className="pt-0 flex-grow">
                <ul className="grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
