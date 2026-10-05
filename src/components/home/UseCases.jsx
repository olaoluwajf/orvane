import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { USE_CASES } from '../../data/site'

export default function UseCases() {
  return (
    <section id="use-case" className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading label="Use case" title="Flexible enough for any business" text="Orvane AI adapts to your support needs, no matter your industry or team size." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {USE_CASES.map((u) => (
            <article key={u.title} className="group overflow-hidden rounded-3xl border border-line bg-surface">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={u.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{u.title}</h3>
                <p className="mt-2 text-pretty text-muted">{u.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
