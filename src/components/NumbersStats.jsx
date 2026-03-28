import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '+150 mil',   label: 'seguidores',        sub: 'somados nas plataformas'    },
  { value: '+60 mi',    label: 'de views totais',    sub: 'conteúdo orgânico'          },
  { value: '+3 mi',  label: 'likes',              sub: 'engajamento real'           },
  { value: '56%',       label: 'público feminino',   sub: 'perfil de consumo ativo'    },
  { value: '54%',       label: 'de SP',              sub: 'maior hub de consumo BR'    },
  { value: '47%',       label: 'entre 25–34 anos',   sub: 'poder de compra elevado'    },
]

function StatCard({ stat, delay }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`py-7 px-4 border-b border-r border-cream-300 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="font-display text-3xl sm:text-4xl text-stone-800 font-semibold mb-1">{stat.value}</div>
      <div className="text-stone-700 font-medium text-sm mb-1">{stat.label}</div>
      <div className="text-stone-400 text-xs">{stat.sub}</div>
    </div>
  )
}

export default function NumbersStats() {
  return (
    <section id="numeros" aria-label="Mídia Kit — Números e Audiência" className="py-24" style={{ background: '#faf8f3' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">Mídia Kit</p>
          <h2 className="font-display text-3xl sm:text-4xl text-stone-800 leading-tight mb-4">
            Números reais,<br />
            <em>audiência real</em>
          </h2>
          <p className="text-stone-500 leading-relaxed">
            Não trabalhamos com métricas infladas. O que temos é alcance genuíno construído viagem a viagem, história a história.
          </p>
        </div>

        {/* Grade de stats estilo editorial */}
        <div className="border-t border-l border-cream-300 grid grid-cols-2 sm:grid-cols-3">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} delay={i * 80} />
          ))}
        </div>

        {/* Nota */}
        <p className="mt-6 text-stone-400 text-xs italic">
          * Dados consolidados das plataformas Instagram, TikTok e YouTube — atualizados em 2025.
        </p>
      </div>
    </section>
  )
}
