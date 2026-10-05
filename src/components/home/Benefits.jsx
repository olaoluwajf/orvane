import Container from '../ui/Container'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SpotlightCard from '../ui/SpotlightCard'
import { BENEFITS } from '../../data/site'

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading label="Benefits" title="A better support experience for everyone" text="Orvane AI helps your customers get answers faster while giving your team the space to focus on meaningful work." />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {BENEFITS.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 80} className={i === 0 || i === 5 ? 'lg:col-span-3' : 'lg:col-span-2'}>
              <SpotlightCard className="group h-full rounded-3xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <span className="grid size-11 place-items-center rounded-2xl border border-line text-accent transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon name={b.icon} className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-lg font-medium">{b.title}</h3>
                <p className="mt-2 text-pretty text-sm text-muted">{b.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10 flex justify-center"><Button to="/contact" variant="ghost">Get started free</Button></Reveal>
      </Container>
    </section>
  )
}
