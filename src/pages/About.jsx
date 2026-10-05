import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import AboutCube from '../components/about/AboutCube'
import StatCounter from '../components/about/StatCounter'
import TeamCard from '../components/about/TeamCard'
import CtaBanner from '../components/ui/CtaBanner'
import { ABOUT, STATS, TEAM } from '../data/about'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function About() {
  useDocumentTitle('About')
  return (
    <>
      <section className="pb-16 pt-16 sm:pt-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading as="h1" label={ABOUT.eyebrow} title={ABOUT.title} text={ABOUT.intro} />
            <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
              <div>
                <p className="text-sm text-accent">What we do</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">{ABOUT.what.title}</h2>
                <p className="mt-3 text-pretty text-muted">{ABOUT.what.text}</p>
              </div>
              <div>
                <p className="text-sm text-accent">Our mission</p>
                <p className="mt-2 text-pretty text-xl leading-snug">{ABOUT.mission}</p>
              </div>
            </div>
          </div>
          <AboutCube />
        </Container>
      </section>

      <Container>
        <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => <StatCounter key={s.label} {...s} />)}
        </dl>
      </Container>

      <section className="py-20 sm:py-28">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <figure>
            <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{ABOUT.quote}</blockquote>
            <figcaption className="mt-6 text-muted">{ABOUT.quoteBy}</figcaption>
          </figure>
          <div className="grid grid-cols-2 gap-3">
            {ABOUT.gallery.map((g, i) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className={`aspect-square w-full rounded-2xl border border-line object-cover ${i % 2 ? 'translate-y-4' : ''}`} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <SectionHeading label="The team" title="Meet the people behind the product" text="A small, focused team building tools that help businesses deliver faster, smarter, and more human customer support." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => <TeamCard key={m.name} member={m} />)}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  )
}
