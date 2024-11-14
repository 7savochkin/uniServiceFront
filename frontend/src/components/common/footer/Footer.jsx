import React from 'react'

import "./Footer.css"
import logo from '../../../assets/images/footer/logo.svg';
import facebook_icon from '../../../assets/images/footer/facebook-icon.svg';
import instagram_icon from '../../../assets/images/footer/instagram-icon.svg';
import telegram_icon from '../../../assets/images/footer/telegram-icon.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content__logo">
                        <img className="footer-content__logo-img" src={logo} alt="logo"/>
                        <p className="footer-content__logo-text">
                            Забезпечуємо безпечне виробництво та застосування вибухових матеріалів у різних індустріях.
                        </p>
                    </div>

                    <div className="footer-content-menu">
                        <h3 className="footer-content-menu__title footer-title">Меню:</h3>
                        <ul className="footer-content-menu__list">
                            <li className="footer-content-menu__items">
                                <a href="#1" className="footer-content-menu__link">Про компанію</a>
                            </li>
                            <li className="footer-content-menu__items">
                                <a href="#1" className="footer-content-menu__link">Продукція</a>
                            </li>
                            <li className="footer-content-menu__items">
                                <a href="#1" className="footer-content-menu__link">Медіа</a>
                            </li>
                            <li className="footer-content-menu__items">
                                <a href="#1" className="footer-content-menu__link">Вакансії</a>
                            </li>
                            <li className="footer-content-menu__items">
                                <a href="#1" className="footer-content-menu__link">Новини</a>
                            </li>
                            <li className="footer-content-menu__items">
                                <a href="#1" className="footer-content-menu__link">Контакти</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-content-graph">
                        <h3 className="footer-content-graph__title footer-title">Графік роботи:</h3>
                        <ul className="footer-content-graph__list">
                            <li className="footer-content-graph__items">Пн - Пт 8:00 - 17:00</li>
                            <li className="footer-content-graph__items">Сб 8:00 - 13:00</li>
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
                        <h3 className="footer-content-contacts__title footer-title">Контакти:</h3>
                        <a href="#1" className="footer-content-cotacts__text">
                            11634, Україна, Житомирська обл., Коростенський р-н, селище міського типу Гранітне(з),
                            вул.Шевченка, будинок
                        </a>

                        <div className="footer-content__links">
                            <a href="https://www.facebook.com/" className="footer-content__link">
                                <img src={facebook_icon} alt="facebook-icon" className="footer-content__img"/>
                            </a>
                            <a href="https://www.instagram.com/" className="footer-content__link">
                                <img src={instagram_icon} alt="instagram-icon" className="footer-content__img"/>
                            </a>
                            <a href="https://www.telegram.com/" className="footer-content__link">
                                <img src={telegram_icon} alt="telegram-icon" className="footer-content__img"/>
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