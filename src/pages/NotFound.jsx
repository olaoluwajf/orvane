import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page not found')
  return (
    <section className="py-28 text-center">
      <Container>
        <p className="text-7xl font-semibold tracking-tight text-accent">404</p>
        <h1 className="mt-4 text-2xl font-semibold">This page does not exist</h1>
        <p className="mt-2 text-muted">The link may be broken or the page may have moved.</p>
        <Button to="/" className="mt-8">Back to home</Button>
      </Container>
    </section>
  )
}
