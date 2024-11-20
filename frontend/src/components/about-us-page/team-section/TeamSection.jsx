import {Swiper, SwiperSlide} from "swiper/react";
import SliderArrows from "../../common/slider-arrows/SliderArrows";
import TeamItem from "./TeamItem";

import "./TeamSection.css";
import team_section_man_first from "../../../assets/images/about-us-page/team-section-man-first.jpg"
import {Navigation} from "swiper/modules";

const TeamSection = ({translation}) => {

    const team = [
        {
            "name": "Олексій Михайлов",
            "position": "Менеджер",
            "image": team_section_man_first
        },
        {
            "name": "Олексій Михайлов",
            "position": "Менеджер",
            "image": team_section_man_first
        },
        {
            "name": "Олексій Михайлов",
            "position": "Менеджер",
            "image": team_section_man_first
        },
        {
            "name": "Олексій Михайлов",
            "position": "Менеджер",
            "image": team_section_man_first
        },
        {
            "name": "Олексій Михайлов",
            "position": "Менеджер",
            "image": team_section_man_first
        },
        {
            "name": "Олексій Михайлов",
            "position": "Менеджер",
            "image": team_section_man_first
        }
    ]

    return (
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
                                        <TeamItem {...item}/>
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