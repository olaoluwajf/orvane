import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SpotlightCard from '../ui/SpotlightCard'
import { useInView } from '../../hooks/useInView'
import { STEPS } from '../../data/site'

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.4 })
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container>
        <Reveal><SectionHeading label="Features" title="How it works" /></Reveal>
        <ol ref={ref} className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-line lg:block" aria-hidden>
            <div className="h-full origin-left bg-accent transition-transform duration-[2000ms] ease-out" style={{ transform: `scaleX(${inView ? 1 : 0})` }} />
          </div>
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 150}>
              <SpotlightCard className="h-full rounded-2xl border border-line bg-surface p-6">
                <span className="relative grid size-9 place-items-center rounded-full bg-accent text-sm font-semibold text-ink">{i + 1}</span>
                <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-pretty text-sm text-muted">{s.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
