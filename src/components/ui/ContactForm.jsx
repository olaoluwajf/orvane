import { useState } from 'react'
import { Check, LoaderCircle } from 'lucide-react'
import Button from './Button'

const EMPTY = { name: '', email: '', message: '', consent: false }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  if (!v.consent) e.consent = 'Please agree to be contacted.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  )
}

const input = 'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent aria-[invalid=true]:border-red-400/70'

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((x) => ({ ...x, [key]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return
    setStatus('sending')
    // Replace with a real request (fetch to your API or a form service).
    setTimeout(() => { setStatus('sent'); setValues(EMPTY) }, 900)
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-3xl border border-line bg-surface p-10 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent text-ink"><Check className="size-6" /></span>
        <h3 className="mt-5 text-xl font-medium">Message sent</h3>
        <p className="mt-2 text-muted">Thanks for reaching out. We usually reply within one business day.</p>
        <Button variant="ghost" className="mt-6" onClick={() => setStatus('idle')}>Send another message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-line bg-surface/60 p-6 sm:p-8">
      <Field id="name" label="Name" error={errors.name}>
        <input id="name" value={values.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={input} />
      </Field>
      <Field id="email" label="Email address" error={errors.email}>
        <input id="email" type="email" value={values.email} onChange={set('email')} autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={input} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" rows={5} value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className={`${input} resize-y`} />
      </Field>
      <div>
        <label className="flex items-center gap-3 text-sm">
          <input type="checkbox" checked={values.consent} onChange={set('consent')} className="size-4 accent-[var(--color-accent)]" />
          I agree to be contacted.
        </label>
        {errors.consent && <p className="mt-1.5 text-sm text-red-400">{errors.consent}</p>}
      </div>
      <Button type="submit" variant="accent" disabled={status === 'sending'} className="w-full py-3">
        {status === 'sending' ? <><LoaderCircle className="size-4 animate-spin" /> Sending</> : 'Submit your message'}
      </Button>
    </form>
  )
}
