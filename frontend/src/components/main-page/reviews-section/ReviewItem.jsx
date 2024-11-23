const ReviewItem = ({image, author, position, content}) => (
    <div className="reviews-section__list-item">
        <div className="reviews-section__list-item__img-wrap">
            <img src={`https://uniservice.site/${image}`} alt="man-first"/>
        </div>
        <h3 className="reviews-section__list-item__title">{author}</h3>
        <p className="reviews-section__list-item__text">{position}</p>
        <p className="reviews-section__list-item__desc">{content}</p>
    </div>
)

export default ReviewItem;