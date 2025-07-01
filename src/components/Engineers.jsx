import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Engineers = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  const engineers = [
    {
      id: 'eng1',
      name: 'م. أحمد محمد العلي',
      specialty: 'هندسة إنشائية',
      experience: '15 سنة خبرة',
      rating: 4.9,
      projects: 150,
      services: ['general_license', 'immediate_license', 'structural_consultation'],
      description: 'خبير في تصميم المباني السكنية والتجارية والجسور'
    },
    {
      id: 'eng2',
      name: 'م. فاطمة أحمد السالم',
      specialty: 'هندسة كهربائية',
      experience: '12 سنة خبرة',
      rating: 4.7,
      projects: 120,
      services: ['electrical_consultation', 'general_license'],
      description: 'متخصصة في أنظمة الطاقة المتجددة والتحكم الآلي'
    },
    {
      id: 'eng3',
      name: 'م. محمد علي الخطيب',
      specialty: 'هندسة ميكانيكية',
      experience: '18 سنة خبرة',
      rating: 4.8,
      projects: 200,
      services: ['mechanical_consultation', 'general_license', 'immediate_license'],
      description: 'خبير في أنظمة التكييف والتهوية وشبكات السباكة'
    },
    {
      id: 'eng4',
      name: 'م. سارة حسن المطيري',
      specialty: 'هندسة معمارية',
      experience: '10 سنوات خبرة',
      rating: 4.6,
      projects: 80,
      services: ['architectural_consultation', 'general_license'],
      description: 'متخصصة في التصميم المعماري المستدام والتخطيط العمراني'
    },
    {
      id: 'eng5',
      name: 'م. خالد إبراهيم النجار',
      specialty: 'هندسة مدنية',
      experience: '20 سنة خبرة',
      rating: 4.9,
      projects: 250,
      services: ['civil_consultation', 'general_license', 'immediate_license'],
      description: 'خبير في مشاريع البنية التحتية والطرق والجسور'
    },
    {
      id: 'eng6',
      name: 'م. نورا عبدالله الشهري',
      specialty: 'هندسة بيئية',
      experience: '8 سنوات خبرة',
      rating: 4.5,
      projects: 65,
      services: ['environmental_consultation', 'general_license'],
      description: 'متخصصة في معالجة المياه وإدارة النفايات والتأثير البيئي'
    }
  ]

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fas fa-star star ${i < Math.floor(rating) ? '' : 'text-muted'}`}
          ></i>
        ))}
      </div>
    )
  }

  return (
    <section id="engineers" className="section engineers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-user-tie"></i>
            فريق المهندسين المتخصصين
          </h2>
          <p className="section-subtitle">
            نفخر بفريقنا من المهندسين المعتمدين والمتخصصين في مختلف المجالات الهندسية 
            مع سنوات من الخبرة والإنجازات المميزة
          </p>
        </div>
        
        <div className="engineers-grid" ref={ref}>
          {engineers.map((engineer, index) => (
            <div 
              key={engineer.id} 
              className={`engineer-card ${isIntersecting ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="engineer-avatar">
                <i className="fas fa-user-tie"></i>
              </div>
              
              <h3 className="engineer-name">{engineer.name}</h3>
              <p className="engineer-specialty">
                <i className="fas fa-graduation-cap"></i>
                {engineer.specialty}
              </p>
              <p className="engineer-experience">
                <i className="fas fa-briefcase"></i>
                {engineer.experience}
              </p>
              
              <div className="engineer-rating">
                {renderStars(engineer.rating)}
                <span className="rating-number">({engineer.rating})</span>
              </div>
              
              <div className="engineer-projects">
                <i className="fas fa-project-diagram"></i>
                {engineer.projects} مشروع مكتمل
              </div>
              
              <p style={{ 
                marginTop: '1rem', 
                fontSize: '0.9rem', 
                color: '#666', 
                lineHeight: '1.5' 
              }}>
                {engineer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Engineers