// Envelope do motor de áudio do /media-use: o audio.mjs do product-launch-video
// não expõe --lang, e sem ele o motor assume "en" — o Kokoro até acerta o
// idioma pelo prefixo do pf_dora, mas o Whisper transcreveria a narração em
// português com o modelo small.en. Este wrapper só acrescenta --lang pt-br.
import { spawnSync } from 'node:child_process'
const REAL = process.env.HF_MEDIA_ENGINE_REAL
if (!REAL) { console.error('HF_MEDIA_ENGINE_REAL não definido'); process.exit(1) }
const args = process.argv.slice(2)
if (!args.includes('--lang')) args.push('--lang', 'pt-br')
const r = spawnSync('node', [REAL, ...args], { stdio: 'inherit' })
process.exit(r.status ?? 1)
