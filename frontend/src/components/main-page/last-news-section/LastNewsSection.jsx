import "./LastNewsSection.css"
import last_news_section_example_first from "../../../assets/images/main-page/last-news-section-example-first.jpg"

const LastNewsSection = () => {

    return (
        <section className="last-news-section">
            <div className="container">
                <div className="last-news-section-content">
                    <div className="last-news-section-header">
                        <h2 className="last-news-section-header__title">Останні новини</h2>
                        <a href="#" className="facial-section-info__link">Показати більше</a>
                    </div>
                    <ul className="last-news-section__list">
                        <li className="last-news-section__item last-news-section__first-child">
                            <div className="last-news-section__item-img-wrap">
                                <img src={last_news_section_example_first} alt="last-news-section-example-first"/>
                            </div>
                            <h3 className="last-news-section__item-title">Міжнародне визнання за інновації в
                                безпеці</h3>
                            <p className="last-news-section__item-date">28.08.2024</p>
                        </li>
                        <li className="last-news-section__item last-news-section__second-child">
                            <div className="last-news-section__item-img-wrap">
                                <img src={last_news_section_example_first} alt="last-news-section-example-first"/>
                            </div>
                            <h3 className="last-news-section__item-title">Міжнародне визнання за інновації в
                                безпеці</h3>
                            <p className="last-news-section__item-date">28.08.2024</p>
                        </li>
                        <li className="last-news-section__item last-news-section__third-child">
                            <div className="last-news-section__item-img-wrap">
                                <img src={last_news_section_example_first} alt="last-news-section-example-first"/>
                            </div>
                            <h3 className="last-news-section__item-title">Міжнародне визнання за інновації в
                                безпеці</h3>
                            <p className="last-news-section__item-date">28.08.2024</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default LastNewsSection;