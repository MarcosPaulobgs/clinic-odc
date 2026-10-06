import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-in">
        <div className="hero-txt">
          <span className="pill">Odontologia familiar</span>
          <h1>Sorrisos saudáveis e <span>cuidado de família</span> para todas as idades</h1>
          <p className="sub">Desde 2001 cuidando do sorriso de quem você ama, com atendimento humano, preço acessível e horários que cabem na sua rotina.</p>
          <div className="hero-cta">
            <a className="btn lg white" href="#contato">Quero meu orçamento grátis no WhatsApp</a>
            <a className="btn lg ghost" href="#servicos">Conhecer serviços</a>
          </div>
          <p className="cta-note">Resposta rápida. Sem compromisso.</p>
          <ul className="chips">
            <li>Não fechamos para o almoço</li>
            <li>Aberto aos sábados e feriados</li>
            <li>Atendimento humanizado</li>
          </ul>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="ring"></div>
          <svg className="tooth" viewBox="0 0 24 24"><path d="M7 3C5 3 3.5 4.6 3.5 7c0 2 1 3.5 1.5 5.5.4 2 .6 8.5 2.5 8.5 1.5 0 1.3-5 3-5s1.5 5 3 5c1.9 0 2.1-6.5 2.5-8.5.5-2 1.5-3.5 1.5-5.5 0-2.4-1.5-4-3.5-4-1.7 0-2.3.8-4 .8S8.7 3 7 3z" fill="#fff"/><path d="M8 5.2c-1.300.2-2.200 1.200-2.200 2.800" stroke="#cfeee0" strokeWidth=".9" fill="none" strokeLinecap="round"/></svg>
          <svg className="spark s1" viewBox="0 0 24 24"><path d="M12 0l2.600 9.400L24 12l-9.400 2.600L12 24l-2.600-9.400L0 12l9.400-2.600z" fill="#bff0d6"/></svg>
          <svg className="spark s2" viewBox="0 0 24 24"><path d="M12 0l2.600 9.400L24 12l-9.400 2.600L12 24l-2.600-9.400L0 12l9.400-2.600z" fill="#fff"/></svg>
        </div>
      </div>
    </section>
  )
}
