import "./VacancyItem.css";
import Button from "../../button/Button";

const VacancyItem = ({item, titles, translation}) => {

    const firstKey= Object.keys(titles)[0]

    return (
        <li className="vacancies-list-item">
            <div className="vacancies-list-item-container">
                <p className="vacancies-list-item__price">{item.salary} {translation["грн"]}</p>
                <h3 className="vacancies-list-item__title">{item.title}</h3>
                <p className="vacancies-list-item__desc">{item.about}</p>
                <div className="vacancies-list-item__requirements">
                    <h4 className="vacancies-list-item__requirements-title">{titles[firstKey]}:</h4>
                    <ul className="vacancies-list-item__requirements-list">
                        {
                            item[firstKey].map((item, index) =>
                                <li key={index} className="vacancies-list-item__requirements-list-item">{item}</li>
                            )
                        }
                    </ul>
                </div>
                <Button additionalClass={"vacancies-list__btn"} link={`/vacancies/${item.id}/`}
                        className="button-link">{translation["Детальніше"]}</Button>
            </div>
        </li>
    )
}

export default VacancyItem;