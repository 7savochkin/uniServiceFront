import "./AboutUsSection.css"

import Button from "../../common/button/Button";

const AboutUsSection = ({translation, aboutUs}) => (
    <section className="about-us-section">
        <div className="container">
            <div className="about-us-section-content">
                <div className="about-us-section-header">
                    <div className="about-us-section-header-wrap">
                        <h2 className="about-us-section-header__title">{translation["Про нас"]}</h2>
                        <Button additionalClass={'about-us-section-btn'} link={"/about-us"}>{translation["Детальніше"]}</Button>
                    </div>
                    <div className="about-us-section-header-wrap about-us-section-header-text">
                        <p className="about-us-section-header__text about-us-section-header__text-first">{aboutUs?.target}</p>
                        <p className="about-us-section-header__text about-us-section-header__text-second">{aboutUs?.mission}</p>
                    </div>
                </div>
                <Button additionalClass={'about-us-info__link-mobile'}>{translation["Детальніше"]}</Button>
                <div className="about-us-section-main">
                    <p className="about-us-section-main__text">{aboutUs?.about_us}</p>
                    <div className="about-us-section-main__img-wrap">
                        <img className="about-us-section-main__img"
                             src={`https://uniservice.site/${aboutUs?.image}`}
                             alt="about-us-section-img"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default AboutUsSection;