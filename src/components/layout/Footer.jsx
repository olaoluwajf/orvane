import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import NewsletterForm from './NewsletterForm'
import { FOOTER_LINKS } from '../../data/site'

function FooterLink({ link }) {
  const cls = 'text-sm text-muted transition-colors hover:text-fg'
  return link.href
    ? <a href={link.href} target="_blank" rel="noreferrer" className={cls}>{link.label}</a>
    : <Link to={link.to} className={cls}>{link.label}</Link>
}

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <NewsletterForm />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <nav key={group} aria-label={group}>
                <h2 className="mb-4 text-sm font-medium">{group}</h2>
                <ul className="space-y-3">
                  {links.map((l) => <li key={l.label}><FooterLink link={l} /></li>)}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <p className="mt-16 select-none text-[clamp(4rem,22vw,15rem)] font-semibold leading-none tracking-tighter text-raised" aria-hidden>Orvane</p>
        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>Copyright &copy; 2026 Orvane. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/legal/terms-of-service" className="hover:text-fg">Terms of Service</Link>
            <Link to="/legal/privacy-policy" className="hover:text-fg">Privacy policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
