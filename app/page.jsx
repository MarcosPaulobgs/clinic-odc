import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Services from '@/components/Services/Services'
import Gallery from '@/components/Gallery/Gallery'
import Hours from '@/components/Hours/Hours'
import Footer from '@/components/Footer/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp/FloatingWhatsApp'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Hours />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollReveal />
    </>
  )
}
