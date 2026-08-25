import textos from '../textos'

export default function AlaEquipamentos() {
  const { equipamentos } = textos

  return (
    <section id="equipamentos">
      <div className="wrap">
        <div className="eyebrow">{equipamentos.eyebrow}</div>
        <h2 className="section-title">{equipamentos.titulo}</h2>
        <p className="section-lead">{equipamentos.lead}</p>

        <div className="gear-grid reveal">
          {equipamentos.itens.map((e, i) => (
            <div className="gear-card" key={i}>
              <div className="g-eyebrow">{e.eyebrow}</div>
              <h4>{e.nome}</h4>
              <p>{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
