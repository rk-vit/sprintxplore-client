"use client"

import { useState } from "react"
import "./OurCourses.css"

export default function OurCourses() {
  const [courses] = useState([
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Master both frontend and backend development with modern technologies like React, Node.js, and MongoDB.",
      duration: "12 Weeks + 8 Weeks Internship",
      level: "Beginner to Advanced",
      image: "/placeholder.svg?height=250&width=400",
      features: [
        "HTML, CSS, JavaScript fundamentals",
        "React.js and state management",
        "Node.js and Express backend",
        "Database design with MongoDB",
        "Authentication and authorization",
        "Deployment and DevOps basics",
      ],
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description:
        "Learn to analyze and interpret complex data, build predictive models, and derive actionable insights.",
      duration: "14 Weeks + 8 Weeks Internship",
      level: "Intermediate",
      image: "/placeholder.svg?height=250&width=400",
      features: [
        "Python for data analysis",
        "Statistical analysis and visualization",
        "Machine learning algorithms",
        "Deep learning fundamentals",
        "Big data processing",
        "Business intelligence applications",
      ],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Develop user-centered design skills and create intuitive, engaging digital experiences.",
      duration: "10 Weeks + 8 Weeks Internship",
      level: "Beginner to Intermediate",
      image: "/placeholder.svg?height=250&width=400",
      features: [
        "Design thinking and user research",
        "Wireframing and prototyping",
        "Visual design principles",
        "Interaction design",
        "Usability testing",
        "Design systems and documentation",
      ],
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Master digital marketing strategies to grow businesses and drive customer engagement online.",
      duration: "8 Weeks + 8 Weeks Internship",
      level: "Beginner to Intermediate",
      image: "/placeholder.svg?height=250&width=400",
      features: [
        "SEO and content marketing",
        "Social media marketing",
        "Email marketing campaigns",
        "PPC and display advertising",
        "Analytics and performance tracking",
        "Marketing automation",
      ],
    },
  ])

  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <h2 className="section-title">Our Courses</h2>
        <p className="section-description">
          Our intensive bootcamps are designed to equip you with in-demand skills and provide real-world experience
          through guaranteed internships with our industry partners.
        </p>

        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-image">
                <img
                  src={course.image || "/placeholder.svg?height=250&width=400"}
                  alt={course.title}
                  width={400}
                  height={250}
                />
                <div className="course-level">{course.level}</div>
              </div>

              <div className="course-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>

                <div className="course-details">
                  <div className="course-duration">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M12 7V12L15 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="course-features">
                  <h4>What you'll learn:</h4>
                  <ul>
                    {course.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn course-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-cta">
          <h3>Ready to accelerate your career?</h3>
          <p>Enroll in one of our bootcamps and secure an internship opportunity</p>
          <button className="btn">View All Courses</button>
        </div>
      </div>
    </section>
  )
}

