import { Clock, Mail } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import ContactForm from '../components/ui/ContactForm'
import Faq from '../components/home/Faq'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Contact() {
  useDocumentTitle('Contact')
  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm text-accent">Reach out</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact Orvane</h1>
            <p className="mt-5 max-w-md text-pretty text-lg text-muted">Questions, feedback, or need a hand getting set up? We're here to help you move faster.</p>
            <Button to="/contact#faq" variant="ghost" className="mt-6">See FAQs</Button>
            <p className="mt-10 max-w-md text-pretty text-muted">Whether you're exploring Orvane or already using it, our team is ready to help. Reach out with questions, feedback, or anything that's blocking your workflow.</p>
            <p className="mt-6 flex items-center gap-2 text-sm"><Clock className="size-4 text-accent" aria-hidden /> We usually reply within one business day.</p>
            <p className="mt-3 flex items-center gap-2 text-sm"><Mail className="size-4 text-accent" aria-hidden /> Use the form and the right person will get back to you.</p>
          </div>
          <ContactForm />
        </Container>
      </section>
      <Faq />
    </>
  )
}
