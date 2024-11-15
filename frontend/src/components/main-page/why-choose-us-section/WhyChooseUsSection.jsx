import "./WhyChooseUsSection.css"

import why_choose_us_img from '../../../assets/images/why-choose-us/why-choose-us.svg'
import why_choose_us_icon_1 from '../../../assets/images/why-choose-us/why-choose-us-1.svg'
import why_choose_us_icon_2 from '../../../assets/images/why-choose-us/why-choose-us-2.svg'
import why_choose_us_icon_3 from '../../../assets/images/why-choose-us/why-choose-us-3.svg'

const WhyChooseUsSection = () => {

  return <section className="why-choose-us-section">
    <div className="container">
      <h1 className="why-choose-us-section-title">чому обирають нас</h1>
      <div className="why-choose-us-section-content">
        <div className="why-choose-us-section-wrapper__img">
          <div className="cover-img_bg"></div>
          <img className="why-choose-us-section-img" src={why_choose_us_img} alt="" />
        </div>
        <div className="why-choose-us-section-items">
          <div className="why-choose-us-section-item">
            <img className="why-choose-us-section-item__img" src={why_choose_us_icon_1} alt="" />
            <div className="why-choose-us-section-item-content">
              <h3 className="why-choose-us-section-item-content__title">
                Сучасне обладнання
              </h3>
              <p className="why-choose-us-section-item-content__text">
                Використання новітніх бурових станків забезпечує точність та ефективність робіт.
              </p>
            </div>
          </div>

          <div className="why-choose-us-section-item">
            <img className="why-choose-us-section-item__img" src={why_choose_us_icon_2} alt="" />
            <div className="why-choose-us-section-item-content">
              <h3 className="why-choose-us-section-item-content__title">
                Безпека та своєчасність
              </h3>
              <p className="why-choose-us-section-item-content__text">
                Спеціалізований транспорт та професійний підхід гарантують безпечну та своєчасну доставку компонентів та засобів ініціювання.
              </p>
            </div>
          </div>

          <div className="why-choose-us-section-item">
            <img className="why-choose-us-section-item__img" src={why_choose_us_icon_3} alt="" />
            <div className="why-choose-us-section-item-content">
              <h3 className="why-choose-us-section-item-content__title">
                Професійна команда
              </h3>
              <p className="why-choose-us-section-item-content__text">
                Наші фахівці мають великий досвід у проведенні буровибухових робіт та виробництві вибухових речовин
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default WhyChooseUsSection;