"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 2-4 weeks, depending on complexity. Simple landing pages can be done in as little as 1 week, while larger e-commerce sites may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What's included in your social media management?",
    answer:
      "Our social media packages include content strategy, daily posting, community management, engagement monitoring, monthly analytics reports, and performance optimization. We handle everything from content creation to audience growth strategies.",
  },
  {
    question: "How much should I budget for Meta Ads?",
    answer:
      "We recommend starting with a minimum ad spend of 500-1000 INR /month for testing. Our management fee is separate from ad spend. During our consultation, we'll help you determine the right budget based on your goals and target market.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! All our packages include post-launch support (duration varies by package). We also offer monthly retainer options for continuous website maintenance, content updates, and performance optimization.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Visit our Portfolio page to see case studies and results from projects across various industries. We can also share specific examples relevant to your industry during our consultation.",
  },
  {
    question: "What makes Weblyst different from other agencies?",
    answer:
      "We combine boutique agency attention with enterprise-level results. Our team brings expertise across all digital channels, meaning you get a cohesive strategy rather than siloed services. Plus, we focus on ROI and measurable results, not just vanity metrics.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="liquid-glass rounded-xl border border-purple-500/20 px-6 data-[state=open]:border-purple-400/40"
              >
                <AccordionTrigger className="text-left text-white hover:text-purple-300 hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
