import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to a hash target when present, otherwise to the top on route change. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) return void el.scrollIntoView({ behavior: 'smooth' })
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
