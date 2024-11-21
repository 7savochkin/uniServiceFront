import "./FacialSection.css"
import Button from "../../common/button/Button";
import {NavLink} from "react-router-dom";

const FacialSection = ({translation}) => (
    <section className="facial-section">
        <div className="container">
            <div className="facial-section-content">
                <h1 className="facial-section__title">{translation["Виробництво вибухових речовин"]}</h1>
                <div className="facial-section-info">
                    <Button additionalClass={'facial-button'} link={"/services/"}>{translation["Послуги"]}</Button>
                    <p className="facial-section-info__text">{translation["Звітність, інновації та безпека є основними цінностями нашої компанії, що спеціалізується на виробництві вибухових речовин. Ми приводимо в життя найсміливіші ідеї у сфері хімічної безпеки, надаючи надійні рішення для наших клієнтів по всьому світу"]}</p>
                </div>
            </div>
        </div>
    </section>
)

export default FacialSection;