import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import PostCard from '../components/blog/PostCard'
import { POSTS } from '../data/posts'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const CATEGORIES = ['All', ...new Set(POSTS.map((p) => p.category))]

export default function Blog() {
  useDocumentTitle('Blog')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return POSTS.filter((p) => (category === 'All' || p.category === category) && (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q)))
  }, [query, category])

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading as="h1" label="Blog" title="Insights on AI customer support" text="Practical guidance on automating support without losing the human touch." />
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${category === c ? 'border-fg bg-fg text-ink' : 'border-line text-muted hover:text-fg'}`}>
                {c}
              </button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles"
              className="w-full rounded-full border border-line bg-surface py-2.5 pl-11 pr-4 text-sm outline-none placeholder:text-muted focus:border-accent" />
          </label>
        </div>
        {results.length ? (
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        ) : (
          <p className="mt-16 text-center text-muted">No articles match your search. Try a different keyword or category.</p>
        )}
      </Container>
    </section>
  )
}
