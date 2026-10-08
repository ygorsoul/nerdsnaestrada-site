import { build } from 'vite'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

// Páginas pré-renderizadas: chave do entry-server → HTML gerado pelo build.
// /mitsubishi, /alamo e /calculadora ficam de fora: são noindex.
const paginas = {
  main: 'dist/index.html',
  cupons: 'dist/cupons/index.html',
}

const raiz = fileURLToPath(new URL('.', import.meta.url))
const ssrDir = `${raiz}dist-ssr`

// Depois do build do cliente, compila o entry-server em modo SSR e injeta o
// HTML de cada página dentro do <div id="root">. Os nomes dos assets têm hash
// de conteúdo, então as URLs geradas aqui batem com as do build do cliente.
export default function prerender() {
  let ehBuildSsr = false
  return {
    name: 'prerender',
    apply: 'build',
    configResolved(config) { ehBuildSsr = Boolean(config.build.ssr) },
    async closeBundle() {
      // O build SSR abaixo carrega este mesmo plugin — sem isto, recursão.
      if (ehBuildSsr) return

      await build({
        root: raiz,
        logLevel: 'warn',
        build: {
          ssr: 'src/entry-server.jsx',
          outDir: ssrDir,
          emptyOutDir: true,
          rollupOptions: { input: `${raiz}src/entry-server.jsx` },
        },
      })

      const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href)
      for (const [pagina, arquivo] of Object.entries(paginas)) {
        const caminho = `${raiz}${arquivo}`
        const html = await readFile(caminho, 'utf8')
        if (!html.includes('<div id="root"></div>')) {
          throw new Error(`prerender: <div id="root"></div> não encontrado em ${arquivo}`)
        }
        await writeFile(caminho, html.replace('<div id="root"></div>', `<div id="root">${render(pagina)}</div>`))
      }
      await rm(ssrDir, { recursive: true, force: true })
    },
  }
}
