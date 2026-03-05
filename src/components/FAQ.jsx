import { useState } from 'react'

const faqs = [
  {
    q: 'Cosa significa "scientifico-naturale"?',
    a: 'Significa che selezioniamo prodotti dove la ricerca scientifica incontra ingredienti naturali. Cerchiamo formulazioni intelligenti che funzionano, con attivi validati dalla scienza e ingredienti di origine botanica quando possibile.',
  },
  {
    q: 'I prodotti sono tutti naturali al 100%?',
    a: 'Selezioniamo prodotti con alta percentuale di ingredienti naturali, ma non escludiamo sintetici sicuri quando migliorano efficacia e tollerabilità. La naturalità è uno dei criteri, non l\'unico.',
  },
  {
    q: 'Ci saranno prodotti FIORIVIA a marchio proprio?',
    a: 'In futuro svilupperemo una linea propria con formulazioni essenziali e qualità italiana. Meno prodotti, migliori prodotti. Iscriviti alla newsletter per essere tra i primi a saperlo.',
  },
  {
    q: 'Avete routine per pelle sensibile?',
    a: 'Sì, la tollerabilità è uno dei nostri criteri principali. Ogni prodotto è valutato per compatibilità con pelli sensibili, reattive e con condizioni come rosacea e dermatite.',
  },
  {
    q: 'Gli articoli del Journal sostituiscono il consiglio medico?',
    a: 'No. I nostri contenuti sono informativi ed educativi. Per condizioni dermatologiche specifiche, consigliamo sempre di consultare un dermatologo o medico specialista.',
  },
  {
    q: 'Come vengono selezionati i prodotti?',
    a: 'Ogni prodotto supera un processo di valutazione su 6 criteri: formulazione (analisi INCI), naturalità e sicurezza, efficacia reale, piacere d\'uso, sostenibilità e trasparenza del brand. Leggiamo gli INCI prima delle recensioni.',
  },
  {
    q: 'Posso richiedere una routine personalizzata?',
    a: 'Al momento FIORIVIA è in fase pre-lancio. Iscriviti alla newsletter per accedere ai contenuti di routine personalizzate quando saremo aperti.',
  },
  {
    q: 'Spedite in tutta Italia?',
    a: 'FIORIVIA è attualmente in fase di sviluppo. Iscriviti alla newsletter per essere informato sulla disponibilità dei prodotti e sulla spedizione.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-forest-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-500">
              09 / FAQ
            </span>
            <span className="block w-8 h-px bg-forest-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-warm-900 mb-3">
            Domande frequenti
          </h2>
          <p className="font-sans text-warm-600 text-sm leading-relaxed">
            Tutto quello che vuoi sapere su FIORIVIA, i nostri criteri e i nostri prodotti.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 stagger-children">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-cream-100 border border-cream-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 hover:bg-cream-200/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-serif text-base sm:text-lg text-warm-900 leading-snug flex-1">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border border-forest-300 flex items-center justify-center text-forest-600 transition-transform duration-300 ${
                    open === i ? 'rotate-45 bg-forest-600 border-forest-600 text-cream-50' : ''
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-4 sm:pb-5">
                  <p className="font-sans text-sm text-warm-700 leading-relaxed border-t border-cream-200 pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact prompt */}
        <div className="mt-10 text-center animate-on-scroll">
          <p className="font-sans text-sm text-warm-600 mb-3">
            Non hai trovato risposta?
          </p>
          <a
            href="mailto:ciao@fiorivia.it"
            className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-mono text-xs tracking-wider underline-anim transition-colors"
          >
            Scrivici a ciao@fiorivia.it
          </a>
        </div>
      </div>
    </section>
  )
}
