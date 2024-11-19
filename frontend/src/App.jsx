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


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/*" element={<MainPage/>}/>
                <Route path="/about-us/" element={<AboutUsPage/>}/>
                <Route path="/news/" element={<NewsListPage/>}/>
                <Route path="/news/:slug/" element={<NewsDetailPage/>}/>
                <Route path="/contacts/" element={<ContactsPage/>}/>
                <Route path="/not-found/" element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;