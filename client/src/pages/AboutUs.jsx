import React from "react";
import "./AboutUs.css";

export  function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>

        <div className="about-container">
          <div className="about-image">
            <img src="https://picsum.photos/id/237/500/400" alt="About SprintXplore" width="500" height="400" />
          </div>

          <div className="about-content">
            <h3>Empowering Students Through Practical Education</h3>
            <p>
              SprintXplore was founded with a simple mission: to bridge the gap between theoretical education and
              practical industry requirements. We believe that learning should be hands-on, relevant, and directly
              applicable to real-world scenarios.
            </p>
            <p>
              Our unique approach combines intensive bootcamp-style learning with guaranteed internship placements,
              ensuring that our students not only gain knowledge but also valuable industry experience that sets them
              apart in the job market.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <img src="/images/classroom.svg" alt="Expert Mentors" width="50" height="50" />
                </div>
                <div className="feature-text">
                  <h4>Expert Mentors</h4>
                  <p>Learn from industry professionals with years of experience</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <img src="/images/code.svg" alt="Practical Projects" width="50" height="50" />
                </div>
                <div className="feature-text">
                  <h4>Practical Projects</h4>
                  <p>Build real-world projects that enhance your portfolio</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <img src="/images/work.svg" alt="Internship Guarantee" width="50" height="50" />
                </div>
                <div className="feature-text">
                  <h4>Internship Guarantee</h4>
                  <p>Gain valuable work experience with our partner companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
