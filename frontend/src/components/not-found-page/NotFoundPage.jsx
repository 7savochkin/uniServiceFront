import './NotFoundPage.css'
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

import notFoundImage from '../../assets/images/not-found/not-found-image.png'
import {NavLink} from "react-router-dom";
import MainPage from "../main-page/MainPage";

const NotFoundPage = () => {
    return (
            <section className={"not-found-page"}>
                <div className="not-found-page__wrapper">
                    <img src={notFoundImage} alt="not found image" className="not-found-page__image"/>
                    <h1 className="not-found-page__title">Сторінку не знайдено</h1>
                    <NavLink to={"/"} className="facial-section-info__link not-found-page__btn">На головну</NavLink>
                </div>
            </section>
    )
}

export default NotFoundPage;