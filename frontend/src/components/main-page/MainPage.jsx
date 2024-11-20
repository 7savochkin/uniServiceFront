import "./MainPage.css"

import FacialSection from "./facial-section/FacialSection"
import WhyChooseUsSection from "./why-choose-us-section/WhyChooseUsSection"
import AboutUsSection from "./about-us-section/AboutUsSection"
import ServicesSection from "./services-section/ServicesSection";
import CertificatesSection from "./certificates-section/CertificatesSection";
import MediaSection from "./media-section/MediaSection";
import ReviewsSection from "./reviews-section/ReviewsSection";
import OrderConsultationSection from "./order-consultation-section/OrderConsultationSection";
import LastNewsSection from "./last-news-section/LastNewsSection";
import React from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";

const MainPage = () => {

    const [language, setLanguage] = React.useContext(LanguageContext);

    const translation = getTranslations(language, "main");

    return (
        <div className="main">
            <FacialSection translation={translation}/>
            <WhyChooseUsSection/>
            <AboutUsSection/>
            <ServicesSection/>
            <CertificatesSection/>
            <MediaSection/>
            <ReviewsSection/>
            <OrderConsultationSection/>
            <LastNewsSection/>
        </div>
    )
}


export default MainPage;
