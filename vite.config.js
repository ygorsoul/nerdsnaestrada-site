import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Páginas com HTML próprio (além da home). Cada uma vira uma entrada do build
// e uma pasta com index.html estático.
const paginas = ['cupons', 'mitsubishi', 'alamo', 'midiakit']

// Sem isto, /cupons (sem barra) cai no fallback de SPA e o Vite entrega o
// index.html da raiz — com o <title> e as meta tags da home. Este middleware
// reproduz em dev/preview o que um host estático faz com index de diretório.
function rotasEstaticas() {
  const reescrever = (req, _res, next) => {
    const [caminho, query] = req.url.split('?')
    const pagina = paginas.find((p) => caminho === `/${p}` || caminho === `/${p}/`)
    if (pagina) {
      req.url = `/${pagina}/index.html` + (query ? `?${query}` : '')
    }
    next()
  }
  return {
    name: 'rotas-estaticas',
    // Chamado direto (e não dentro de uma função retornada) para rodar ANTES
    // dos middlewares internos do Vite, incluindo o fallback de SPA.
    configureServer(server) { server.middlewares.use(reescrever) },
    configurePreviewServer(server) { server.middlewares.use(reescrever) },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), rotasEstaticas()],
  build: {
    rollupOptions: {
      // Multi-page: cada entrada vira um HTML estático próprio, então /cupons
      // tem SEO e preview de link independentes da home.
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        ...Object.fromEntries(
          paginas.map((p) => [p, fileURLToPath(new URL(`./${p}/index.html`, import.meta.url))]),
        ),
      },
    },
  },
})
