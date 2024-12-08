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
import MediaPage from "./components/media-page/MediaPage";
import VacanciesListPage from "./components/vacancies-list-page/VacanciesListPage";
import VacancyDetailPage from "./components/vacancy-detail-page/VacancyDetailPage";
import { useEffect, useState } from "react";
import { LanguageContext, getLangFromLocaleStorage } from "./translations/language";
import ScrollToTop from "./components/main-page/scroll-to-top/ScrollToTop";
import useAPIClient from "./hooks/api.hook";
import useHttp from "./hooks/http.hook";
import Spinner from "./components/common/spinner/Spinner";
import { shuffle } from "./utils/arrays";


function App() {

  const [language, setLanguage] = useState(getLangFromLocaleStorage())
  const client = useAPIClient(language);

  const { request: getContacts } = useHttp(client.getContacts);
  const { request: getPhones } = useHttp(client.getPhoneNumbers);
  const { request: getAboutUs } = useHttp(client.getAboutUs);
  const { request: getServices } = useHttp(client.getServices);
  const { request: getReviews, loading: loadingReviews } = useHttp(client.getReviews);
  const { request: getNews, loading: loadingNews } = useHttp(client.getNews);
  const { request: getVacancies, loading: loadingVacancies } = useHttp(client.getVacancies);
  const { request: getMediaImages, loading: loadingMediaImages } = useHttp(client.getMediaImages);
  const { request: getMediaVideos, loading: loadingMediaVideos } = useHttp(client.getMediaVideos);

  const [isFetchError, setIsFetchError] = useState(false);
  const [loading, setLoading] = useState(true);

  const [contacts, setContacts] = useState({});
  const [aboutUs, setAboutUs] = useState({});
  const [services, setServices] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [vacanciesData, setVacanciesData] = useState({});
  const [media, setMedia] = useState([]);
  const [mainVideo, setMainVideo] = useState("");

  async function fetchData() {
    const responseContacts = await getContacts();
    const responsePhones = await getPhones();
    setContacts({
      ...responseContacts.data,
      "phones": responsePhones.data
    })

    await client.getCsrfToken();

    const responseAboutUs = await getAboutUs();
    setAboutUs({ ...responseAboutUs.data })

    const responseServices = await getServices();
    setServices(responseServices.data);

    const responseReviews = await getReviews();
    setReviewsData(responseReviews.data);

    const responseNews = await getNews();
    setNewsData(responseNews.data);

    const responseVacancies = await getVacancies();
    setVacanciesData(responseVacancies.data);

    const responseMediaImages = await getMediaImages();
    const responseMediaVideo = await getMediaVideos();
    setMainVideo(responseMediaVideo.data?.find(item => !!item?.is_main)?.video);

    setMedia(() => {
      const mediaImages = responseMediaImages.data?.map(item => ({ type: "image", "url": item?.image }));
      const mediaVideos = responseMediaVideo.data?.map(item => ({ type: "video", "url": item?.video }));

      return shuffle(mediaImages, mediaVideos);
    })
  }

  useEffect(() => {
    window.localStorage.setItem("lang", language);
    setLoading(true);
    fetchData().then(() => setLoading(false)).catch(() => setIsFetchError(true));
  }, [language]);

  return (
    (isFetchError || loading) ? (
      <Spinner loading={true} />
    ) : (
      <div className="wrapper">
        <LanguageContext.Provider value={[language, setLanguage]}>
          <Header contacts={contacts} />
          <ScrollToTop />
          <Routes>
            <Route path="/*" element={<MainPage aboutUs={aboutUs}
              services={services}
              video={mainVideo}
              reviews={[reviewsData, loadingReviews]}
              news={[newsData, loadingNews]}
              media={media} />} />
            <Route path="/about-us/" element={<AboutUsPage aboutUs={aboutUs} />} />
            <Route path="/contacts/" element={<ContactsPage contacts={contacts} />} />
            <Route path="/services/" element={<ServicesPage services={services} />} />
            <Route path="/news/" element={<NewsListPage data={newsData}
              setData={setNewsData}
              loading={loadingNews} />} />
            <Route path="/news/:id/" element={<NewsDetailPage data={newsData}
              loading={loadingNews} />} />
            <Route path="/vacancies/" element={<VacanciesListPage vacanciesData={vacanciesData}
              setVacanciesData={setVacanciesData}
              loadingVacanciesData={loadingVacancies} />} />
            <Route path="/vacancies/:id/" element={<VacancyDetailPage vacanciesData={vacanciesData}
              loadingVacanciesData={loadingVacancies} />} />
            <Route path="/media/" element={<MediaPage data={media} />} />
          </Routes>
          <Footer contacts={contacts} />
        </LanguageContext.Provider>
      </div>
    )
  );
}

export default App;