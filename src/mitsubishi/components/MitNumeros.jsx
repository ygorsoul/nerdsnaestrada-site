const stats = [
  { num: '+25M',  label: 'Visualizações'    },
  { num: '+500K', label: 'Curtidas'         },
  { num: '+300K', label: 'Compartilhamentos'},
  { num: '+100K', label: 'Salvos'           },
]

const barras = [
  { label: 'Público feminino',          pct: 56 },
  { label: 'Público masculino',         pct: 44 },
  { label: '25 a 34 anos',              pct: 47 },
  { label: 'Localizados em São Paulo',  pct: 54 },
]

const interesses = [
  'Viagem de carro', 'Carros', 'Vida na estrada', 'Aventura', 'Roteiros',
  '4x4 / Overland', 'Vida nômade', 'Economia de viagem', 'Casal viajante', 'América do Sul',
]

export default function MitNumeros() {
  return (
    <section id="numeros">
      <div className="wrap">
        <div className="eyebrow">07 · Números e público</div>
        <h2 className="section-title">Audiência real, engajada e no perfil de quem compra carro.</h2>
        <p className="section-lead">Dados consolidados de Instagram, TikTok, Facebook e YouTube — a base que vai acompanhar a Pajero em cada fronteira cruzada.</p>

        <div className="stats-grid reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num mono">{s.num}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="audience-grid">
          <div className="reveal">
            {barras.map((b) => (
              <div className="bar-row" key={b.label}>
                <div className="top"><span>{b.label}</span><span>{b.pct}%</span></div>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${b.pct}%` }}></div></div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div
              className="top mono"
              style={{ marginBottom: '14px', color: 'var(--paper-dim)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              O que esse público busca
            </div>
            <div className="tag-cloud">
              {interesses.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
