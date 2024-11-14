import React from "react";
import "./HeaderBurger.css";

const HeaderBurger = ({open, setOpen}) => {
    return (
        <button className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <div className="burger-line"/>
            <div className="burger-line"/>
            <div className="burger-line"/>
        </button>
    );
};

export default HeaderBurger;