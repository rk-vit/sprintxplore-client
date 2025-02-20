import React from "react";
import "./Info.css"
export const Info = ()=>{
    return (
        <div className="Info-main">
            <h1 className="sectionIntro">Preparing Students to Achieve success</h1>
            <img src="images/infoUnderline.svg"/>
            <div className="sec1">
                <div className="sec1-left">
                    <h1>Vision</h1>
                    <p>To serve as a catalyst for impactful sustainable development, driven by the passion for intelligent technological advancements</p>
                </div>
                <div className="sec1-right">
                    <img className="img1" src="images/infoRedHigh.svg"/>
                    <img className="img2" src="images/infoTeacherStudent.svg"/>
                </div>
            </div>
            <div className="sec2">
                <div className="sec2-left">
                    <img className="img1" src="images/infoRedHigh.svg"/>
                    <img className="img2" src="images/infoTeacherStudent.svg"/>
                </div>
                <div className="sec2-right">
                    <h1>Mission</h1>
                    <p>To transform the future of businesses by empowering organizations to harness the full potential of technology, that enables them to navigate complexities, seize opportunities, and cultivate resilience in a dynamically evolving landscape</p>
                </div>
            </div>
        </div>
    )
}