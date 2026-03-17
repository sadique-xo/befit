import { Hero } from "@/components/hero"
import { FeaturedItems } from "@/components/featured-items"
import { WhyBefit } from "@/components/why-befit"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { HowItWorks } from "@/components/how-it-works"
import { CorporateWellness } from "@/components/corporate-wellness"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { LocationSnippet } from "@/components/location-snippet"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedItems />
      <WhyBefit />
      <SubscriptionPlans />
      <HowItWorks />
      <CorporateWellness />
      <Testimonials />
      <CtaBanner />
      <LocationSnippet />
    </>
  )
}
