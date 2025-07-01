import { useState } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Testimonials = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'أحمد الخالدي',
      position: 'مدير مشروع',
      company: 'شركة البناء المتطور',
      image: null,
      rating: 5,
      text: 'تعامل رائع ومهني من الفريق. تم إنجاز مشروعنا في الوقت المحدد وبأعلى جودة. أنصح بالتعامل معهم بقوة.',
      project: 'مجمع سكني - 50 وحدة'
    },
    {
      id: 2,
      name: 'فاطمة النجار',
      position: 'مهندسة معمارية',
      company: 'مكتب التصميم الحديث',
      image: null,
      rating: 5,
      text: 'خبرة عالية في مجال الاستشارات الهندسية. ساعدونا في حل مشاكل التصميم بطرق إبداعية ومبتكرة.',
      project: 'مركز تجاري'
    },
    {
      id: 3,
      name: 'محمد العتيبي',
      position: 'مطور عقاري',
      company: 'مجموعة العقارات الذهبية',
      image: null,
      rating: 4,
      text: 'سرعة في التنفيذ ودقة في التفاصيل. الفريق محترف ويقدم حلول عملية للتحديات الهندسية.',
      project: 'منتجع سياحي'
    },
    {
      id: 4,
      name: 'سارة الدوسري',
      position: 'مالكة مشروع',
      company: 'المشاريع الصغيرة والمتوسطة',
      image: null,
      rating: 5,
      text: 'تعامل ممتاز ومتابعة مستمرة. حصلت على رخصة البناء بسرعة قياسية دون أي تعقيدات.',
      project: 'فيلا سكنية'
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return (
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fas fa-star ${i < rating ? 'star-filled' : 'star-empty'}`}
          ></i>
        ))}
      </div>
    )
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-quote-left"></i>
            آراء عملائنا
          </h2>
          <p className="section-subtitle">
            اكتشف ما يقوله عملاؤنا عن جودة خدماتنا وخبرتنا في مجال الاستشارات الهندسية
          </p>
        </div>

        <div className="testimonials-container" ref={ref}>
          <div className="testimonial-slider">
            <div 
              className="testimonial-track"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-card ${isIntersecting ? 'fade-in' : ''}`}
                >
                  <div className="testimonial-content">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    {renderStars(testimonial.rating)}
                    
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-position">{testimonial.position}</p>
                        <p className="author-company">{testimonial.company}</p>
                        <div className="project-info">
                          <i className="fas fa-building"></i>
                          {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonial-controls">
            <button 
              className="testimonial-btn prev"
              onClick={prevTestimonial}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <button 
              className="testimonial-btn next"
              onClick={nextTestimonial}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials