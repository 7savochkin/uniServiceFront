import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import "./VacanciesListPage.css";
import {NavLink} from "react-router-dom";
import VacancyItem from "../common/list-items/vacancy-item/VacancyItem";

const VacanciesListPage = () => {

    const paths = [
        {path: "/", name: "Головна"},
        {path: "", name: "Вакансії"}
    ]

    const vacancies = [
        {
            "title": "Назва",
            "slug": "vacancy-item-first",
            "price": 40000,
            "description": "Опис вакансії...",
            "requirements": ["Вимога 1", "Вимога 2"],
            "image": "/media/images/vacancies/vacancy_image.jpg"
        },
        {
            "title": "Назва",
            "slug": "vacancy-item-second",
            "price": 30000,
            "description": "Опис вакансії...",
            "requirements": ["Вимога 1", "Вимога 2"],
            "image": "/media/images/vacancies/vacancy_image.jpg"
        },
        {
            "title": "Назва",
            "price": 100000,
            "slug": "vacancy-item-third",
            "description": "Опис вакансії...",
            "requirements": ["Вимога 1", "Вимога 2"],
            "image": "/media/images/vacancies/vacancy_image.jpg"
        },
    ]

    return (
        <section className="vacancies-list">
            <Breadcrumbs paths={paths}/>
            <div className="vacancies-section">
                <div className="container">
                    <div className="vacancies-section-header">
                        <h2 className="vacancies-section__title">Вакансії/<span>Тендери</span></h2>
                        <NavLink to="" className="facial-section-info__link">Запросити до тендеру</NavLink>
                    </div>
                    <div className="vacancies-section-list">
                        <ul className="vacancies-section-list__inner">
                            {vacancies.map((item, index) => <VacancyItem key={index} {...item}/>)}
                        </ul>
                        <div className="facial-section-info__link">Показати більше</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VacanciesListPage;