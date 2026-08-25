import textos from '../textos'

// Em vez de gerar o PDF no cliente (jsPDF/html2canvas rasterizam o texto, geram
// arquivo pesado e quebram mal entre páginas), a proposta é impressa pelo
// próprio navegador com a folha de estilo de impressão do alamo.css. O texto
// sai vetorial e selecionável, e o PDF nunca desencontra do que está na tela.
export default function BotaoPdf({ className = 'btn btn-pdf' }) {
  const baixar = () => {
    const titulo = document.title
    document.title = textos.pdf.arquivo

    const restaurar = () => {
      document.title = titulo
      window.removeEventListener('afterprint', restaurar)
    }
    window.addEventListener('afterprint', restaurar)
    // Nem todo navegador dispara afterprint de forma confiável; o timeout
    // garante que o título volte ao normal de qualquer jeito.
    setTimeout(restaurar, 8000)

    window.print()
  }

  return (
    <button type="button" className={className} onClick={baixar}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M4 20h16" />
      </svg>
      {textos.pdf.rotulo}
    </button>
  )
}
