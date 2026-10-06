import './Hours.css'

export default function Hours() {
  return (
    <section id="horarios" className="hours-sec">
      <div className="wrap center">
        <div className="eyebrow reveal">Praticidade</div>
        <h2 className="reveal" style={{ '--d': '.08s' }}>Abrimos quando você precisa</h2>
        <p className="reveal" style={{ color: 'var(--muted)', margin: '0', '--d': '.16s' }}>Sábado e feriado também. Seu cuidado não precisa esperar.</p>
        <div className="card">
          <div className="row reveal reveal-left" style={{ '--d': '0.08s' }}><b>Segunda a sexta</b><span>07:00 às 17:30</span></div>
          <div className="row reveal reveal-left" style={{ '--d': '0.20s' }}><b>Sábado</b><span>07:00 às 15:30</span></div>
          <div className="row reveal reveal-left" style={{ '--d': '0.32s' }}><b>Feriados</b><span>08:00 às 11:30</span></div>
        </div>
        <div className="badge reveal reveal-zoom" style={{ '--d': '.1s' }}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Não fechamos para o almoço
        </div>
        <p style={{ marginTop: '28px' }}><a className="btn lg" href="#contato">Agendar minha avaliação</a></p>
      </div>
    </section>
  )
}
