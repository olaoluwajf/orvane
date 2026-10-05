import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import StatCounter from '../about/StatCounter'
import { STATS } from '../../data/about'

export default function Metrics() {
  return (
    <section className="pt-20 sm:pt-28">
      <Container>
        <Reveal>
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => <StatCounter key={s.label} {...s} />)}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
