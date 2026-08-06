import { useEffect, useRef, useState } from 'react'
import { Check, Copy, ExternalLink } from 'lucide-react'

/*
 * Cupons ativos — revisado em 06/08/2026.
 *
 * NOTA INTERNA (não exibida): a Nomad enviou o link de afiliado com atribuição
 * (guestcode + gcid, pid=Parcerias). O `href` do card já é esse link — ele
 * carrega o código no cadastro, então a conversão fica rastreada.
 *
 * Para exibir a logo de uma marca: coloque o arquivo em /public e preencha
 * `logo` — o lettermark é usado apenas como fallback.
 */
const cupons = [
  {
    marca: 'Nomad',
    categoria: 'Conta e cartão internacional',
    // Nomad (fintech) — nada a ver com a Keep Nomad da seção de parceiros.
    logo: '/nomad-wordmark.jpg',
    beneficio: 'US$ 20 de cashback',
    descricao:
      'Vinte dólares (ou euros) de cashback na sua primeira conversão de moeda. Conta internacional sem mensalidade — é a que a gente usa para gastar fora do Brasil.',
    codigo: 'NERDSNAESTRADA',
    href: 'https://site.nomadglobal.com/signup/steps?guestcode=NERDSNAESTRADA&gcid=01KXP37C8742C1CW7REKPCBJYZ&shortlink=NERDSNAESTRADA&af_xp=app&deep_link_sub1=NERDSNAESTRADA&af_dp=https%3A%2F%2Fsite.nomadglobal.com%2Fsignup%3Fguestcode%3DNERDSNAESTRADA%26gcid%3D01KXP37C8742C1CW7REKPCBJYZ&c=NERDSNAESTRADA&pid=Parcerias&deep_link_value=guest_code&source_caller=ui',
    cta: 'Abrir conta na Nomad',
    instrucao:
      'O link já abre o cadastro com o código NERDSNAESTRADA preenchido — se ele não aparecer, digite manualmente.',
  },
  {
    marca: 'Insider',
    categoria: 'Roupas tecnológicas',
    logo: '/insider-wordmark.png',
    beneficio: 'Até 50% off no outlet',
    descricao:
      'Outlet com até 50% de desconto e o cupom já aplicado no carrinho. São as camisetas que aguentam semanas de estrada sem cheiro nem amassado.',
    codigo: 'NERDSNAESTRADAOFICIAL',
    href: 'https://www.insiderstore.com.br/discount/NERDSNAESTRADAOFICIAL?redirect=/collections/outlet/?utm_source=influmkt&utm_medium=3c994aaa&utm_campaign=NERDSNAESTRADAOFICIAL&cupom=NERDSNAESTRADAOFICIAL',
    cta: 'Ir para o outlet com desconto',
    instrucao: 'O link já entra com o cupom aplicado — não precisa digitar nada.',
  },
]

function CodigoCopiavel({ codigo }) {
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    if (!copiado) return
    const t = setTimeout(() => setCopiado(false), 2000)
    return () => clearTimeout(t)
  }, [copiado])

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo)
      setCopiado(true)
    } catch {
      /* clipboard bloqueado (http, permissão) — o código segue visível na tela */
    }
  }

  return (
    <button
      onClick={copiar}
      aria-label={`Copiar cupom ${codigo}`}
      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl border border-dashed border-stone-300 bg-cream-100 hover:border-amber-500 hover:bg-cream-200 active:scale-[0.98] transition-all duration-200 cursor-pointer group/code"
    >
      {/* break-all em vez de truncate: cupom cortado é cupom inútil — se não
          couber, quebra a linha em vez de esconder caractere. */}
      <span className="min-w-0 font-semibold text-stone-800 tracking-wide text-sm text-left break-all">
        {codigo}
      </span>
      <span
        className={`flex items-center gap-1.5 text-xs font-medium flex-shrink-0 transition-colors ${
          copiado ? 'text-sage-600' : 'text-stone-500 group-hover/code:text-amber-600'
        }`}
      >
        {copiado ? <Check size={14} /> : <Copy size={14} />}
        {copiado ? 'Copiado!' : 'Copiar'}
      </span>
    </button>
  )
}

function CupomCard({ cupom, index }) {
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
    <article
      ref={ref}
      className={`flex flex-col h-full rounded-2xl border border-stone-200 bg-white overflow-hidden hover:border-stone-400 hover:shadow-md transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6 sm:p-7 flex flex-col flex-1">

        {/* Marca — logo empilhada acima do nome para não repetir a wordmark ao lado do título */}
        <div className="mb-5">
          <div className="mb-3.5">
            {cupom.logo ? (
              <img
                src={cupom.logo}
                alt={`Logo ${cupom.marca}`}
                className="h-10 w-auto rounded-lg"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex w-10 h-10 rounded-lg bg-cream-300 items-center justify-center font-display text-xl text-stone-700"
              >
                {cupom.marca.charAt(0)}
              </span>
            )}
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-stone-800 leading-tight">{cupom.marca}</h3>
          <p className="text-stone-400 text-xs">{cupom.categoria}</p>
        </div>

        {/* Benefício */}
        <p className="inline-flex self-start items-center px-3 py-1.5 rounded-full bg-amber-400/15 text-amber-600 text-xs font-semibold uppercase tracking-wide mb-4">
          {cupom.beneficio}
        </p>

        <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">{cupom.descricao}</p>

        {/* Código */}
        <div className="mb-2">
          <p className="text-stone-400 text-[11px] uppercase tracking-widest font-medium mb-2">Cupom</p>
          <CodigoCopiavel codigo={cupom.codigo} />
        </div>
        <p className="text-stone-400 text-xs leading-relaxed mb-5">{cupom.instrucao}</p>

        {/* CTA */}
        <a
          href={cupom.href}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-stone-800 text-stone-50 text-sm font-medium rounded-full hover:bg-stone-900 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-sm"
        >
          {cupom.cta}
          <ExternalLink size={15} className="flex-shrink-0" />
        </a>
      </div>
    </article>
  )
}

export default function CuponsSection() {
  return (
    <section id="cupons" aria-label="Cupons ativos" className="pt-4 pb-14 sm:pt-6 sm:pb-20" style={{ background: '#faf8f3' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6" style={{ gridAutoRows: '1fr' }}>
          {cupons.map((c, i) => (
            <CupomCard key={c.marca} cupom={c} index={i} />
          ))}
        </div>

        <p className="mt-8 text-stone-400 text-xs leading-relaxed max-w-2xl">
          Só divulgamos marca que a gente usa de verdade na estrada. Alguns links são de parceria
          e podem gerar comissão para o canal — o preço para você é o mesmo, ou menor por causa do cupom.
        </p>
      </div>
    </section>
  )
}
