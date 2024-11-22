import "./AchievementsSection.css";
import React, {useEffect, useState} from "react";
import {LanguageContext} from "../../../translations/language";
import useAPIClient from "../../../hooks/api.hook";
import useHttp from "../../../hooks/http.hook";
import Spinner from "../../common/spinner/Spinner";

const AchievementsSection = ({translation}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const client = useAPIClient(language);
    const {
        request, loading,
        error, clearError
    } = useHttp(client.getAboutUsAchievements);

    const [achievements, setAchievements] = useState([]);

    async function fetchData() {
        const response = await request();
        setAchievements(response.data);
    }

    useEffect(() => {
        fetchData().then(r => {
        }).catch(() => {
        });
    }, [language]);

    return loading ? <Spinner loading={loading} isSection={true}/> : (
        <section className="achiev-section">
            <div className="container">
                <div className="achiev-section-content">
                    <h2 className="achiev-section__title">{translation["Досягнення"]}</h2>
                    <p className="achiev-section__desc">{translation["«Юні Сервіс» представляє собою приклад успішного бізнесу, що поєднує інновації, якість, безпеку і соціальну відповідальність, що дозволяє їй не тільки досягати високих результатів, але й забезпечувати стійкий розвиток у глобальному масштабі."]}</p>
                    <ul className="achiev-section-list">
                        {achievements.map((item, key) => (
                            <li className="achiev-section-list__item" key={key}>
                                <div className="achiev-section-list__item-header">
                                    <p className="achiev-section-list__item-header__percent">{item?.percent}</p>
                                    <h3 className="achiev-section-list__item-header__title">{item?.title}</h3>
                                </div>
                                <p className="achiev-section-list__item-desc">{item?.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AchievementsSection