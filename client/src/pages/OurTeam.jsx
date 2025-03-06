import "./OurTeam.css"

export  function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in education and technology, Dr. Johnson founded SprintXplore to revolutionize how students prepare for tech careers.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO & Lead Instructor",
      bio: "Former senior engineer at Google, Michael brings real-world expertise to our curriculum development and technical training programs.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Head of Partnerships",
      bio: "Priya manages our relationships with industry partners, ensuring our students have access to quality internship opportunities.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Lead Data Science Instructor",
      bio: "With a PhD in Machine Learning and experience at top research labs, David leads our data science curriculum.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="team-section" id="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-description">
          Meet our team of experienced educators, industry professionals, and mentors dedicated to your success.
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="team-image">
                <img
                  src={member.image || "/placeholder.svg?height=300&width=300"}
                  alt={member.name}
                  width={300}
                  height={300}
                />
                <div className="team-social">
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-cta">
          <h3>Join Our Team</h3>
          <p>We're always looking for passionate educators and industry professionals to join our mission</p>
          <button className="btn">View Open Positions</button>
        </div>
      </div>
    </section>
  )
}

