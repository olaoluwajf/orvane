import { ArrowUpRight, Check, MessageCircle, Sparkles } from 'lucide-react'

export default function ContactVisual() {
  return (
    <div className="contact-visual relative mt-10 grid min-h-72 place-items-center overflow-hidden rounded-[2rem] border border-white/10 bg-surface/70 sm:min-h-80" role="img" aria-label="A 3D illustration of a customer message receiving a thoughtful response">
      <div className="contact-visual-glow absolute inset-0" aria-hidden />
      <div className="contact-visual-orbit contact-visual-orbit-one absolute" aria-hidden />
      <div className="contact-visual-orbit contact-visual-orbit-two absolute" aria-hidden />
      <div className="contact-visual-card contact-visual-card-back absolute">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-xl bg-accent/10 text-accent"><MessageCircle className="size-4" aria-hidden /></span>
          <div><span className="block text-xs font-medium">Support, made human</span><span className="mt-1 block h-1.5 w-16 rounded-full bg-white/10" /></div>
        </div>
        <span className="mt-5 block h-1.5 w-4/5 rounded-full bg-white/10" />
        <span className="mt-2 block h-1.5 w-3/5 rounded-full bg-white/10" />
        <div className="mt-4 flex items-center gap-1.5 text-[10px] text-emerald-300"><Check className="size-3" aria-hidden /> Context carried through</div>
      </div>
      <div className="contact-visual-card contact-visual-card-front absolute">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[11px] font-medium text-muted">CUSTOMER MESSAGE</span>
          <ArrowUpRight className="size-4 text-muted" aria-hidden />
        </div>
        <p className="font-display text-base leading-snug text-fg">“Can someone help me figure this out?”</p>
        <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-3">
          <span className="grid size-6 place-items-center rounded-full bg-accent/15 text-accent"><Sparkles className="size-3" aria-hidden /></span>
          <span className="text-[11px] text-muted">A real person is on it.</span>
          <span className="ml-auto size-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>
      <div className="contact-visual-badge absolute flex items-center gap-2 rounded-full border border-white/10 bg-ink/80 px-3 py-2 text-[11px] text-fg shadow-lg backdrop-blur-xl">
        <span className="relative grid size-2 place-items-center"><span className="absolute size-2 animate-ping rounded-full bg-emerald-400/50" /><span className="relative size-1.5 rounded-full bg-emerald-400" /></span>
        Here when you need us
      </div>
    </div>
  )
}
