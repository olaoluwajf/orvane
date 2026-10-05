import { useEffect, useState } from 'react'
import { HERO_CHAT } from '../../data/site'

function Typing() {
  return (
    <div className="flex gap-1 rounded-2xl rounded-bl-md bg-raised px-4 py-3.5" aria-label="Assistant is typing">
      {[0, 1, 2].map((i) => (
        <span key={i} className="size-1.5 rounded-full bg-muted" style={{ animation: 'blink 1s infinite', animationDelay: `${i * 0.18}s` }} />
      ))}
    </div>
  )
}

/** Plays the sample support conversation message by message, then replays on request. */
export default function ChatDemo() {
  const [shown, setShown] = useState(0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    setShown(0)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) { setShown(HERO_CHAT.length); return }
    const timers = HERO_CHAT.map((_, i) => setTimeout(() => setShown(i + 1), 700 + i * 1700))
    return () => timers.forEach(clearTimeout)
  }, [run])

  const done = shown >= HERO_CHAT.length
  const next = HERO_CHAT[shown]

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-line bg-surface p-4 shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-line px-2 pb-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
          Instant AI support
        </div>
        <button type="button" onClick={() => setRun((r) => r + 1)} className="text-xs text-muted hover:text-fg">Replay</button>
      </div>
      <div className="flex min-h-[19rem] flex-col gap-3 px-1 pt-4" aria-live="polite">
        {HERO_CHAT.slice(0, shown).map((m, i) => (
          <p
            key={i}
            style={{ animation: 'rise .35s ease-out' }}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${m.from === 'user' ? 'self-end rounded-br-md bg-accent text-ink' : 'self-start rounded-bl-md bg-raised'}`}
          >
            {m.text}
          </p>
        ))}
        {!done && next?.from === 'ai' && <div className="self-start"><Typing /></div>}
      </div>
    </div>
  )
}
