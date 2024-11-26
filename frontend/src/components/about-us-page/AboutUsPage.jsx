import AboutUsSection from "../main-page/about-us-section/AboutUsSection"
import OrderConsultationSection from "../main-page/order-consultation-section/OrderConsultationSection";
import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";

import "./AboutUsPage.css";
import TeamSection from "./team-section/TeamSection";
import AchievementsSection from "./achievements-section/AchievementsSection";
import React from "react";
import { LanguageContext } from "../../translations/language";
import getTranslations from "../../translations/translations";

const AboutUsPage = ({ aboutUs }) => {

  const [language, setLanguage] = React.useContext(LanguageContext);
  const translation = getTranslations(language, "main");

  const paths = [
    { path: "/", name: translation["Головна"] },
    { path: "", name: translation["Про компанію"] }
  ]

  return (
    <div className="about-us">
      <Breadcrumbs paths={paths} />
      <AboutUsSection translation={translation} aboutUs={aboutUs} showButton={false} />
      <TeamSection translation={translation} />
      <AchievementsSection translation={translation} />
      <OrderConsultationSection translation={translation} />
    </div>
  )
}


export default AboutUsPage;
