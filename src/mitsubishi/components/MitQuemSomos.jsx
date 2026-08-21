import { useT } from '../i18n'

export default function MitQuemSomos() {
  const { quemSomos } = useT()

  return (
    <section id="quem-somos">
      <div className="wrap">
        <div className="eyebrow">{quemSomos.eyebrow}</div>
        <h2 className="section-title">{quemSomos.titulo}</h2>
        <p className="section-lead">{quemSomos.lead}</p>

        <div className="people">
          {quemSomos.pessoas.map((p, i) => (
            <div className="person reveal" key={i}>
              <div className="who">{p.nome}</div>
              <div className="role">{p.papel}</div>
              <p>{p.bio}</p>
            </div>
          ))}
        </div>

        <div className="quote reveal">
          {quemSomos.citacao}
          <cite>{quemSomos.autor}</cite>
        </div>
      </div>
    </section>
  )
}
