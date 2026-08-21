import { Watermark } from './Dia'

const ficha = [
  ['Modelo',      'Pajero Full GLS'                  ],
  ['Ano',         '2008'                             ],
  ['Motorização', 'Diesel'                           ],
  ['Tração',      '4x4'                              ],
  ['Trajeto',     'Rio de Janeiro → Ushuaia → Alasca'],
]

const terrenos = [
  {
    mk: 'PATAGÔNIA',
    titulo: 'Vento e frio austral',
    texto: 'Chegando em Ushuaia, no fim do mundo, a Pajero enfrenta ventos fortes e temperaturas baixas antes de virar rumo ao norte, em direção ao Ártico.',
  },
  {
    mk: 'ANDES',
    titulo: 'Altitude extrema',
    texto: 'Passagens acima de 4.000m, testando resposta do motor diesel em baixa pressão de oxigênio.',
  },
  {
    mk: 'ATACAMA',
    titulo: 'Calor e deserto',
    texto: 'Terreno seco e abrasivo, prova de resistência de suspensão e arrefecimento.',
  },
  {
    mk: 'AMÉRICA CENTRAL',
    titulo: 'Umidade e selva',
    texto: 'Estradas estreitas, chuva constante e travessias de fronteira em série.',
  },
  {
    mk: 'CANADÁ / ALASCA',
    titulo: 'Frio extremo',
    texto: 'A prova final: motor diesel de 2008 enfrentando temperaturas negativas na Alaska Highway.',
  },
]

export default function MitPajero() {
  return (
    <section id="pajero" className="reliability">
      <Watermark side="right" />
      <div className="wrap">
        <div className="eyebrow">01 · Por que a Pajero</div>
        <h2 className="section-title">O melhor comercial da Mitsubishi é um motor de 2008 que ainda não parou.</h2>
        <p className="section-lead">Toda campanha fala em durabilidade. A gente vai provar, em estrada, atravessando dois continentes com o mesmo motor diesel original — sem cortes, sem edição escondendo pane, sem terceirização de imagem.</p>

        <div className="media-banner reveal">
          <img src="/mitsubishi/pajero-hero.jpg" alt="Mitsubishi Pajero Full 2008 GLS Diesel" />
          <div className="media-cap"><b>Mitsubishi Pajero Full 2008 GLS Diesel</b> · frame do Reel publicado em 14/08/2026</div>
        </div>

        <div className="reliability-grid">
          <div>
            <div className="spec-sheet reveal">
              {ficha.map(([rotulo, valor]) => (
                <div className="spec-row" key={rotulo}>
                  <span>{rotulo}</span><span>{valor}</span>
                </div>
              ))}
              <div className="spec-row">
                <span>Tripulação</span><span>Ygor, Bea &amp; Gato Luck</span>
              </div>
            </div>
            <div className="route-note reveal">
              <b>Nota:</b> quilometragem total, duração da viagem e cronograma de check-points serão fechados junto com o planejamento final da rota e podem ser detalhados em reunião.
            </div>
          </div>
          <div className="terrain-list reveal">
            {terrenos.map((t) => (
              <div className="terrain-item" key={t.mk}>
                <div className="mk mono">{t.mk}</div>
                <p><strong>{t.titulo}</strong>{t.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
