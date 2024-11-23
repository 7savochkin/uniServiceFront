import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import {useParams} from "react-router-dom";
import "./VacancyDetailPage.css";
import React, {Fragment, useEffect, useState} from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";

const VacancyDetailPage = ({vacanciesData, loadingVacanciesData}) => {
    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const [vacancy, setVacancy] = useState({});
    const [titles, setTitles] = useState({});
    const [error, setError] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        if (!loadingVacanciesData) {

            const vacancyData = vacanciesData.results.vacancies.find((item) => item.id == id)

            if (vacancyData) {
                setVacancy(vacancyData);
                setTitles(vacanciesData.results.titles_of_vacancies);
            } else {
                setError(true);
            }
        }
    }, [vacanciesData]);

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "/vacancies/", name: translation["Вакансії"]},
        {path: "", name: vacancy.title}
    ]

    const titlesKeys = Object.keys(titles);

    return error ? <p>Error</p> : (
        <div className="vacancy-detail">
            <Breadcrumbs paths={paths}/>
            <section className="vacancy-section">
                <div className="container">
                    <div className="vacancy-section-content">
                        <h2 className="vacancy-section__title">{vacancy.title}</h2>
                        <div className="vacancy-section__info">
                            <p className="vacancy-section__price">{vacancy.salary} {translation["грн"]}</p>
                            <p className="vacancy-section__text">{vacancy.about}</p>
                            <div className="vacancy-section-requirements-wrap">
                                {
                                    titlesKeys.map((key, index) => (
                                        <Fragment key={index}>
                                            <h4 className="vacancies-list-item__requirements-title">{titles[key]}:</h4>
                                            <ul className="vacancies-list-item__requirements-list">
                                                {vacancy.hasOwnProperty(key) &&
                                                    vacancy[key].map((item, index) =>
                                                        <li key={index}
                                                            className="vacancies-list-item__requirements-list-item">{item}</li>)
                                                }
                                            </ul>
                                        </Fragment>
                                    ))
                                }
                            </div>
                            <p className="vacancy-section__text">{vacancy.additional}</p>
                            <p className="vacancy-section__text">{translation["Запис на співбесіду"]} <a
                                href="tel:+380508443855">050-844-38-55</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VacancyDetailPage;