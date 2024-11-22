import Button from "../../common/button/Button";

const ServiceItem = ({item, translation, setPopUpActive}) => (
    <li className="services-section-list__item">
        <div className="services-section-list__item-header">
            <div className="services-section-list__item-img-wrap">
                <img src={`https://uniservice.site/${item?.image}`} alt="services-section-feature-img"/>
            </div>
            <h3 className="services-section-list__item-title">{item?.title}</h3>
        </div>
        <div className="services-section-list__item-info">
            <ul className="services-section-list__item-features">
                {
                    // features.map((item, index) => <li key={index}
                    //                                   className="services-section-list__item-features__elem">{item}</li>)
                }
                <li className="services-section-list__item-features__elem">{item?.description}</li>
            </ul>
            <Button additionalClass={'service-section__link'} onClick={() => setPopUpActive(true)}>{translation["Замовити"]}</Button>
        </div>
    </li>
)

export default ServiceItem;