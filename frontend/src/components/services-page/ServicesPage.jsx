import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import ServicesSection from "../main-page/services-section/ServicesSection";
import "./ServicesPage.css";


const ServicesPage = () => {

    const paths = [
        {path: "/", name: "Головна"},
        {path: "", name: "Послуги"}
    ]

    return (
        <div className="services">
            <Breadcrumbs paths={paths}/>
            <ServicesSection/>
        </div>
    )
}

export default ServicesPage;