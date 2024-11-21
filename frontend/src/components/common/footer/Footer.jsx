import React from 'react'

import "./Footer.css"
import logo from '../../../assets/images/footer/logo.svg';
import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../../translations/language";
import getTranslations from "../../../translations/translations";

const Footer = () => {

    const [language, setLanguage] = React.useContext(LanguageContext);

    const translation = getTranslations(language, "footer");

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content__logo">
                        <NavLink to={"/"}>
                            <img className="footer-content__logo-img" src={logo} alt="logo"/>
                        </NavLink>
                        <p className="footer-content__logo-text">
                            {translation["Забезпечуємо безпечне виробництво та застосування вибухових матеріалів у різних індустріях."]}
                        </p>
                    </div>

                    <div className="footer-content-menu">
                        <h3 className="footer-content-menu__title footer-title">{translation["Меню:"]}</h3>
                        <ul className="footer-content-menu__list">
                            <li className="footer-content-menu__items">
                                <NavLink to="/about-us/" className="footer-content-menu__link">{translation["Про компанію"]}</NavLink>
                            </li>
                            <li className="footer-content-menu__items">
                                <NavLink to="/services/" className="footer-content-menu__link">{translation["Продукція"]}</NavLink>
                            </li>
                            <li className="footer-content-menu__items">
                                <NavLink to="/media/" className="footer-content-menu__link">{translation["Медіа"]}</NavLink>
                            </li>
                            <li className="footer-content-menu__items">
                                <NavLink to="/vacancies/" className="footer-content-menu__link">{translation["Вакансії"]}</NavLink>
                            </li>
                            <li className="footer-content-menu__items">
                                <NavLink to="/news/" className="footer-content-menu__link">{translation["Новини"]}</NavLink>
                            </li>
                            <li className="footer-content-menu__items">
                                <NavLink to="/contacts/" className="footer-content-menu__link">{translation["Контакти"]}</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-content-graph">
                        <h3 className="footer-content-graph__title footer-title">{translation["Графік роботи:"]}</h3>
                        <ul className="footer-content-graph__list">
                            <li className="footer-content-graph__items">{translation["Пн - Пт 8:00 - 17:00"]}</li>
                            <li className="footer-content-graph__items">{translation["Сб 8:00 - 13:00"]}</li>
                            <li className="footer-content-graph__items">
                                <a href="tel:+380979471159"
                                   className="footer-content-graph__link footer-content-graph__link-tel">+38(097)-947-11-59</a>
                            </li>
                            <li className="footer-content-graph__items">
                                <a href="mailto:secretar.uniservis@gmail.com"
                                   className="footer-content-graph__link footer-content-graph__link-mail">
                                    secretar.uniservis@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-content-contacts">
                        <h3 className="footer-content-contacts__title footer-title">{translation["Контакти"]}:</h3>
                        <span className="footer-content-cotacts__text">
                            {translation["11634, Україна, Житомирська обл., Коростенський р-н, селище міського типу Гранітне(з), вул.Шевченка, будинок"]}
                        </span>

                        <div className="footer-content__links">
                            <a href="https://www.facebook.com/" className="footer-content__link">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" fill="#00CCCC"/>
                                    <path
                                        d="M16.0843 22V15.6144H18.2268L18.5483 13.1251H16.0843V11.536C16.0843 10.8155 16.2836 10.3245 17.3179 10.3245L18.635 10.324V8.09746C18.4072 8.06786 17.6254 8 16.7154 8C14.8152 8 13.5142 9.15988 13.5142 11.2895V13.1251H11.3652V15.6144H13.5142V22H16.0843Z"
                                        fill="white"/>
                                </svg>

                            </a>
                            <a href="https://www.instagram.com/" className="footer-content__link">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" fill="#00CCCC"/>
                                    <g clipPath="url(#clip0_7_3673)">
                                        <path
                                            d="M18.2103 8H11.7897C9.70001 8 8 9.70001 8 11.7897V18.2104C8 20.3 9.70001 22 11.7897 22H18.2104C20.3 22 22 20.3 22 18.2104V11.7897C22 9.70001 20.3 8 18.2103 8ZM15 18.828C12.8892 18.828 11.172 17.1108 11.172 15C11.172 12.8892 12.8892 11.172 15 11.172C17.1108 11.172 18.828 12.8892 18.828 15C18.828 17.1108 17.1108 18.828 15 18.828ZM18.9195 12.0747C18.2958 12.0747 17.7884 11.5674 17.7884 10.9436C17.7884 10.3198 18.2958 9.81237 18.9195 9.81237C19.5433 9.81237 20.0508 10.3198 20.0508 10.9436C20.0508 11.5674 19.5433 12.0747 18.9195 12.0747Z"
                                            fill="white"/>
                                        <path
                                            d="M15.0004 11.9927C13.3423 11.9927 11.9932 13.3417 11.9932 14.9999C11.9932 16.6581 13.3423 18.0072 15.0004 18.0072C16.6587 18.0072 18.0077 16.6581 18.0077 14.9999C18.0077 13.3417 16.6587 11.9927 15.0004 11.9927Z"
                                            fill="white"/>
                                        <path
                                            d="M18.9198 10.6333C18.7487 10.6333 18.6094 10.7726 18.6094 10.9437C18.6094 11.1148 18.7487 11.2541 18.9198 11.2541C19.091 11.2541 19.2303 11.1149 19.2303 10.9437C19.2303 10.7725 19.091 10.6333 18.9198 10.6333Z"
                                            fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7_3673">
                                            <rect width="14" height="14" fill="white" transform="translate(8 8)"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <a href="https://www.telegram.com/" className="footer-content__link">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" fill="#00CCCC"/>
                                    <path
                                        d="M8.24728 15.5249L11.4732 16.7289L12.7218 20.7444C12.8017 21.0016 13.1162 21.0967 13.3249 20.926L15.1231 19.4601C15.3115 19.3066 15.58 19.2989 15.777 19.4419L19.0202 21.7965C19.2435 21.9589 19.5599 21.8365 19.6159 21.5667L21.9917 10.1384C22.0529 9.84367 21.7633 9.59778 21.4826 9.70633L8.2435 14.8136C7.91679 14.9396 7.91963 15.4021 8.24728 15.5249ZM12.5205 16.088L18.8251 12.205C18.9384 12.1354 19.055 12.2886 18.9577 12.3789L13.7546 17.2154C13.5717 17.3857 13.4537 17.6135 13.4203 17.8608L13.2431 19.1743C13.2196 19.3496 12.9733 19.367 12.9249 19.1973L12.2432 16.8021C12.1651 16.529 12.2789 16.2371 12.5205 16.088Z"
                                        fill="white"/>
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>

                <p className="footer-rights">
                    © All Right Reserved 2024. ТОВ “ЮНІ СЕРВІС”
                </p>
            </div>
        </footer>
    )
};

export default Footer;