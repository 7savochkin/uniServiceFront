import './Button.css'
import {NavLink} from "react-router-dom";

const Button = ({additionalClass, children, onClick, link=null}) => {
    const className = additionalClass ? additionalClass + ' ' + 'button-link' : 'button-link';
    return (
        link ?
            <NavLink className={className} to={link}>{children}</NavLink> :
            <span className={className} onClick={onClick}>{children}</span>
    )
}

export default Button;