import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import MediaSection from "../main-page/media-section/MediaSection";
import MediaSlider from "../common/media-slider/MediaSlider";
import SliderArrows from "../common/slider-arrows/SliderArrows";

const MediaPage = () => {
    const paths = [
        {path: "/", name: "Головна"},
        {path: "", name: "Медіа"}
    ]

    return (
        <section className={"media-page"}>
            <Breadcrumbs paths={paths}/>
            <div className="container">
                <h1 className="media-page__title">
                    Медіа
                </h1>
                <div className="filters">
                    <div className="filters-buttons">
                        <a href="#" className="filters-buttons__link filters-buttons__link--active">Все</a>
                        <a href="#" className="filters-buttons__link">Фото</a>
                        <a href="#" className="filters-buttons__link">Відео</a>
                    </div>
                    <SliderArrows
                        additionalClassName={"media-slider-arrows"}
                        prevClassName={"media-slider-arrow__prev"}
                        nextClassName={"media-slider-arrow__next"}
                    />
                </div>
            </div>

            <MediaSlider />
        </section>
    )
}

export default MediaPage;