import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Services = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  const services = [
    {
      icon: 'fas fa-certificate',
      title: 'إصدار رخصة عامة',
      description: 'استخراج رخص البناء والتشغيل العامة للمشاريع السكنية والتجارية والصناعية وفقاً للأنظمة المعمول بها.'
    },
    {
      icon: 'fas fa-clock',
      title: 'إصدار رخصة فورية',
      description: 'خدمة استخراج الرخص العاجلة في أقل وقت ممكن للحالات الطارئة والمشاريع ذات الأولوية العالية.'
    },
    {
      icon: 'fas fa-building',
      title: 'استشارات إنشائية',
      description: 'تصميم وحساب المنشآت والمباني، دراسة التربة، وتحليل المقاومة الهيكلية للمشاريع المختلفة.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'استشارات كهربائية',
      description: 'تصميم الأنظمة الكهربائية، شبكات الإضاءة، أنظمة الطاقة المتجددة، والحماية الكهربائية.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'استشارات ميكانيكية',
      description: 'تصميم أنظمة التكييف والتهوية، السباكة، شبكات الغاز، وأنظمة مكافحة الحريق.'
    },
    {
      icon: 'fas fa-drafting-compass',
      title: 'استشارات معمارية',
      description: 'التصميم المعماري، التخطيط العمراني، تصميم المساحات الداخلية، والتصميم البيئي المستدام.'
    },
    {
      icon: 'fas fa-road',
      title: 'استشارات مدنية',
      description: 'تصميم الطرق والجسور، شبكات المياه والصرف الصحي، وجميع مشاريع البنية التحتية.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'دراسات السلامة',
      description: 'تقييم مخاطر السلامة، وضع خطط الطوارئ، وتصميم أنظمة الحماية والأمان للمنشآت.'
    }
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-tools"></i>
            خدماتنا الهندسية المتخصصة
          </h2>
          <p className="section-subtitle">
            نقدم مجموعة شاملة من الخدمات الهندسية المتخصصة لتلبية جميع احتياجاتكم 
            بأعلى معايير الجودة والاحترافية
          </p>
        </div>
        
        <div className="services-grid" ref={ref}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${isIntersecting ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <div className="feature-badge">
                  <i className="fas fa-check"></i>
                  خدمة معتمدة
                </div>
                <div className="feature-badge">
                  <i className="fas fa-clock"></i>
                  سريع ودقيق
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services