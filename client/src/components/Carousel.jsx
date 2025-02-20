import React from "react";

export const Carousel = () => {
  return (
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://picsum.photos/id/237/800/400" className="d-block w-100" alt="Slide 1" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>We are SprintXplore.</h1>
              <p className="opacity-75">we are passionate about empowering enthusiastic individuals with cutting-edge technical skills and advanced technology solutions for product development and operational consultations.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src="https://picsum.photos/id/247/800/400" className="d-block w-100" alt="Slide 3" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Our journey</h1>
              <p> began with a simple yet powerful approach.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <img src="https://picsum.photos/seed/picsum/800/400" className="d-block w-100" alt="Slide 2" />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>We with a team of </h1>
              <p>budding like minded people are now together in a focus to build a better system by serving technology as key value.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
