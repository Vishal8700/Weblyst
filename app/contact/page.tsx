"use client"

import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { GoogleMap } from "@/components/google-map"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Mail, Phone, Send, MessageSquare, Clock, CheckCircle2 } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "website-building",
    budget: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", company: "", service: "website-building", budget: "", message: "" })
    }, 3000)
  }

  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
              Let's Build Something
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 text-center">
              Ready to transform your digital presence? Get in touch with our team to discuss your project and receive a
              free consultation.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20 text-center hover:border-purple-400/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <a href="mailto:hello@weblyst.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                hello@weblyst.com
              </a>
            </div>

            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20 text-center hover:border-purple-400/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <a href="tel:+14155551234" className="text-purple-300 hover:text-purple-200 transition-colors">
                +1 (415) 555-1234
              </a>
            </div>

            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20 text-center hover:border-purple-400/40 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="h-7 w-7 text-purple-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Live Chat</h3>
              <p className="text-purple-300">Available 24/7</p>
            </div>
          </div>

          {/* Main Contact Form */}
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="liquid-glass rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-2xl font-bold mb-2">Start Your Project</h2>
                <p className="text-gray-400 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-500 focus:border-purple-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-500 focus:border-purple-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-500 focus:border-purple-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-500 focus:border-purple-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Interest *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
                        >
                          <option value="website-building">Website Building</option>
                          <option value="social-media">Social Media Management</option>
                          <option value="meta-ads">Meta Ads & Marketing</option>
                          <option value="full-package">Full Digital Package</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
                        >
                          <option value="">Select budget range</option>
                          <option value="2k-5k">₹2,000 - ₹5,000</option>
                          <option value="5k-10k">₹5,000 - ₹10,000</option>
                          <option value="10k-25k">₹10,000 - ₹25,000</option>
                          <option value="25k-50k">₹25,000 - ₹50,000</option>
                          <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                          <option value="1L+">₹1,00,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={5}
                        className="bg-slate-800/50 border-purple-500/20 text-white placeholder:text-gray-500 focus:border-purple-400"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-500 text-white font-medium rounded-xl py-6 text-lg
                                 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="liquid-glass rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  {[
                    { step: "1", text: "We review your inquiry within 24 hours" },
                    { step: "2", text: "Schedule a free discovery call" },
                    { step: "3", text: "Receive a custom proposal" },
                    { step: "4", text: "Begin your project!" },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-xs font-bold text-purple-300 flex-shrink-0">
                        {item.step}
                      </span>
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="liquid-glass rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-lg font-bold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "24h", label: "Response Time" },
                    { value: "150+", label: "Projects Done" },
                    { value: "98%", label: "Satisfaction" },
                    { value: "4.9", label: "Rating" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-purple-500/10">
                      <div className="text-2xl font-bold text-purple-300">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <GoogleMap />

      <AppverseFooter />
    </main>
  )
}
