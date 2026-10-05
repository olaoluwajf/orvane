import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none'
const variants = {
  primary: 'bg-fg text-ink hover:bg-white',
  accent: 'bg-accent text-ink hover:bg-accent-strong',
  ghost: 'border border-line text-fg hover:bg-raised',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
