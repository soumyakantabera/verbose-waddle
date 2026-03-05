const articles = [
  {
    id: 1,
    slug: 'niacinamide',
    num: '01',
    title: 'Niacinamide: come usarla davvero',
    desc: 'Tutto quello che devi sapere sulla niacinamide: concentrazioni, abbinamenti, controindicazioni e le formulazioni che funzionano davvero.',
    image: './images/journal_niacinamide.jpg',
    category: 'Attivi',
    readTime: '5 min',
    date: 'Feb 2025',
  },
  {
    id: 2,
    slug: 'routine-sensibile',
    num: '02',
    title: 'Routine essenziale per pelle sensibile',
    desc: 'Meno passaggi, più coerenza. Una routine minimalista che rispetta la barriera cutanea, riduce infiammazione e nutre senza sovraccaricare.',
    image: './images/journal_routine.jpg',
    category: 'Routine',
    readTime: '7 min',
    date: 'Gen 2025',
  },
  {
    id: 3,
    slug: 'inci-senza-ansia',
    num: '03',
    title: 'Come leggere un INCI senza ansia',
    desc: 'Una guida pratica per capire la lista ingredienti dei cosmetici. Cosa guardare per primo, cosa ignorare e come scegliere con consapevolezza.',
    image: './images/journal_inci.jpg',
    category: 'Guida',
    readTime: '8 min',
    date: 'Dic 2024',
  },
  {
    id: 4,
    slug: 'spf-protezione',
    num: '04',
    title: 'SPF: guida completa alla protezione solare',
    desc: 'Texture, quantità, reapplication: tutto quello che serve per proteggere la pelle dal sole tutto l\'anno. Quale SPF scegliere per ogni tipo di pelle.',
    image: './images/journal_sunscreen.jpg',
    category: 'Protezione',
    readTime: '6 min',
    date: 'Nov 2024',
  },
  {
    id: 5,
    slug: 'skincare-uomo',
    num: '05',
    title: 'Skincare essenziale per l\'uomo',
    desc: 'Una routine semplice e efficace per la pelle maschile. Detergenza, idratazione, protezione: i tre passaggi fondamentali per ogni tipo di pelle.',
    image: './images/pelle_cream.jpg',
    category: 'Routine',
    readTime: '4 min',
    date: 'Ott 2024',
  },
  {
    id: 6,
    slug: 'vitamina-c',
    num: '06',
    title: 'Vitamina C in skincare: quale scegliere',
    desc: 'Acido ascorbico, ascorbil glucoside, MAP: le diverse forme di vitamina C in cosmetica, le loro differenze e come integrarle nella tua routine.',
    image: './images/essenza_oil.jpg',
    category: 'Attivi',
    readTime: '6 min',
    date: 'Set 2024',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="py-16 sm:py-24 bg-cream-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="animate-on-scroll from-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-forest-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-500">
                08 / JOURNAL
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-warm-900 mb-3 text-balance">
              Il Journal FIORIVIA
            </h2>
            <p className="font-sans text-warm-700 text-sm sm:text-base max-w-lg leading-relaxed">
              Guide, ingredienti e routine per scegliere con consapevolezza. Contenuti scritti
              da esperti, in italiano chiaro.
            </p>
          </div>
          <div className="animate-on-scroll from-right flex-shrink-0">
            <a
              href="#newsletter"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 border border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-cream-50 font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300"
            >
              Tutti gli articoli
            </a>
          </div>
        </div>

        {/* Featured article */}
        <div className="mb-6 sm:mb-8 animate-on-scroll">
          <div className="group grid grid-cols-1 lg:grid-cols-2 bg-warm-900 rounded-2xl overflow-hidden card-hover cursor-pointer">
            <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px]">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-warm-900/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent lg:hidden" />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] bg-forest-600/90 text-cream-100 px-2 py-1 rounded-full tracking-wider">
                  {articles[0].category}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs text-forest-400 tracking-wider">{articles[0].num}</span>
                <span className="font-mono text-xs text-cream-400 tracking-wider">{articles[0].readTime} lettura</span>
                <span className="font-mono text-xs text-cream-500 tracking-wider">{articles[0].date}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 mb-3 leading-tight">
                {articles[0].title}
              </h3>
              <p className="font-sans text-cream-300 text-sm leading-relaxed mb-6">
                {articles[0].desc}
              </p>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-forest-300 group-hover:text-forest-200 transition-colors tracking-wider">
                Leggi l'articolo
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger-children">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="group bg-cream-50 border border-cream-200 rounded-2xl overflow-hidden card-hover cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] bg-cream-50/90 text-warm-800 px-2 py-0.5 rounded-full tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[10px] text-forest-400 tracking-wider">{article.num}</span>
                  <span className="font-mono text-[10px] text-warm-500">·</span>
                  <span className="font-mono text-[10px] text-warm-500 tracking-wider">{article.readTime}</span>
                  <span className="font-mono text-[10px] text-warm-500">·</span>
                  <span className="font-mono text-[10px] text-warm-500 tracking-wider">{article.date}</span>
                </div>
                <h3 className="font-serif text-lg text-warm-900 font-medium mb-2 leading-tight line-clamp-2 group-hover:text-forest-700 transition-colors">
                  {article.title}
                </h3>
                <p className="font-sans text-xs text-warm-600 leading-relaxed line-clamp-3 mb-3">
                  {article.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-forest-600 group-hover:text-forest-700 transition-colors tracking-wider">
                  Leggi
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
