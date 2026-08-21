import { createContext, useContext } from 'react'

export const Contexto = createContext(null)

// Dicionário do idioma atual.
export function useT() {
  return useContext(Contexto).t
}

// [idioma, definirIdioma], no formato de um useState.
export function useIdioma() {
  const { idioma, definirIdioma } = useContext(Contexto)
  return [idioma, definirIdioma]
}
