const contatos = [
  { label: 'E-mail',    texto: 'contato@nerdsnaestrada.com',  href: 'mailto:contato@nerdsnaestrada.com',                                          externo: false },
  { label: 'WhatsApp',  texto: '21 99097-4226',               href: 'https://wa.me/5521990974226',                                                externo: true  },
  { label: 'Instagram', texto: '@NerdsNaEstradaOficial',      href: 'https://www.instagram.com/nerdsnaestradaoficial/',                           externo: true  },
  { label: 'YouTube',   texto: 'Nerds na Estrada',            href: 'https://www.youtube.com/@Nerdsnaestrada',                                    externo: true  },
  { label: 'TikTok',    texto: '@NerdsNaEstradaOficial',      href: 'https://www.tiktok.com/@nerdsnaestradaoficial',                              externo: true  },
  { label: 'Facebook',  texto: 'Nerds na Estrada',            href: 'https://www.facebook.com/profile.php?id=61578418876175&locale=pt_BR',        externo: true  },
  { label: 'Site',      texto: 'nerdsnaestrada.com',          href: 'https://nerdsnaestrada.com/',                                                externo: true  },
]

export default function MitContato() {
  return (
    <section id="contato" className="closing">
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>10 · Vamos conversar</div>
        <h2 className="section-title">Do Brasil ao Alasca, a gente já está pronto pra ligar a chave.</h2>
        <p className="section-lead">Falta só a Mitsubishi dizer sim. A Pajero está na garagem, o roteiro está pronto e o próximo passo é uma conversa de trinta minutos com o time de vocês. Segue nosso contato direto — respondemos no mesmo dia.</p>

        <div className="contact-grid reveal">
          {contatos.map((c) => (
            <div className="contact-item" key={c.label}>
              <div className="label">{c.label}</div>
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
