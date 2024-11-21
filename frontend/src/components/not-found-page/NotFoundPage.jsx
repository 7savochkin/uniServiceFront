import './NotFoundPage.css'

import notFoundImage from '../../assets/images/not-found/not-found-image.png'
import {NavLink} from "react-router-dom";
import React from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";

const NotFoundPage = () => {
    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    return (
        <section className={"not-found-page"}>
            <div className="not-found-page__wrapper">
                <img src={notFoundImage} alt="not found image" className="not-found-page__image"/>
                <h1 className="not-found-page__title">{translation["Сторінку не знайдено"]}</h1>
                <NavLink to={"/"} className="button-link not-found-page__btn">{translation["На головну"]}</NavLink>
            </div>
        </section>
    )
}

export default NotFoundPage;