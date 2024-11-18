import "./MediaSection.css"
import SliderArrows from "../../common/slider-arrows/SliderArrows";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import media_section_image_1 from "../../../assets/images/main-page/media-section-image-1.jpg"
import media_section_image_2 from "../../../assets/images/main-page/media-section-image-2.jpg"
import media_section_image_3 from "../../../assets/images/main-page/media-section-image-3.jpg"
import media_section_image_4 from "../../../assets/images/main-page/media-section-image-4.jpg"
import media_section_image_5 from "../../../assets/images/main-page/media-section-image-5.jpg"
import media_section_image_6 from "../../../assets/images/main-page/media-section-image-6.jpg"
import media_section_image_7 from "../../../assets/images/main-page/media-section-image-7.jpg"
import media_section_image_8 from "../../../assets/images/main-page/media-section-image-8.jpg"
import media_section_image_9 from "../../../assets/images/main-page/media-section-image-9.jpg"
import media_section_image_10 from "../../../assets/images/main-page/media-section-image-10.jpg"

const MediaSection = () => {


    return <section className="media-section">
        <div className="container">
            <div className="media-section-header">
                    <h2 className="media-section__title">
                        Медіа
                    </h2>
                    <SliderArrows
                        additionalClassName={"media-slider-arrows"}
                        prevClassName={"media-slider-arrow__prev"}
                        nextClassName={"media-slider-arrow__next"}
                    />
            </div>
        </div>

        <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={{
                prevEl: '.media-slider-arrow__prev',
                nextEl: '.media-slider-arrow__next',
            }}
            loop={true}
            className="media-section__slider"
            modules={[Navigation]}
        >
            <SwiperSlide>
                <div className="media-section__slider-list">
                    <div className="media-section__slider-item">
                        <img src={media_section_image_1} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item">
                        <img src={media_section_image_2} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item">
                        <img src={media_section_image_3} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item media-section__slider-item-4">
                        <img src={media_section_image_4} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item">
                        <img src={media_section_image_5} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item">
                        <img src={media_section_image_6} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item media-section__slider-item-7">
                        <img src={media_section_image_7} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item">
                        <img src={media_section_image_8} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item">
                        <img src={media_section_image_9} alt="" className="media-section__slider-img"/>
                    </div>
                    <div className="media-section__slider-item">
                        <img src={media_section_image_10} alt="" className="media-section__slider-img"/>
                    </div>
                </div>
            </SwiperSlide>
            {/*<SwiperSlide>*/}
            {/*    <div className="media-section__slider-list">*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_1} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_2} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_3} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item media-section__slider-item-4">*/}
            {/*            <img src={media_section_image_4} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_5} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_6} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item media-section__slider-item-7">*/}
            {/*            <img src={media_section_image_7} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_8} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_9} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*        <div className="media-section__slider-item">*/}
            {/*            <img src={media_section_image_10} alt="" className="media-section__slider-img"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</SwiperSlide>*/}
        </Swiper>


    </section>
}

export default MediaSection;