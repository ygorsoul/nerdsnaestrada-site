// Escudo reaproveitado do sprite (<AlaSprite />).
export default function Escudo({ className = 'escudo' }) {
  return (
    <svg className={className} viewBox="0 0 56 64" aria-hidden="true">
      <use href="#ala-escudo" />
    </svg>
  )
}

// Marca d'água de escudo usada no canto das seções.
export function Watermark({ side }) {
  return (
    <div className={`wm ${side}`}>
      <svg viewBox="0 0 56 64">
        <use href="#ala-escudo" />
      </svg>
    </div>
  )
}
