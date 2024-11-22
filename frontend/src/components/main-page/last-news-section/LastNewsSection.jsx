import "./LastNewsSection.css"
import NewsItem from "../../common/list-items/news-item/NewsItem";
import Button from "../../common/button/Button";

const LastNewsSection = ({translation, news}) => {

    const getAdditionalClass = (ind) => {
        const AdditionalClasses = [
            "last-news-section__first-child",
            "last-news-section__second-child",
            "last-news-section__third-child"
        ]
        return AdditionalClasses[ind]
    }

    const newsList = news.length >= 3 ? news.slice(0, 3) : news;

    return (
        <section className="last-news-section">
            <div className="container">
                <div className="last-news-section-content">
                    <div className="last-news-section-header">
                        <h2 className="last-news-section-header__title">{translation["Останні новини"]}</h2>
                        <Button additionalClass={"last-news-section__link"} link={"/news/"}>{translation["Показати більше"]}</Button>
                    </div>
                    <ul className="last-news-section__list">
                        {newsList.map((item, index) => (
                            <NewsItem key={index} additionalClass={getAdditionalClass(index)} item={item}/>)
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LastNewsSection;