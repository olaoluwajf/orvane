import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { NAV_LINKS } from '../../data/site'

const linkClass = ({ isActive }) =>
  `rounded-full px-3.5 py-2 text-sm transition-colors ${isActive ? 'bg-raised text-fg' : 'text-muted hover:text-fg'}`

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
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? 'border-line bg-ink/85 backdrop-blur-lg' : 'border-transparent'}`}>
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => <NavLink key={l.to} to={l.to} end className={linkClass}>{l.label}</NavLink>)}
        </nav>
        <div className="hidden md:block"><Button to="/contact" className="py-2">Get started</Button></div>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 bg-ink md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1 p-5">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end className={({ isActive }) => `rounded-xl px-4 py-4 text-2xl font-medium ${isActive ? 'bg-raised' : 'text-muted'}`}>
                {l.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-4 py-3.5">Get started</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
