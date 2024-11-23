import "./NewsItem.css";
import {NavLink} from "react-router-dom";
import formatIsoDate from "../../../../utils/dates";

const NewsItem = ({item, additionalClass = null}) => (
    <li className={additionalClass ? `news-item ${additionalClass}` : "news-item"}>
        <NavLink to={`/news/${item.id}/`} className="news-item__link">
            <div className="news-item__img-wrap">
                <img src={`https://uniservice.site/${item.image}`} alt={item.title}/>
            </div>
            <h3 className="news-item__title">{item.title}</h3>
            <p className="news-item__date">{item.date ? formatIsoDate(item.date) : "00.00.0000"}</p>
        </NavLink>
    </li>
)

export default NewsItem;