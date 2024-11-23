import "./LastNewsSection.css"
import NewsItem from "../../common/list-items/news-item/NewsItem";
import Button from "../../common/button/Button";
import {useEffect, useState} from "react";

const LastNewsSection = ({translation, data, loading}) => {
    const [lastNews, setLastNews] = useState([]);

    useEffect(() => {

        if (!loading){
            const dataSlice = data.results.length >= 3 ? data.results.slice(0, 3) : data.results;
            setLastNews(dataSlice || []);
        }
    }, [data]);

    const getAdditionalClass = (ind) => {
        const AdditionalClasses = [
            "last-news-section__first-child",
            "last-news-section__second-child",
            "last-news-section__third-child"
        ]
        return AdditionalClasses[ind]
    }

    return (
        <section className="last-news-section">
            <div className="container">
                <div className="last-news-section-content">
                    <div className="last-news-section-header">
                        <h2 className="last-news-section-header__title">{translation["Останні новини"]}</h2>
                        <Button additionalClass={"last-news-section__link"} link={"/news/"}>{translation["Показати більше"]}</Button>
                    </div>
                    <ul className="last-news-section__list">
                        {lastNews.map((item, index) => (
                            <NewsItem key={index} additionalClass={getAdditionalClass(index)} item={item}/>)
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LastNewsSection;