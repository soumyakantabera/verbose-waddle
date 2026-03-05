const footerLinks = {
  esplora: [
    { label: 'Pelle', href: '#pelle' },
    { label: 'Corpo', href: '#corpo' },
    { label: 'Capelli', href: '#capelli' },
    { label: 'Benessere', href: '#benessere' },
  ],
  info: [
    { label: 'Il metodo', href: '#selezione' },
    { label: 'Journal', href: '#journal' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Newsletter', href: '#newsletter' },
  ],
  contatti: [
    { label: 'ciao@fiorivia.it', href: 'mailto:ciao@fiorivia.it' },
    { label: '@fiorivia', href: 'https://instagram.com/fiorivia' },
  ],
}

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const id = href.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-warm-900 text-cream-300 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10 sm:mb-14">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <div className="mb-4">
              <div className="font-serif text-2xl text-cream-50 font-semibold tracking-widest mb-1">
                FIORIVIA
              </div>
              <div className="font-mono text-[10px] text-forest-300 tracking-[0.25em] uppercase">
                Italian Wellness
              </div>
            </div>
            <p className="font-sans text-xs text-cream-400 leading-relaxed mb-4 max-w-[200px]">
              Piattaforma italiana di benessere selezionato. Botanica, formulazione, rituale.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/fiorivia"
                className="w-8 h-8 rounded-full bg-forest-800 hover:bg-forest-700 flex items-center justify-center text-cream-300 hover:text-cream-100 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Esplora */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-forest-400 mb-4">
              Esplora
            </h4>
            <ul className="space-y-2">
              {footerLinks.esplora.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="font-sans text-xs text-cream-400 hover:text-cream-200 underline-anim transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-forest-400 mb-4">
              Informazioni
            </h4>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="font-sans text-xs text-cream-400 hover:text-cream-200 underline-anim transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-forest-400 mb-4">
              Contatti
            </h4>
            <ul className="space-y-2">
              {footerLinks.contatti.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-cream-400 hover:text-cream-200 underline-anim transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-warm-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-cream-600 tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} FIORIVIA — Tutti i diritti riservati
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-mono text-[10px] text-cream-600 hover:text-cream-400 tracking-wider transition-colors">
              Privacy
            </a>
            <a href="#" className="font-mono text-[10px] text-cream-600 hover:text-cream-400 tracking-wider transition-colors">
              Cookie
            </a>
            <a href="#" className="font-mono text-[10px] text-cream-600 hover:text-cream-400 tracking-wider transition-colors">
              Termini
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
