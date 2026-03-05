export default function Essenza() {
  return (
    <section id="essenza" className="py-16 sm:py-24 bg-forest-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text column */}
          <div className="animate-on-scroll from-left order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-forest-300" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-300">
                02 / ESSENZA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream-50 leading-tight mb-6 text-balance">
              La nostra essenza
            </h2>

            <p className="font-sans text-cream-200 leading-relaxed mb-6 text-sm sm:text-base">
              FIORIVIA nasce da un'idea semplice: il naturale è più interessante quando è capito,
              formulato bene e inserito in una routine reale. Cerchiamo prodotti che abbiano senso,
              tatto, misura e qualità.
            </p>

            <p className="font-sans text-cream-300 leading-relaxed mb-8 text-sm sm:text-base">
              FIORIVIA seleziona skincare e wellness dove botanica e formulazione si incontrano.
              Nessuna promessa impossibile: solo prodotti che funzionano, spiegati bene.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {[
                'Criteri chiari di selezione',
                'INCI leggibile e spiegato',
                'Assistenza in italiano',
                'Routine realistiche per la vita quotidiana',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-4 h-4 rounded-full bg-forest-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-300" />
                  </span>
                  <span className="font-sans text-cream-200 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#selezione"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('selezione')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 border border-forest-300/60 hover:border-forest-200 text-cream-100 hover:text-cream-50 font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:bg-forest-700/50"
            >
              Il metodo FIORIVIA
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Image column */}
          <div className="animate-on-scroll from-right order-1 lg:order-2">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden aspect-[4/5] max-h-[500px]">
                <img
                  src="./images/essenza_oil.jpg"
                  alt="Essenza FIORIVIA - olio botanico"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 bg-cream-50 rounded-2xl p-4 sm:p-5 shadow-xl max-w-[200px] sm:max-w-[220px]">
                <p className="font-serif text-2xl sm:text-3xl text-warm-900 font-medium mb-1">100%</p>
                <p className="font-mono text-xs text-warm-600 tracking-wider leading-tight">
                  Selezione basata su criteri scientifici
                </p>
              </div>

              {/* Decorative circle */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-forest-500/30 float-gentle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
