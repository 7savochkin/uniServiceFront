import {
    Route,
    Routes
} from "react-router-dom";

import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import MainPage from "./components/main-page/MainPage";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/*" element={<MainPage/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;