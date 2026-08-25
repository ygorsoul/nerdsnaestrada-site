import textos from '../textos'

export default function MkCondicoes() {
  const { condicoes } = textos

  return (
    <section id="condicoes" className="bloco condicoes">
      <div className="wrap">
        <div className="eyebrow">{condicoes.eyebrow}</div>
        <h2 className="section-title">{condicoes.titulo}</h2>
        <ul className="check-list reveal">
          {condicoes.itens.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
