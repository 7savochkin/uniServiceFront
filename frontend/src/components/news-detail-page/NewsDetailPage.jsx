import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import {useParams} from "react-router-dom";
import "./NewsDetailPage.css";
import React, {useEffect, useState} from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";
import formatIsoDate from "../../utils/dates";
import NotFoundPage from "../not-found-page/NotFoundPage";

const NewsDetailPage = ({data, loading}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const {id} = useParams();
    const [item, setItem] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!loading){
            const findItem = data.results.find((elem) => elem?.id == id);
            findItem ? setItem(findItem) : setError(true);
        }
    }, [data]);

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "/news/", name: translation["Новини"]},
        {path: "", name: item?.title}
    ]

    return error ? <NotFoundPage/> :(
        <div className="news-detail">
            <Breadcrumbs paths={paths}/>
            <div className="news-detail-section">
                <div className="container">
                    <div className="news-detail-content">
                        <h2 className="news-detail__title">{item.title}</h2>
                        <p className="news-detail__date">{item.date ? formatIsoDate(item.date) : "00.00.0000"}</p>
                        <div className="news-detail-info">
                            <div className="news-detail-info__img-wrap">
                                <img src={`https://uniservice.site/${item.image}`} alt={item.title}/>
                            </div>
                            <p className="news-detail-info__text">{item.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetailPage;