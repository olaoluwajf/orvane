import { BrainCircuit, HeartHandshake, MessageCircle, Orbit, ShieldCheck, Sparkles } from 'lucide-react'

const FACES = [
  { className: 'front', Icon: BrainCircuit, label: 'AI first' },
  { className: 'back', Icon: HeartHandshake, label: 'Human always' },
  { className: 'right', Icon: MessageCircle, label: 'Every channel' },
  { className: 'left', Icon: ShieldCheck, label: 'Trust built in' },
  { className: 'top', Icon: Sparkles, label: 'Made to help' },
  { className: 'bottom', Icon: Orbit, label: 'Always on' },
]

export default function AboutCube() {
  return (
    <div className="about-cube-panel relative grid min-h-80 place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-surface/70">
      <div className="about-cube-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="about-cube-scene" role="img" aria-label="A rotating three-dimensional cube representing thoughtful, human-centered AI support">
        <div className="about-cube">
          {FACES.map(({ className, Icon, label }) => (
            <div key={className} className={`about-cube-face about-cube-face-${className}`}>
              <Icon className="size-7 text-accent" strokeWidth={1.5} aria-hidden />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="absolute bottom-5 left-0 right-0 text-center text-xs font-medium uppercase tracking-[0.24em] text-muted">
        Technology with a human core
      </p>
    </div>
  )
}
