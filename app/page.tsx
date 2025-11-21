import DestinationsTop from "@/components/destinations-top"
import { Suspense } from "react"
import Features from "@/components/features-1"
import HeroSection from "@/components/hero-section"
import StepsToTrip from "@/components/steps-to-trip"
import Subscribe from "@/components/subscribe"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-start pb-8'>
      <HeroSection />
      <Features />
      <Suspense fallback={null}>
        <DestinationsTop />
      </Suspense>
      <StepsToTrip />
      <Testimonials />
      <Subscribe />
    </div>
  )
}
