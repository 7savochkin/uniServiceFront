import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../../../translations/language";
import Spinner from "../spinner/Spinner";
import PopUp from "../pop-up/PopUp"; // Імпортуємо готовий PopUp компонент
import "swiper/css";
import "swiper/css/navigation";

const MediaSlider = ({ media }) => {
  const [language] = useContext(LanguageContext);
  const [itemsPerSlide, setItemsPerSlide] = useState(10);
  const [disabledNavigation, setDisabledNavigation] = useState(false);

  // Стан для попапу
  const [isPopupActive, setPopupActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

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

  const openPopup = (image) => {
    setCurrentImage(image); // Зберігаємо вибране зображення
    setPopupActive(true); // Активуємо попап
  };

  return (
    <>
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
              {chunk.map((mediaItem, id) => (
                <div
                  className="media-section__slider-item"
                  key={id}
                  onClick={() =>
                    openPopup(mediaItem)
                  } // Відкриваємо попап із зображенням
                >
                  {/* {mediaItem?.type === "video" ?
                    <video loop src={`https://uniservice.site${mediaItem?.url}`}
                      className="media-section__slider-img"></video>
                    : <img src={`https://uniservice.site${mediaItem?.url}`}
                      alt="image"
                      className="media-section__slider-img"
                    />
                  } */}
                  {mediaItem?.type === "video" ? (
                    <div className="video-wrapper">
                      <video
                        loop
                        src={`https://uniservice.site${mediaItem?.url}`}
                        className="media-section__slider-img"
                      ></video>
                      <div className="play-icon">&#9658;</div>
                    </div>
                  ) : (
                    <img
                      src={`https://uniservice.site${mediaItem?.url}`}
                      alt="image"
                      className="media-section__slider-img"
                    />
                  )}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Попап для зображень */}
      <PopUp active={isPopupActive} setActive={setPopupActive} isImage={true}>
        {currentImage && (
          <>
            {currentImage?.type === "video" ?
              <video loop controls src={`https://uniservice.site${currentImage?.url}`}
                className="popup-video"></video>
              :
              <img
                src={`https://uniservice.site${currentImage?.url}`}
                alt="popup-img"
                className="popup-image"
              />
            }
          </>
        )
        }
      </PopUp>
    </>
  );
};

export default MediaSlider;
