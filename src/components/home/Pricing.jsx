import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import PricingCard from './PricingCard'
import { PLANS } from '../../data/site'

export default function Pricing() {
  const [yearly, setYearly] = useState(true)
  const tab = (active) => `rounded-full px-4 py-2 text-sm transition-colors ${active ? 'bg-fg text-ink' : 'text-muted hover:text-fg'}`

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          label="Pricing"
          title="Simple, transparent pricing"
          text="No hidden fees, no long contracts. Choose a plan that fits your support volume today and scale effortlessly as your business grows."
        />
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <div role="group" aria-label="Billing period" className="inline-flex rounded-full border border-line p-1">
            <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)} className={tab(yearly)}>Billed yearly</button>
            <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)} className={tab(!yearly)}>Bill monthly</button>
          </div>
          <span className="text-sm text-accent">Save 30%</span>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((p) => <PricingCard key={p.name} plan={p} yearly={yearly} />)}
        </div>
      </Container>
    </section>
  )
}
