import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules';
import "swiper/css";
// import "../../common/input/Input.css"


import "./ReviewsSection.css"
import man_first from "../../../assets/images/main-page/reviews-section-man-first.jpg"
import ReviewItem from "./ReviewItem";
import SliderArrows from "../../common/slider-arrows/SliderArrows";
import PopUp from "../../common/pop-up/PopUp";
import {useState} from "react";
import Input from "../../common/input/Input";

import pop_up_close_icon from "../../../assets/images/pop-up/pop-up-close-icon.svg"
import Button from "../../common/button/Button";

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

    const [popUpActive, setPopUpActive] = useState(false);

        const defaultFormData = {
        "name": "",
        "email": "",
        "company": "",
    }

    const [formData, setFormData] = useState(defaultFormData)

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData(defaultFormData);
        setPopUpActive(false);
    }

    const onChangeInput = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    }

    const inputsData = [
        {
            label: "Ім’я*",
            icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_17_8922)">
                        <path
                            d="M9 10.125C11.7949 10.125 14.0625 7.85742 14.0625 5.0625C14.0625 2.26758 11.7949 0 9 0C6.20508 0 3.9375 2.26758 3.9375 5.0625C3.9375 7.85742 6.20508 10.125 9 10.125ZM13.5 11.25H11.5629C10.7824 11.6086 9.91406 11.8125 9 11.8125C8.08594 11.8125 7.22109 11.6086 6.43711 11.25H4.5C2.01445 11.25 0 13.2645 0 15.75V16.3125C0 17.2441 0.755859 18 1.6875 18H16.3125C17.2441 18 18 17.2441 18 16.3125V15.75C18 13.2645 15.9855 11.25 13.5 11.25Z"
                            fill="#586574"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_17_8922">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
            id: "input_name",
            name: "name",
            type: "text",
            placeholder: "Напишіть ім’я",
            value: formData.name,
            onChange: onChangeInput,
            isRequired: true,
            isDark: false,
        },
        {
            label: "Email",
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.659 6.70781C17.7961 6.59883 18 6.70078 18 6.87305V14.0625C18 14.9941 17.2441 15.75 16.3125 15.75H1.6875C0.755859 15.75 0 14.9941 0 14.0625V6.87656C0 6.70078 0.200391 6.60234 0.341016 6.71133C1.12852 7.32305 2.17266 8.1 5.75859 10.7051C6.50039 11.2465 7.75195 12.3855 9 12.3785C10.2551 12.3891 11.5312 11.2254 12.2449 10.7051C15.8309 8.1 16.8715 7.31953 17.659 6.70781ZM9 11.25C9.81563 11.2641 10.9898 10.2234 11.5805 9.79453C16.2457 6.40898 16.6008 6.11367 17.6766 5.26992C17.8805 5.11172 18 4.86562 18 4.60547V3.9375C18 3.00586 17.2441 2.25 16.3125 2.25H1.6875C0.755859 2.25 0 3.00586 0 3.9375V4.60547C0 4.86562 0.119531 5.1082 0.323437 5.26992C1.39922 6.11016 1.7543 6.40898 6.41953 9.79453C7.01016 10.2234 8.18437 11.2641 9 11.25Z"
                        fill="#586574"/>
                </svg>
            ),
            id: "input_email",
            name: "email",
            type: "email",
            placeholder: "Напишіть E-mail",
            value: formData.email,
            onChange: onChangeInput,
            isDark: false,
            isRequired: false,
        },
        {
            label: "Компанія",
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.25 11.8125C11.25 12.1233 10.9983 12.375 10.6875 12.375H7.3125C7.00172 12.375 6.75 12.1233 6.75 11.8125V10.125H0V15.1875C0 16.0875 0.7875 16.875 1.6875 16.875H16.3125C17.2125 16.875 18 16.0875 18 15.1875V10.125H11.25V11.8125ZM16.3125 4.5H13.5V2.8125C13.5 1.9125 12.7125 1.125 11.8125 1.125H6.1875C5.2875 1.125 4.5 1.9125 4.5 2.8125V4.5H1.6875C0.7875 4.5 0 5.2875 0 6.1875V9H18V6.1875C18 5.2875 17.2125 4.5 16.3125 4.5ZM11.25 4.5H6.75V3.375H11.25V4.5Z"
                        fill="#586574"/>
                </svg>

            ),
            id: "input_company",
            name: "company",
            type: "text",
            placeholder: "Напишіть назву компанії",
            value: formData.company,
            onChange: onChangeInput,
            isRequired: false,
            isDark: false,
        },
    ]


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

                    <Swiper
                        slidesPerView={2}
                        slidesPerGroup={1}
                        navigation={{
                            prevEl: '.reviews-slider-arrow__prev',
                            nextEl: '.reviews-slider-arrow__next',
                        }}
                        loop={true}
                        className="reviews-section__slider-tablet"
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
                    <Swiper
                        slidesPerView={1}
                        slidesPerGroup={1}
                        navigation={{
                            prevEl: '.reviews-slider-arrow__prev',
                            nextEl: '.reviews-slider-arrow__next',
                        }}
                        loop={true}
                        className="reviews-section__slider-mobile"
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
                    <Button additionalClass="reviews-section__link" onClick={() => setPopUpActive(true)}>Залишити відгук</Button>
                </div>
            </div>
            <PopUp active={popUpActive} setActive={setPopUpActive}>
                <img src={pop_up_close_icon} alt="pop-close-icon" className="pop-up__image-close" onClick={() => setPopUpActive(false)}/>
                <h2 className="pop-up__title">Залишити відгук</h2>
                <form onSubmit={onSubmitForm} className="pop-up__form">
                    {inputsData.map((item, i) => <Input key={i} {...item}/>)}
                    <div className="pop-up__feedback">
                        <label htmlFor="text-area" className="text-area__label">Відгук</label>
                        <textarea name="text-area" id="" className="text-area input-field__input"
                                  placeholder="Напишіть текст" ></textarea>
                        <input className="pop-up__send-button button-link" type="submit" value='Відправити' />
                    </div>
                </form>
            </PopUp>
        </section>
    )
}

export default ReviewsSection;