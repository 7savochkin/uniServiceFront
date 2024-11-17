import "./CertificatesSection.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { EffectCreative } from 'swiper/modules';

import sertificate_image from "../../../assets/images/main-page/sertificate.png";

const CertificatesSection = () => {

  return <section className="certificates-section">
    <div className="container">
      <h2 className="certificates-section-title">
        сертифікати
      </h2>
      <Swiper
        modules={[EffectCreative]}
        slidesPerView={7}
        centeredSlides={true}
        loop={true}
        scrollbar={{ draggable: true }}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [50, 0, 100],
          },
          next: {
            translate: [100, 0, 150],
          },
        }}
      >
        <SwiperSlide className="slide">
          <img src={sertificate_image} alt="sertificate image" className="sertificate-section-image" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img
            src={sertificate_image}
            alt="sertificate image"
            className="sertificate-section-image"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={sertificate_image} alt="sertificate image" className="sertificate-section-image" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={sertificate_image} alt="sertificate image" className="sertificate-section-image" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={sertificate_image} alt="sertificate image" className="sertificate-section-image" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={sertificate_image} alt="sertificate image" className="sertificate-section-image" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={sertificate_image} alt="sertificate image" className="sertificate-section-image" />
        </SwiperSlide>
      </Swiper>
    </div>

  </section>
}

export default CertificatesSection;