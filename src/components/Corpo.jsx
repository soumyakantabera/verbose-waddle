export default function Corpo() {
  return (
    <section id="corpo" className="py-16 sm:py-24 bg-cream-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - left on desktop */}
          <div className="animate-on-scroll from-left order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-forest-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-500">
                04 / CORPO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-warm-900 leading-tight mb-4 text-balance">
              Per il corpo.{' '}
              <em className="not-italic text-forest-600">Con gesti quotidiani.</em>
            </h2>

            <p className="font-sans text-warm-700 leading-relaxed mb-4 text-sm sm:text-base">
              Oli, creme e trattamenti corpo pensati per idratare senza appesantire. Texture piacevoli,
              ingredienti trasparenti, risultati visibili già dalla prima applicazione.
            </p>

            <p className="font-sans text-warm-600 leading-relaxed mb-8 text-sm sm:text-base">
              Selezioniamo prodotti corpo dove la formulazione è pensata per il clima italiano
              e per routine sostenibili. Idratazione profonda, nutrimento, tonicità.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-8">
              {[
                { title: 'Idratazione profonda', desc: 'Formule ad alta penetrazione cutanea' },
                { title: 'Texture sensoriale', desc: 'Assorbimento rapido, senza residui unti' },
                { title: 'Sostenibilità', desc: 'Packaging responsabile e formulazioni eco' },
                { title: 'Tollerabilità', desc: 'Testate su pelli sensibili e reattive' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-cream-100 transition-colors">
                  <span className="mt-1 w-5 h-5 rounded-lg bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-sm bg-forest-500" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-medium text-warm-900">{item.title}</p>
                    <p className="font-sans text-xs text-warm-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#selezione"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('selezione')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-600 text-cream-50 font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md"
            >
              Il metodo di selezione
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Image - right on desktop */}
          <div className="animate-on-scroll from-right order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] max-h-[540px]">
                <img
                  src="./images/corpo_body.jpg"
                  alt="Prodotti corpo FIORIVIA"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/20 to-transparent" />
              </div>

              {/* Stats card */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-forest-800/90 backdrop-blur-sm rounded-2xl p-4 max-w-[160px] sm:max-w-[180px]">
                <p className="font-serif text-3xl text-cream-50 font-medium mb-1">98%</p>
                <p className="font-mono text-[10px] text-forest-200 tracking-wider leading-tight">
                  Ingredienti naturali o naturali-equivalenti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
