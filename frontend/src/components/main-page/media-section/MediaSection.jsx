import "./MediaSection.css"
import { Swiper, SwiperSlide } from "swiper/react";

import media_image_1 from '../../../assets/images/main-page/media-1.jpg'
import media_image_2 from '../../../assets/images/main-page/media-2.jpg'
import media_image_3 from '../../../assets/images/main-page/media-3.jpg'
import media_image_4 from '../../../assets/images/main-page/media-4.jpg'
import media_image_5 from '../../../assets/images/main-page/media-5.jpg'
import media_image_6 from '../../../assets/images/main-page/media-6.jpg'
import media_image_7 from '../../../assets/images/main-page/media-7.jpg'
import media_image_8 from '../../../assets/images/main-page/media-8.jpg'

const MediaSection = () => {

  return <section className="media-section">
    <h2 className="media-section-title">Media</h2>
    <div className="media-section-grid">
      <Swiper className="media-section-grid"
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        scrollbar={{ draggable: true }}
        grabCursor={true}
      >
        <div className="media-section-slide">
          <img src={media_image_1} alt="" className="media-section-slide__image" />
        </div>
        <div className="media-section-slide">
          <img src={media_image_2} alt="" className="media-section-slide__image" />
        </div>
        <div className="media-section-slide">
          <img src={media_image_3} alt="" className="media-section-slide__image" />
        </div>
        <div className="media-section-slide">
          <img src={media_image_4} alt="" className="media-section-slide__image" />
        </div>
        <div className="media-section-slide">
          <img src={media_image_5} alt="" className="media-section-slide__image" />
        </div>
        <div className="media-section-slide">
          <img src={media_image_6} alt="" className="media-section-slide__image" />
        </div>
        <div className="media-section-slide">
          <img src={media_image_7} alt="" className="media-section-slide__image" />
        </div>
        <div className="media-section-slide">
          <img src={media_image_8} alt="" className="media-section-slide__image" />
        </div>
      </Swiper>
    </div>
  </section >
}

export default MediaSection;