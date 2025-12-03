"use client"

import { MapPin, Clock, Phone } from "lucide-react"

export function GoogleMap() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">Find Us</h2>
          <p className="text-lg text-gray-300">Visit our office or reach out through any of our contact channels.</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Office Address</h3>
                  <p className="text-gray-300 text-sm">
                    123 Digital Avenue
                    <br />
                    Tech District, San Francisco
                    <br />
                    CA 94102, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                  <p className="text-gray-300 text-sm">
                    Mon - Fri: 9:00 AM - 6:00 PM
                    <br />
                    Sat: 10:00 AM - 2:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="liquid-glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Contact</h3>
                  <p className="text-gray-300 text-sm">
                    <a href="tel:+14155551234" className="hover:text-purple-300 transition-colors">
                      +1 (415) 555-1234
                    </a>
                    <br />
                    <a href="mailto:hello@weblyst.com" className="hover:text-purple-300 transition-colors">
                      hello@weblyst.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="lg:col-span-2">
            <div className="liquid-glass rounded-2xl border border-purple-500/20 overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977097455024!2d-122.41941768468192!3d37.77492977975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Weblyst Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
