import React, { useState, useEffect } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Header = ({ scrolled }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`header-main ${scrolled ? "scrolled" : ""}`}>
            <div className="left">
                <img src={scrolled?"images/logo.svg":"LogoDark.svg"} alt="Logo" />
            </div>

            {/* Desktop Navigation */}
            <div className="right">
                <a href="#home" className="aTag"><p>Home</p></a>
                <a href="#aboutus" className="aTag"><p>About us</p></a>
                <a href="#ourServices" className="aTag"><p>Our Services</p></a>
                <a href="#contact" className="aTag"><p>Contact us</p></a>
                <button>Enquire</button>
            </div>

            {/* Hamburger Menu Icon */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="dropdown-menu">
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#aboutus" onClick={() => setMenuOpen(false)}>About us</a>
                    <a href="#ourServices" onClick={() => setMenuOpen(false)}>Our Services</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact us</a>
                    <button>Enquire</button>
                </div>
            )}
        </div>
    );
};
