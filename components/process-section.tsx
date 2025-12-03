"use client"

import { Lightbulb, Palette, Code, Rocket, MessageSquare, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We start by understanding your business goals, target audience, and vision for success.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Our team crafts a tailored digital strategy aligned with your objectives and budget.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "We design stunning visuals and compelling content that represents your brand perfectly.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Our developers build fast, responsive, and scalable solutions using modern technologies.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    description: "We launch your project and continuously optimize for maximum performance and results.",
  },
  {
    icon: BarChart3,
    title: "Monitor & Grow",
    description: "Ongoing analytics and refinements ensure sustained growth and ROI for your business.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">Our Proven Process</h2>
          <p className="text-lg text-gray-300">
            A streamlined approach that delivers results consistently, every single time.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="group relative liquid-glass rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
