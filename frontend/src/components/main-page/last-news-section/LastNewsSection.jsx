import "./LastNewsSection.css"
import last_news_section_example_first from "../../../assets/images/main-page/last-news-section-example-first.jpg"
import NewsItem from "../../common/list-items/news-item/NewsItem";
import formatIsoDate from "../../../utils/dates";
import {NavLink} from "react-router-dom";
import Button from "../../common/button/Button";

const LastNewsSection = () => {

    const newsList = [
        {
            "title": "Міжнародне визнання за інновації в безпеці",
            "content": "Текст новини...",
            "image": last_news_section_example_first,
            "date": formatIsoDate("2024-11-13T09:00:00Z")
        },
        {
            "title": "Міжнародне визнання за інновації в безпеці",
            "content": "Текст новини...",
            "image": last_news_section_example_first,
            "date": formatIsoDate("2024-11-13T09:00:00Z")
        },
        {
            "title": "Міжнародне визнання за інновації в безпеці",
            "content": "Текст новини...",
            "image": last_news_section_example_first,
            "date": formatIsoDate("2024-11-13T09:00:00Z")
        },
    ]

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
                        <h2 className="last-news-section-header__title">Останні новини</h2>
                        <Button additionalClass={"last-news-section__link"} link={"/news/"}>Показати більше</Button>
                    </div>
                    <ul className="last-news-section__list">
                        {newsList.map((item, index) => (
                            <NewsItem key={index} additionalClass={getAdditionalClass(index)} {...item}/>)
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LastNewsSection;