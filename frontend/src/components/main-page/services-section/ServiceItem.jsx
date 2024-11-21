import Button from "../../common/button/Button";
import {NavLink} from "react-router-dom";

const ServiceItem = ({title, img, features, orderLink, setPopUpActive}) => (
    <li className="services-section-list__item">
        <div className="services-section-list__item-header">
            <div className="services-section-list__item-img-wrap">
                <img src={img} alt="services-section-feature-img"/>
            </div>
            <h3 className="services-section-list__item-title">{title}</h3>
        </div>
        <div className="services-section-list__item-info">
            <ul className="services-section-list__item-features">
                {
                    features.map((item, index) => <li key={index}
                                                      className="services-section-list__item-features__elem">{item}</li>)
                }
            </ul>
            <Button additionalClass={'service-section__link'} onClick={() => setPopUpActive(true)}>Замовити</Button>
        </div>
    </li>
)

export default ServiceItem;