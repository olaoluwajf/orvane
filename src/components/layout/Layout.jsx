import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollManager from './ScrollManager'
import ScrollProgress from '../ui/ScrollProgress'
import BackToTop from '../ui/BackToTop'
import CursorGlow from './CursorGlow'

export default function Layout() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <CursorGlow />
      <ScrollManager />
      <ScrollProgress />
      <Navbar />
      <main id="main"><Outlet /></main>
      <Footer />
      <BackToTop />
    </>
  )
}
