import { useEffect, useState } from 'react'
import { Globe, Mail, MessageCircle, Smartphone, Sparkles } from 'lucide-react'

const TICKETS = [
  { text: 'Where is my order #48213?', ai: true },
  { text: 'Can I get a refund?', ai: true },
  { text: 'My invoice is wrong and I am upset', ai: false },
  { text: 'How do I reset my password?', ai: true },
  { text: 'Need a custom contract for 200 seats', ai: false },
  { text: 'Do you integrate with Shopify?', ai: true },
]

// ring: 0 inner, 1 middle, 2 outer. angle sets the starting position on the ring.
const RINGS = [{ inset: 'inset-[24%]', secs: 22 }, { inset: 'inset-[12%]', secs: 34 }, { inset: 'inset-0', secs: 48 }]
const NODES = [
  { Icon: Globe, label: 'Web chat', ring: 0, angle: 0 },
  { Icon: Mail, label: 'Email', ring: 1, angle: 140 },
  { Icon: MessageCircle, label: 'Messages', ring: 1, angle: 300 },
  { Icon: Smartphone, label: 'Mobile', ring: 2, angle: 70 },
]

/** Orbiting channels feed a central core that routes each ticket to AI or a human. */
export default function RoutingScene() {
  const [i, setI] = useState(0)
  const [count, setCount] = useState({ ai: 0, human: 0 })

  useEffect(() => {
    const id = setInterval(() => {
      setI((n) => {
        const next = (n + 1) % TICKETS.length
        setCount((c) => (TICKETS[next].ai ? { ...c, ai: c.ai + 1 } : { ...c, human: c.human + 1 }))
        return next
      })
    }, 2600)
    return () => clearInterval(id)
  }, [])

  const t = TICKETS[i]

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="relative mx-auto aspect-square w-full max-w-sm" role="img" aria-label="Customer channels flowing into the Orvane AI core">
        {RINGS.map((r, n) => (
          <div key={n} className={`absolute ${r.inset} rounded-full border border-dashed border-line`} style={{ animation: `orbit ${r.secs}s linear infinite` }}>
            {NODES.filter((x) => x.ring === n).map(({ Icon, label, angle }) => (
              <div key={label} className="absolute inset-0" style={{ '--a': `${angle}deg`, transform: `rotate(${angle}deg)` }}>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div title={label} className="grid size-11 place-items-center rounded-2xl border border-line bg-surface text-accent shadow-lg shadow-black/40" style={{ '--a': `${angle}deg`, animation: `unorbit ${r.secs}s linear infinite` }}>
                    <Icon className="size-5" aria-hidden />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="absolute inset-0 grid place-items-center">
          <span key={i} className={`absolute size-28 rounded-full border-2 ${t.ai ? 'border-emerald-400' : 'border-amber-400'}`} style={{ animation: 'flash 1.1s ease-out both' }} />
          <span className="absolute size-24 animate-ping rounded-full bg-accent/10 [animation-duration:3s]" />
          <div className="relative grid size-24 place-items-center rounded-full border border-accent/50 bg-surface shadow-[0_0_60px_-10px_rgba(157,176,255,0.6)]">
            <Sparkles className="size-8 text-accent" aria-hidden />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur" aria-live="polite">
        <p className="text-xs text-muted">Incoming</p>
        <div key={i} className="mt-1 flex items-center justify-between gap-3" style={{ animation: 'rise .4s ease-out' }}>
          <p className="truncate text-sm">{t.text}</p>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${t.ai ? 'bg-emerald-400/15 text-emerald-300' : 'bg-amber-400/15 text-amber-300'}`}>
            {t.ai ? 'Resolved by AI' : 'Handed to a human'}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-line pt-3 text-sm">
          <p><span className="tabular-nums text-lg font-semibold text-emerald-300">{count.ai}</span> <span className="text-muted">resolved by AI</span></p>
          <p><span className="tabular-nums text-lg font-semibold text-amber-300">{count.human}</span> <span className="text-muted">handed off</span></p>
        </div>
      </div>
    </div>
  )
}
