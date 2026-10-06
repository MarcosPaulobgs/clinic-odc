'use client'

import { useEffect, useRef, useState } from 'react'

// Número que sobe de 0 até o valor final quando aparece na tela.
export default function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    setValue(0)
    let raf
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const step = (now) => {
          const p = Math.min((now - start) / 1400, 1)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.6 }
    )
    io.observe(ref.current)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <b ref={ref}>
      {value}
      {suffix}
    </b>
  )
}
