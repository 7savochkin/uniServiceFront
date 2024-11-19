import "./NewsItem.css";
import {NavLink} from "react-router-dom";

const NewsItem = ({title, image, date, additionalClass = null}) => (
    <li className={additionalClass ? `news-item ${additionalClass}` : "news-item"}>
        <NavLink to={"/about-us/"} className="news-item__link">
            <div className="news-item__img-wrap">
                <img src={image} alt={title}/>
            </div>
            <h3 className="news-item__title">{title}</h3>
            <p className="news-item__date">{date}</p>
        </NavLink>
    </li>
)

export default NewsItem;