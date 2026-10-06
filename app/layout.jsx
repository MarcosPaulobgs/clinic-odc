import './globals.css'

const JS_FLAG =
  'var d=document.documentElement;d.classList.add("js");setTimeout(function(){if(!d.hasAttribute("data-ready"))d.classList.remove("js")},4000)'

export const metadata = {
  title: 'Clínica Odontológica PDL | Desde 2001',
  description:
    'Odontologia familiar com atendimento humanizado desde 2001. Orçamento grátis. Não fechamos para o almoço.',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦷</text></svg>",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Marca o html como "js" antes da pintura, para as animações não piscarem.
            Se o JavaScript do React não carregar em 4s, remove a marca e mostra o conteúdo sem animação. */}
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
