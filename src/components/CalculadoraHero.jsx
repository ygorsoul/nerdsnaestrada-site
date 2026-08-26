import { Calculator } from 'lucide-react'
import t from '../calculadora/textos'

export default function CalculadoraHero() {
  return (
    <section
      aria-label={t.hero.eyebrow}
      className="pt-28 sm:pt-36 pb-10 sm:pb-14 bg-texture"
      style={{ background: 'linear-gradient(180deg, #f5f0e6 0%, #faf8f3 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-up">

          <p className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-widest mb-4">
            <Calculator size={13} className="flex-shrink-0" />
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-800 leading-[1.1] mb-5">
            {t.hero.titulo}<br />
            <em>{t.hero.tituloEnfase}</em>
          </h1>

          <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
            {t.hero.lead}
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-stone-200">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500" />
            </span>
            <span className="text-stone-600 text-xs sm:text-sm">{t.hero.selo}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
