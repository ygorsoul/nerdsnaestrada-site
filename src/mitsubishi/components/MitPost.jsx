import { Watermark } from './Dia'
import Rich from './Rich'
import { useT } from '../i18n'

const REEL_URL = 'https://www.instagram.com/p/DcBieczPWDh/'

const FRAMES = [
  '/mitsubishi/motor-diesel.jpg',
  '/mitsubishi/cabine.jpg',
  '/mitsubishi/frente.jpg',
  '/mitsubishi/bancos.jpg',
]

export default function MitPost() {
  const { post } = useT()

  return (
    <section id="post-pajero">
      <Watermark side="left" />
      <div className="wrap">
        <div className="eyebrow">{post.eyebrow}</div>
        <h2 className="section-title">{post.titulo}</h2>
        <p className="section-lead">{post.lead}</p>

        <div className="reel-block reveal">
          <a className="reel-card" href={REEL_URL} target="_blank" rel="noopener">
            <img src="/mitsubishi/reel-frame.jpg" alt={post.reelAlt} />
            <span className="play"><span className="tri"></span></span>
            <span className="tag">{post.reelTag}</span>
          </a>
          <div className="reel-side">
            <div className="reel-hero-stat">
              <b>{post.destaque.num}</b><span>{post.destaque.label}</span>
            </div>
            <div className="reel-stats">
              {post.numeros.map((n, i) => (
                <div key={i}><b>{n.valor}</b><span>{n.label}</span></div>
              ))}
            </div>
            <div className="reel-quote">
              <Rich texto={post.citacao} tag="b" />
            </div>
            <a className="btn" href={REEL_URL} target="_blank" rel="noopener">{post.botao}</a>
            <p className="reel-note">{post.nota}</p>
          </div>
        </div>

        <div className="frame-strip reveal">
          {FRAMES.map((src, i) => (
            <figure key={src}>
              <img src={src} alt={post.frames[i].alt} />
              <figcaption>{post.frames[i].legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
