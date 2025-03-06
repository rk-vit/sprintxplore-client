import { useEffect, useState } from 'react';
import './App.css';
import { HeroSection } from './pages/HeroSection';
import { AboutUs } from './pages/AboutUs';
import { Header } from './components/Header';
import { Info } from './pages/Info';
import { OurTeam } from './pages/OurTeam';
import ContactUs from './pages/ContactUs';
import VisionMission from './pages/VisionMission';
import OurCourses from './pages/OurCourses';
import Testimonials from './pages/Testimonial';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("useEffect ran");
  
    const handleScroll = () => {
      console.log("Scrolling detected", window.scrollY);
      setScrolled(window.scrollY > 5);
    };
  
    window.addEventListener("scroll", handleScroll);
    console.log("Scroll listener added");
  
    return () => {
      console.log("Scroll listener removed");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className="app-main">
      <Header scrolled={scrolled} />
      <main style={{ minHeight: "200vh" }}> {/* Ensures scrollable content */}
        <HeroSection />
        <AboutUs />
        <VisionMission/>
        <OurCourses/>
        <OurTeam/>
        <Testimonials/>
        <ContactUs/>
        {/* <Info />
        <OurTeam />
        <ContactUs /> */}
      </main>
    </div>
  );
}

export default App;
