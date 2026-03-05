export default function Benessere() {
  return (
    <section id="benessere" className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-forest-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-500">
              06 / BENESSERE
            </span>
            <span className="block w-8 h-px bg-forest-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-warm-900 mb-4 text-balance">
            Benessere integrale.{' '}
            <em className="not-italic text-forest-600">Mente e corpo.</em>
          </h2>
          <p className="font-sans text-warm-700 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Integratori e rituali per equilibrare corpo e mente. Formulazioni selezionate
            con criteri rigorosi di biodisponibilità e tollerabilità.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 stagger-children">
          {[
            {
              image: './images/benessere_supplements.jpg',
              title: 'Integratori',
              desc: 'Supplementi con formulazioni ad alta biodisponibilità, senza additivi superflui.',
              meta: 'Vitamina D · Omega-3 · Magnesio',
            },
            {
              image: './images/selezione_herbarium.jpg',
              title: 'Erbario & Botanica',
              desc: 'Estratti fitoterapici selezionati, adattogeni e preparati botanici tradizionali italiani.',
              meta: 'Ashwagandha · Rosmarino · Calendula',
            },
            {
              image: './images/essenza_oil.jpg',
              title: 'Aromaterapia',
              desc: 'Oli essenziali puri e diffusori per rituale quotidiano di benessere e mindfulness.',
              meta: 'Lavanda · Eucalipto · Bergamotto',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden bg-cream-50 border border-cream-200 card-hover"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-xl text-cream-50 font-medium">{item.title}</h3>
                  <p className="font-mono text-[10px] text-cream-300 tracking-wider mt-1">{item.meta}</p>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="font-sans text-sm text-warm-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide feature card */}
        <div className="animate-on-scroll">
          <div className="bg-forest-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="font-mono text-xs tracking-widest uppercase text-forest-300 mb-3 block">
                  Programma FIORIVIA
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 mb-4">
                  Routine personalizzate per il tuo benessere
                </h3>
                <p className="font-sans text-cream-300 text-sm leading-relaxed mb-6">
                  Non vendiamo prodotti singoli: costruiamo routine complete e personalizzate
                  per il tuo stile di vita, clima e obiettivi. Dal mattino alla sera, dalla
                  pelle ai capelli, dall'interno all'esterno.
                </p>
                <a
                  href="#newsletter"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 bg-cream-50 hover:bg-cream-100 text-warm-900 font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300"
                >
                  Ricevi le guide gratuite
                </a>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src="./images/benessere_supplements.jpg"
                  alt="Routine benessere FIORIVIA"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-700 via-forest-700/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
