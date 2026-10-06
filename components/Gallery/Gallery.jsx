'use client'

import './Gallery.css'
import { useRef, useState } from 'react'
import Lightbox from './Lightbox'

const photos = [
  {
    src: '/img/sala-espera-acolhedora.jpg',
    alt: 'Sala de espera da clínica com poltronas verdes e painel de sorrisos saudáveis',
    caption: 'Sala de espera acolhedora',
    area: 'g1',
    delay: '0s',
  },
  {
    src: '/img/sala-espera-janela.jpg',
    alt: 'Sala de espera clara e confortável com janela e logotipo ODC',
    caption: 'Ambiente claro e confortável',
    area: 'g2',
    delay: '.12s',
  },
  {
    src: '/img/sala-esterilizacao.jpg',
    alt: 'Sala de esterilização com instrumentos odontológicos',
    caption: 'Esterilização com todo o cuidado',
    area: 'g3',
    delay: '.24s',
  },
]

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const returnFocus = useRef(null)

  const openAt = (i) => {
    returnFocus.current = document.activeElement
    setIndex(i)
  }
  const navigate = (dir) =>
    setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length))

  return (
    <>
      <section id="clinica" className="gal-sec">
        <div className="wrap">
          <div className="center reveal">
            <div className="eyebrow">Nossa clínica</div>
            <h2>Um ambiente pensado para você se sentir em casa</h2>
            <p style={{ color: 'var(--muted)', margin: 0 }}>
              Espaços acolhedores, limpos e organizados, com cuidado de biossegurança em cada etapa.
            </p>
          </div>

          <div className="gal">
            {photos.map((p, i) => (
              <figure
                key={p.src}
                className={`g ${p.area} reveal`}
                style={{ '--d': p.delay }}
                role="button"
                tabIndex={0}
                aria-label={`Ampliar foto: ${p.caption}`}
                onClick={() => openAt(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openAt(i)
                  }
                }}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        photos={photos}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={navigate}
        returnFocusRef={returnFocus}
      />
    </>
  )
}
