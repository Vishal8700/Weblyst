"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Zap, Globe, Users, BarChart3, Mail, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)

  const services = [
    {
      href: "/services/website-building",
      label: "Website Building",
      icon: Globe,
      description: "Professional websites that convert",
    },
    {
      href: "/services/social-media",
      label: "Social Media Management",
      icon: Users,
      description: "Engage your audience effectively",
    },
    {
      href: "/services/meta-ads",
      label: "Meta Ads & Campaigns",
      icon: BarChart3,
      description: "Targeted ads that drive results",
    },
  ]

  const links = [
    { href: "/portfolio", label: "Portfolio", icon: Zap },
    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Mail },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icons/skitbit-white.svg" alt="Weblyst logo" width={20} height={20} className="w-5 h-5" />
            <span className="font-bold tracking-wide text-white text-lg">Weblyst</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent text-white/90 hover:text-purple-300 data-[state=open]:text-purple-300
                               hover:bg-transparent focus:bg-transparent
                               data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent
                               data-[active=true]:bg-transparent"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-2 p-4 bg-slate-950/98 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl">
                      {services.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className="group relative flex items-start gap-3 rounded-xl p-3 transition-all
                                       hover:bg-purple-500/10 hover:ring-1 hover:ring-purple-400/60
                                       hover:shadow-[0_0_0_1px_rgba(168,85,247,0.25),0_0_20px_rgba(168,85,247,0.15)]
                                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 block"
                          >
                            <service.icon className="h-5 w-5 text-purple-400 mt-0.5 shrink-0 group-hover:text-purple-300" />
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-purple-300">
                                {service.label}
                              </div>
                              <p className="text-xs text-gray-400 mt-0.5">{service.description}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-purple-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-purple-500 text-white font-medium rounded-lg px-6 py-2.5
                         hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]
                         transition-all"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-500/20 bg-slate-900/80 text-purple-300 hover:bg-slate-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-purple-500/20 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-purple-500/20">
                  <Image src="/icons/skitbit-white.svg" alt="Weblyst logo" width={24} height={24} className="w-6 h-6" />
                  <span className="font-bold tracking-wide text-white text-lg">Weblyst</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 hover:bg-purple-500/10 hover:text-purple-300 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-5 h-5 text-purple-400">
                          <Zap className="h-4 w-4" />
                        </span>
                        <span className="text-sm">Services</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-purple-400 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col bg-purple-500/5 border-l-2 border-purple-400/30 ml-4">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 pl-8 pr-4 py-2.5 hover:bg-purple-500/10 hover:text-purple-300 transition-colors"
                          >
                            <service.icon className="h-4 w-4 text-purple-400/70" />
                            <span className="text-sm">{service.label}</span>
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-purple-500/10 hover:text-purple-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-purple-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="mt-auto border-t border-purple-500/20 p-4">
                  <Button
                    asChild
                    className="w-full bg-purple-500 text-white font-medium rounded-lg px-6 py-2.5
                               hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02]
                               transition-all"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
