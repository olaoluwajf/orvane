import { Link } from 'react-router-dom'

export default function PostCard({ post }) {
  return (
    <article className="group">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface">
          <img src={post.image} alt="" loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted">
          <span className="text-accent">{post.category}</span>
          <span aria-hidden>/</span>
          <span>{post.date}</span>
          <span aria-hidden>/</span>
          <span>{post.readTime} min</span>
        </p>
        <h3 className="mt-2 text-lg font-medium text-balance transition-colors group-hover:text-accent">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
      </Link>
    </article>
  )
}
