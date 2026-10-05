import { useInView } from '../../hooks/useInView'

/** Fades, lifts and un-blurs its children when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children }) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${inView ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-sm'} ${className}`}
    >
      {children}
    </Tag>
  )
}
