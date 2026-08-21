import { useEffect } from 'react'

// Mesmo comportamento do script inline da proposta original: cada bloco
// .reveal ganha a classe .in ao entrar na viewport, uma única vez.
// `chave` reexecuta a observação quando a página é redesenhada (troca de
// idioma), para que nenhum bloco novo fique preso em opacidade zero.
export default function useReveal(chave) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [chave])
}
