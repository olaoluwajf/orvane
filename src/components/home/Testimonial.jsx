import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { TESTIMONIAL as t } from '../../data/site'

export default function Testimonial() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Testimonial"
          title="Trusted by teams building modern products"
          text="Support teams, founders, and growing companies use Orvane AI to deliver faster responses, reduce support workload, and improve the overall customer experience."
        />
        <figure className="mt-12 max-w-3xl">
          <blockquote className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{t.quote}</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <img src={t.image} alt={t.name} loading="lazy" className="size-12 rounded-full object-cover" />
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-muted">{t.role}, {t.company}</p>
            </div>
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
