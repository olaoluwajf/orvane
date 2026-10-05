import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import { FAQS } from '../../data/site'

export default function Faq() {
  return (
    <section id="faq" className="border-t border-line py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading
          label="FAQs"
          title="Got questions? We have answers"
          text="Everything you need to know about how the product works, how the AI handles conversations, and how your team stays in control, answered in one place."
        />
        <Accordion items={FAQS} />
      </Container>
    </section>
  )
}
