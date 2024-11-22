import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import NewsItem from "../common/list-items/news-item/NewsItem";
import "./NewsListPage.css"
import React from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";

const NewsListPage = ({news}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "", name: translation["Новини"]}
    ]

    return (
        <div className="news-list">
            <Breadcrumbs paths={paths}/>
            <div className="news-list-section">
                <div className="container">
                    <div className="news-list-section-content">
                        <h2 className="news-list-section__title">{translation["Новини"]}</h2>
                        <ul className="news-list-section__list">
                            {news.map((item, index) => (
                                <NewsItem key={index} item={item}/>)
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsListPage;