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
import useAPIClient from "./hooks/api.hook";
import useHttp from "./hooks/http.hook";
import Spinner from "./components/common/spinner/Spinner";


function App() {

    const [language, setLanguage] = useState(getLangFromLocaleStorage())
    const client = useAPIClient(language);

    const {
        request: getContacts, loading: loadingContacts,
        error: errorContacts, clearError: clearErrorContacts
    } = useHttp(client.getContacts);
    const {
        request: getPhones, loading: loadingPhones,
        error: errorPhones, clearError: clearErrorPhones,
    } = useHttp(client.getPhoneNumbers);
    const {
        request: getAboutUs, loading: loadingAboutUs,
        error: errorAboutUs, clearError: clearErrorAboutUs
    } = useHttp(client.getAboutUs);
    const {
        request: getServices, loading: loadingServices,
        error: errorServices, clearError: clearErrorServices
    } = useHttp(client.getServices);
    const {
        request: getReviews, loading: loadingReviews,
        error: errorReviews, clearError: clearErrorReviews
    } = useHttp(client.getReviews);
    const {
        request: getNews, loading: loadingNews,
        error: errorNews, clearError: clearErrorNews
    } = useHttp(client.getNews);
    const {
        request: getVacancies, loading: loadingVacancies,
        error: errorVacancies, clearError: clearErrorVacancies
    } = useHttp(client.getVacancies);
    const {
        request: getMedia, loading: loadingMedia,
        error: errorMedia, clearError: clearErrorMedia
    } = useHttp(client.getMedia);

    const {
        error: errorForm, clearError: clearErrorForm
    } = useHttp(client.postFormData);

    let loadingData = [
        loadingContacts, loadingPhones, loadingAboutUs,
        loadingServices, loadingReviews, loadingNews, loadingVacancies, loadingMedia
    ];

    const [contacts, setContacts] = useState({});
    const [aboutUs, setAboutUs] = useState({});
    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [news, setNews] = useState([]);
    const [vacanciesData, setVacanciesData] = useState({});
    const [media, setMedia] = useState([]);

    async function fetchData() {
        const responseContacts = await getContacts();
        const responsePhones = await getPhones();
        setContacts({
            ...responseContacts.data,
            "phones": responsePhones.data
        })

        const responseAboutUs = await getAboutUs();
        setAboutUs({...responseAboutUs.data})

        const responseServices = await getServices();
        setServices(responseServices.data);

        const responseReviews = await getReviews();
        setReviews(responseReviews.data);

        const responseNews = await getNews();
        setNews(responseNews.data?.results);

        const responseVacancies = await getVacancies();
        setVacanciesData(responseVacancies.data);

        const responseMedia = await getMedia();
        setMedia(responseMedia.data?.results);
    }

    useEffect(() => {
        window.localStorage.setItem("lang", language);
        fetchData().then(r => {
        });
    }, [language]);

    const loading = loadingData.some(v => v === true);

    return (
        <div className="wrapper">
            <Spinner loading={loading}/>
            <LanguageContext.Provider value={[language, setLanguage]}>
                <Header/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/*" element={<MainPage aboutUs={aboutUs}
                                                        services={services}
                                                        reviews={reviews}
                                                        news={news}
                    />}/>
                    <Route path="/about-us/" element={<AboutUsPage aboutUs={aboutUs}/>}/>
                    <Route path="/contacts/" element={<ContactsPage contacts={contacts}/>}/>
                    <Route path="/not-found/" element={<NotFoundPage/>}/>
                    <Route path="/services/" element={<ServicesPage services={services}/>}/>
                    <Route path="/news/" element={<NewsListPage news={news}/>}/>
                    <Route path="/news/:id/" element={<NewsDetailPage news={news}/>}/>
                    <Route path="/vacancies/" element={<VacanciesListPage vacanciesData={vacanciesData}
                                                                          setVacanciesData={setVacanciesData}
                                                                          loadingVacanciesData={loadingVacancies}
                    />}/>
                    <Route path="/vacancies/:id/" element={<VacancyDetailPage vacanciesData={vacanciesData}
                                                                              loadingVacanciesData={loadingVacancies}
                    />}/>
                    <Route path="/media/" element={<MediaPage/>}/>
                </Routes>
                <Footer contacts={contacts}/>
            </LanguageContext.Provider>
        </div>
    )
}

export default App;