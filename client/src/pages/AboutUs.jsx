import React from "react";
import "./AboutUs.css"
import { Carousel } from "../components/Carousel";
export const AboutUs = ()=>{
    return(
        <div className="about-main">
            <div className="text-content">
                <Carousel/>
            </div>
        </div>
    ) 
}