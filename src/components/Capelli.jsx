export default function Capelli() {
  return (
    <section id="capelli" className="py-16 sm:py-24 bg-warm-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll from-left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] max-h-[520px]">
                <img
                  src="./images/capelli_hair.jpg"
                  alt="Capelli FIORIVIA - shampoo e maschere"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-forest-500/20 float-gentle hidden sm:block" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll from-right">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-forest-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-300">
                05 / CAPELLI
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream-50 leading-tight mb-4 text-balance">
              Per i capelli.{' '}
              <em className="not-italic text-forest-300">Con formulazioni pulite.</em>
            </h2>

            <p className="font-sans text-cream-200 leading-relaxed mb-4 text-sm sm:text-base">
              Shampoo, maschere e styling selezionati per tollerabilità, leggerezza e risultati
              visibili. Formulazioni pulite per capelli sani, brillanti e gestibili.
            </p>

            <p className="font-sans text-cream-300 leading-relaxed mb-8 text-sm sm:text-base">
              Selezioniamo prodotti capelli senza solfati aggressivi, senza siliconi pesanti,
              con attivi funzionali come keratina idrolizzata, pantenolo e olio di argan certificato.
            </p>

            {/* Product types grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: '💧', label: 'Shampoo', desc: 'Senza solfati aggressivi' },
                { icon: '✨', label: 'Maschere', desc: 'Nutrizione profonda' },
                { icon: '🌿', label: 'Oli', desc: 'Senza siliconi pesanti' },
                { icon: '💨', label: 'Styling', desc: 'Leggerezza e controllo' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-forest-800/60 border border-forest-700/60 rounded-xl p-3 sm:p-4 hover:bg-forest-700/60 transition-colors"
                >
                  <span className="text-xl mb-2 block">{item.icon}</span>
                  <p className="font-mono text-xs text-forest-200 tracking-wider mb-1">{item.label}</p>
                  <p className="font-sans text-xs text-cream-400 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#journal"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 border border-forest-400/60 hover:border-forest-300 text-cream-200 hover:text-cream-50 font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300"
            >
              Leggi le guide
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
