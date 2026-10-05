import Container from '../ui/Container'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import PostCard from '../blog/PostCard'
import { POSTS } from '../../data/posts'

export default function BlogPreview() {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Blogs"
          title="Insights on AI-powered customer support"
          text="Learn how modern teams use AI to respond faster, reduce support workload, and deliver better customer experiences at scale."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {POSTS.slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
        <div className="mt-12 flex justify-center"><Button to="/blog" variant="ghost">Read all articles</Button></div>
      </Container>
    </section>
  )
}
