import "./MediaSection.css"
import SliderArrows from "../../common/slider-arrows/SliderArrows";
import MediaSlider from "../../common/media-slider/MediaSlider";

const MediaSection = ({ translation, data, loading }) => {


  return <section className="media-section">
    <div className="container">
      <div className="media-section-header">
        <h2 className="media-section__title">
          {translation["Медіа"]}
        </h2>
        <SliderArrows
          additionalClassName={"media-slider-arrows"}
          prevClassName={"media-slider-arrow__prev"}
          nextClassName={"media-slider-arrow__next"}
        />
      </div>
    </div>
    <MediaSlider media={data} loading={loading} />
  </section>
}

export default MediaSection;