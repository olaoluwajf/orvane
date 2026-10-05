/** Card whose border area glows under the cursor. */
export default function SpotlightCard({ as: Tag = 'div', className = '', children }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return <Tag onMouseMove={onMove} className={`spot ${className}`}>{children}</Tag>
}
