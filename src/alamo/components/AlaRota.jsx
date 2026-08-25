import { Watermark } from './Escudo'
import textos from '../textos'

// Unidades da Álamo e os dois pontos de bandeira ganham marcador próprio na
// linha do tempo — são eles que justificam a rota nesta proposta.
function classeParada(p) {
  if (p.unidade) return 'stop unidade reveal'
  if (p.marco) return 'stop marco reveal'
  return 'stop reveal'
}

export default function AlaRota() {
  const { rota } = textos

  return (
    <section id="rota" className="faixa-clara textura">
      <Watermark side="left" />
      <div className="wrap">
        <div className="eyebrow">{rota.eyebrow}</div>
        <h2 className="section-title">{rota.titulo}</h2>
        <p className="section-lead">{rota.lead}</p>

        <div className="route-line-wrap">
          {rota.paradas.map((p, i) => (
            <div className={classeParada(p)} key={i}>
              <div className="km">{p.km}</div>
              <h4>{p.titulo}</h4>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
        <div className="nota reveal">
          <b>{rota.nota.rotulo}</b> {rota.nota.texto}
        </div>
      </div>
    </section>
  )
}
