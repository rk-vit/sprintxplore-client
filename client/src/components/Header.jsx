import React from "react";
import "./Header.css"

export const Header = ()=>{
    return(
        <div className="header-main">
            <div className="left">
                <img src="images/logo.svg" />
            </div>
            <div className="right">

                    <a href="#home" className="aTag">
                        <p>Home</p>
                    </a>
                    <a href="#aboutus" className="aTag">
                        <p>About us</p>
                    </a>
                    <a href="#ourServcies" className="aTag">
                        <p>Our Services</p>
                    </a>
               
                    <a href="#contact" className="aTag">
                        <p>Contact us</p>
                    </a>
               
                    <button>
                        Enquire
                    </button>
            </div>
        </div>
    )
}
