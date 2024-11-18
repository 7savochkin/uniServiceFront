import AboutUsSection from "../main-page/about-us-section/AboutUsSection"
import OrderConsultationSection from "../main-page/order-consultation-section/OrderConsultationSection";
import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";

import "./AboutUsPage.css";

const AboutUsPage = () => {

    const paths = [
        {path: "/", name: "Головна"},
        {path: "", name: "Про компанію"}
    ]

    return (
        <div className="about-us">
            <Breadcrumbs paths={paths}/>
            <AboutUsSection/>
            <OrderConsultationSection/>
        </div>
    )
}


export default AboutUsPage;
