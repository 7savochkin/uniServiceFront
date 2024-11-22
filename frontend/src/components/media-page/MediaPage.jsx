import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import MediaSection from "../main-page/media-section/MediaSection";
import MediaSlider from "../common/media-slider/MediaSlider";
import SliderArrows from "../common/slider-arrows/SliderArrows";
import React from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";

import './MediaPage.css'

const MediaPage = () => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "", name: translation["Медіа"]}
    ]

    return (
        <section className={"media-page"}>
            <Breadcrumbs paths={paths}/>
            <div className="container">
                <h1 className="media-page__title">{translation["Медіа"]}</h1>
                <div className="filters">
                    <div className="filters-buttons">
                        <a href="#" className="filters-buttons__link filters-buttons__link--active">{translation["Все"]}</a>
                        <a href="#" className="filters-buttons__link">{translation["Фото"]}</a>
                        <a href="#" className="filters-buttons__link">{translation["Відео"]}</a>
                    </div>
                    <SliderArrows
                        additionalClassName={"media-slider-arrows"}
                        prevClassName={"media-slider-arrow__prev"}
                        nextClassName={"media-slider-arrow__next"}
                    />
                </div>
            </div>

            <MediaSlider/>
        </section>
    )
}

export default MediaPage;