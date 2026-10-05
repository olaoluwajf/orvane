import '@testing-library/jest-dom/vitest'

window.scrollTo = () => {}

const localStorageData = new Map()
Object.defineProperty(window, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key) => localStorageData.get(key) ?? null,
    setItem: (key, value) => localStorageData.set(key, String(value)),
    removeItem: (key) => localStorageData.delete(key),
    clear: () => localStorageData.clear(),
  },
})

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
