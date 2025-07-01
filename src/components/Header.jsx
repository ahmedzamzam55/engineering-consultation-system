import { useState, useEffect } from 'react'

const Header = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="#" className="logo" onClick={() => handleNavClick('home')}>
          <i className="fas fa-hard-hat"></i>
          الاستشارات الهندسية
        </a>
        
        <nav>
          <ul className="nav-menu">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('home')
                }}
              >
                <i className="fas fa-home"></i>
                الرئيسية
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('services')
                }}
              >
                <i className="fas fa-cogs"></i>
                خدماتنا
              </a>
            </li>
            <li>
              <a 
                href="#engineers" 
                className={`nav-link ${activeSection === 'engineers' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('engineers')
                }}
              >
                <i className="fas fa-users"></i>
                المهندسون
              </a>
            </li>
            <li>
              <a 
                href="#consultation" 
                className={`nav-link ${activeSection === 'consultation' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('consultation')
                }}
              >
                <i className="fas fa-file-alt"></i>
                طلب استشارة
              </a>
            </li>
          </ul>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          
          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li>
                <a 
                  href="#home" 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('home')
                  }}
                >
                  <i className="fas fa-home"></i>
                  الرئيسية
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('services')
                  }}
                >
                  <i className="fas fa-cogs"></i>
                  خدماتنا
                </a>
              </li>
              <li>
                <a 
                  href="#engineers" 
                  className={`nav-link ${activeSection === 'engineers' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('engineers')
                  }}
                >
                  <i className="fas fa-users"></i>
                  المهندسون
                </a>
              </li>
              <li>
                <a 
                  href="#consultation" 
                  className={`nav-link ${activeSection === 'consultation' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('consultation')
                  }}
                >
                  <i className="fas fa-file-alt"></i>
                  طلب استشارة
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header