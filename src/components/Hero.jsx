const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          نظام الاستشارات الهندسية المتطور
        </h1>
        <p>
          احصل على استشارة هندسية متخصصة من أفضل المهندسين المعتمدين في المملكة. 
          نقدم خدمات شاملة في جميع التخصصات الهندسية مع ضمان الجودة والسرعة في التنفيذ.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('consultation')}
          >
            <i className="fas fa-rocket"></i>
            ابدأ طلبك الآن
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => scrollToSection('services')}
          >
            <i className="fas fa-info-circle"></i>
            تعرف على خدماتنا
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero