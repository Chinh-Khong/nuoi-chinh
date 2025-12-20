import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { PricingSection } from "@/components/pricing-section"
import { TransparencySection } from "@/components/transparency-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
      <PricingSection />
      <TransparencySection />
      <FAQSection />
      <Footer />
    </main>
  )
}
