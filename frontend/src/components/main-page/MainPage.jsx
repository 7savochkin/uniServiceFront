import "./MainPage.css"

import FacialSection from "./facial-section/FacialSection"
import WhyChooseUsSection from "./why-choose-us-section/WhyChooseUsSection"
import AboutUsSection from "./about-us-section/AboutUsSection"
import ServicesSection from "./services-section/ServicesSection";
import CertificatesSection from "./certificates-section/CertificatesSection";
import MediaSection from "./media-section/MediaSection";
import ReviewsSection from "./reviews-section/ReviewsSection";
import OrderConsultationSection from "./order-consultation-section/OrderConsultationSection";
import LastNewsSection from "./last-news-section/LastNewsSection";

const MainPage = () => {

    return (
        <div className="main">
            <FacialSection/>
            <WhyChooseUsSection/>
            <AboutUsSection/>
            <ServicesSection/>
            <CertificatesSection/>
            <MediaSection/>
            <ReviewsSection/>
            <OrderConsultationSection/>
            <LastNewsSection/>
        </div>
    )
}


export default MainPage;
