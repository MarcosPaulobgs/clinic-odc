'use client'

import { useEffect } from 'react'

// Faz os links internos (#servicos, #contato...) rolarem até a seção
// sem colocar o "#..." na barra de endereço.
export default function CleanAnchors() {
  useEffect(() => {
    // Se alguém abrir um link antigo com #secao, limpa a URL depois de rolar
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1))
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          history.replaceState(null, '', window.location.pathname + window.location.search)
        }, 50)
      }
    }

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target.closest && e.target.closest('a[href^="#"]')
      if (!a) return

      const href = a.getAttribute('href')
      e.preventDefault()

      // Logo (href="#") volta ao topo; outros "#" soltos (placeholders) não fazem nada
      if (href === '#') {
        if (a.classList.contains('logo')) window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const el = document.getElementById(decodeURIComponent(href.slice(1)))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
