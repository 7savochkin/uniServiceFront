import "./AboutUsSection.css"

import about_us_section_img from "../../../assets/images/main-page/about-us-section-img.jpg"
import Button from "../../common/button/Button";
import {NavLink} from "react-router-dom";

const AboutUsSection = ({translation}) => (
    <section className="about-us-section">
        <div className="container">
            <div className="about-us-section-content">
                <div className="about-us-section-header">
                    <div className="about-us-section-header-wrap">
                        <h2 className="about-us-section-header__title">{translation["Про нас"]}</h2>
                        <Button additionalClass={'about-us-section-btn'} link={"/about-us"}>{translation["Детальніше"]}</Button>
                    </div>
                    <div className="about-us-section-header-wrap about-us-section-header-text">
                        <p className="about-us-section-header__text about-us-section-header__text-first">Виберіть
                            надійність, оберіть інновації,
                            довіряйте
                            безпеці. Ласкаво просимо до нашої компанії, де наука та технології об'єднуються для
                            створення
                            майбутнього безпечних вибухових речовин.
                        </p>
                        <p className="about-us-section-header__text about-us-section-header__text-second">Наша місія
                            полягає в тому, щоб забезпечити
                            безпечне
                            виробництво та застосування вибухових матеріалів у різних індустріях. Ми постійно
                            вдосконалюємо
                            технології і процеси, впроваджуючи інноваційні підходи для забезпечення ефективності та
                            довгострокової стабільності наших продуктів.
                        </p>
                    </div>
                </div>
                <Button additionalClass={'about-us-info__link-mobile'}>{translation["Детальніше"]}</Button>
                <div className="about-us-section-main">
                    <p className="about-us-section-main__text">Наша компанія пишається високими стандартами якості та
                        строгою дотриманням усіх норм і вимог безпеки. Ми глибоко зобов'язані зберіганню і захисту
                        навколишнього середовища, керуючись найсучаснішими екологічними стандартами
                    </p>
                    <div className="about-us-section-main__img-wrap">
                        <img className="about-us-section-main__img"
                             src={about_us_section_img}
                             alt="about-us-section-img"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default AboutUsSection;