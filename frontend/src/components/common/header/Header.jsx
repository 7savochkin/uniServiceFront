import React from 'react'

// import HeaderBurger from './HeaderBurger';
// import HeaderBurgerMenu from './HeaderBurgerMenu';

import "./Header.css"
import logo from '../../../assets/images/header/logo.svg';
import facebook_icon from '../../../assets/images/header/facebook-icon.svg'
import instagram_icon from '../../../assets/images/header/instagram-icon.svg'
import telegram_icon from '../../../assets/images/header/telegram-icon.svg'

const Header = () => {

    // const useOnClickOutside = (ref, handler) => {
    //   React.useEffect(() => {
    //     const listener = event => {
    //       if (!ref.current || ref.current.contains(event.target)) return;
    //       handler(event);
    //     };
    //     document.addEventListener("mousedown", listener);
    //
    //     return () => {
    //       document.removeEventListener("mousedown", listener);
    //     };
    //   }, [ref, handler]);
    // };
    //
    // const [open, setOpen] = React.useState(false);
    // const node = React.useRef();
    // useOnClickOutside(node, () => setOpen(false));

    return (
        <div className="container">
            <div className="header">
                <div className="header-top">
                    <img className="header-top__logo" src={logo} alt="logo"/>
                    <ul className="header-top-nav">
                        <li className="header-top-nav__item">
                            <a href="www.google.com" className="header-top-nav__item-link">Про компанію</a>
                        </li>
                        <li className="header-top-nav__item">
                            <a href="www.google.com" className="header-top-nav__item-link">Послуги</a>
                        </li>
                        <li className="header-top-nav__item">
                            <a href="www.google.com" className="header-top-nav__item-link">Медіа</a>
                        </li>
                        <li className="header-top-nav__item">
                            <a href="www.google.com" className="header-top-nav__item-link">Вакансії</a>
                        </li>
                        <li className="header-top-nav__item">
                            <a href="www.google.com" className="header-top-nav__item-link">Новини</a>
                        </li>
                        <li className="header-top-nav__item">
                            <a href="www.google.com" className="header-top-nav__item-link">Контакти</a>
                        </li>
                    </ul>
                    <div className="header-top-links">
                        <ul className="header-top-lang">
                            <li className="header-top-lang__item">
                                <a href="www.google.com" className="header-top-lang__item-link">UK</a>
                            </li>
                            <li className="header-top-lang__item">
                                <a href="#menu" className="header-top-lang__item-link">ENG</a>
                            </li>
                        </ul>
                        <a className="header-top-tel" href="tel:+380979471159">+38(097)-947-11-59</a>
                        <div className="header-top-social">
                            <a className="header-top-social__link" href="https://www.facebook.com/">
                                <img
                                    className="header-top-social__link-img"
                                    src={facebook_icon}
                                    alt="facebook-icon"
                                />
                            </a>
                            <a className="header-top-social__link" href="https://www.instagram.com/">
                                <img
                                    className="header-top-social__link-img"
                                    src={instagram_icon}
                                    alt="instagram-icon"
                                />
                            </a>
                            <a className="header-top-social__link" href="https://www.telegram.com/">
                                <img
                                    className="header-top-social__link-img"
                                    src={telegram_icon}
                                    alt="telegram-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="menu">*/}
            {/* <div className="menu__content" id="menu">*/}
            {/*   <ul className="menu__nav">*/}
            {/*     <li className="menu__nav-basket menu__nav-item">*/}
            {/*       <a href="#benefits" className="menu__nav-link">Basket</a>*/}
            {/*     </li>*/}
            {/*     <li className="menu__nav-item">*/}
            {/*       <a href="#features" className="menu__nav-link">Features</a>*/}
            {/*     </li>*/}
            {/*     <li className="menu__nav-item">*/}
            {/*       <a href="#materials" className="menu__nav-link">Materials</a>*/}
            {/*     </li>*/}
            {/*     <li className="menu__nav-item">*/}
            {/*       <a href="#about" className="menu__nav-link">About us</a>*/}
            {/*     </li>*/}
            {/*     <li className="menu__nav-item">*/}
            {/*       <a href="#questions" className="menu__nav-link">Message us</a>*/}
            {/*     </li>*/}
            {/*   </ul>*/}
            {/*   <a href="www.google.com" className="menu__close">*/}
            {/*     <p className="menu__side-text">Close</p>*/}
            {/*     <img src="line.e58014bb.svg" alt="---" className="menu__side-line" />*/}
            {/*     <img src="close-icon.595bdf93.svg" alt="X" className="menu__close-icon" />*/}
            {/*   </a>*/}
            {/* </div>*/}
            {/*</div>*/}

            {/*<div ref={node}>*/}
            {/* <HeaderBurger open={open} setOpen={setOpen} />*/}
            {/* <HeaderBurgerMenu open={open} setOpen={setOpen} />*/}
            {/*</div>*/}
        </div>
    )
};

export default Header;