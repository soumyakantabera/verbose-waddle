export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream-50"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="./images/hero_botanical.jpg"
          alt="FIORIVIA hero - botanica italiana"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlay - strong enough for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-900/60 via-warm-900/40 to-warm-900/70" />
        {/* Bottom fade to site background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-100 to-transparent" />
      </div>

      {/* Animated botanical element */}
      <div className="absolute top-1/4 right-6 sm:right-12 lg:right-24 opacity-20 float-gentle pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-cream-200 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
          <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1" />
          <path d="M40 10 C40 10 20 30 20 45 C20 57 30 65 40 65 C50 65 60 57 60 45 C60 30 40 10 40 10Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M40 65 L40 72" stroke="currentColor" strokeWidth="1"/>
          <path d="M25 35 C25 35 32 40 40 40 C48 40 55 35 55 35" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Meta tag */}
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
          <span className="block w-8 h-px bg-cream-200" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-cream-200">
            01 / BENVENUTI
          </span>
          <span className="block w-8 h-px bg-cream-200" />
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream-50 leading-tight mb-4 sm:mb-6 text-balance">
          Bellezza naturale,{' '}
          <em className="not-italic font-medium text-forest-200">con intelligenza italiana.</em>
        </h1>

        {/* Subtext */}
        <p className="font-sans text-base sm:text-lg text-cream-200 max-w-2xl mx-auto mb-4 leading-relaxed">
          Selezioniamo skincare e wellness essenziali dove natura, formulazione e gusto si incontrano.
        </p>
        <p className="font-mono text-xs sm:text-sm text-cream-300 tracking-wider mb-8 sm:mb-12">
          Selezione rigorosa. Linguaggio chiaro. Nessuna promessa impossibile.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#selezione"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('selezione')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-forest-600 hover:bg-forest-500 text-cream-50 font-mono text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-forest-900/20"
          >
            Scopri la selezione
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#journal"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-cream-200/60 hover:border-cream-100 text-cream-100 hover:text-cream-50 font-mono text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            Leggi il Journal
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="font-mono text-[10px] tracking-widest uppercase text-cream-200">Scroll</span>
        <svg className="w-4 h-4 text-cream-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
