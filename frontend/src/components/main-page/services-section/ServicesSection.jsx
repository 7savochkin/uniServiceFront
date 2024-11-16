import "./ServicesSection.css"

import services_section_feature_img_first from "../../../assets/images/main-page/services-section-feature-img-first.jpg"
import services_section_feature_img_second
    from "../../../assets/images/main-page/services-section-feature-img-second.jpg"
import services_section_feature_img_third from "../../../assets/images/main-page/services-section-feature-img-third.jpg"
import services_section_feature_img_fourth
    from "../../../assets/images/main-page/services-section-feature-img-fourth.jpg"
import ServiceItem from "./ServiceItem";

const ServicesSection = () => {

    const services = [
        {
            "title": "Виробництво компонентів емульсійно-вибухової речовини Гранеміт И-30-У",
            "img": services_section_feature_img_first,
            "features": [
                "Гарантована висока якість продукту.",
                "Власний спеціалізований транспорт для своєчасної і безпечної доставки на об'єкт.",
            ],
            "orderLink": "#"
        },
        {
            "title": "Комплекс буровибухових робіт",
            "img": services_section_feature_img_second,
            "features": [
                "Починаючи з розбивки блока під буріння за допомогою новітнього програмного забезпечення та обладнання.",
                "Виконання самого буріння зарядки та проведення масового вибуху.",
            ],
            "orderLink": "#"
        },
        {
            "title": "Послуги з буріння",
            "img": services_section_feature_img_third,
            "features": [
                "Станки SmartROC T45 (діаметр свердловин 115-127 мм).",
                "Станки FlexiROC D65 (діаметр свердловин 147-152 мм).",
            ],
            "orderLink": "#"
        },
        {
            "title": "Власний транспорт для доставки бурових станків",
            "img": services_section_feature_img_fourth,
            "features": [
                "Гарантує своєчасну та безпечну доставку необхідного обладнання на об'єкт.",
            ],
            "orderLink": "#"
        }
    ]

    return (
        <section className="services-section">
            <div className="container">
                <div className="services-section-content">
                    <div className="services-section-header">
                        <h2 className="services-section__title">Послуги</h2>
                        <p className="services-section-header__text">Варто відзначити, що підприємство, маючи родовище
                            граніту рожевого кольору та сучасне обладнання для збагачення відсіву, постачає свою
                            унікальну
                            продукцію ще й виробникам вогнетривких кахлів, облицювальних елементів для камінів та
                            вентильованих фасадів
                        </p>
                    </div>
                    <ul className="services-section-list">
                        {
                            services.map((service, index) => <ServiceItem key={index} {...service} />)
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;