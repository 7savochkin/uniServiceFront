import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAPIClient from "../../../hooks/api.hook";
import useHttp from "../../../hooks/http.hook";
import React, { useEffect, useState } from "react";
import { LanguageContext } from "../../../translations/language";
import Spinner from "../spinner/Spinner";
import "swiper/css";
import "swiper/css/navigation";

const MediaSlider = () => {
    const [language] = React.useContext(LanguageContext);

    const client = useAPIClient(language);
    const { request, loading } = useHttp(client.getMedia);

    const [media, setMedia] = useState([]);

    async function fetchData() {
        const response = await request();
        setMedia(response.data);
    }

    useEffect(() => {
        fetchData().catch(() => {});
    }, [language]);

    // Функція для рівномірного розбиття масиву на слайди
    const distributeEvenly = (array, itemsPerSlide) => {
        const slides = [];
        let itemsLeft = array.length;
        let startIndex = 0;

        while (itemsLeft > 0) {
            // Розрахунок кількості елементів для поточного слайду
            const itemsInThisSlide = Math.ceil(itemsLeft / Math.ceil(itemsLeft / itemsPerSlide));
            slides.push(array.slice(startIndex, startIndex + itemsInThisSlide));
            startIndex += itemsInThisSlide;
            itemsLeft -= itemsInThisSlide;
        }

        return slides;
    };

    const itemsPerSlide = 5;

    const mediaChunks = distributeEvenly(media, itemsPerSlide);

    return loading ? (
        <Spinner loading={loading} isSection={true} />
    ) : (
        <Swiper
            slidesPerView="auto"
            slidesPerGroup={1}
            navigation={{
                prevEl: ".media-slider-arrow__prev",
                nextEl: ".media-slider-arrow__next",
            }}
            loop={true}
            className="media-section__slider"
            modules={[Navigation]}
        >
            {mediaChunks.map((chunk, index) => (
                <SwiperSlide key={index}>
                    <div className="media-section__slider-list">
                        {chunk.map((mediaItem) => (
                            <div className="media-section__slider-item" key={mediaItem.id}>
                                <img
                                    src={`https://uniservice.site/${mediaItem?.image}`}
                                    alt="image"
                                    className="media-section__slider-img"
                                />
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MediaSlider;
