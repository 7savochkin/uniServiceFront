import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import OrderConsultationSection from "../main-page/order-consultation-section/OrderConsultationSection";
import "./ContactsPage.css";
import facebook_icon from "../../assets/images/footer/facebook-icon.svg";
import instagram_icon from "../../assets/images/footer/instagram-icon.svg";
import telegram_icon from "../../assets/images/footer/telegram-icon.svg";
import React from "react";

const ContactsPage = () => {

    const paths = [
        {path: "/", name: "Головна"},
        {path: "", name: "Контакти"}
    ]

    return (
        <div className="contacts">
            <Breadcrumbs paths={paths}/>
            <div className="contacts-section">
                <div className="container">
                    <div className="contacts-section-content">
                        <h2 className="contacts-section__title">Контакти</h2>
                        <ul className="contacts-section-list">
                            <li className="contacts-section-list__item">
                                <h3 className="contacts-section-list__item-title">Адреса:</h3>
                                <p className="contacts-section-list__item-text">11634, Україна, Житомирська обл.,
                                    Коростенський р-н, селище міського типу Гранітне(з), вул.Шевченка, будинок </p>
                            </li>
                            <li className="contacts-section-list__item">
                                <h3 className="contacts-section-list__item-title">Графік роботи:</h3>
                                <p className="contacts-section-list__item-text">
                                    Пн - Пт 8:00 - 17:00
                                    Сб 8:00 - 13:00
                                </p>
                            </li>
                            <li className="contacts-section-list__item">
                                <h3 className="contacts-section-list__item-title">+38(097)-947-11-59</h3>
                                <p className="contacts-section-list__item-text">secretar.uniservis@gmail.com</p>
                            </li>
                            <li className="contacts-section-list__item">
                                <h3 className="contacts-section-list__item-title">Соц. мережі</h3>
                                <div className="contacts-section-list__item-links">
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
                            </li>
                        </ul>
                        <div className="contacts-section-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80419.76038121224!2d28.54717992147123!3d50.958531562567785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472bdb0e59f0f0d1%3A0x59ae94f2d8f93b38!2sKorosten&#39;%2C%20Zhytomyr%20Oblast%2C%2011506!5e0!3m2!1sen!2sua!4v1731980882039!5m2!1sen!2sua"
                                width="100%" height="100%" style={{border: "1px solid var(--gray-text-color)"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <OrderConsultationSection/>
        </div>
    )
}

export default ContactsPage;