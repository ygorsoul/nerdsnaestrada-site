import { useEffect, useRef, useState } from 'react'

const chapters = [
  {
    year: '2021',
    tag: 'O início de tudo',
    title: 'O grande mochilão e o sonho',
    body: 'Aos 20 anos, deixamos o Brasil com uma mochila nas costas, vontade de aprender espanhol e o sonho de explorar o mundo. Foram 8 meses percorrendo a América do Sul — de Buenos Aires a Mendoza, de Bariloche às estradas que a gente ainda nem sabia que ia amar tanto.',
    detail: 'A jornada precisou ser pausada antes da hora: ficamos presos na Argentina durante a pandemia e voltamos ao Brasil. Mas o bichinho da estrada já tinha entrado.',
  },
  {
    year: '2022–23',
    tag: 'Explorando o quintal',
    title: 'Zerando o Rio de Janeiro',
    body: 'Antes de encarar o exterior de novo, aproveitamos para viajar e "zerar" os destinos dentro do próprio Rio de Janeiro, cidade onde moramos. Uma forma de manter o espírito nômade enquanto nos preparávamos para a próxima aventura.',
    detail: 'Cada canto da cidade virou conteúdo, cada trilha virou história. O Rio nos ensinou que a aventura não precisa estar longe.',
  },
  {
    year: '2024',
    tag: 'A viagem que viralizou',
    title: 'O Ford Ka de R$ 700 que parou a internet',
    body: 'Decididos a ter "as melhores férias da nossas vidas", voltamos para a estrada. Com R$ 700, o Ygor projetou e transformou um Ford Ka Sedan 1.0 — usando caixas de plástico, espuma e cortinas de papelão — em um mini-motorhome totalmente funcional.',
    detail: 'Vivemos 30 dias dentro desse carro, cruzando fronteiras pela América do Sul. A viagem explodiu nas redes, gerou mais de 13 milhões de visualizações e provou de vez que a estrada era o nosso lugar. A repercussão chegou ao Portal Terra.',
    badge: 'Viralizou no Portal Terra',
  },
  {
    year: '2025',
    tag: 'O projeto pioneiro',
    title: 'Um Food Truck virando nossa casa',
    body: 'A brincadeira virou projeto de vida. Compramos um trailer modelo Food Truck zero por R$ 13 mil para construir uma casa definitiva sobre rodas. Com plantas 3D desenhadas e elétrica em desenvolvimento, estamos sendo pioneiros no Brasil ao transformar esse tipo específico de veículo em motorhome.',
    detail: 'Em paralelo, estamos planejando trocar o Ford Ka por um carro mais potente para puxar a nova casa. Cada parafuso, cada decisão de projeto — tudo documentado em tempo real.',
    badge: 'Em construção',
    highlight: true,
  },
  {
    year: 'Futuro',
    tag: 'O grande objetivo',
    title: 'Do Brasil ao Alasca — e além',
    body: 'O plano que vai durar anos: viajar a bordo do trailer do Brasil até os Estados Unidos e o Alasca. Atravessando países, culturas e paisagens que ainda nem imaginamos.',
    detail: 'Depois do continente americano, o horizonte se expande para Europa, África e Ásia — mantendo o estilo de vida nômade e os trabalhos remotos que não abrimos mão. A estrada não tem fim.',
  },
]

function Chapter({ chapter, index }) {
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

  const isLast = index === chapters.length - 1

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Ano */}
      <div className="flex md:flex-col items-start gap-3 pt-1">
        <div>
          <span className={`font-display text-lg font-semibold ${isLast ? 'text-sage-600' : 'text-amber-500'}`}>
            {chapter.year}
          </span>
          <p className="text-stone-400 text-xs mt-0.5 hidden md:block">{chapter.tag}</p>
        </div>
        <div className="hidden md:block w-px flex-1 bg-cream-400 ml-1 mt-2" />
      </div>

      {/* Conteúdo */}
      <div className={`pb-12 md:pb-16 border-b border-cream-300 last:border-0`}>
        {chapter.badge && (
          <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${
            chapter.highlight
              ? 'bg-amber-500/15 text-amber-600 border border-amber-400/30'
              : 'bg-stone-100 text-stone-500 border border-stone-200'
          }`}>
            {chapter.badge}
          </span>
        )}
        <h3 className="font-display text-xl sm:text-2xl text-stone-800 font-semibold mb-3 leading-snug">
          {chapter.title}
        </h3>
        <p className="text-stone-600 leading-relaxed mb-3">{chapter.body}</p>
        <p className="text-stone-400 text-sm leading-relaxed italic border-l-2 border-cream-400 pl-4">
          {chapter.detail}
        </p>
      </div>
    </div>
  )
}

export default function AboutUs() {
  return (
    <section id="historia" aria-label="Nossa História" className="py-24 bg-texture" style={{ background: '#faf8f3' }}>
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-16">
          <p className="text-amber-500 text-xs font-semibold uppercase tracking-widest mb-3">Nossa História</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight mb-5">
            Dois nerds que trocaram o escritório{' '}
            <em>pela estrada</em>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed max-w-xl">
            Ygor, Engenheiro de Computação e especialista em IA. Bea, Psicóloga, roteirista e especialista em e-commerce. O que nos une é simples: acreditamos que a melhor versão da vida acontece em movimento.
          </p>
        </div>

        {/* Capítulos */}
        <div className="space-y-0">
          {chapters.map((c, i) => (
            <Chapter key={c.year} chapter={c} index={i} />
          ))}
        </div>

        {/* Valores */}
        <div className="mt-16 pt-12 border-t border-cream-300">
          <p className="text-stone-400 text-xs uppercase tracking-widest mb-6 font-medium">O que nos guia</p>
          <div className="flex flex-wrap gap-3">
            {['Transparência', 'Inovação', 'Respeito', 'Propósito', 'Autenticidade'].map((v) => (
              <span
                key={v}
                className="px-4 py-2 rounded-full bg-cream-200 border border-cream-400 text-stone-600 text-sm font-medium"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
