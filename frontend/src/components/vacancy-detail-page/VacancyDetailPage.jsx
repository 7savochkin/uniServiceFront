import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import {useParams} from "react-router-dom";
import "./VacancyDetailPage.css";

const VacancyDetailPage = () => {

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

    const {slug} = useParams();

    let vacancy = vacancies.find((item) => item.slug === slug)

    const paths = [
        {path: "/", name: "Головна"},
        {path: "/vacancies/", name: "Вакансії"},
        {path: "", name: vacancy.title}
    ]

    return (
        <div className="vacancy-detail">
            <Breadcrumbs paths={paths}/>
            <section className="vacancy-section">
                <div className="container">
                    <div className="vacancy-section-content">
                        <h2 className="vacancy-section__title">{vacancy.title}</h2>
                        <div className="vacancy-section__info">
                            <p className="vacancy-section__price">{vacancy.price} грн</p>
                            <p className="vacancy-section__text">{vacancy.description}</p>
                            <div className="vacancy-section-requirements-wrap">
                                <h4 className="vacancies-list-item__requirements-title">Обов’язки:</h4>
                                <ul className="vacancies-list-item__requirements-list">
                                    {
                                        vacancy.requirements.map((item, index) =>
                                            <li key={index}
                                                className="vacancies-list-item__requirements-list-item">{item}</li>)
                                    }
                                </ul>
                            </div>
                            <p className="vacancy-section__text">Зважаючи на велику кількість запитів, ми зв’язуємося з
                                кандидатами, які повністю відповідають вимогам вакансії.</p>
                            <p className="vacancy-section__text">Запис на співбесіду <a
                                href="tel:+380508443855">050-844-38-55</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VacancyDetailPage;