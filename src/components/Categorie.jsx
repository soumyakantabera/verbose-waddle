const categories = [
  {
    id: 'pelle',
    num: '01',
    title: 'Pelle',
    subtitle: 'Skincare essenziale',
    desc: 'Dalla detergenza alla protezione: formulazioni leggere con INCI leggibili e attivi trasparenti.',
    image: './images/pelle_cream.jpg',
    href: '#pelle',
    cta: 'Esplora',
  },
  {
    id: 'corpo',
    num: '02',
    title: 'Corpo',
    subtitle: 'Rituali quotidiani',
    desc: 'Oli, creme e trattamenti per idratare e nutrire con texture piacevoli e ingredienti trasparenti.',
    image: './images/corpo_body.jpg',
    href: '#corpo',
    cta: 'Esplora',
  },
  {
    id: 'capelli',
    num: '03',
    title: 'Capelli',
    subtitle: 'Formulazioni pulite',
    desc: 'Shampoo, maschere e styling per capelli sani, brillanti e gestibili con tollerabilità certificata.',
    image: './images/capelli_hair.jpg',
    href: '#capelli',
    cta: 'Esplora',
  },
  {
    id: 'benessere',
    num: '04',
    title: 'Benessere',
    subtitle: 'Integratori & rituali',
    desc: 'Integratori e rituali per equilibrare corpo e mente. Formulazioni selezionate con criteri rigorosi.',
    image: './images/benessere_supplements.jpg',
    href: '#benessere',
    cta: 'Esplora',
  },
]

export default function Categorie() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="categorie" className="py-16 sm:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-500 mb-3 block">
            Le categorie
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-warm-900 mb-4">
            Una piattaforma italiana di{' '}
            <em className="not-italic text-forest-600">benessere selezionato</em>
          </h2>
          <p className="font-sans text-warm-700 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Botanica, formulazione, rituale. Ogni categoria curata con criteri rigorosi di selezione.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              onClick={(e) => handleClick(e, cat.href)}
              className="group block rounded-2xl overflow-hidden bg-cream-50 border border-cream-200 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark overlay for visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-warm-900/10 to-transparent" />
                {/* Number badge */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] tracking-widest bg-cream-50/90 text-warm-800 px-2 py-1 rounded-full">
                    {cat.num}
                  </span>
                </div>
                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-2xl text-cream-50 font-medium leading-tight">
                    {cat.title}
                  </h3>
                  <p className="font-mono text-xs text-cream-200 tracking-wider">{cat.subtitle}</p>
                </div>
              </div>

              {/* Content below image */}
              <div className="p-4 sm:p-5">
                <p className="font-sans text-sm text-warm-700 leading-relaxed mb-3 line-clamp-3">
                  {cat.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-forest-600 group-hover:text-forest-700 transition-colors tracking-wider">
                  {cat.cta}
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
