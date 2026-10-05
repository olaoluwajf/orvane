import { useEffect, useRef } from 'react'

/** Soft light that trails the pointer. Hidden on touch devices. */
export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const move = (e) => { if (ref.current) ref.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)` }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_65%)] transition-transform duration-200 ease-out [@media(hover:hover)]:block" />
}
