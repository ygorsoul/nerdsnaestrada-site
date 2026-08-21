import { IDIOMAS, useIdioma } from '../i18n'

export default function LangSwitch() {
  const [idioma, definirIdioma] = useIdioma()

  return (
    <div className="lang-switch" role="group" aria-label="Idioma · Language · 言語">
      {IDIOMAS.map((i) => (
        <button
          key={i.codigo}
          type="button"
          lang={i.codigo}
          title={i.nome}
          aria-current={idioma === i.codigo}
          onClick={() => definirIdioma(i.codigo)}
        >
          {i.rotulo}
        </button>
      ))}
    </div>
  )
}
