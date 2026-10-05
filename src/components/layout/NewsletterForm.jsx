import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setStatus('error')
    setStatus('done')
    setEmail('')
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-sm">
      <label htmlFor="newsletter-email" className="text-sm font-medium">Subscribe to our newsletter</label>
      <div className="mt-3 flex items-center rounded-full border border-line bg-surface p-1 focus-within:border-accent">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
          placeholder="Email"
          aria-invalid={status === 'error'}
          className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted"
        />
        <button type="submit" aria-label="Subscribe" className="grid size-9 place-items-center rounded-full bg-fg text-ink hover:bg-white">
          {status === 'done' ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
        </button>
      </div>
      <p role="status" className={`mt-2 h-5 text-xs ${status === 'error' ? 'text-red-400' : 'text-muted'}`}>
        {status === 'error' && 'Enter a valid email address.'}
        {status === 'done' && "You're subscribed. Check your inbox soon."}
      </p>
    </form>
  )
}
