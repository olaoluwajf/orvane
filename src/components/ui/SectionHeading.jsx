export default function SectionHeading({ label, title, text, align = 'left', as: Tag = 'h2' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <header className={`max-w-2xl ${alignment}`}>
      {label && <p className="mb-3 text-sm text-accent">{label}</p>}
      <Tag className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</Tag>
      {text && <p className="mt-4 text-pretty text-muted">{text}</p>}
    </header>
  )
}
