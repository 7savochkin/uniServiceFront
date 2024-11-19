import {
    Route,
    Routes
} from "react-router-dom";

import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import MainPage from "./components/main-page/MainPage";
import AboutUsPage from "./components/about-us-page/AboutUsPage";
import NewsListPage from "./components/news-list-page/NewsListPage";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/*" element={<MainPage/>}/>
                <Route path="/about-us/" element={<AboutUsPage/>}/>
                <Route path="/news/" element={<NewsListPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;