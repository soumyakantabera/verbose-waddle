import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <section id="newsletter" className="py-16 sm:py-24 bg-forest-800 overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 rounded-full border border-forest-600/20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full border border-forest-600/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Image */}
        <div className="relative mb-8 sm:mb-12 animate-on-scroll">
          <div className="rounded-2xl overflow-hidden aspect-[21/9] max-h-[300px]">
            <img
              src="./images/unisciti_journal.jpg"
              alt="Entra nel cerchio FIORIVIA"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-800/80" />
          </div>
        </div>

        <div className="text-center animate-on-scroll">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="block w-6 h-px bg-forest-400" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-forest-300">
              Entra nel cerchio
            </span>
            <span className="block w-6 h-px bg-forest-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-cream-50 mb-4 text-balance">
            Entra nel primo cerchio FIORIVIA
          </h2>

          <p className="font-sans text-cream-200 mb-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Contenuti esclusivi del Journal, accesso anticipato ai prodotti e routine
            personalizzate prima dell'apertura.
          </p>

          <p className="font-mono text-xs text-forest-300 tracking-wider mb-8">
            Perfetto. Ti scriveremo appena FIORIVIA aprirà le porte.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left max-w-2xl mx-auto">
            {[
              { icon: '📖', label: 'Contenuti esclusivi', desc: 'Articoli del Journal in anteprima' },
              { icon: '🌿', label: 'Routine guidate', desc: 'Suggerimenti personalizzati' },
              { icon: '📥', label: 'Guida INCI gratis', desc: 'INCI senza ansia, da scaricare' },
            ].map((b) => (
              <div key={b.label} className="flex items-start gap-3 bg-forest-700/50 rounded-xl p-3 sm:p-4">
                <span className="text-lg">{b.icon}</span>
                <div>
                  <p className="font-mono text-xs text-cream-200 tracking-wider mb-0.5">{b.label}</p>
                  <p className="font-sans text-xs text-cream-400">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          {submitted ? (
            <div className="max-w-md mx-auto bg-forest-700/60 border border-forest-500/40 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-3">✨</div>
              <p className="font-serif text-xl text-cream-50 mb-2">Sei dentro il cerchio!</p>
              <p className="font-sans text-cream-300 text-sm">
                Perfetto. Ti scriveremo appena FIORIVIA aprirà le porte.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email"
                  required
                  className="flex-1 bg-forest-700/60 border border-forest-500/40 text-cream-100 placeholder-cream-400/60 font-sans text-sm px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-forest-400/50 focus:border-forest-400 transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-cream-100 hover:bg-cream-50 disabled:opacity-70 text-warm-900 font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg flex-shrink-0"
                >
                  {loading ? '...' : 'Unisciti'}
                </button>
              </div>
              <p className="font-mono text-[10px] text-cream-500 tracking-wider mt-3">
                Nessuno spam. Puoi cancellarti quando vuoi.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
