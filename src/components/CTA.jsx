const CTA = ({ scrollToSection }) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              هل تحتاج استشارة هندسية متخصصة؟
            </h2>
            <p className="cta-subtitle">
              لا تتردد في التواصل معنا الآن للحصول على أفضل الخدمات الهندسية 
              من فريق من المهندسين المعتمدين والمتخصصين
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <i className="fas fa-check-circle"></i>
                استشارة مجانية أولية
              </div>
              <div className="cta-feature">
                <i className="fas fa-clock"></i>
                رد سريع خلال 24 ساعة
              </div>
              <div className="cta-feature">
                <i className="fas fa-shield-alt"></i>
                ضمان الجودة والاحترافية
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => scrollToSection('consultation')}
            >
              <i className="fas fa-rocket"></i>
              ابدأ مشروعك الآن
            </button>
            
            <div className="cta-contact">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <span>اتصل بنا</span>
                  <strong>+966 11 123 4567</strong>
                </div>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <span>واتساب</span>
                  <strong>+966 50 123 4567</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cta-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
    </section>
  )
}

export default CTA