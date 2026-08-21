import Rich from './Rich'
import { useT } from '../i18n'

export default function MitHero() {
  const { hero } = useT()

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
            <img className="nne" src="/mitsubishi/logo-nne.png" alt={hero.lockup.nne.nome} />
            <div className="meta"><b>{hero.lockup.nne.nome}</b>{hero.lockup.nne.meta}</div>
          </div>
          <span className="co-x">×</span>
          <div className="side">
            <img className="mit" src="/mitsubishi/logo-mitsubishi.png" alt={hero.lockup.mit.nome} />
            <div className="meta"><b>{hero.lockup.mit.nome}</b>{hero.lockup.mit.meta}</div>
          </div>
        </div>
        <h1 className="headline">
          {hero.manchete.origem}
          <span className="to">{hero.manchete.escala1}</span>
          <span className="to">{hero.manchete.escala2}</span>
          <span className="dest">{hero.manchete.destino}</span>
          <span className="brand-line">{hero.manchete.carro}</span>
        </h1>
        <p className="hero-sub"><Rich texto={hero.sub} /></p>
        <div className="hero-cta">
          <a href="#proposta" className="btn">{hero.ctaProposta}</a>
          <a href="#contato" className="btn ghost">{hero.ctaContato}</a>
        </div>
      </div>
      <div className="wrap">
        <div className="odometer-strip reveal">
          {hero.odometro.map((o, i) => (
            <div className="odo" key={i}>
              <div className="num mono">{o.num}</div>
              <div className="label">{o.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
