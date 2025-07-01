import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import Engineers from './components/Engineers'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import ConsultationForm from './components/ConsultationForm'
import Footer from './components/Footer'
import useActiveSection from './hooks/useActiveSection'

function App() {
  const { activeSection, scrollToSection } = useActiveSection()

  return (
    <div className="app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Stats />
      <Engineers />
      <Testimonials />
      <CTA scrollToSection={scrollToSection} />
      <ConsultationForm />
      <Footer />
    </div>
  )
}

export default App