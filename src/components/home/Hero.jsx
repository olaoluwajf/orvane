import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import RoutingScene from './RoutingScene'

const HEADLINE = 'AI support that answers customers instantly'.split(' ')

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-24">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div className="text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm text-muted" style={{ animation: 'rise .6s both' }}>
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" /><span className="relative size-2 rounded-full bg-emerald-400" /></span>
            Instant AI support, live 24/7
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {HEADLINE.map((w, n) => (
              <span key={n} className="inline-block" style={{ animation: 'rise .8s ease-out both', animationDelay: `${150 + n * 90}ms` }}>{w}&nbsp;</span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-muted lg:mx-0" style={{ animation: 'rise .8s ease-out both', animationDelay: '900ms' }}>
            Resolve common questions and hand off to humans when it matters, all from one simple support tool.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start" style={{ animation: 'rise .8s ease-out both', animationDelay: '1050ms' }}>
            <Button to="/contact" variant="accent" className="group px-7 py-3">
              Get started free <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Button>
            <Button href="/#how-it-works" variant="ghost" className="px-7 py-3">See how it works</Button>
          </div>
        </div>
        <div style={{ animation: 'rise 1s ease-out both', animationDelay: '500ms' }}><RoutingScene /></div>
      </Container>
    </section>
  )
}
