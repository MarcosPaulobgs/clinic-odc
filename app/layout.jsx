import './globals.css'

const JS_FLAG =
  'var d=document.documentElement;d.classList.add("js");setTimeout(function(){if(!d.hasAttribute("data-ready"))d.classList.remove("js")},4000)'

// Endereço público do site (precisa ser absoluto para o WhatsApp/Facebook acharem a imagem).
// Defina NEXT_PUBLIC_SITE_URL na Vercel (ex.: https://www.seudominio.com.br).
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

const OG_TITLE = 'Clínica Odontológica PDL | Sorrisos saudáveis para toda a família'
const OG_DESC =
  'Odontologia familiar com atendimento humanizado desde 2001. Orçamento grátis. Não fechamos para o almoço.'
const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Família sorrindo na Clínica Odontológica - Sorrisos saudáveis para toda a família',
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Clínica Odontológica PDL | Desde 2001',
  description:
    'Odontologia familiar com atendimento humanizado desde 2001. Orçamento grátis. Não fechamos para o almoço.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Clínica Odontológica PDL',
    title: OG_TITLE,
    description: OG_DESC,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: OG_TITLE,
    description: OG_DESC,
    images: [OG_IMAGE.url],
  },
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
