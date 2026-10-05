import '@testing-library/jest-dom/vitest'

window.scrollTo = () => {}

class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback
  }

  observe() {
    this.callback([{ isIntersecting: true }])
  }

  disconnect() {}
  unobserve() {}
}

window.IntersectionObserver = IntersectionObserverMock

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
