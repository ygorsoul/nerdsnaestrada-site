// Escudo usado como elemento gráfico recorrente do documento, referenciado por
// <use href="#ala-escudo">. É uma forma neutra que fala do produto (proteção
// veicular) — de propósito não é uma reprodução do logotipo da Álamo, que
// aparece só como imagem oficial nos lockups.
export default function AlaSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <symbol id="ala-escudo" viewBox="0 0 56 64">
        <path d="M28 1 L55 11.5 V33 C55 48.8 43.2 58.9 28 63 C12.8 58.9 1 48.8 1 33 V11.5 Z" />
      </symbol>
    </svg>
  )
}
