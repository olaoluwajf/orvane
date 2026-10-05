import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} - Orvane AI` : 'Orvane AI'
  }, [title])
}
