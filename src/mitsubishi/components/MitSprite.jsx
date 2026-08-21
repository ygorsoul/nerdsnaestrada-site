// Sprite SVG do losango Mitsubishi, referenciado por <use href="#mit-dia">
// em toda a página. Renderizado uma única vez, no topo do documento.
export default function MitSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <symbol id="mit-dia" viewBox="0 0 75 65">
        <path
          d="M37.5 43.3 L50 21.65 L37.5 0 L25 21.65 Z
             M37.5 43.3 L50 64.95 L75 64.95 L62.5 43.3 Z
             M37.5 43.3 L12.5 43.3 L0 64.95 L25 64.95 Z"
        />
      </symbol>
    </svg>
  )
}
