import { Watermark } from './Dia'

const REEL_URL = 'https://www.instagram.com/p/DcBieczPWDh/'

const numeros = [
  { valor: '24.975', label: 'Curtidas'     },
  { valor: '2.013',  label: 'Comentários'  },
  { valor: '59s',    label: 'Duração'      },
]

const frames = [
  { src: '/mitsubishi/motor-diesel.jpg', alt: 'Motor diesel original 2008 da Pajero', legenda: 'Motor diesel original de 2008' },
  { src: '/mitsubishi/cabine.jpg',       alt: 'Cabine da Pajero, volante Mitsubishi', legenda: 'Cabine · 4x4 acionável'       },
  { src: '/mitsubishi/frente.jpg',       alt: 'Detalhe frontal da Pajero',            legenda: 'Frente e roda'                },
  { src: '/mitsubishi/bancos.jpg',       alt: 'Bancos rebatidos da Pajero',           legenda: 'Bancos rebatidos · 7 lugares' },
]

export default function MitPost() {
  return (
    <section id="post-pajero">
      <Watermark side="left" />
      <div className="wrap">
        <div className="eyebrow">02 · A primeira prova</div>
        <h2 className="section-title">Publicamos um único vídeo sobre a Pajero. Esse foi o resultado.</h2>
        <p className="section-lead">Um Reel de 59 segundos mostrando a compra do carro, no ar desde 14 de agosto de 2026. É a única publicação nossa que fala da Pajero até agora — e em menos de uma semana já tinha passado de 458 mil visualizações, sem um centavo de impulsionamento.</p>

        <div className="reel-block reveal">
          <a className="reel-card" href={REEL_URL} target="_blank" rel="noopener">
            <img src="/mitsubishi/reel-frame.jpg" alt="Frame do Reel: Mitsubishi Pajero Full 2008" />
            <span className="play"><span className="tri"></span></span>
            <span className="tag">Reel · 59s · @nerdsnaestradaoficial</span>
          </a>
          <div className="reel-side">
            <div className="reel-hero-stat">
              <b>+458 mil</b><span>Visualizações em menos de uma semana</span>
            </div>
            <div className="reel-stats">
              {numeros.map((n) => (
                <div key={n.label}><b>{n.valor}</b><span>{n.label}</span></div>
              ))}
            </div>
            <div className="reel-quote">
              “Compramos o carro que vai nos levar do Brasil ao Alaska! (...) Compramos uma <b>Pajero Full, diesel, 4x4, 2008, da Mitsubishi</b>. Um vovô das estradas, mas que dá banho em muito carro novinho.”
            </div>
            <a className="btn" href={REEL_URL} target="_blank" rel="noopener">Ver o post no Instagram</a>
            <p className="reel-note">Números do próprio post, publicado em 14/08/2026 — menos de uma semana no ar, sem impulsionamento.</p>
          </div>
        </div>

        <div className="frame-strip reveal">
          {frames.map((f) => (
            <figure key={f.src}>
              <img src={f.src} alt={f.alt} />
              <figcaption>{f.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
