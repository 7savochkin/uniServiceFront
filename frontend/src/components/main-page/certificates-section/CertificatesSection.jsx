import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";
import SliderArrows from "../../common/slider-arrows/SliderArrows";

import "swiper/css"; // Core Swiper CSS
import 'swiper/css/effect-creative';
import "./CertificatesSection.css"
import certification_section_doc from "../../../assets/images/main-page/cerificates-section-doc.jpg";

const CertificatesSection = ({ translation }) => {

  const documentItems = [
    {
      "img": certification_section_doc,
      "alt": "certification-section-doc"
    },
    {
      "img": certification_section_doc,
      "alt": "certification-section-doc"
    },
    {
      "img": certification_section_doc,
      "alt": "certification-section-doc"
    },
    {
      "img": certification_section_doc,
      "alt": "certification-section-doc"
    },
    {
      "img": certification_section_doc,
      "alt": "certification-section-doc"
    },
    {
      "img": certification_section_doc,
      "alt": "certification-section-doc"
    },
    {
      "img": certification_section_doc,
      "alt": "certification-section-doc"
    }
  ]

  return (
    <section className="certificates-section">
      <div className="container">
        <div className="certification-section-content">
          <div className="certification-section-header">
            <h2 className="certification-section__title">{translation["Сертифікати"]}</h2>
            <SliderArrows additionalClassName="certification-section-arrows"
              prevClassName={"certification-section-arrows__prev"}
              nextClassName={"certification-section-arrows__next"}
            />
          </div>
          <Swiper className="certificates-section__slider"
            modules={[Navigation, EffectCreative]}
            slidesPerView={3}
            slidesPerGroup={1}
            centeredSlides={true}
            loop={true}
            // grabCursor={true}
            effect={'creative'}
            watchSlidesProgress={true}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-100%', 0, 0],
                limitProgress: 3,
                shadowPerProgress: true,
                origin: "left bottom"
              },
              next: {
                shadow: true,
                translate: ['100%', 0, 0],
                limitProgress: 3,
                shadowPerProgress: true,
                origin: "right top"
              },
            }}
            navigation={{
              prevEl: '.certification-section-arrows__prev',
              nextEl: '.certification-section-arrows__next',
            }}
          >
            {
              documentItems.map(({ img, alt }, index) => (
                <SwiperSlide key={index}>
                  <img src={img}
                    alt={alt}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection;