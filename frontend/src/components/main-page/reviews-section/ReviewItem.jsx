const ReviewItem = ({item}) => (
    <div className="reviews-section__list-item">
        <div className="reviews-section__list-item__img-wrap">
            <img src={`https://uniservice.site/${item?.image}`} alt="man-first"/>
        </div>
        <h3 className="reviews-section__list-item__title">{item?.author}</h3>
        <p className="reviews-section__list-item__text">{item?.position}</p>
        <p className="reviews-section__list-item__desc">{item?.content}</p>
    </div>
)

export default ReviewItem;