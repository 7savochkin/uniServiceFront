const TeamItem = ({name, position, image}) => (
    <div className="team-section-slider-item">
        <div className="team-section-slider-item-wrap">
            <div className="team-section-slider-item__img-wrap">
                <img src={image} alt={name}/>
            </div>
            <div className="team-section-slider-item-content">
                <h3 className="team-section-slider-item__title">{name}</h3>
                <p className="team-section-slider-item__desc">{position}</p>
            </div>
        </div>
    </div>
)

export default TeamItem;