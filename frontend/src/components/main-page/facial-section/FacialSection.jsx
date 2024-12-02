import "./FacialSection.css"
import Button from "../../common/button/Button";

const FacialSection = ({ translation, video }) => (
  <section className="facial-section">
    <video autoPlay loop muted playsInline preload="auto" controls="false" src={`https://uniservice.site/${video}`}
      className={"facial-section-bg__video"}></video>
    <div className="facial-section-overlay"></div>
    <div className="container">
      <div className="facial-section-content">
        <h1 className="facial-section__title">{translation["Виробництво вибухових речовин"]}</h1>
        <div className="facial-section-info">
          <Button additionalClass={'facial-button'} link={"/services/"}>{translation["Послуги"]}</Button>
          <p className="facial-section-info__text">{translation["Звітність, інновації та безпека є основними цінностями нашої компанії, що спеціалізується на виробництві вибухових речовин. Ми приводимо в життя найсміливіші ідеї у сфері хімічної безпеки, надаючи надійні рішення для наших клієнтів по всьому світу"]}</p>
        </div>
      </div>
    </div>
  </section>
)

export default FacialSection;