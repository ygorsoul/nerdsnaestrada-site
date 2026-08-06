import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Sem isto, /cupons (sem barra) cai no fallback de SPA e o Vite entrega o
// index.html da raiz — com o <title> e as meta tags da home. Este middleware
// reproduz em dev/preview o que um host estático faz com index de diretório.
function rotaCupons() {
  const reescrever = (req, _res, next) => {
    const [caminho, query] = req.url.split('?')
    if (caminho === '/cupons' || caminho === '/cupons/') {
      req.url = '/cupons/index.html' + (query ? `?${query}` : '')
    }
    next()
  }
  return {
    name: 'rota-cupons',
    // Chamado direto (e não dentro de uma função retornada) para rodar ANTES
    // dos middlewares internos do Vite, incluindo o fallback de SPA.
    configureServer(server) { server.middlewares.use(reescrever) },
    configurePreviewServer(server) { server.middlewares.use(reescrever) },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), rotaCupons()],
  build: {
    rollupOptions: {
      // Multi-page: cada entrada vira um HTML estático próprio, então /cupons
      // tem SEO e preview de link independentes da home.
      input: {
        main:   fileURLToPath(new URL('./index.html', import.meta.url)),
        cupons: fileURLToPath(new URL('./cupons/index.html', import.meta.url)),
      },
    },
  },
})
