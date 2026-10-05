import { Linkedin, Twitter } from 'lucide-react'

export default function TeamCard({ member }) {
  const social = 'grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-fg'
  return (
    <article className="overflow-hidden rounded-3xl border border-line bg-surface">
      <img src={member.image} alt={member.name} loading="lazy" className="aspect-square w-full object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-medium">{member.name}</h3>
        <p className="text-sm text-accent">{member.role}</p>
        <p className="mt-3 text-pretty text-sm text-muted">{member.bio}</p>
        <div className="mt-5 flex gap-2">
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label={`${member.name} on X`} className={social}><Twitter className="size-4" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className={social}><Linkedin className="size-4" /></a>
        </div>
      </div>
    </article>
  )
}
