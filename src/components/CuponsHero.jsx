import { Tag } from 'lucide-react'

const ATUALIZADO_EM = '05 de agosto de 2026'

export default function CuponsHero() {
  return (
    <section
      aria-label="Cupons e descontos"
      className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-texture"
      style={{ background: 'linear-gradient(180deg, #f5f0e6 0%, #faf8f3 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-up">

          <p className="flex items-center gap-2 text-amber-500 text-xs font-semibold uppercase tracking-widest mb-4">
            <Tag size={13} className="flex-shrink-0" />
            Cupons e descontos
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-800 leading-[1.1] mb-5">
            Tudo que a gente usa<br />
            <em>com desconto pra você</em>
          </h1>

          <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl">
            Marca que entra aqui é marca que já rodou com a gente na estrada. Se você for comprar
            de qualquer jeito, use o cupom — sai mais barato pra você e ajuda a manter o projeto na rua.
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-stone-200">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500" />
            </span>
            <span className="text-stone-600 text-xs sm:text-sm">
              Cupons ativos, conferidos em <strong className="font-semibold text-stone-800">{ATUALIZADO_EM}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
