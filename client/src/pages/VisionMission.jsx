import "./VisionMission.css"

export default function VisionMission() {
  return (
    <section className="vision-mission-section" id="vision">
      <div className="container">
        <h2 className="section-title">Our Vision & Mission</h2>

        <div className="vision-mission-container">
          <div className="vision-box">
            <div className="vm-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  fill="currentColor"
                />
                <path
                  d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3>Our Vision</h3>
            <p>
              To revolutionize education by creating a seamless bridge between academic learning and industry
              requirements, empowering students to become job-ready professionals who drive innovation and excellence in
              their fields.
            </p>
          </div>

          <div className="mission-box">
            <div className="vm-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 9.5L9.5 5L14 9.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 5V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 14.5L19 19L14.5 23.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M19 19H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide high-quality, industry-relevant education through intensive bootcamps, coupled with guaranteed
              internship opportunities that allow students to apply their knowledge in real-world settings, fostering
              their growth into skilled professionals ready to make an impact.
            </p>
          </div>
        </div>

        <div className="values-container">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Excellence</h4>
              <p>We strive for excellence in everything we do, from curriculum design to student support.</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>We constantly innovate our teaching methods and course content to stay ahead of industry trends.</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>
                We maintain the highest standards of integrity in our interactions with students, partners, and
                stakeholders.
              </p>
            </div>
            <div className="value-item">
              <h4>Collaboration</h4>
              <p>
                We believe in the power of collaboration between academia and industry to create meaningful learning
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

