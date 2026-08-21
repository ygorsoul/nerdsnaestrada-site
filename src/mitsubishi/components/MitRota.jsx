const paradas = [
  {
    km: 'Partida',
    titulo: 'Rio de Janeiro, Brasil',
    texto: 'Largada da expedição, preparação final do veículo e primeiro conteúdo em vídeo mostrando a Pajero pronta para a estrada.',
  },
  {
    km: 'Descida ao Sul',
    titulo: 'Brasil · Uruguai · Argentina',
    texto: 'Trecho de aproximação, rodando pelo litoral e pelo interior até a Patagônia.',
  },
  {
    km: 'Virada',
    titulo: 'Ushuaia, Argentina',
    texto: 'O ponto mais austral das Américas — fim da descida e início da subida completa rumo ao Ártico.',
  },
  {
    km: 'Subida pelos Andes',
    titulo: 'Chile · Bolívia · Peru',
    texto: 'Deserto do Atacama e passagens acima de 4.000m nos Andes — altitude extrema e terreno abrasivo.',
  },
  {
    km: 'Região Andina Norte',
    titulo: 'Equador · Colômbia',
    texto: 'Estradas de montanha, cidades históricas e a aproximação do istmo centro-americano.',
  },
  {
    km: 'América Central',
    titulo: 'Panamá · Costa Rica · Nicarágua · Honduras · El Salvador · Guatemala',
    texto: 'Uma sequência intensa de fronteiras, selva e a travessia mais logisticamente complexa da viagem.',
  },
  {
    km: 'América do Norte',
    titulo: 'México · Estados Unidos · Canadá',
    texto: 'Rodovias longas, clima em queda constante e a reta final rumo ao território ártico.',
  },
  {
    km: 'Chegada',
    titulo: 'Alasca',
    texto: 'A linha de chegada: motor diesel original de 2008, dois trechos de continente inteiro e mais de dez países depois.',
  },
]

export default function MitRota() {
  return (
    <section id="rota" className="route-section">
      <div className="wrap">
        <div className="eyebrow">05 · A rota</div>
        <h2 className="section-title">Um trajeto, um continente inteiro.</h2>
        <p className="section-lead">A rota tem uma virada: desce do Rio de Janeiro até Ushuaia, no fim do mundo, e de lá sobe sem parar até o Alasca. São dezenas de países — cada um é um capítulo de conteúdo e um novo cenário onde a Pajero e a marca Mitsubishi aparecem em movimento real.</p>

        <div className="route-line-wrap">
          {paradas.map((p) => (
            <div className="stop reveal" key={p.titulo}>
              <div className="km mono">{p.km}</div>
              <h4>{p.titulo}</h4>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
        <div className="route-note reveal">
          <b>Nota:</b> ordem e fronteiras exatas do trajeto podem ser ajustadas conforme o planejamento definitivo de vocês — o desenho acima ilustra o trajeto Rio de Janeiro → Ushuaia → Alasca.
        </div>
      </div>
    </section>
  )
}
