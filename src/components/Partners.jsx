import { useEffect, useRef, useState } from 'react'

const partners = [
  {
    name: 'Sem Parar',
    category: 'Mobilidade & Pagamento',
    logo: '/sem-parar.svg',
    darkBg: false,
    description: 'A maior plataforma de pagamento automático de pedágios do Brasil — parceria perfeita para quem vive na estrada.',
  },
  {
    name: 'Hent Automotivos',
    category: 'Automotivo',
    logo: '/171700939791608.png',
    darkBg: false,
    description: 'Especialistas em preparação veicular que nos ajudaram a garantir mais segurança nas viagens.',
  },
  {
    name: '3TC Isolamento',
    category: 'Tecnologia',
    logo: '/3tc.webp',
    darkBg: false,
    tall: true,
    description: 'Parceria que uniu tecnologia e aventura, levando soluções inovadoras para o conteúdo na estrada.',
  },
  {
    name: 'JH Power',
    category: 'Energia & Baterias',
    logo: '/logo_jh-1024x245.png',
    darkBg: false,
    description: 'Baterias e soluções em energia que fazem parte da nossa jornada rumo à autonomia total no trailer.',
  },
  {
    name: 'Akaso',
    category: 'Câmeras de Ação',
    logo: '/akaso-logo_brandlogos.net_e6fhc.png',
    darkBg: false,
    tall: true,
    description: 'Equipamentos robustos que acompanham cada aventura — das estradas sul-americanas às paisagens mais extremas.',
  },
  {
    name: '70mai',
    category: 'Tecnologia Veicular',
    logo: '/logo_wdg_logo_image.png',
    darkBg: false,
    description: 'Dashcams e acessórios inteligentes que registram cada quilômetro com qualidade e segurança.',
  },
  {
    name: 'Finguide',
    category: 'Finanças & App',
    logo: '/finguide-logo-full.webp',
    darkBg: false,
    description: 'App de finanças que nos ajuda a controlar gastos e planejar a viagem com inteligência.',
  },
  {
    name: 'Keep Nomad',
    category: 'Estilo de Vida Nômade',
    logo: '/KEEP_NOMAD_ID_MARCA-04-1.png',
    darkBg: false,
    description: 'Uma marca que entende a essência do nomadismo — e que apoia quem escolheu o movimento como modo de vida.',
  },
]

function LogoCard({ partner, index }) {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), index * 60); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col h-full rounded-2xl border border-stone-200 overflow-hidden transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${expanded ? 'shadow-md border-stone-400' : 'hover:border-stone-400 hover:shadow-md'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Logo area — toque abre descrição no mobile, hover no desktop */}
      <button
        className={`w-full flex-1 flex items-center justify-center px-6 cursor-pointer ${partner.darkBg ? 'bg-[#05104a]' : 'bg-white'}`}
        style={{ minHeight: '100px' }}
        onClick={() => setExpanded(v => !v)}
        aria-label={`Ver sobre ${partner.name}`}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-auto max-w-[80%] object-contain transition-all duration-400"
          style={{ maxHeight: partner.tall ? '72px' : '44px' }}
        />
      </button>

      {/* Info strip */}
      <div className="px-4 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-stone-700 font-semibold text-xs truncate">{partner.name}</p>
          <p className="text-stone-400 text-[10px] truncate">{partner.category}</p>
        </div>
        {/* Indicador de expansão no mobile */}
        <span className="text-stone-300 text-lg leading-none flex-shrink-0 sm:hidden select-none">
          {expanded ? '−' : '+'}
        </span>
      </div>

      {/* Descrição expandida no mobile (tap) */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${expanded ? 'max-h-32' : 'max-h-0'}`}>
        <p className="px-4 py-3 text-stone-500 text-xs leading-relaxed border-t border-stone-100 bg-white">
          {partner.description}
        </p>
      </div>

      {/* Tooltip hover no desktop */}
      <div className="hidden sm:flex absolute inset-0 bg-stone-800/90 backdrop-blur-sm items-center justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-stone-200 text-xs text-center leading-relaxed">{partner.description}</p>
      </div>
    </div>
  )
}

export default function Partners() {
  const headerRef = useRef(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="parceiros"
      aria-label="Marcas Parceiras"
      className="py-16 sm:py-24"
      style={{ background: 'linear-gradient(170deg, #ede5d4 0%, #f5f0e6 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-10 sm:mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">Quem já esteve conosco</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight mb-4">
            Marcas que acreditaram<br />
            <em>na nossa jornada</em>
          </h2>
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed">
            Empresas que se tornaram parte da nossa história e chegaram junto com a gente onde nenhum anúncio convencional alcança.
          </p>
        </div>

        {/* Logo wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-4" style={{ gridAutoRows: '1fr' }}>
          {partners.map((p, i) => (
            <LogoCard key={p.name} partner={p} index={i} />
          ))}
        </div>

        <p className="text-center text-stone-400 text-xs mb-10 sm:mb-14 italic">
          <span className="hidden sm:inline">Passe o mouse</span>
          <span className="sm:hidden">Toque</span>
          {' '}sobre cada logo para saber mais.
        </p>

        {/* CTA */}
        <div className="border-t border-stone-200 pt-10 sm:pt-12 flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
          <div>
            <blockquote className="font-display text-lg sm:text-xl text-stone-700 italic leading-relaxed mb-3">
              "A parceria com o Nerds na Estrada trouxe um alcance orgânico que dificilmente conseguiríamos em outros canais."
            </blockquote>
            <p className="text-stone-400 text-sm">— Feedback de parceiro</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href="https://wa.me/5521990974226"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-6 py-3.5 bg-stone-800 text-stone-50 font-medium rounded-full hover:bg-stone-900 active:scale-95 hover:scale-105 transition-all duration-200 shadow-sm"
            >
              Quero ser parceiro
            </a>
            <a
              href="https://www.instagram.com/NerdsNaEstradaOficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-6 py-3.5 border border-stone-300 text-stone-700 font-medium rounded-full hover:border-stone-500 active:bg-stone-100 hover:bg-stone-50 transition-all duration-200"
            >
              Ver o conteúdo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
