import './Footer.css'

export default function Footer() {
  return (
    <footer id="contato">
      <div className="wrap">
        <div className="fgrid">
          <div className="reveal" style={{ '--d': '0.00s' }}>
            <h3>Clínica Odontológica PDL</h3>
            <p>Odontologia familiar desde 2001.</p>
            <p>Rua Exemplo, 123<br />Bairro, Cidade - UF<br />CEP 00000-000</p>
          </div>
          <div className="reveal" style={{ '--d': '0.10s' }}>
            <h3>Telefones</h3>
            <p><a href="#">(00) 0000-0000</a></p>
            <p><a href="#">(00) 0000-0001</a></p>
            <p><a href="#">(00) 90000-0000 (WhatsApp)</a></p>
          </div>
          <div className="reveal" style={{ '--d': '0.20s' }}>
            <h3>Redes sociais</h3>
            <div className="soc">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="copy reveal" style={{ '--d': '.3s' }}>© 2001 a 2026 Clínica Odontológica PDL. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}
