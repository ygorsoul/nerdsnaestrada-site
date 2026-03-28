import { Check, Video, Image, FileText, Package, Handshake, Camera, Smartphone, Plane } from 'lucide-react'

const equipment = [
  {
    icon: Plane,
    name: 'Drone DJI Mini 2',
    spec: 'Filmagens aéreas 4K',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    icon: Camera,
    name: 'Osmo Pocket DJI',
    spec: 'Estabilização cinematográfica',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Smartphone,
    name: 'iPhone 14 Pro',
    spec: 'Câmera principal 48MP',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
]

const plans = [
  {
    icon: Video,
    name: 'Publi Reels',
    price: 'R$ 700',
    priceNum: 700,
    period: 'por vídeo',
    color: 'green',
    features: [
      'Vídeo de até 90 segundos',
      'Roteiro estratégico incluso',
      'Gravação em 4K / HD',
      'Menção e link na bio',
      'Relatório de desempenho',
    ],
    cta: 'Contratar Reels',
    highlight: false,
  },
  {
    icon: Package,
    name: 'Pacote Premium',
    price: 'R$ 2.000',
    priceNum: 2000,
    period: '3 Reels + 3 Stories',
    color: 'amber',
    badge: 'Mais Vendido',
    features: [
      '3 Reels produzidos (4K)',
      '3 Stories interativos',
      'Planejamento de campanha',
      'Link na bio + Swipe-up',
      'Relatório completo de alcance',
      'Suporte direto via WhatsApp',
    ],
    cta: 'Contratar Pacote',
    highlight: true,
  },
  {
    icon: Image,
    name: 'Publi Post',
    price: 'R$ 400',
    priceNum: 400,
    period: 'por post',
    color: 'orange',
    features: [
      'Post no Feed (carrossel ou foto)',
      'Legenda com storytelling',
      'Hashtags estratégicas',
      'Marca tagueada',
      'Relatório de alcance',
    ],
    cta: 'Contratar Post',
    highlight: false,
  },
  {
    icon: FileText,
    name: 'Publi Story',
    price: 'R$ 150',
    priceNum: 150,
    period: 'por story',
    color: 'purple',
    features: [
      'Até 3 frames por story',
      'Link direto (Swipe-up)',
      'Enquete ou sticker interativo',
      'Menção à marca',
    ],
    cta: 'Contratar Story',
    highlight: false,
  },
  {
    icon: Handshake,
    name: 'Permutas & Eventos',
    price: 'A negociar',
    priceNum: 0,
    period: 'proposta personalizada',
    color: 'sky',
    features: [
      'Produtos e serviços de viagem',
      'Equipamentos e acessórios',
      'Participação em eventos',
      'Parceria de longa duração',
    ],
    cta: 'Falar no WhatsApp',
    highlight: false,
  },
]

const colorMap = {
  green:  { border: 'border-green-500/30 hover:border-green-500/60', icon: 'bg-green-500/15 border-green-500/30 text-green-400', badge: 'text-green-400', check: 'text-green-400', btn: 'border-green-500/40 text-green-400 hover:bg-green-500/10' },
  amber:  { border: 'border-amber-500/50', icon: 'bg-amber-500/15 border-amber-500/30 text-amber-400', badge: 'text-amber-400', check: 'text-amber-400', btn: 'bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 font-bold border-transparent' },
  orange: { border: 'border-orange-500/30 hover:border-orange-500/60', icon: 'bg-orange-500/15 border-orange-500/30 text-orange-400', badge: 'text-orange-400', check: 'text-orange-400', btn: 'border-orange-500/40 text-orange-400 hover:bg-orange-500/10' },
  purple: { border: 'border-purple-500/30 hover:border-purple-500/60', icon: 'bg-purple-500/15 border-purple-500/30 text-purple-400', badge: 'text-purple-400', check: 'text-purple-400', btn: 'border-purple-500/40 text-purple-400 hover:bg-purple-500/10' },
  sky:    { border: 'border-sky-500/30 hover:border-sky-500/60', icon: 'bg-sky-500/15 border-sky-500/30 text-sky-400', badge: 'text-sky-400', check: 'text-sky-400', btn: 'border-sky-500/40 text-sky-400 hover:bg-sky-500/10' },
}

export default function ServicesPricing() {
  const whatsapp = 'https://wa.me/5521990974226'

  const handleCTA = (plan) => {
    const msg = encodeURIComponent(
      `Olá! Vi o site dos Nerds na Estrada e tenho interesse no serviço: ${plan.name} (${plan.price}). Podemos conversar?`
    )
    window.open(`${whatsapp}?text=${msg}`, '_blank')
  }

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Tabela de Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Invista em conteúdo{' '}
            <span className="text-gradient-orange">que converte</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Produções de alta qualidade para marcas que querem aparecer onde o público está — em viagem, no Instagram e no TikTok.
          </p>
        </div>

        {/* Equipment Banner */}
        <div className="glass rounded-2xl p-5 mb-12 border border-white/10">
          <p className="text-center text-gray-400 text-sm font-medium mb-4">
            Toda produção gravada com equipamentos profissionais:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {equipment.map((eq) => {
              const Icon = eq.icon
              return (
                <div
                  key={eq.name}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${eq.bg}`}
                >
                  <Icon size={18} className={eq.color} strokeWidth={1.5} />
                  <div>
                    <p className={`text-sm font-bold ${eq.color}`}>{eq.name}</p>
                    <p className="text-gray-500 text-xs">{eq.spec}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon
            const c = colorMap[plan.color]
            return (
              <div
                key={plan.name}
                className={`relative glass rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 flex flex-col ${c.border} ${
                  plan.highlight ? 'ring-2 ring-amber-500/40 shadow-xl shadow-amber-500/10' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 text-xs font-black rounded-full shadow-lg uppercase tracking-wide">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 ${c.icon}`}>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-lg">{plan.name}</h3>
                    <p className="text-gray-500 text-xs">{plan.period}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-black ${c.badge}`}>{plan.price}</span>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${c.check}`} strokeWidth={2.5} />
                      <span className="text-gray-400 text-sm leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleCTA(plan)}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm border transition-all duration-200 hover:scale-105 cursor-pointer ${c.btn}`}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Todos os valores são referências. Pacotes customizados disponíveis.{' '}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 font-semibold hover:underline"
            >
              Fale diretamente pelo WhatsApp.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
