import { createElement, Fragment } from 'react'

// Converte os **trechos** marcados nos dicionários em <strong> — ou <b>, quando
// o CSS daquela seção mira essa tag — sem precisar de JSX nos arquivos de texto.
export default function Rich({ texto, tag = 'strong' }) {
  const partes = texto.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {partes.map((parte, i) =>
        i % 2 === 1
          ? createElement(tag, { key: i }, parte)
          : <Fragment key={i}>{parte}</Fragment>,
      )}
    </>
  )
}
