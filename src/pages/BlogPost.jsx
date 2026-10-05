import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/ui/Container'
import PostCard from '../components/blog/PostCard'
import CtaBanner from '../components/ui/CtaBanner'
import { POSTS } from '../data/posts'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find((p) => p.slug === slug)
  useDocumentTitle(post?.title)
  if (!post) return <Navigate to="/blog" replace />

  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <article className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"><ArrowLeft className="size-4" /> Back to blog</Link>
          <p className="mt-8 flex gap-2 text-sm text-muted"><span className="text-accent">{post.category}</span><span aria-hidden>/</span><time>{post.date}</time><span aria-hidden>/</span><span>{post.readTime} min read</span></p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
          <img src={post.image} alt="" className="mt-10 aspect-[16/9] w-full rounded-3xl border border-line object-cover" />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-fg/90">
            {post.body.map((para) => <p key={para} className="text-pretty">{para}</p>)}
          </div>
        </Container>
      </article>
      <section className="border-t border-line py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">Keep reading</h2>
          <div className="grid gap-8 md:grid-cols-3">{related.map((p) => <PostCard key={p.slug} post={p} />)}</div>
        </Container>
      </section>
      <CtaBanner />
    </>
  )
}
