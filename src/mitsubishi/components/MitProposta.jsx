import Dia, { Watermark } from './Dia'
import { useT } from '../i18n'

export default function MitProposta() {
  const { proposta } = useT()

  return (
    <section id="proposta">
      <Watermark side="left" />
      <div className="wrap">
        <div className="eyebrow">{proposta.eyebrow}</div>
        <h2 className="section-title">{proposta.titulo}</h2>
        <p className="section-lead">{proposta.lead}</p>

        <div className="two-col reveal">
          <div className="col-panel offer">
            <h3>{proposta.entregamosTitulo}</h3>
            <ul className="check-list">
              {proposta.entregamos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-panel ask">
            <h3>{proposta.buscamosTitulo}</h3>
            <p className="ask-intro">{proposta.intro}</p>

            <div className="ask-plan">
              <div className="plan-head"><Dia /> {proposta.planoTitulo}</div>
              <div className="plan-steps">
                {proposta.plano.map((p, i) => (
                  <div className="plan-step" key={i}>
                    <div className="when">{p.quando}</div>
                    <h4>{p.titulo}</h4>
                    <p>{p.texto}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ask-extra-label">{proposta.tambemRotulo}</div>
            <ul className="check-list">
              {proposta.tambem.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
