import './About.css'

import Counter from './Counter'

export default function About() {
  return (
    <section id="sobre">
      <div className="wrap about">
        <div className="reveal reveal-left">
          <div className="eyebrow">Sobre nós</div>
          <h2>Mais de 20 anos cuidando de sorrisos e de famílias</h2>
          <p>Na Clínica Odontológica PDL, você não é só mais um paciente. Pais, filhos e avós são atendidos com a mesma atenção, o mesmo carinho e a mesma transparência.</p>
          <p>Nossa tradição desde 2001 nasceu de um jeito simples de trabalhar: ouvir primeiro, explicar com calma e tratar com cuidado.</p>
        </div>
        <div className="stats">
          <div className="stat reveal reveal-zoom" style={{ '--d': '.05s' }}><b>2001</b><span>no mercado</span></div>
          <div className="stat reveal reveal-zoom" style={{ '--d': '.17s' }}><Counter to={20} suffix="+" /><span>anos de história</span></div>
          <div className="stat reveal reveal-zoom" style={{ '--d': '.29s' }}><Counter to={100} suffix="%" /><span>atendimento humano</span></div>
        </div>
      </div>
    </section>
  )
}
