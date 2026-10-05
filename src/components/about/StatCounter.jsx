import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'

export default function StatCounter({ value, suffix, label }) {
  const [ref, inView] = useInView()
  const n = useCountUp(value, inView)
  return (
    <div ref={ref} className="bg-ink p-7">
      <p className="text-5xl font-semibold tracking-tight tabular-nums">{n}<span className="text-accent">{suffix}</span></p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  )
}
