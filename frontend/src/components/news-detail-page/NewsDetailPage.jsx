import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import {useParams} from "react-router-dom";
import "./NewsDetailPage.css";
import React, {useEffect, useState} from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";
import formatIsoDate from "../../utils/dates";

const NewsDetailPage = ({news}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const {id} = useParams();
    const [newsItem, setNewsItem] = useState({});

    useEffect(() => {
        setNewsItem(news ? news.find((item) => item?.id == id) : {});
    }, [news]);

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "/news/", name: translation["Новини"]},
        {path: "", name: newsItem?.title}
    ]

    return (
        <div className="news-detail">
            <Breadcrumbs paths={paths}/>
            <div className="news-detail-section">
                <div className="container">
                    <div className="news-detail-content">
                        <h2 className="news-detail__title">{newsItem?.title}</h2>
                        <p className="news-detail__date">{newsItem?.date ? formatIsoDate(newsItem?.date) : "00.00.0000"}</p>
                        <div className="news-detail-info">
                            <div className="news-detail-info__img-wrap">
                                <img src={`https://uniservice.site/${newsItem?.image}`} alt={newsItem?.title}/>
                            </div>
                            <p className="news-detail-info__text">{newsItem?.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetailPage;