import Container from '../ui/Container'
import { LOGOS } from '../../data/site'

const CAPS = ['AI chat', 'Human handoff', 'Smart inbox', 'Knowledge training', 'Analytics', 'Custom widget', '24/7 availability']

function Track({ children, reverse }) {
  const anim = reverse ? 'animate-[marquee-rev_40s_linear_infinite]' : 'animate-[marquee_32s_linear_infinite]'
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
      <div className={`flex w-max items-center gap-14 pr-14 hover:[animation-play-state:paused] ${anim}`}>{children}{children}</div>
    </div>
  )
}

export default function LogoStrip() {
  const logos = [...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => <img key={i} src={l.src} alt={i < LOGOS.length ? l.name : ''} loading="lazy" className="h-7 w-auto shrink-0 opacity-60 grayscale transition hover:opacity-100" />)
  const caps = CAPS.map((c) => <span key={c} className="shrink-0 rounded-full border border-line px-4 py-1.5 text-sm text-muted">{c}</span>)
  return (
    <section aria-label="Trusted by" className="space-y-6 border-y border-line py-10">
      <Container><p className="text-center text-sm text-muted">Trusted by startups & creators</p></Container>
      <Track>{logos}</Track>
      <Track reverse>{caps}</Track>
    </section>
  )
}
