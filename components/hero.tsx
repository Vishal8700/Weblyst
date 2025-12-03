"use client"

import { Button } from "@/components/ui/button"
import LazyVideo from "./lazy-video"
import Image from "next/image"

export function Hero() {
 

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-16 sm:py-24 md:py-32">
    
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
            <span className="block">Your Complete</span>
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              Digital Growth Partner
            </span>
            <span className="block">for Modern Businesses</span>
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-gray-300">
            From stunning websites to engaging social media and targeted ads—we handle everything your business needs to
            succeed online.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              asChild
              className="bg-purple-500 text-white font-medium rounded-lg px-8 py-3 text-base
                         hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]
                         transition-all"
            >
              <a href="/contact">Start Your Project</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-purple-400/30 text-white font-medium rounded-lg px-8 py-3 text-base
                         hover:bg-purple-500/10 transition-all bg-transparent"
            >
              <a href="/portfolio">View Our Work</a>
            </Button>
          </div>

          {/* Feature highlight cards */}
          <div className="mt-16 grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {[
              { icon: "/icons/web-link.png", title: "Custom Websites", desc: "Fast, responsive, and conversion-focused" },
              { icon: "/icons/social-media.png", title: "Social Media", desc: "Content creation & community management" },
              { icon: "/icons/meta.png", title: "Meta Ads", desc: "Targeted campaigns that drive ROI" },
            ].map((feature, i) => (
              <div key={i} className="liquid-glass rounded-xl p-6 border border-purple-500/20 text-center flex flex-col items-center">
                <div className="mb-3 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-enhanced border border-purple-400/30 flex items-center justify-center backdrop-blur-xl">
                    <Image src={feature.icon} alt={feature.title} width={40} height={40} className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={videoSrc ?? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"}
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
          
          </div>
          
        </div>
      </div>
    </div>
  )
}

const phoneData = [
  {
    title: "Conversions",
    sub: "Turn clicks into paying customers.",
    tone: "results",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc: "/videos/metaads.mp4",
  },
  {
    title: "Speed",
    sub: "Launch in days, not weeks.",
    tone: "speed",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
    videoSrc: "/videos/seo.mp4",
  },
  {
    title: "Social-Ready",
    sub: "Made for IG, TikTok, and Meta.",
    tone: "social",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc: "/videos/grow.mp4",
  },
  {
    title: "Standout",
    sub: "Be the product no one scrolls past.",
    tone: "standout",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
    videoSrc: "/videos/online.mp4",
  },
  {
    title: "Premium",
    sub: "Look like the market leader.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
    videoSrc: "/videos/events.mp4",
  },
]
