import './Button.css'
import {NavLink} from "react-router-dom";

import svgIcon from '../../../assets/images/main-page/button-white-arrow.svg';

const Button = ({additionalClass, children, onClick, link=null}) => {
    const className = additionalClass ? additionalClass + ' ' + 'button-link' : 'button-link';

    // const svg = '../../../assets/images/main-page/button-white-arrow.svg';
    const svg = (<svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={"button-link-svg"}>
            <g clipPath="url(#clip0_1_835)">
                <path
                    d="M8.34969 5.00003C8.34969 5.17925 8.28126 5.35844 8.14469 5.49508L3.84487 9.79486C3.57135 10.0684 3.12788 10.0684 2.85447 9.79486C2.58106 9.52145 2.58106 9.07807 2.85447 8.80452L6.65919 5.00003L2.8546 1.19551C2.58119 0.921988 2.58119 0.478652 2.8546 0.205263C3.12802 -0.0683909 3.57148 -0.0683909 3.84501 0.205263L8.14482 4.50497C8.28142 4.64168 8.34969 4.82087 8.34969 5.00003Z"
                    fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_1_835">
                    <rect width="10" height="10" fill="white" transform="translate(0.5 10) rotate(-90)"/>
                </clipPath>
            </defs>
        </svg>
    )
    return (
        link ?
            <NavLink className={className} to={link}>
                {svg}
                {children}
            </NavLink> :
            <span className={className} onClick={onClick}>
                {svg}
                {children}
            </span>
    )
}

export default Button;