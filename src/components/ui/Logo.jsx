import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight" aria-label="Orvane AI home">
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden>
        <circle cx="16" cy="16" r="9" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent" />
        <circle cx="16" cy="16" r="3" fill="currentColor" className="text-accent" />
      </svg>
      Orvane
    </Link>
  )
}
