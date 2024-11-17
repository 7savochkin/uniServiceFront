import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';
import "swiper/css";


import "./ReviewsSection.css"
import man_first from "../../../assets/images/main-page/reviews-section-man-first.jpg"
import ReviewItem from "./ReviewItem";
import SliderArrows from "../../common/slider-arrows/SliderArrows";


const ReviewsSection = () => {
    const reviewsList = [
        {
            name: "Іван Петров",
            img: man_first,
            text: 'генеральний директор компанії "Стальні Конструкції"',
            desc: 'Моя компанія співпрацює з цією компанією вже більше пяти років. Вони завжди надають нам високоякісні вибухові речовини, що відповідають усім міжнародним стандартам безпеки.'
        },
        {
            name: "Іван Петров",
            img: man_first,
            text: 'генеральний директор компанії "Стальні Конструкції"',
            desc: 'Моя компанія співпрацює з цією компанією вже більше пяти років. Вони завжди надають нам високоякісні вибухові речовини, що відповідають усім міжнародним стандартам безпеки.'
        },
        {
            name: "Іван Петров",
            img: man_first,
            text: 'генеральний директор компанії "Стальні Конструкції"',
            desc: 'Моя компанія співпрацює з цією компанією вже більше пяти років. Вони завжди надають нам високоякісні вибухові речовини, що відповідають усім міжнародним стандартам безпеки.'
        },
        {
            name: "Іван Петров",
            img: man_first,
            text: 'генеральний директор компанії "Стальні Конструкції"',
            desc: 'Моя компанія співпрацює з цією компанією вже більше пяти років. Вони завжди надають нам високоякісні вибухові речовини, що відповідають усім міжнародним стандартам безпеки.'
        },
        {
            name: "Іван Петров",
            img: man_first,
            text: 'генеральний директор компанії "Стальні Конструкції"',
            desc: 'Моя компанія співпрацює з цією компанією вже більше пяти років. Вони завжди надають нам високоякісні вибухові речовини, що відповідають усім міжнародним стандартам безпеки.'
        },
        {
            name: "Іван Петров",
            img: man_first,
            text: 'генеральний директор компанії "Стальні Конструкції"',
            desc: 'Моя компанія співпрацює з цією компанією вже більше пяти років. Вони завжди надають нам високоякісні вибухові речовини, що відповідають усім міжнародним стандартам безпеки.'
        }
    ];

    return (
        <section className="reviews-section">
            <div className="container">
                <div className="reviews-section-content">
                    <div className="reviews-section-header">
                        <h2 className="reviews-section-header__title">Відгуки</h2>
                        <SliderArrows
                            additionalClassName={"reviews-slider-arrows"}
                            prevClassName={"reviews-slider-arrow__prev"}
                            nextClassName={"reviews-slider-arrow__next"}/>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        slidesPerGroup={1}
                        navigation={{
                            prevEl: '.reviews-slider-arrow__prev',
                            nextEl: '.reviews-slider-arrow__next',
                        }}
                        loop={true}
                        className="reviews-section__slider"
                        modules={[Navigation]}
                    >
                        {reviewsList.map(
                            (item, index) => (
                                <SwiperSlide key={index}>
                                    <ReviewItem {...item} />
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                    <span href="#" className="facial-section-info__link">Залишити відгук</span>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection;