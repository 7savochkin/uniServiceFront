const TeamItem = ({item}) => (
    <div className="team-section-slider-item">
        <div className="team-section-slider-item-wrap">
            <div className="team-section-slider-item__img-wrap">
                <img src={`https://uniservice.site${item?.image}`} alt={item?.name}/>
            </div>
            <div className="team-section-slider-item-content">
                <h3 className="team-section-slider-item__title">{item?.name}</h3>
                <p className="team-section-slider-item__desc">{item?.position}</p>
            </div>
        </div>
    </div>
)

export default TeamItem;