'use client'

import { useEffect } from 'react'

// Anima qualquer elemento com a classe "reveal" quando ele entra na tela.
export default function ScrollReveal() {
  useEffect(() => {
    // avisa o script do layout que o React carregou (cancela o plano B)
    document.documentElement.setAttribute('data-ready', '')
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
