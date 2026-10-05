import { useEffect } from 'react'

const DEFAULT_DESCRIPTION = 'Orvane AI helps businesses answer customer questions instantly with AI-powered support and seamless human handoff.'

function upsertMeta(name, attrs, content) {
  const selector = name.startsWith('property:')
    ? `meta[property="${name.slice('property:'.length)}"]`
    : `meta[name="${name}"]`

  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    if (name.startsWith('property:')) {
      tag.setAttribute('property', name.slice('property:'.length))
    } else {
      tag.setAttribute('name', name)
    }
    document.head.appendChild(tag)
  }

  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value))
  }

  tag.setAttribute('content', content)
}

export function useDocumentTitle(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const pageTitle = title ? `${title} - Orvane AI` : 'Orvane AI'
    const pageDescription = description || DEFAULT_DESCRIPTION
    const pathname = window.location.pathname

    document.title = pageTitle
    document.documentElement.lang = 'en'

    upsertMeta('description', {}, pageDescription)
    upsertMeta('property:og:title', {}, pageTitle)
    upsertMeta('property:og:description', {}, pageDescription)
    upsertMeta('property:og:type', {}, 'website')
    upsertMeta('property:og:url', {}, `${window.location.origin}${pathname}`)
    upsertMeta('property:twitter:title', {}, pageTitle)
    upsertMeta('property:twitter:description', {}, pageDescription)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${window.location.origin}${pathname}`)
  }, [title, description])
}
