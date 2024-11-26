import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { LanguageContext } from "../../../translations/language";
import Spinner from "../spinner/Spinner";
import "swiper/css";
import "swiper/css/navigation";

const MediaSlider = ({ media, loading }) => {
  const [language] = React.useContext(LanguageContext);

  const [itemsPerSlide, setItemsPerSlide] = useState(10);
  const [disabledNavigation, setDisabledNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setItemsPerSlide(10);
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(5);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [language]);

  const distributeEvenly = (array, itemsPerSlide) => {
    const slides = [];
    let itemsLeft = array.length;
    let startIndex = 0;

    while (itemsLeft > 0) {
      const itemsInThisSlide = Math.min(itemsPerSlide, itemsLeft);
      slides.push(array.slice(startIndex, startIndex + itemsInThisSlide));
      startIndex += itemsInThisSlide;
      itemsLeft -= itemsInThisSlide;
    }

    return slides;
  };

  const mediaChunks = distributeEvenly(media, itemsPerSlide);

  useEffect(() => {
    if (mediaChunks.length <= 1) {
      setDisabledNavigation(true);
    } else {
      setDisabledNavigation(false);
    }
  }, [mediaChunks]);

  return loading ? (
    <Spinner loading={loading} isSection={true} />
  ) : (
    <Swiper
      slidesPerView="auto"
      slidesPerGroup={1}
      navigation={{
        prevEl: ".media-slider-arrow__prev",
        nextEl: ".media-slider-arrow__next",
        disabled: disabledNavigation,
      }}
      loop={false}
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
