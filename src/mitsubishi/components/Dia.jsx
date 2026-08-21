// Losango Mitsubishi reaproveitado do sprite (<MitSprite />).
export default function Dia({ className = 'dia' }) {
  return (
    <svg className={className} viewBox="0 0 75 65" aria-hidden="true">
      <use href="#mit-dia" />
    </svg>
  )
}

// Marca d'água de losango usada no canto das seções.
export function Watermark({ side }) {
  return (
    <div className={`wm ${side}`}>
      <svg viewBox="0 0 75 65">
        <use href="#mit-dia" />
      </svg>
    </div>
  )
}
