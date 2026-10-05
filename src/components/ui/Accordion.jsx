import { useId, useState } from 'react'
import { Plus } from 'lucide-react'

function Item({ item, open, onToggle }) {
  const id = useId()
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium transition-colors hover:text-accent sm:text-lg"
        >
          {item.q}
          <Plus className={`size-5 shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-45' : ''}`} aria-hidden />
        </button>
      </h3>
      <div id={id} role="region" className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden text-pretty text-muted">{item.a}</p>
      </div>
    </div>
  )
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <Item key={item.q} item={item} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
      ))}
    </div>
  )
}
