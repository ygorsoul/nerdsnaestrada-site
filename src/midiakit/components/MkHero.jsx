import textos from '../textos'

export default function MkHero() {
  const { hero } = textos

  return (
    <section className="hero">
      <div className="hero-blobs" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
      </div>
      <div className="wrap">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1 className="headline">{hero.titulo}</h1>
        <p className="hero-sub">{hero.lead}</p>
        <div className="hero-cta">
          <a href="#pacotes" className="btn">{hero.ctaPacotes}</a>
          <a href="#contato" className="btn ghost">{hero.ctaContato}</a>
        </div>
        <div className="destaques reveal">
          {hero.destaques.map((d, i) => (
            <div className="destaque" key={i}>
              <div className="num">{d.num}</div>
              <div className="label">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
