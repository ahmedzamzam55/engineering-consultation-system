import { useState, useEffect } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Stats = () => {
  const [ref, isIntersecting] = useIntersectionObserver()
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    engineers: 0,
    experience: 0
  })

  const targetNumbers = {
    projects: 500,
    clients: 250,
    engineers: 15,
    experience: 10
  }

  useEffect(() => {
    if (isIntersecting) {
      const duration = 2000 // 2 seconds
      const steps = 50
      const stepDuration = duration / steps

      Object.keys(targetNumbers).forEach(key => {
        let current = 0
        const increment = targetNumbers[key] / steps
        
        const timer = setInterval(() => {
          current += increment
          if (current >= targetNumbers[key]) {
            current = targetNumbers[key]
            clearInterval(timer)
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }))
        }, stepDuration)
      })
    }
  }, [isIntersecting])

  const stats = [
    {
      icon: 'fas fa-project-diagram',
      number: counters.projects,
      label: 'مشروع مكتمل',
      color: '#3498db'
    },
    {
      icon: 'fas fa-users',
      number: counters.clients,
      label: 'عميل راضٍ',
      color: '#27ae60'
    },
    {
      icon: 'fas fa-user-tie',
      number: counters.engineers,
      label: 'مهندس متخصص',
      color: '#e74c3c'
    },
    {
      icon: 'fas fa-calendar-alt',
      number: counters.experience,
      label: 'سنوات خبرة',
      color: '#f39c12'
    }
  ]

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid" ref={ref}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isIntersecting ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                <i className={stat.icon}></i>
              </div>
              <div className="stat-number" style={{ color: stat.color }}>
                {stat.number.toLocaleString()}+
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats