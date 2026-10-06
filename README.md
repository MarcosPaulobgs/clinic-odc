# Clínica PDL / ODC - Landing page (Next.js)

## Como rodar
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # versão de produção
```

## Estrutura (uma pasta por seção, com o JSX e o CSS juntos)
```
app/
  layout.jsx            html base, metadata e script que ativa as animações
  page.jsx              monta a página juntando as seções
  globals.css           só o que é compartilhado: cores, reset, .wrap, .btn, títulos e .reveal
components/
  Header/               Header.jsx + Header.css
  Hero/                 Hero.jsx + Hero.css
  About/                About.jsx + About.css + Counter.jsx (número que sobe)
  Services/             Services.jsx + Services.css (lista de serviços no topo do arquivo)
  Gallery/              Gallery.jsx + Gallery.css + Lightbox.jsx + Lightbox.css
  Hours/                Hours.jsx + Hours.css
  Footer/               Footer.jsx + Footer.css
  FloatingWhatsApp/     FloatingWhatsApp.jsx + FloatingWhatsApp.css
  ScrollReveal/         ScrollReveal.jsx (animação de entrada ao rolar, classe "reveal")
public/img/             logo e fotos
```

## Abrir pelo IP da rede (celular ou outro PC)
O `next.config.mjs` já libera `10.0.0.*` e `192.168.*.*` em `allowedDevOrigins`. Sem isso o Next 16
bloqueia o JavaScript do modo dev quando você acessa por IP, e as animações não rodam.
Se o seu IP for de outra faixa, adicione na lista e reinicie o `npm run dev`.

## Tamanho do hero
Header + hero somam exatamente a altura da tela (`100svh`) no PC e no celular. As fontes e espaços do hero
usam `clamp()` com `vw` e `vh`, então escalam com a tela. Em telas baixas, itens menos importantes
(nota "Resposta rápida", selos, às vezes o subtítulo) somem para tudo caber sem rolar.
O botão flutuante de WhatsApp só aparece depois de rolar além do hero.

## Observação sobre o CSS
Cada `.css` é importado pelo componente da própria pasta. As classes continuam globais
(não são CSS Modules), então evite repetir o mesmo nome de classe em seções diferentes.

## Para usar com dados reais
Troque os `href="#"` e `href="#contato"` pelos links reais (WhatsApp, telefone, redes)
em `Header`, `Hero`, `Services`, `Hours` e `Footer`.
