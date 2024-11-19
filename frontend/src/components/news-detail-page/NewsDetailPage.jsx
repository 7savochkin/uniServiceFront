import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import {useParams} from "react-router-dom";
import last_news_section_example_first from "../../assets/images/main-page/last-news-section-example-first.jpg";
import formatIsoDate from "../../utils/dates";
import "./NewsDetailPage.css";
// import {useEffect, useState} from "react";

const NewsDetailPage = () => {

    const newsList = [
        {
            "title": "Міжнародне визнання за інновації в безпеці",
            "slug": "international-recognition-first",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
                "\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
                "\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
                "\n" +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
            "image": last_news_section_example_first,
            "date": formatIsoDate("2024-11-13T09:00:00Z")
        },
        {
            "title": "Міжнародне визнання за інновації в безпеці",
            "slug": "international-recognition-second",
            "content": "Текст новини...",
            "image": last_news_section_example_first,
            "date": formatIsoDate("2024-11-13T09:00:00Z")
        },
        {
            "title": "Міжнародне визнання за інновації в безпеці",
            "slug": "international-recognition-third",
            "content": "Текст новини...",
            "image": last_news_section_example_first,
            "date": formatIsoDate("2024-11-13T09:00:00Z")
        }
    ]

    const {slug} = useParams();

    let news = newsList.find((item) => item.slug === slug)

    // const [news, setNews] = useState(null);
    // setNews(newsList.find((item) => item.slug === slug));

    // useEffect(() => {
    //     let data = newsList.find((item) => item.slug === slug);
    //     setNews(data);
    //
    // }, []);

    const paths = [
        {path: "/", name: "Головна"},
        {path: "/news/", name: "Новини"},
        {path: "", name: news.title}
    ]

    return (
        <div className="news-detail">
            <Breadcrumbs paths={paths}/>
            <div className="news-detail-section">
                <div className="container">
                    <div className="news-detail-content">
                        <h2 className="news-detail__title">{news.title}</h2>
                        <p className="news-detail__date">{news.date}</p>
                        <div className="news-detail-info">
                            <div className="news-detail-info__img-wrap">
                                <img src={news.image} alt={news.title}/>
                            </div>
                            <p className="news-detail-info__text">{news.content}</p>
                            <p className="news-detail-info__text">{news.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetailPage;