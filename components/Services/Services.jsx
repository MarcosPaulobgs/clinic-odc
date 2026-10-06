import './Services.css'

const services = [
  {
    title: 'Limpeza e prevenção',
    text: 'Remoção de placa e tártaro para manter dentes e gengivas saudáveis. Revisões periódicas evitam problemas maiores.',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M7 3C5 3 3.5 4.6 3.5 7c0 2 1 3.5 1.5 5.5.4 2 .6 8.5 2.5 8.5 1.5 0 1.3-5 3-5s1.5 5 3 5c1.9 0 2.1-6.5 2.5-8.5.5-2 1.5-3.5 1.5-5.5 0-2.4-1.5-4-3.5-4-1.7 0-2.3.8-4 .8S8.7 3 7 3z" fill="#fff"/><path d="M8 5.5c1.2.5 2.4.5 4 .2" stroke="#0f7455" strokeWidth="1.4" fill="none" strokeLinecap="round"/><path d="M15.5 4.5l1 1.2M17.5 3v2.4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Clareamento dental',
    text: 'Sorriso mais branco com técnica segura e acompanhamento do dentista em todas as etapas.',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M7 3C5 3 3.5 4.6 3.5 7c0 2 1 3.5 1.5 5.5.4 2 .6 8.5 2.5 8.5 1.5 0 1.3-5 3-5s1.5 5 3 5c1.9 0 2.1-6.5 2.5-8.5.5-2 1.5-3.5 1.5-5.5 0-2.4-1.5-4-3.5-4-1.7 0-2.3.8-4 .8S8.7 3 7 3z" fill="#fff"/><path d="M18.5 2l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" fill="#fff"/></svg>
    ),
  },
  {
    title: 'Aparelho ortodôntico',
    text: 'Alinhamento dos dentes para crianças, jovens e adultos, com acompanhamento próximo.',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M7 3C5 3 3.5 4.6 3.5 7c0 2 1 3.5 1.5 5.5.4 2 .6 8.5 2.5 8.5 1.5 0 1.3-5 3-5s1.5 5 3 5c1.9 0 2.1-6.5 2.5-8.5.5-2 1.5-3.5 1.5-5.5 0-2.4-1.5-4-3.5-4-1.7 0-2.3.8-4 .8S8.7 3 7 3z" fill="#fff"/><path d="M4 8.5h16" stroke="#0f7455" strokeWidth="1.6"/><rect x="9.6" y="7" width="4.8" height="3" rx="1" fill="#0f7455"/></svg>
    ),
  },
  {
    title: 'Implantes dentários',
    text: 'Reposição de dentes com resultado firme, natural e duradouro, para voltar a sorrir e mastigar bem.',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M6.5 3h11c1.4 0 2.5 1.2 2.5 3 0 2.2-1.6 3.6-3.4 3.6H7.4C5.600 9.600 4 8.200 4 6c0-1.800 1.100-3 2.500-3z" fill="#fff"/><path d="M9 11h6M9.500 13.500h5M10 16h4M12 11v9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Tratamento de canal',
    text: 'Alívio da dor e preservação do seu dente natural, com atendimento cuidadoso e confortável.',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M7 3C5 3 3.5 4.6 3.5 7c0 2 1 3.5 1.5 5.5.4 2 .6 8.5 2.5 8.5 1.5 0 1.3-5 3-5s1.5 5 3 5c1.9 0 2.1-6.5 2.5-8.5.5-2 1.5-3.5 1.5-5.5 0-2.4-1.5-4-3.5-4-1.7 0-2.3.8-4 .8S8.7 3 7 3z" fill="#fff"/><path d="M9.500 6.500l1.300 5.500-1 5M14.500 6.500l-1.300 5.500 1 5" stroke="#0f7455" strokeWidth="1.200" fill="none" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Restaurações e estética',
    text: 'Correção de cáries, fraturas e pequenos detalhes para devolver a forma e a beleza do sorriso.',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path d="M7 3C5 3 3.5 4.6 3.5 7c0 2 1 3.5 1.5 5.5.4 2 .6 8.5 2.5 8.5 1.5 0 1.3-5 3-5s1.5 5 3 5c1.9 0 2.1-6.5 2.5-8.5.5-2 1.5-3.5 1.5-5.5 0-2.4-1.5-4-3.5-4-1.7 0-2.3.8-4 .8S8.7 3 7 3z" fill="#fff"/><path d="M8.500 8.500l2.300 2.300 4.200-4.600" stroke="#0f7455" strokeWidth="1.800" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicos" className="svc-sec">
      <div className="wrap">
        <div className="center reveal">
          <div className="eyebrow">Nossos serviços</div>
          <h2>Tudo para o sorriso da família em um só lugar</h2>
          <p style={{ color: 'var(--muted)', margin: 0 }}>
            Do check-up de rotina ao tratamento completo, com orçamento grátis.
          </p>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="svc reveal"
              style={{ '--d': `${((i % 3) * 0.12 + Math.floor(i / 3) * 0.08).toFixed(2)}s` }}
            >
              <div className="svc-ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <p className="center reveal" style={{ marginTop: 'clamp(16px,3.4vh,36px)', marginBottom: 0 }}>
          <a className="btn lg" href="#contato">Pedir orçamento grátis</a>
        </p>
      </div>
    </section>
  )
}
