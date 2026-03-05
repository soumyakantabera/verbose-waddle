import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categorie from './components/Categorie'
import Essenza from './components/Essenza'
import Pelle from './components/Pelle'
import Corpo from './components/Corpo'
import Capelli from './components/Capelli'
import Benessere from './components/Benessere'
import Selezione from './components/Selezione'
import Journal from './components/Journal'
import Newsletter from './components/Newsletter'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll, .stagger-children')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream-100 text-warm-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Categorie />
        <Essenza />
        <Pelle />
        <Corpo />
        <Capelli />
        <Benessere />
        <Selezione />
        <Journal />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
