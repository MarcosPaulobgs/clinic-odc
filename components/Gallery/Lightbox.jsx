'use client'

import './Lightbox.css'
import { useEffect, useRef } from 'react'

export default function Lightbox({ photos, index, onClose, onNavigate, returnFocusRef }) {
  const open = index !== null
  const many = photos.length > 1

  // Mantém a última foto na tela durante a animação de fechar
  const lastIndex = useRef(0)
  if (open) lastIndex.current = index
  const photo = photos[lastIndex.current]

  const closeBtn = useRef(null)
  const prevBtn = useRef(null)
  const nextBtn = useRef(null)
  const touchX = useRef(null)

  // Sempre a versão mais recente das funções do pai
  const onCloseRef = useRef(onClose)
  const onNavigateRef = useRef(onNavigate)
  onCloseRef.current = onClose
  onNavigateRef.current = onNavigate

  // 1) Trava a rolagem da página e integra com o botão "voltar"
  useEffect(() => {
    if (!open) return

    const body = document.body
    const scrollY = window.pageYOffset
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    let closedByBack = false
    let prevRestoration

    try {
      prevRestoration = history.scrollRestoration
      history.scrollRestoration = 'manual'
    } catch {}
    try {
      history.pushState({ lb: 1 }, '')
    } catch {}

    body.style.top = `-${scrollY}px`
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`
    body.classList.add('lb-lock')
    closeBtn.current?.focus({ preventScroll: true })

    // Botão voltar do celular/navegador fecha só a foto
    const onPop = () => {
      closedByBack = true
      onCloseRef.current()
    }
    window.addEventListener('popstate', onPop)

    return () => {
      window.removeEventListener('popstate', onPop)
      body.classList.remove('lb-lock')
      body.style.top = ''
      body.style.paddingRight = ''
      window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' })
      try {
        if (prevRestoration) history.scrollRestoration = prevRestoration
      } catch {}
      returnFocusRef?.current?.focus?.({ preventScroll: true })
      // Se fechou pelo X, Esc ou fundo, remove a entrada extra do histórico
      if (!closedByBack) {
        try {
          if (history.state?.lb) history.back()
        } catch {}
      }
    }
  }, [open, returnFocusRef])

  // 2) Teclado: Esc fecha, setas trocam de foto, Tab fica preso no lightbox
  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onCloseRef.current()
      } else if (e.key === 'ArrowLeft' && many) {
        onNavigateRef.current(-1)
      } else if (e.key === 'ArrowRight' && many) {
        onNavigateRef.current(1)
      } else if (e.key === 'Tab') {
        const focusables = [closeBtn.current, ...(many ? [prevBtn.current, nextBtn.current] : [])]
        const i = focusables.indexOf(document.activeElement)
        const next = e.shiftKey
          ? (i <= 0 ? focusables.length - 1 : i - 1)
          : (i + 1 >= focusables.length ? 0 : i + 1)
        e.preventDefault()
        focusables[next].focus()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, many])

  // 3) Deslizar o dedo troca de foto
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 60 && many) onNavigate(dx < 0 ? 1 : -1)
  }

  return (
    <div
      className={`lb${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Foto ampliada"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button type="button" ref={closeBtn} className="lb-x" aria-label="Fechar foto" onClick={onClose}>
        &times;
      </button>

      {many && (
        <button type="button" ref={prevBtn} className="lb-nav lb-prev" aria-label="Foto anterior" onClick={() => onNavigate(-1)}>
          &#8249;
        </button>
      )}

      <figure className="lb-fig">
        <img key={lastIndex.current} className="swap" src={photo.src} alt={photo.alt} />
        <figcaption>{photo.caption}</figcaption>
      </figure>

      {many && (
        <button type="button" ref={nextBtn} className="lb-nav lb-next" aria-label="Próxima foto" onClick={() => onNavigate(1)}>
          &#8250;
        </button>
      )}
    </div>
  )
}
