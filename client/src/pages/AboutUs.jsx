import React from "react";
import "./AboutUs.css"
import { Carousel } from "../components/Carousel";
export const AboutUs = ()=>{
    return(
        <div className="about-main">
            <div className="text-content">
                <h1>About us</h1>
                <Carousel/>
            </div>
        </div>
    ) 
}