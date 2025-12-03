"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Jessica Martinez",
    role: "CEO, TechStart Inc.",
    image: "/professional-woman-headshot.png",
    content:
      "Weblyst transformed our entire digital presence. Our website now converts 3x better and our social media engagement has skyrocketed. Best investment we've made!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder, GreenLeaf Organics",
    image: "/professional-man-headshot.png",
    content:
      "The Meta Ads campaign Weblyst ran for us generated incredible ROI. We saw a 400% increase in leads within the first month. Highly recommend their team!",
    rating: 5,
  },
  {
    name: "Sarah Kim",
    role: "Marketing Director, StyleHub",
    image: "/asian-woman-professional-headshot.png",
    content:
      "Working with Weblyst has been a game-changer. Their social media management helped us build a community of over 100K engaged followers in just 6 months.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Owner, Roberts & Co. Law",
    image: "/professional-lawyer-man-headshot.jpg",
    content:
      "Professional, responsive, and incredibly talented. Weblyst built us a website that perfectly represents our brand and has significantly increased client inquiries.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-purple-500/20 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-purple-500/20" />

            <div className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full border-2 border-purple-500/50"
                />
                <div className="text-left">
                  <p className="font-semibold text-white">{testimonials[current].name}</p>
                  <p className="text-sm text-purple-300">{testimonials[current].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-purple-500/30 bg-transparent text-white hover:bg-purple-500/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrent(i)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? "bg-purple-400 w-6" : "bg-purple-500/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-purple-500/30 bg-transparent text-white hover:bg-purple-500/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
