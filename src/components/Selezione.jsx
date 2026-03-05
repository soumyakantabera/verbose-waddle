const criteria = [
  {
    num: '01',
    title: 'Formulazione',
    desc: 'Leggiamo gli INCI prima delle recensioni. Valutiamo coerenza tra claim e composizione. Cerchiamo formulazioni intelligenti dove ricerca scientifica incontra ingredienti naturali.',
  },
  {
    num: '02',
    title: 'Naturalità & Sicurezza',
    desc: 'Selezioniamo prodotti con alta percentuale di ingredienti naturali, ma non escludiamo sintetici sicuri quando migliorano efficacia e tollerabilità.',
  },
  {
    num: '03',
    title: 'Efficacia reale',
    desc: 'Un prodotto eccellente deve funzionare nella vita reale: con il clima italiano, per pelli stressate, in routine sostenibili.',
  },
  {
    num: '04',
    title: 'Piacere d\'uso',
    desc: 'Texture, profumo, rituale: se non è piacevole, non entra nella routine. Il benessere è anche un\'esperienza sensoriale.',
  },
  {
    num: '05',
    title: 'Sostenibilità',
    desc: 'Packaging responsabile, formule concentrate, brand con visione a lungo termine. La sostenibilità ambientale è un criterio di selezione.',
  },
  {
    num: '06',
    title: 'Trasparenza',
    desc: 'INCI completo, claim verificabili, nessuna promessa impossibile. La trasparenza è il fondamento della nostra relazione con te.',
  },
]

export default function Selezione() {
  return (
    <section id="selezione" className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
          <div className="animate-on-scroll from-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-forest-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-500">
                07 / SELEZIONE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-warm-900 leading-tight mb-6 text-balance">
              La selezione è{' '}
              <em className="not-italic text-forest-600">il nostro primo prodotto.</em>
            </h2>
            <p className="font-sans text-warm-700 text-sm sm:text-base leading-relaxed">
              Ogni prodotto FIORIVIA supera un punteggio su attivi, tollerabilità,
              packaging sostenibile e piacere d'uso. La nostra selezione è il risultato
              di un processo rigoroso e trasparente.
            </p>
          </div>

          <div className="animate-on-scroll from-right">
            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3]">
              <img
                src="./images/selezione_herbarium.jpg"
                alt="Selezione FIORIVIA - herbarium botanico"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
                <p className="font-serif text-2xl sm:text-3xl text-cream-50 mb-1">Il metodo FIORIVIA</p>
                <p className="font-mono text-xs text-cream-300 tracking-wider">
                  Scienza + Natura + Gusto italiano
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Criteria grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 stagger-children">
          {criteria.map((item) => (
            <div
              key={item.num}
              className="bg-cream-100 border border-cream-200 rounded-2xl p-5 sm:p-6 card-hover"
            >
              <div className="flex items-start gap-4 mb-3">
                <span className="font-mono text-xs text-forest-400 tracking-wider mt-0.5">{item.num}</span>
                <h3 className="font-serif text-xl text-warm-900 font-medium">{item.title}</h3>
              </div>
              <p className="font-sans text-sm text-warm-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Future line teaser */}
        <div className="animate-on-scroll">
          <div className="bg-warm-900 rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <span className="font-mono text-xs tracking-widest uppercase text-forest-300 mb-3 block">
                Coming soon
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 mb-4">
                La futura linea FIORIVIA
              </h3>
              <p className="font-sans text-cream-300 text-sm leading-relaxed mb-6">
                Stiamo sviluppando una linea propria con formulazioni essenziali, routine semplici
                e qualità italiana. Meno prodotti, migliori prodotti. Ogni formula pensata per
                funzionare nel clima italiano.
              </p>
              <a
                href="#newsletter"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 border border-forest-400/60 hover:border-forest-300 text-cream-200 hover:text-cream-50 font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300"
              >
                Sii il primo a saperlo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
