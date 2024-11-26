import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import NewsItem from "../common/list-items/news-item/NewsItem";
import "./NewsListPage.css"
import React, {useEffect, useState} from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";
import ShowMore from "../common/show-more/ShowMore";
import useAPIClient from "../../hooks/api.hook";

const NewsListPage = ({data, setData, loading}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const [items, setItems] = useState([]);
    const [hasNexPage, setHasNextPage] = useState(true);

    useEffect(() => {
        if (!loading){
            setItems(data.results);
            setHasNextPage(!!data.next);
        }
    }, [data]);


    const client = useAPIClient(language);

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
                            {items.map((item, index) => (
                                <NewsItem key={index} item={item}/>)
                            )}
                        </ul>
                    </div>
                    { hasNexPage && <ShowMore fetchFuncData={client.getNews} setData={setData}
                              setHasNextPage={setHasNextPage}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsListPage;