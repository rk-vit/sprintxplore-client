"use client"

import { useState, useEffect, useRef } from "react"
import "./Testimonial.css"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Full Stack Developer at TechCorp",
      image: "/placeholder.svg?height=60&width=60",
      text: "The Full Stack Development bootcamp at SprintXplore completely transformed my career. The curriculum was challenging but incredibly rewarding, and the internship opportunity led directly to my current job. I can't recommend it enough!",
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      role: "Data Scientist at AnalyticsPro",
      image: "/placeholder.svg?height=60&width=60",
      text: "As someone transitioning from a non-technical background, I was worried about keeping up. The instructors at SprintXplore were incredibly supportive and the hands-on approach to learning made complex concepts accessible. The internship was the perfect capstone to the experience.",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "UX Designer at CreativeHub",
      image: "/placeholder.svg?height=60&width=60",
      text: "The UI/UX Design bootcamp provided me with both the technical skills and industry connections I needed to launch my career. The curriculum was current and relevant, and the internship gave me real-world experience that made my portfolio stand out.",
    },
    {
      id: 4,
      name: "Aisha Patel",
      role: "Digital Marketing Specialist at GrowthGenius",
      image: "/placeholder.svg?height=60&width=60",
      text: "SprintXplore's Digital Marketing bootcamp was exactly what I needed to pivot my career. The instructors brought real-world examples to every lesson, and the internship allowed me to apply my skills immediately. Within a month of completing the program, I had multiple job offers.",
    },
  ]

  useEffect(() => {
    startAutoSlide()
    return () => stopAutoSlide()
  }, [])

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleDotClick = (index) => {
    setActiveIndex(index)
    stopAutoSlide()
    startAutoSlide()
  }

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Students Say</h2>

        <div className="testimonials-container">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 11H6C4.89543 11 4 10.1046 4 9V7C4 5.89543 4.89543 5 6 5H8C9.10457 5 10 5.89543 10 7V11ZM10 11V13C10 15.2091 8.20914 17 6 17H5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 11H16C14.8954 11 14 10.1046 14 9V7C14 5.89543 14.8954 5 16 5H18C19.1046 5 20 5.89543 20 7V11ZM20 11V13C20 15.2091 18.2091 17 16 17H15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image || "/placeholder.svg?height=60&width=60"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-text">Graduates</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-text">Employment Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-text">Partner Companies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-text">Student Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}

