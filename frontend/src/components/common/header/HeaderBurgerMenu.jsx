import React from "react";
import "./HeaderBurgerMenu.css";

const HeaderBurgerMenu = ({open}) => {
    return (
        <nav className={`menu ${open ? "open" : ""}`}>
            <a href="/" className="menu-item">
                <span role="img" aria-label="about us">💁🏻‍♂️</span> About us
            </a>
            <a href="/" className="menu-item">
                <span role="img" aria-label="price">💸</span> Pricing
            </a>
            <a href="/" className="menu-item">
                <span role="img" aria-label="contact">📩</span> Contact
            </a>
        </nav>
    );
};

export default HeaderBurgerMenu;