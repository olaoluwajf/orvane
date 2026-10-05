import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { FEATURES } from '../../data/site'

export default function Features() {
  const [active, setActive] = useState(FEATURES[0].id)
  const feature = FEATURES.find((f) => f.id === active)

  return (
    <section id="features" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Features"
          title="Everything you need to run modern customer support"
          text="Orvane AI combines automation, human support, and insights in one clean platform."
        />
        <div role="tablist" aria-label="Features" className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none]">
          {FEATURES.map((f) => (
            <button
              key={f.id}
              role="tab"
              id={`tab-${f.id}`}
              aria-selected={active === f.id}
              aria-controls="feature-panel"
              onClick={() => setActive(f.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${active === f.id ? 'border-fg bg-fg text-ink' : 'border-line text-muted hover:text-fg'}`}
            >
              {f.tab}
            </button>
          ))}
        </div>
        <div id="feature-panel" role="tabpanel" aria-labelledby={`tab-${feature.id}`} key={feature.id} style={{ animation: 'rise .4s ease-out' }}
          className="group mt-6 grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-ink p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{feature.title}</h3>
            <p className="mt-4 text-pretty text-muted">{feature.text}</p>
          </div>
          <img src={feature.image} alt={feature.title} loading="lazy" className="w-full rounded-2xl border border-line object-cover" />
        </div>
      </Container>
    </section>
  )
}
