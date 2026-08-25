import textos from '../textos'

const contatos = [
  { id: 'email',     texto: 'contato@nerdsnaestrada.com', href: 'mailto:contato@nerdsnaestrada.com',                                   externo: false },
  { id: 'whatsapp',  texto: '21 99097-4226',              href: 'https://wa.me/5521990974226',                                         externo: true  },
  { id: 'instagram', texto: '@NerdsNaEstradaOficial',     href: 'https://www.instagram.com/nerdsnaestradaoficial/',                    externo: true  },
  { id: 'youtube',   texto: 'Nerds na Estrada',           href: 'https://www.youtube.com/@Nerdsnaestrada',                             externo: true  },
  { id: 'tiktok',    texto: '@NerdsNaEstradaOficial',     href: 'https://www.tiktok.com/@nerdsnaestradaoficial',                       externo: true  },
  { id: 'facebook',  texto: 'Nerds na Estrada',           href: 'https://www.facebook.com/profile.php?id=61578418876175&locale=pt_BR', externo: true  },
  { id: 'site',      texto: 'nerdsnaestrada.com',         href: 'https://nerdsnaestrada.com/',                                         externo: true  },
]

export default function MkContato() {
  const { contato } = textos

  return (
    <section id="contato" className="bloco closing">
      <div className="wrap">
        <div className="eyebrow">{contato.eyebrow}</div>
        <h2 className="section-title">{contato.titulo}</h2>
        <p className="section-lead">{contato.lead}</p>

        <div className="contact-grid reveal">
          {contatos.map((c) => (
            <div className="contact-item" key={c.id}>
              <div className="label">{contato.rotulos[c.id]}</div>
              <a
                href={c.href}
                {...(c.externo ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {c.texto}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
