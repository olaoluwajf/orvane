import Hero from '../components/home/Hero'
import LogoStrip from '../components/home/LogoStrip'
import Metrics from '../components/home/Metrics'
import Benefits from '../components/home/Benefits'
import Features from '../components/home/Features'
import HowItWorks from '../components/home/HowItWorks'
import UseCases from '../components/home/UseCases'
import Testimonial from '../components/home/Testimonial'
import Pricing from '../components/home/Pricing'
import Faq from '../components/home/Faq'
import BlogPreview from '../components/home/BlogPreview'
import CtaBanner from '../components/ui/CtaBanner'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle()
  return (
    <>
      <Hero />
      <LogoStrip />
      <Metrics />
      <Benefits />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonial />
      <Pricing />
      <Faq />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
