import {Swiper, SwiperSlide} from "swiper/react";
import SliderArrows from "../../common/slider-arrows/SliderArrows";
import TeamItem from "./TeamItem";

import "./TeamSection.css";
import {Navigation} from "swiper/modules";
import useAPIClient from "../../../hooks/api.hook";
import useHttp from "../../../hooks/http.hook";
import React, {useEffect, useState} from "react";
import {LanguageContext} from "../../../translations/language";
import Spinner from "../../common/spinner/Spinner";

const TeamSection = ({translation}) => {

    const [language, setLanguage] = React.useContext(LanguageContext);
    const client = useAPIClient(language);
    const {
        request, loading,
        error, clearError
    } = useHttp(client.getAboutUsTeam);

    const [team, setTeam] = useState([]);

    async function fetchData() {
        const response = await request();
        setTeam(response.data);
    }

    useEffect(() => {
        fetchData().then(r => {
        }).catch(() => {
        });
    }, [language]);

    return loading ? <Spinner loading={loading} isSection={true}/> : (
        <section className="team-section">
            <div className="team-section-stones"></div>
            <div className="container">
                <div className="team-section-content">
                    <div className="team-section-header">
                        <h2 className="team-section__title">{translation["Команда"]}</h2>
                        <SliderArrows
                            additionalClassName={"team-slider-arrows"}
                            prevClassName={"team-slider-arrow__prev"}
                            nextClassName={"team-slider-arrow__next"}
                            isDark={true}
                        />
                    </div>
                    <Swiper slidesPerView={1}
                            slidesPerGroup={1}
                            breakpoints={{
                                "992": {
                                    slidesPerView: 3,
                                },
                                "648": {
                                    slidesPerView: 2,
                                },

                                "375": {
                                    slidesPerView: 1,
                                },
                            }}
                            navigation={{
                                prevEl: '.team-slider-arrow__prev',
                                nextEl: '.team-slider-arrow__next',
                            }}
                            loop={true}
                            className="team-slider"
                            modules={[Navigation]}>
                        {
                            team.map(
                                (item, index) => (
                                    <SwiperSlide key={index}>
                                        <TeamItem item={item}/>
                                    </SwiperSlide>
                                ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;