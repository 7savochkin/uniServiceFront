import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import "./VacanciesListPage.css";
import VacancyItem from "../common/list-items/vacancy-item/VacancyItem";
import Button from "../common/button/Button";
import React from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";

const VacanciesListPage = () => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "", name: translation["Вакансії"]}
    ]

    const vacancies = [
        {
            "title": "Назва",
            "slug": "vacancy-item-first",
            "price": 40000,
            "description": "ТОВ “ЮНІ СЕРВІС” Добування декоративного та будівельного каменю, " +
                "вапняку, гіпсу, крейди та глинистого сланцю." +
                " Надання допоміжних послуг у сфері добування інших корисних копалин та розроблення кар'єрів",
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
                        <h2 className="vacancies-section__title">{translation["Вакансії"]}/<span>{translation["Тендери"]}</span></h2>
                        <Button additionalClass={"vacancies-section__link"} className="button-link">{translation["Запросити до тендеру"]}</Button>
                    </div>
                    <div className="vacancies-section-list">
                        <ul className="vacancies-section-list__inner">
                            {vacancies.map((item, index) => <VacancyItem key={index} translation={translation} {...item}/>)}
                        </ul>
                        <Button additionalClass={"vacancies-section__loadmore"} className="button-link">{translation["Показати більше"]}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VacanciesListPage;