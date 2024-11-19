import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import last_news_section_example_first from "../../assets/images/main-page/last-news-section-example-first.jpg";
import formatIsoDate from "../../utils/dates";
import NewsItem from "../common/list-items/news-item/NewsItem";
import "./NewsListPage.css"

const NewsListPage = () => {

    const paths = [
        {path: "/", name: "Головна"},
        {path: "", name: "Новини"}
    ]

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

    return (
        <div className="news-list">
            <Breadcrumbs paths={paths}/>
            <div className="news-list-section">
                <div className="container">
                    <div className="news-list-section-content">
                        <h2 className="news-list-section__title">Новини</h2>
                        <ul className="news-list-section__list">
                            {newsList.map((item, index) => (
                                <NewsItem key={index} {...item}/>)
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsListPage;