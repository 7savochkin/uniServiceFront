const ReviewItem = ({name, img, text, desc}) => (
    <div className="reviews-section__list-item">
        <div className="reviews-section__list-item__img-wrap">
            <img src={img} alt="man-first"/>
        </div>
        <h3 className="reviews-section__list-item__title">{name}</h3>
        <p className="reviews-section__list-item__text">{text}</p>
        <p className="reviews-section__list-item__desc">{desc}</p>
    </div>
)

export default ReviewItem;