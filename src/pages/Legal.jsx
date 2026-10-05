import { Navigate, useParams } from 'react-router-dom'
import Container from '../components/ui/Container'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const DOCS = {
  'terms-of-service': { title: 'Terms of Service' },
  'privacy-policy': { title: 'Privacy policy' },
}

export default function Legal() {
  const { doc } = useParams()
  const page = DOCS[doc]
  useDocumentTitle(page?.title)
  if (!page) return <Navigate to="/" replace />

  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">{page.title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated 2026</p>
        <div className="mt-8 space-y-4 text-muted">
          <p>This page is a placeholder. Replace it with your final {page.title.toLowerCase()} before launch.</p>
        </div>
      </Container>
    </section>
  )
}
