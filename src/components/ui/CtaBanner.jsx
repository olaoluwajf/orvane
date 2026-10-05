import { Check } from 'lucide-react'
import Container from './Container'
import Button from './Button'

const POINTS = ['Easy to set up', 'Clear to use', 'Flexible to scale', 'Built around real human workflows']

export default function CtaBanner() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Ready to upgrade your customer support?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted">
            Launch AI-powered support in minutes and start responding faster, without adding more tools or agents.
          </p>
          <Button to="/contact" variant="accent" className="mt-8">Start free trial</Button>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-2"><Check className="size-4 text-accent" aria-hidden />{p}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
