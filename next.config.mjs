/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove o ícone "N" do Next.js no canto inferior esquerdo (só aparece em desenvolvimento).
  devIndicators: false,

  // Permite abrir o servidor de desenvolvimento pelo IP da rede (ex.: no celular ou em outro PC).
  // Sem isso, o Next 16 bloqueia os arquivos JS do dev e a página não "hidrata" (animações não rodam).
  // Se o seu IP mudar, troque ou adicione aqui.
  allowedDevOrigins: ['10.0.0.117', '10.0.0.*', '192.168.*.*', 'localhost'],
}

export default nextConfig
