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
import ServicesPage from "./components/services-page/ServicesPage";
import VacanciesListPage from "./components/vacancies-list-page/VacanciesListPage";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/*" element={<MainPage/>}/>
                <Route path="/about-us/" element={<AboutUsPage/>}/>
                <Route path="/contacts/" element={<ContactsPage/>}/>
                <Route path="/services/" element={<ServicesPage/>}/>
                <Route path="/news/" element={<NewsListPage/>}/>
                <Route path="/news/:slug/" element={<NewsDetailPage/>}/>
                <Route path="/vacancies/" element={<VacanciesListPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;