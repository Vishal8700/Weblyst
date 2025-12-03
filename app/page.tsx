import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ClientsLogos } from "@/components/clients-logos"
import { ServicesOverview } from "@/components/services-overview"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { AppverseFooter } from "@/components/appverse-footer"

export const dynamic = "force-static"

export default function Page() {
  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <ClientsLogos />
        <ServicesOverview />
        <StatsSection />
        <ProcessSection />
        <Features />
        <Testimonials />
        {/* <Pricing /> */}
        <FAQSection />
        <CTASection />
        <AppverseFooter />
      </main>
    </>
  )
}
