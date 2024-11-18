import React from "react";
import "./HeaderBurgerMenu.css";
import facebook_icon from "../../../assets/images/main-page/menu-facebook-icon.svg";
import instagram_icon from "../../../assets/images/main-page/menu-instagram-icon.svg";
import telegram_icon from "../../../assets/images/main-page/menu-telegram-icon.svg";

const HeaderBurgerMenu = ({open}) => {
    return (
        <nav className={`menu ${open ? "active" : ""}`}>
            <a href="/" className="menu-item">
                Про компанію
            </a>
            <a href="/" className="menu-item">
                Послуги
            </a>
            <a href="/" className="menu-item">
                Медіа
            </a>
            <a href="/" className="menu-item">
                Вакансії
            </a>
            <a href="/" className="menu-item">
                Новини
            </a>
            <a href="/" className="menu-item">
                Контакти
            </a>

            <ul className="menu-lang">
                <li className="menu-lang__item menu-lang__item-first-child">
                    <a href="www.google.com" className="menu-lang__item-link">UK</a>
                </li>
                <li className="menu-lang__item">
                    <a href="#menu" className="menu-lang__item-link">ENG</a>
                </li>
            </ul>
            <div className="menu-social">
                <a className="menu-social__link" href="https://www.facebook.com/">
                    <img
                        className="menu-social__link-img"
                        src={facebook_icon}
                        alt="facebook-icon"
                    />
                </a>
                <a className="menu-social__link menu-social__link-second-child" href="https://www.instagram.com/">
                    <img
                        className="menu-social__link-img"
                        src={instagram_icon}
                        alt="instagram-icon"
                    />
                </a>
                <a className="menu-social__link" href="https://www.telegram.com/">
                    <img
                        className="menu-social__link-img"
                        src={telegram_icon}
                        alt="telegram-icon"
                    />
                </a>
            </div>
        </nav>
    );
};

export default HeaderBurgerMenu;