import { useState } from 'react'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    engineer: '',
    details: ''
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceTypes = [
    { value: 'general_license', label: 'إصدار رخصة عامة' },
    { value: 'immediate_license', label: 'إصدار رخصة فورية' },
    { value: 'structural_consultation', label: 'استشارة إنشائية' },
    { value: 'electrical_consultation', label: 'استشارة كهربائية' },
    { value: 'mechanical_consultation', label: 'استشارة ميكانيكية' },
    { value: 'architectural_consultation', label: 'استشارة معمارية' },
    { value: 'civil_consultation', label: 'استشارة مدنية' },
    { value: 'environmental_consultation', label: 'استشارة بيئية' }
  ]

  const engineers = [
    { 
      id: 'eng1', 
      name: 'م. أحمد محمد العلي', 
      specialty: 'هندسة إنشائية', 
      experience: '15 سنة خبرة',
      services: ['general_license', 'immediate_license', 'structural_consultation']
    },
    { 
      id: 'eng2', 
      name: 'م. فاطمة أحمد السالم', 
      specialty: 'هندسة كهربائية', 
      experience: '12 سنة خبرة',
      services: ['electrical_consultation', 'general_license']
    },
    { 
      id: 'eng3', 
      name: 'م. محمد علي الخطيب', 
      specialty: 'هندسة ميكانيكية', 
      experience: '18 سنة خبرة',
      services: ['mechanical_consultation', 'general_license', 'immediate_license']
    },
    { 
      id: 'eng4', 
      name: 'م. سارة حسن المطيري', 
      specialty: 'هندسة معمارية', 
      experience: '10 سنوات خبرة',
      services: ['architectural_consultation', 'general_license']
    },
    { 
      id: 'eng5', 
      name: 'م. خالد إبراهيم النجار', 
      specialty: 'هندسة مدنية', 
      experience: '20 سنة خبرة',
      services: ['civil_consultation', 'general_license', 'immediate_license']
    },
    { 
      id: 'eng6', 
      name: 'م. نورا عبدالله الشهري', 
      specialty: 'هندسة بيئية', 
      experience: '8 سنوات خبرة',
      services: ['environmental_consultation', 'general_license']
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // محاكاة إرسال البيانات إلى الخادم
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('بيانات الطلب:', formData)
      setShowSuccess(true)
      
      // إخفاء رسالة النجاح بعد 5 ثوان
      setTimeout(() => {
        setShowSuccess(false)
        // إعادة تعيين النموذج
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          engineer: '',
          details: ''
        })
      }, 5000)
    } catch (error) {
      console.error('خطأ في إرسال الطلب:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // تصفية المهندسين بناءً على نوع الخدمة المختارة
  const availableEngineers = formData.serviceType 
    ? engineers.filter(eng => eng.services.includes(formData.serviceType))
    : engineers

  return (
    <section id="consultation" className="section form-section">
      <div className="container">
        <div className="form-card">
          <div className="form-header">
            <div className="form-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h2 className="form-title">
              طلب استشارة هندسية
            </h2>
            <p className="form-subtitle">
              احصل على استشارة هندسية متخصصة من أفضل المهندسين المعتمدين في المملكة العربية السعودية
            </p>
            <div className="form-instruction">
              <i className="fas fa-info-circle"></i>
              املأ النموذج أدناه بالمعلومات المطلوبة وسيقوم فريقنا المتخصص بالتواصل معك خلال 24 ساعة
            </div>
          </div>
          
          {showSuccess && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              تم إرسال طلبك بنجاح! سيتم التواصل معك في أقرب وقت ممكن.
            </div>
          )}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              الاسم الكامل <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="مثال: أحمد محمد العلي"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">
              البريد الإلكتروني <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="مثال: ahmed@gmail.com"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">
              رقم الهاتف <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="مثال: 0501234567"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">
              العنوان <span className="required">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="مثال: الرياض، حي النرجس، شارع الأمير محمد بن عبدالعزيز"
            />
          </div>
        </div>

        <div className="form-group service-type-group">
          <label htmlFor="serviceType">
            نوع الخدمة المطلوبة <span className="required">*</span>
          </label>
          <div className="service-type-wrapper">
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">اختر نوع الخدمة المطلوبة</option>
              {serviceTypes.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="engineer">
            اختيار المهندس <span className="required">*</span>
          </label>
          <select
            id="engineer"
            name="engineer"
            value={formData.engineer}
            onChange={handleChange}
            required
            disabled={!formData.serviceType}
          >
            <option value="">
              {formData.serviceType ? 'اختر المهندس المناسب' : 'اختر نوع الخدمة أولاً'}
            </option>
            {availableEngineers.map(engineer => (
              <option key={engineer.id} value={engineer.id}>
                {engineer.name} - {engineer.specialty} ({engineer.experience})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="details">
            تفاصيل الطلب <span className="required">*</span>
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            placeholder="اكتب تفاصيل طلبك والمتطلبات الخاصة مثل: نوع المشروع، المساحة، الموقع، المتطلبات الخاصة..."
            rows="5"
          />
        </div>

        <button type="submit" className="form-submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i>
              جاري الإرسال...
            </>
          ) : (
            'إرسال الطلب'
          )}
        </button>
      </form>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm