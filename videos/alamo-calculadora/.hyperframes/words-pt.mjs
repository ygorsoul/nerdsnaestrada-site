// O motor de áudio usa um único `lang` para o TTS e para o Whisper. O Kokoro só
// aceita "pt-br" e o Whisper só aceita "pt", então a transcrição saiu vazia e o
// audio_meta.json ficou sem word timings (as legendas dependem deles). Este
// passo refaz só a transcrição, com "pt", e grava as palavras no meta.
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
const dir = process.argv[2]
const metaPath = join(dir, 'audio_meta.json')
const meta = JSON.parse(readFileSync(metaPath, 'utf8'))
for (const v of meta.voices) {
  if (v.words?.length) continue
  const td = mkdtempSync(join(tmpdir(), 'hf-trans-pt-'))
  const r = spawnSync('npx', ['hyperframes', 'transcribe', v.path, '--model', 'small', '--dir', td, '--language', 'pt'], { cwd: dir, stdio: ['ignore', 'ignore', 'ignore'] })
  const src = join(td, 'transcript.json')
  if (r.status === 0 && existsSync(src)) {
    const arr = JSON.parse(readFileSync(src, 'utf8'))
    if (Array.isArray(arr) && arr.length)
      v.words = arr.map((w, i) => ({ id: `w${i}`, text: w.text, start: w.start, end: w.end }))
  }
  rmSync(td, { recursive: true, force: true })
  console.log(`frame ${v.frame}: ${v.words.length} palavras`)
}
writeFileSync(metaPath, JSON.stringify(meta, null, 2))
