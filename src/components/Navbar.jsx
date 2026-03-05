import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Pelle', href: '#pelle' },
  { label: 'Corpo', href: '#corpo' },
  { label: 'Capelli', href: '#capelli' },
  { label: 'Benessere', href: '#benessere' },
  { label: 'Selezione', href: '#selezione' },
  { label: 'Journal', href: '#journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex flex-col leading-none group"
            >
              <span className={`font-serif text-xl sm:text-2xl font-semibold tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-warm-900' : 'text-warm-900'
              }`}>
                FIORIVIA
              </span>
              <span className={`font-mono text-[9px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-forest-600' : 'text-forest-600'
              }`}>
                Italian Wellness
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="font-mono text-xs tracking-widest uppercase text-warm-800 hover:text-forest-600 underline-anim transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#newsletter"
                onClick={(e) => { e.preventDefault(); handleNavClick('#newsletter') }}
                className="hidden sm:inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-cream-100 font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md"
              >
                Unisciti
              </a>
              {/* Mobile hamburger */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-cream-200 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <span className={`block w-6 h-0.5 bg-warm-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-warm-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-warm-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-warm-900/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <nav
        className={`mobile-menu fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-cream-50 z-50 md:hidden flex flex-col ${
          menuOpen ? 'open' : ''
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-cream-200">
          <span className="font-serif text-xl font-semibold text-warm-900">FIORIVIA</span>
          <button
            className="p-2 rounded-full hover:bg-cream-200 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Chiudi menu"
          >
            <svg className="w-5 h-5 text-warm-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-cream-200 text-warm-800 hover:text-forest-700 font-mono text-sm tracking-wider uppercase transition-all duration-200"
                >
                  <span>{link.label}</span>
                  <span className="text-forest-400 text-xs font-normal">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-cream-200">
            <a
              href="#newsletter"
              onClick={(e) => { e.preventDefault(); handleNavClick('#newsletter') }}
              className="block w-full text-center bg-forest-700 hover:bg-forest-600 text-cream-100 font-mono text-sm tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300"
            >
              Unisciti al cerchio
            </a>
          </div>

          <div className="mt-8 space-y-1">
            <p className="font-mono text-xs text-warm-500 mb-3 tracking-wider">CONTATTI</p>
            <a href="mailto:ciao@fiorivia.it" className="block font-mono text-xs text-forest-600 hover:text-forest-700 transition-colors">
              ciao@fiorivia.it
            </a>
            <a href="https://instagram.com/fiorivia" className="block font-mono text-xs text-forest-600 hover:text-forest-700 transition-colors">
              @fiorivia
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
