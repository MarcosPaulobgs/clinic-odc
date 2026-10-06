import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#" aria-label="Clínica Odontológica PDL"><img src="/img/logo.jpg" alt="Logo ODC, clínica odontológica" /></a>
        <div className="right"><a className="btn sm" href="#contato">Agende sua avaliação</a></div>
      </div>
    </header>
  )
}
