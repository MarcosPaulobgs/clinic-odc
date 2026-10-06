'use client'

import './FloatingWhatsApp.css'
import { useEffect, useState } from 'react'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  // Aparece quando a primeira tela (hero) já saiu de vista
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a className={`wpp${show ? ' show' : ''}`} href="#contato" tabIndex={show ? 0 : -1} aria-hidden={!show}>
      WhatsApp
    </a>
  )
}
