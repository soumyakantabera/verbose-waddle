export default function Pelle() {
  return (
    <section id="pelle" className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll from-left">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Main image with aspect ratio container */}
              <div className="aspect-[3/4] max-h-[520px]">
                <img
                  src="./images/pelle_cream.jpg"
                  alt="Skincare FIORIVIA - creme per la pelle"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/30 to-transparent" />
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-cream-50/95 backdrop-blur-sm rounded-xl p-3 shadow-lg max-w-[140px]">
                <p className="font-mono text-[10px] text-forest-600 tracking-wider mb-0.5">INCI</p>
                <p className="font-sans text-xs text-warm-800 font-medium leading-tight">
                  Leggibile e spiegato
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll from-right">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-forest-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-500">
                03 / PELLE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-warm-900 leading-tight mb-4 text-balance">
              Per la pelle.{' '}
              <em className="not-italic text-forest-600">Con attivi chiari.</em>
            </h2>

            <p className="font-sans text-warm-700 leading-relaxed mb-6 text-sm sm:text-base">
              Dalla detergenza alla protezione: selezioniamo formulazioni leggere, INCI leggibili,
              risultati reali. Detergenza, idratazione, protezione: una routine che si sostiene
              ogni giorno.
            </p>

            <p className="font-sans text-warm-600 leading-relaxed mb-8 text-sm sm:text-base">
              Ogni prodotto supera i nostri criteri rigorosi su attivi, tollerabilità,
              packaging sostenibile e piacere d'uso. Solo skincare essenziale per ogni tipo
              di pelle, con trasparenza totale sugli ingredienti.
            </p>

            {/* Product highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { label: 'Detergenza', desc: 'Delicata e efficace' },
                { label: 'Idratazione', desc: 'Texture piacevoli' },
                { label: 'Protezione', desc: 'SPF chiari' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-cream-100 rounded-xl p-3 sm:p-4 border border-cream-200"
                >
                  <p className="font-mono text-xs text-forest-600 tracking-wider mb-1">{item.label}</p>
                  <p className="font-sans text-xs text-warm-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#selezione"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('selezione')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 bg-warm-900 hover:bg-warm-800 text-cream-100 font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md"
            >
              Scopri i criteri
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
