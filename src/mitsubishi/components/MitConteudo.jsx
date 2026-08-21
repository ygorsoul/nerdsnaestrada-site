const pilares = [
  {
    eyebrow: 'Pilar 01',
    titulo: 'Preparação da Pajero',
    desc: 'Tudo o que acontece antes da largada — a Pajero sendo revisada e equipada para os mais de dez países pela frente.',
    curto: 'Reels e TikToks de bastidores da preparação: revisão, itens de segurança, checklist rápido de expedição.',
    longo: 'Vlog completo no YouTube documentando a preparação do início ao fim, com a Mitsubishi como parceira da largada.',
  },
  {
    eyebrow: 'Pilar 02',
    titulo: 'Dia a dia com a Pajero',
    desc: 'A rotina real de quem vive na estrada — a Pajero como parte do dia a dia, não só nos grandes momentos.',
    curto: 'Stories e Reels diários mostrando pequenos momentos: abastecendo, atravessando fronteira, parando pra dormir.',
    longo: 'Vlogs semanais "um dia com a Pajero", mostrando a experiência completa de rodar milhares de km com o carro.',
  },
  {
    eyebrow: 'Pilar 03',
    titulo: 'Por que viajar de Pajero',
    desc: 'Conteúdo direto de conversão — os motivos reais pra alguém considerar uma Pajero como o carro de uma viagem assim.',
    curto: 'Reels de lista rápida: "3 motivos pra rodar o continente de Pajero", com provas em vídeo de cada ponto.',
    longo: 'Vídeo no YouTube aprofundando espaço, autonomia, 4x4 e conforto — a experiência de morar na estrada com o carro.',
  },
  {
    eyebrow: 'Pilar 04',
    titulo: 'Pajero 2008 × Nova Pajero',
    desc: 'A ponte entre o legado e o lançamento: "se essa Pajero de 2008 já entrega tudo isso, imagina a nova."',
    curto: 'Reels comparando momentos da expedição com recursos da nova Pajero — o clássico puxando a novidade.',
    longo: 'Vídeo especial no YouTube conectando as duas gerações, com espaço para a Mitsubishi apresentar o lançamento.',
  },
]

const desafios = [
  {
    nivel: 1,
    tag: 'Nível 1',
    titulo: 'Estrada boa',
    texto: 'Trechos de asfalto entre um destino e outro — prova de consumo e eficiência do motor diesel em cruzeiro.',
  },
  {
    nivel: 2,
    tag: 'Nível 2',
    titulo: 'Estrada ruim',
    texto: 'Buracos, terra e trechos malcuidados — teste real de suspensão e estrutura em uso contínuo.',
  },
  {
    nivel: 3,
    tag: 'Nível 3',
    titulo: 'Trilha',
    texto: 'Terreno técnico fora de estrada, tração 4x4 acionada de verdade — o tipo de cena que vende o conceito Pajero.',
  },
  {
    nivel: 4,
    tag: 'Nível 4',
    titulo: 'Deserto',
    texto: 'Areia, calor extremo e longas distâncias sem apoio — teste de arrefecimento e resistência do diesel.',
  },
  {
    nivel: 5,
    tag: 'Nível 5',
    titulo: 'Subida da cordilheira',
    texto: 'Passagens dos Andes acima de 4.000m — resposta do motor com baixa pressão de oxigênio, o teste mais técnico da viagem.',
  },
  {
    nivel: 5,
    tag: 'Nível 5',
    titulo: 'Neve e gelo',
    texto: 'Frio extremo no Canadá e Alasca — aderência, partida a frio e o motor diesel de 2008 encarando seu maior desafio.',
  },
]

export default function MitConteudo() {
  return (
    <section id="conteudo">
      <div className="wrap">
        <div className="eyebrow">06 · Estratégia de conteúdo</div>
        <h2 className="section-title">Não é uma viagem com posts avulsos. É um plano de conteúdo.</h2>
        <p className="section-lead">Cada pilar abaixo já nasce pensado em dois formatos — pra alimentar o algoritmo todo dia (curto) e construir a narrativa completa da parceria (longo).</p>

        <div className="pillar-grid reveal">
          {pilares.map((p) => (
            <div className="pillar-card" key={p.eyebrow}>
              <div className="p-eyebrow mono">{p.eyebrow}</div>
              <h4>{p.titulo}</h4>
              <p className="p-desc">{p.desc}</p>
              <div className="format-row">
                <div className="f-label mono">Formato curto</div>
                <p>{p.curto}</p>
              </div>
              <div className="format-row">
                <div className="f-label mono">Formato longo</div>
                <p>{p.longo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="difficulty-ladder reveal">
          <div className="eyebrow" style={{ marginTop: '70px' }}>Expedição completa · desafios por dificuldade</div>
          {desafios.map((d) => (
            <div className="diff-item" key={d.titulo}>
              <div className="diff-meter">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span className={i <= d.nivel ? 'dot on' : 'dot'} key={i}></span>
                ))}
              </div>
              <div className="diff-body">
                <div className="diff-tag mono">{d.tag}</div>
                <h4>{d.titulo}</h4>
                <p>{d.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
