import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import ServicesSection from "../main-page/services-section/ServicesSection";
import "./ServicesPage.css";
import React from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";


const ServicesPage = () => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");


    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "", name: translation["Послуги"]}
    ]

    return (
        <div className="services">
            <Breadcrumbs paths={paths}/>
            <ServicesSection translation={translation}/>
        </div>
    )
}

export default ServicesPage;