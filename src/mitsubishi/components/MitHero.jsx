const odometro = [
  { num: '2008',  label: 'Ano / motor diesel original' },
  { num: 'GLS',   label: 'Pajero Full · versão'        },
  { num: '+200K', label: 'Pessoas acompanhando'        },
  { num: '+25M',  label: 'Visualizações acumuladas'    },
]

export default function MitHero() {
  return (
    <section className="hero">
      <div className="hero-route" aria-hidden="true">
        <svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid meet">
          <path
            className="live"
            d="M 340 20 C 300 90 250 120 260 190 C 270 260 200 280 190 350 C 180 420 230 450 210 520 C 190 590 130 610 140 680 C 150 740 90 760 80 790"
          />
          <circle cx="340" cy="20" r="5" />
          <circle cx="80" cy="790" r="5" />
        </svg>
      </div>
      <div className="wrap">
        <div className="co-lockup">
          <div className="side">
            <img className="nne" src="/mitsubishi/logo-nne.png" alt="Nerds na Estrada" />
            <div className="meta"><b>Nerds na Estrada</b>Ygor &amp; Bea · Brasil</div>
          </div>
          <span className="co-x">×</span>
          <div className="side">
            <img className="mit" src="/mitsubishi/logo-mitsubishi.png" alt="Mitsubishi Motors" />
            <div className="meta"><b>Mitsubishi Motors</b>Pajero Full 2008 GLS Diesel</div>
          </div>
        </div>
        <h1 className="headline">
          Rio de Janeiro
          <span className="to">até Ushuaia, e de lá rumo ao</span>
          <span className="dest">Alasca</span>
          <span className="brand-line">de Pajero.</span>
        </h1>
        <p className="hero-sub">Largada no Rio de Janeiro, descida até Ushuaia — a ponta mais austral das Américas — e, sem parar, a subida completa até o Ártico. Tudo ao volante de uma <strong>Mitsubishi Pajero Full 2008 GLS Diesel</strong>, a prova de resistência mais longa que um veículo Mitsubishi pode enfrentar em estrada real, atravessando dezenas de países, contada em tempo real para uma audiência que já assiste, confia e compra o que a gente indica.</p>
        <div className="hero-cta">
          <a href="#proposta" className="btn">Ver a proposta</a>
          <a href="#contato" className="btn ghost">Falar com Ygor &amp; Bea</a>
        </div>
      </div>
      <div className="wrap">
        <div className="odometer-strip reveal">
          {odometro.map((o) => (
            <div className="odo" key={o.label}>
              <div className="num mono">{o.num}</div>
              <div className="label">{o.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
