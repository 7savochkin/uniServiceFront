import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import OrderConsultationSection from "../main-page/order-consultation-section/OrderConsultationSection";
import "./ContactsPage.css";
import facebook_icon from "../../assets/images/footer/facebook-icon.svg";
import instagram_icon from "../../assets/images/footer/instagram-icon.svg";
import telegram_icon from "../../assets/images/footer/telegram-icon.svg";
import React from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";

const ContactsPage = ({contacts}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const phones = contacts?.phones;
    const phoneNumber = phones ? phones.map(item => item?.phone)[0] : null;

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "", name: translation["Контакти"]}
    ]

    return (
        <div className="contacts">
            <Breadcrumbs paths={paths}/>
            <div className="contacts-section">
                <div className="container">
                    <div className="contacts-section-content">
                        <h2 className="contacts-section__title">{translation["Контакти"]}</h2>
                        <ul className="contacts-section-list">
                            <li className="contacts-section-list__item">
                                <h3 className="contacts-section-list__item-title">{translation["Адреса"]}:</h3>
                                <p className="contacts-section-list__item-text">{contacts?.address}</p>
                            </li>
                            <li className="contacts-section-list__item">
                                <h3 className="contacts-section-list__item-title">{translation["Графік роботи"]}:</h3>
                                <p className="contacts-section-list__item-text schedule">
                                    {contacts?.schedule}
                                </p>
                            </li>
                            <li className="contacts-section-list__item">
                                <a href={`tel:${phoneNumber}`} className="contacts-section-list__item-title">{phoneNumber}</a>
                                <br/>
                                <a href={`mailto:${contacts?.email}`} className="contacts-section-list__item-text">{contacts?.email}</a>
                            </li>
                            <li className="contacts-section-list__item">
                                <h3 className="contacts-section-list__item-title">{translation["Соц. мережі"]}</h3>
                                <div className="contacts-section-list__item-links">
                                    <a href={contacts?.facebook} className="footer-content__link">
                                        <img src={facebook_icon} alt="facebook-icon" className="footer-content__img"/>
                                    </a>
                                    <a href={contacts?.instagram} className="footer-content__link">
                                        <img src={instagram_icon} alt="instagram-icon" className="footer-content__img"/>
                                    </a>
                                    <a href={contacts?.telegram} className="footer-content__link">
                                        <img src={telegram_icon} alt="telegram-icon" className="footer-content__img"/>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        <div className="contacts-section-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6475.805894773473!2d29.34388420752462!3d50.74746917566225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472ba73c9519d21b%3A0xc1868cd1a36c8144!2sVulytsya%20Shevchenka%2C%20Zhytomyrs&#39;ka%20oblast!5e0!3m2!1sen!2sua!4v1732665506213!5m2!1sen!2sua"
                                width="100%" height="100%" style={{border: "1px solid var(--gray-text-color)"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <OrderConsultationSection translation={translation}/>
        </div>
    )
}

export default ContactsPage;