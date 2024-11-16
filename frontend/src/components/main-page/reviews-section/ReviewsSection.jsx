import "./ReviewsSection.css"


const ReviewsSection = () => (
    <section className="reviews-section">
        <div className="container">
            <div className="reviews-section-content">
                <h2 className="reviews-section__title">Відгуки</h2>
                <ul className="reviews-section__list">
                    <li className="reviews-section__list-item">
                        <div className="reviews-section__list-item__img-wrap">
                            <img src="" alt=""/>
                        </div>
                        <h3 className="reviews-section__list-item__title">Іван Петров</h3>
                        <p className="reviews-section__list-item__text">генеральний директор компанії "Стальні
                            Конструкції"</p>
                        <p className="reviews-section__list-item__desc">
                            "Моя компанія співпрацює з цією компанією вже більше п'яти років. Вони завжди надають нам
                            високоякісні вибухові речовини, що відповідають усім міжнародним стандартам безпеки."
                        </p>
                    </li>
                </ul>
                <a href="#" className="facial-section-info__link">Залишити відгук</a>
            </div>
        </div>
    </section>

)

export default ReviewsSection;