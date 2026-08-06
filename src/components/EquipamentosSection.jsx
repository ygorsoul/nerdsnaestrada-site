import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, AlertTriangle } from 'lucide-react'

/* Lista real de componentes usados na elétrica e no acabamento do trailer.
 * `alerta` marca item cuja loja de origem não é oficial. */
const grupos = [
  {
    titulo: 'Energia solar',
    descricao: 'Captação e condução da energia dos painéis até o controlador.',
    itens: [
      { nome: 'Controladora MPPT', url: 'https://meli.la/2M9X4pu' },
      { nome: 'Placas solares', url: 'https://meli.la/1ize1CK', alerta: 'Loja não oficial — confira a reputação do vendedor antes de comprar.' },
      { nome: 'Kit cabo solar fotovoltaico 6mm — 10m preto + 10m vermelho', url: 'https://meli.la/1fezMah' },
      { nome: '10 pares de conector MC4 + chave', url: 'https://meli.la/1GkSzZS' },
      { nome: 'Conector MC4 Y paralelo 4 vias 50A', url: 'https://meli.la/2o3JpR5' },
    ],
  },
  {
    titulo: 'Baterias e inversor',
    descricao: 'O banco de energia que mantém o trailer rodando fora da tomada.',
    itens: [
      { nome: 'Bateria 314Ah JH Power', url: 'https://meli.la/2izWQPT' },
      { nome: 'Inversor e carregador externo Hent 2000W 12V–220V 2KVA', url: 'https://meli.la/2Q6g8RM' },
      { nome: 'Disjuntor corrente contínua 250A — bateria e inversor', url: 'https://meli.la/1i6Nzrn' },
      { nome: 'Barramento de cobre da bateria', url: 'https://meli.la/1NUuGi8' },
      { nome: 'Voltímetro da bateria', url: 'https://meli.la/1uNEinx' },
    ],
  },
  {
    titulo: 'Elétrica e instalação',
    descricao: 'Distribuição, proteção e os pontos de luz e tomada dentro do trailer.',
    itens: [
      { nome: 'Caixa de fusível 12 vias com LED e barramento para motorhome', url: 'https://meli.la/1n9sU8z' },
      { nome: 'Painel elétrico 5 chaves, 2 USB e voltímetro', url: 'https://meli.la/1gdiwnZ' },
      { nome: 'Conectores WAGO', url: 'https://meli.la/1cZiaiF' },
      { nome: 'Tomada automotiva 12V para motorhome (2 peças)', url: 'https://meli.la/1gEpuuV' },
      { nome: 'Tomada tripla 4x2 Lumenx 10A branca', url: 'https://meli.la/1VRThxi' },
      { nome: 'Interruptor smart Onzzi 2 teclas — Wi-Fi, Alexa e Tuya', url: 'https://meli.la/33p6CBe' },
      { nome: 'Interruptor gangorra redondo on/off', url: 'https://meli.la/1exJUgN' },
      { nome: 'Placa cega 4x2 branca com suporte — kit 3 Margirius Sleek', url: 'https://meli.la/2ynAkb1' },
      { nome: 'LED 12V amarelo quente', url: 'https://meli.la/1btcECK' },
    ],
  },
  {
    titulo: 'Conforto e acabamento',
    descricao: 'O que faz o trailer ser casa: ar, água e piso.',
    itens: [
      { nome: 'Exaustor de ar lateral calha 12V preto — motorhome e trailer', url: 'https://meli.la/1jMde6n' },
      { nome: 'Mostrador de nível da caixa d’água', url: 'https://meli.la/1Whv79j' },
      { nome: 'Desempenadeira A4 para cola de piso vinílico', url: 'https://meli.la/2QTjVrU' },
    ],
  },
  {
    titulo: 'Ferramentas',
    descricao: 'O mínimo para não instalar nada no escuro.',
    itens: [
      { nome: 'Multímetro', url: 'https://meli.la/2irU9Pa' },
    ],
  },
]

const totalItens = grupos.reduce((soma, g) => soma + g.itens.length, 0)

function ItemLink({ item }) {
  return (
    <li>
      <a
        href={item.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="group flex items-start gap-3 py-3.5 px-4 -mx-1 rounded-xl hover:bg-white transition-colors duration-200"
      >
        <span className="flex-1 min-w-0">
          <span className="block text-stone-700 text-sm leading-snug group-hover:text-stone-900 transition-colors">
            {item.nome}
          </span>
          {item.alerta && (
            <span className="flex items-start gap-1.5 mt-1.5 text-amber-600 text-xs leading-snug">
              <AlertTriangle size={12} className="flex-shrink-0 mt-0.5" />
              {item.alerta}
            </span>
          )}
        </span>
        <ArrowUpRight
          size={16}
          className="flex-shrink-0 mt-0.5 text-stone-300 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
        />
      </a>
    </li>
  )
}

function Grupo({ grupo, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-2 pb-3 border-b border-cream-400">
        <h3 className="font-display text-xl sm:text-2xl text-stone-800">{grupo.titulo}</h3>
        <p className="text-stone-400 text-xs mt-1">{grupo.descricao}</p>
      </div>
      <ul className="divide-y divide-cream-300">
        {grupo.itens.map((item) => (
          <ItemLink key={item.url} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default function EquipamentosSection() {
  return (
    <section
      id="equipamentos"
      aria-label="Equipamentos do trailer"
      className="py-16 sm:py-24"
      style={{ background: 'linear-gradient(170deg, #ede5d4 0%, #f5f0e6 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">
            A pergunta que mais chega na DM
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight mb-4">
            O que a gente<br />
            <em>usou no trailer</em>
          </h2>
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed">
            Os {totalItens} componentes da elétrica, do solar e do acabamento — exatamente os que estão
            instalados hoje. Sem versão idealizada: é a lista de compras real da reforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-10 sm:gap-y-12">
          {grupos.map((g, i) => (
            <Grupo key={g.titulo} grupo={g} index={i} />
          ))}
        </div>

        <p className="mt-12 pt-8 border-t border-stone-300/60 text-stone-500 text-xs leading-relaxed max-w-2xl">
          Links do Mercado Livre. Preço e disponibilidade mudam sem aviso — confira antes de fechar
          a compra. Dimensione o sistema para o <em>seu</em> consumo: o que serve para o nosso trailer
          pode ficar apertado ou sobrando no seu.
        </p>
      </div>
    </section>
  )
}
