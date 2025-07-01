const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <i className="fas fa-hard-hat"></i>
              الاستشارات الهندسية
            </h3>
            <p>
              نحن شركة رائدة في مجال الاستشارات الهندسية، نقدم خدمات متميزة 
              في جميع التخصصات الهندسية بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>
              <i className="fas fa-cogs"></i>
              خدماتنا
            </h3>
            <ul>
              <li><a href="#services">إصدار الرخص</a></li>
              <li><a href="#services">الاستشارات الإنشائية</a></li>
              <li><a href="#services">الاستشارات الكهربائية</a></li>
              <li><a href="#services">الاستشارات الميكانيكية</a></li>
              <li><a href="#services">الاستشارات المعمارية</a></li>
              <li><a href="#services">الاستشارات المدنية</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>
              <i className="fas fa-phone"></i>
              تواصل معنا
            </h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              الرياض، المملكة العربية السعودية
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +966 11 123 4567
            </p>
            <p>
              <i className="fab fa-whatsapp"></i>
              +966 50 123 4567
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              info@engineering-consult.com
            </p>
          </div>
          
          <div className="footer-section">
            <h3>
              <i className="fas fa-clock"></i>
              ساعات العمل
            </h3>
            <p>
              <strong>الأحد - الخميس:</strong><br />
              8:00 ص - 6:00 م
            </p>
            <p>
              <strong>الجمعة:</strong><br />
              مغلق
            </p>
            <p>
              <strong>السبت:</strong><br />
              9:00 ص - 2:00 م
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
              <i className="fas fa-headset"></i>
              الدعم الفني متاح 24/7
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2024 نظام الاستشارات الهندسية. جميع الحقوق محفوظة.
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            مرخص من الهيئة السعودية للمهندسين | رقم الترخيص: ENG-2024-001
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer