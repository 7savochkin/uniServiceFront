import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import media_section_image_1 from "../../../assets/images/main-page/media-section-image-1.jpg";
import media_section_image_2 from "../../../assets/images/main-page/media-section-image-2.jpg";
import media_section_image_3 from "../../../assets/images/main-page/media-section-image-3.jpg";
import media_section_image_4 from "../../../assets/images/main-page/media-section-image-4.jpg";
import media_section_image_5 from "../../../assets/images/main-page/media-section-image-5.jpg";
import media_section_image_6 from "../../../assets/images/main-page/media-section-image-6.jpg";
import media_section_image_7 from "../../../assets/images/main-page/media-section-image-7.jpg";
import media_section_image_8 from "../../../assets/images/main-page/media-section-image-8.jpg";
import media_section_image_9 from "../../../assets/images/main-page/media-section-image-9.jpg";
import media_section_image_10 from "../../../assets/images/main-page/media-section-image-10.jpg";
import useAPIClient from "../../../hooks/api.hook";
import useHttp from "../../../hooks/http.hook";
import React, {useEffect, useState} from "react";
import {LanguageContext} from "../../../translations/language";
import Spinner from "../spinner/Spinner";

const MediaSlider = () => {

    const [language, setLanguage] = React.useContext(LanguageContext);


    const client = useAPIClient(language);
    const {
        request, loading,
        error, clearError
    } = useHttp(client.getMedia);

    const [media, setMedia] = useState([]);

    async function fetchData() {
        const response = await request();
        setMedia(response.data);
    }

    useEffect(() => {
        fetchData().then(r => {
        }).catch(() => {
        });
    }, [language]);

    return loading ? <Spinner loading={loading} isSection={true}/> :(
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
                    {
                        media.map((media, index) => (
                            <div className="media-section__slider-item" key={media.id}>
                                <img src={`https://uniservice.site/${media?.image}`}  alt="image" className="media-section__slider-img"/>
                            </div>
                        ))
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="media-section__slider-list">

                    {
                        media.map((media, index) => (
                            <div className="media-section__slider-item" key={media.id}>
                                <img src={`https://uniservice.site/${media?.image}`}  alt="image" className="media-section__slider-img"/>
                            </div>
                        ))
                    }
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default MediaSlider;