import React from "react";
import "./HeroSection.css";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
    return (
        <div className="Hero-main">
            <div className="tagLine">
                <h1>Empowering individuals with</h1>
                <TypeAnimation
                    sequence={[
                        "cutting-edge technical skills",
                        2000,
                        "innovative technology solutions.",
                        2000
                    ]}
                    wrapper="h2"
                    cursor={true}
                    repeat={Infinity}
                    className="typewriter-text"
                />
            </div>
            <div className="tagButtons">
                <button className="button-tag">Explore Courses &gt;</button>
                <button className="button-tag">Know More</button>
            </div>
        </div>
    );
};
