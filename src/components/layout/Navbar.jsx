import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { NAV_LINKS } from '../../data/site'

const linkClass = ({ isActive }) =>
  `rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-200 ${isActive ? 'bg-white/10 text-fg shadow-inner shadow-white/5' : 'text-muted hover:-translate-y-0.5 hover:text-fg'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-4">
      <div className={`relative flex h-16 items-center justify-between rounded-full border px-4 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 sm:px-6 ${scrolled || open ? 'border-white/15 bg-ink/75 shadow-black/25' : 'border-white/10 bg-ink/35'}`}>
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => <NavLink key={l.to} to={l.to} end className={linkClass}>{l.label}</NavLink>)}
        </nav>
        <div className="hidden md:block"><Button to="/contact" className="py-2">Get started</Button></div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-fg transition-colors hover:bg-white/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {open && (
          <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-3xl border border-white/10 bg-ink/90 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} end className={({ isActive }) => `rounded-2xl px-4 py-3 text-lg font-medium transition-colors ${isActive ? 'bg-white/10 text-fg' : 'text-muted hover:bg-white/5 hover:text-fg'}`}>
                  {l.label}
                </NavLink>
              ))}
              <Button to="/contact" className="mt-2 py-3">Get started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
