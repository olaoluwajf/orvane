import { Check } from 'lucide-react'
import Button from '../ui/Button'

export default function PricingCard({ plan, yearly }) {
  const price = yearly ? plan.yearly : plan.monthly
  return (
    <article className={`relative flex flex-col rounded-3xl border p-7 ${plan.popular ? 'border-accent bg-surface' : 'border-line'}`}>
      {plan.popular && <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-ink">Most popular</span>}
      <h3 className="text-lg font-medium">{plan.name}</h3>
      <p className="mt-2 min-h-12 text-sm text-muted">{plan.blurb}</p>
      <p className="mt-6 flex items-baseline gap-1">
        {plan.custom ? (
          <span className="text-4xl font-semibold tracking-tight">Custom</span>
        ) : (
          <>
            <span className="text-lg text-muted">$</span>
            <span key={price} className="text-5xl font-semibold tracking-tight tabular-nums" style={{ animation: 'rise .3s ease-out' }}>{price}</span>
            <span className="text-sm text-muted">/ month</span>
          </>
        )}
      </p>
      <Button to="/contact" variant={plan.popular ? 'accent' : 'ghost'} className="mt-6">{plan.cta}</Button>
      <p className="mb-3 mt-8 text-sm font-medium">What's included</p>
      <ul className="space-y-3 text-sm text-muted">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />{f}</li>
        ))}
      </ul>
    </article>
  )
}
