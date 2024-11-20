import {
    Route,
    Routes
} from "react-router-dom";

import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import MainPage from "./components/main-page/MainPage";
import AboutUsPage from "./components/about-us-page/AboutUsPage";
import NewsListPage from "./components/news-list-page/NewsListPage";
import NewsDetailPage from "./components/news-detail-page/NewsDetailPage";
import ContactsPage from "./components/contacts-page/ContactsPage";
import NotFoundPage from "./components/not-found-page/NotFoundPage";
import ServicesPage from "./components/services-page/ServicesPage";
import MediaPage from "./components/media-page/MediaPage";
import VacanciesListPage from "./components/vacancies-list-page/VacanciesListPage";
import VacancyDetailPage from "./components/vacancy-detail-page/VacancyDetailPage";
import {useEffect, useState} from "react";
import {LanguageContext, getLangFromLocaleStorage} from "./translations/language";
import ScrollToTop from "./components/main-page/scroll-to-top/ScrollToTop";


function App() {

    const [language, setLanguage] = useState(getLangFromLocaleStorage())

    useEffect(() => {
        window.localStorage.setItem("lang", language);
    }, [language]);


    return (
        <div className="wrapper">
            <LanguageContext.Provider value={[language, setLanguage]}>
                <Header/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/*" element={<MainPage/>}/>
                    <Route path="/about-us/" element={<AboutUsPage/>}/>
                    <Route path="/contacts/" element={<ContactsPage/>}/>
                    <Route path="/not-found/" element={<NotFoundPage/>}/>
                    <Route path="/services/" element={<ServicesPage/>}/>
                    <Route path="/news/" element={<NewsListPage/>}/>
                    <Route path="/news/:slug/" element={<NewsDetailPage/>}/>
                    <Route path="/vacancies/" element={<VacanciesListPage/>}/>
                    <Route path="/vacancies/:slug/" element={<VacancyDetailPage/>}/>
                    <Route path="/media/" element={<MediaPage/>}/>
                </Routes>
                <Footer/>
            </LanguageContext.Provider>
        </div>
    )
}

export default App;