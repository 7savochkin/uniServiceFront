import {NavLink} from "react-router-dom";
import "./VacancyItem.css";
import Button from "../../button/Button";

const VacancyItem = ({title, slug, price, description, requirements}) => (
    <li className="vacancies-list-item">
        <div className="vacancies-list-item-container">
            <p className="vacancies-list-item__price">{price} грн</p>
            <h3 className="vacancies-list-item__title">{title}</h3>
            <p className="vacancies-list-item__desc">{description}</p>
            <div className="vacancies-list-item__requirements">
                <h4 className="vacancies-list-item__requirements-title">Обов’язки:</h4>
                <ul className="vacancies-list-item__requirements-list">
                    {
                        requirements.map((item, index) =>
                            <li key={index} className="vacancies-list-item__requirements-list-item">{item}</li>)
                    }
                </ul>
            </div>
            <Button additionalClass={"vacancies-list__btn"} link={`/vacancies/${slug}/`} className="button-link">Детальніше</Button>
        </div>
    </li>
)

export default VacancyItem;