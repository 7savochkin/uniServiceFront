import React from 'react';
import "./Header.css";
import logo from '../../../assets/images/header/logo.svg';
import HeaderBurger from "./HeaderBurger";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../../translations/language";
import getTranslations from "../../../translations/translations";
import { useNavActive } from "../../../hooks/setNavClass.hook";

const Header = ({contacts}) => {

  const [language, setLanguage] = React.useContext(LanguageContext);

  const translation = getTranslations(language, "header");

  const phones = contacts?.phones;
  const phoneNumber = phones ? phones.map(item => item?.phone)[0] : null;

  const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener("mousedown", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef();
  useOnClickOutside(menuRef, () => setOpen(false));

  function getLangClassName(value) {
    return language === value ? "header-top-lang__item lang-active" : "header-top-lang__item"
  }

  const defaultClassLink = "header-top-nav__item-link";
  const activeClassLink = "active-link";

  const { setNavClass } = useNavActive(defaultClassLink, activeClassLink);

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <NavLink to={"/"} className={"header-top__logo-link"}>
            <img className="header-top__logo" src={logo} alt="logo" />
          </NavLink>
          <ul className="header-top-nav">
            <li className="header-top-nav__item">
              <NavLink to={"/about-us/"}
                className={({ isActive }) => setNavClass(isActive)}>{translation["Про компанію"]}
              </NavLink>
            </li>
            <li className="header-top-nav__item">
              <NavLink to={"/services/"}
                className={({ isActive }) => setNavClass(isActive)}>{translation["Послуги"]}
              </NavLink>
            </li>
            <li className="header-top-nav__item">
              <NavLink to={"/media/"}
                className={({ isActive }) => setNavClass(isActive)}>{translation["Медіа"]}
              </NavLink>
            </li>
            <li className="header-top-nav__item">
              <NavLink to={"/vacancies/"}
                className={({ isActive }) => setNavClass(isActive)}>{translation["Вакансії"]}
              </NavLink>
            </li>
            <li className="header-top-nav__item">
              <NavLink to={"/news/"}
                className={({ isActive }) => setNavClass(isActive)}>{translation["Новини"]}
              </NavLink>
            </li>
            <li className="header-top-nav__item">
              <NavLink to={"/contacts/"}
                className={({ isActive }) => setNavClass(isActive)}>{translation["Контакти"]}</NavLink>
            </li>
          </ul>
          <div className="header-top-links">
            <ul className="header-top-lang">
              <li className={getLangClassName("uk")}
                onClick={() => setLanguage("uk")}>
                <span className="header-top-lang__item-link">UK</span>
              </li>
              <li className={getLangClassName("en-us")}
                onClick={() => setLanguage("en-us")}>
                <span className="header-top-lang__item-link">ENG</span>
              </li>
            </ul>
            <a className="header-top-tel" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <div className="header-top-social">
              <a className="header-top-social__link" href={contacts?.facebook} target='_blank' rel="noreferrer">
                <svg className={"header-top-social__link-img"} width="8" height="14" viewBox="0 0 8 14"
                  fill="#182829"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.08433 14V7.61441H7.22685L7.54829 5.12509H5.08433V3.53603C5.08433 2.81554 5.28358 2.32453 6.31793 2.32453L7.63501 2.32399V0.097461C7.40724 0.0678617 6.62539 0 5.71539 0C3.81517 0 2.51425 1.15988 2.51425 3.28949V5.12509H0.365234V7.61441H2.51425V14H5.08433Z"
                    fill="#182829" />
                </svg>
              </a>
              <a className="header-top-social__link" href={contacts?.instagram} target="_blank" rel="noreferrer">
                <svg className={"header-top-social__link-img"} width="14" height="14"
                  viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_3261)">
                    <path
                      d="M10.2103 0H3.78967C1.70001 0 0 1.70001 0 3.78967V10.2104C0 12.3 1.70001 14 3.78967 14H10.2104C12.3 14 14 12.3 14 10.2104V3.78967C14 1.70001 12.3 0 10.2103 0ZM6.99999 10.828C4.88918 10.828 3.17198 9.11079 3.17198 6.99999C3.17198 4.88918 4.88918 3.17198 6.99999 3.17198C9.11079 3.17198 10.828 4.88918 10.828 6.99999C10.828 9.11079 9.11079 10.828 6.99999 10.828ZM10.9195 4.07475C10.2958 4.07475 9.7884 3.56739 9.7884 2.94361C9.7884 2.31983 10.2958 1.81237 10.9195 1.81237C11.5433 1.81237 12.0508 2.31983 12.0508 2.94361C12.0508 3.56739 11.5433 4.07475 10.9195 4.07475Z"
                      fill="currentColor" />
                    <path
                      d="M7.00044 3.99268C5.3423 3.99268 3.99316 5.3417 3.99316 6.99995C3.99316 8.65809 5.3423 10.0072 7.00044 10.0072C8.65868 10.0072 10.0077 8.65809 10.0077 6.99995C10.0077 5.3417 8.65868 3.99268 7.00044 3.99268Z"
                      fill="currentColor" />
                    <path
                      d="M10.9198 2.6333C10.7487 2.6333 10.6094 2.77258 10.6094 2.94369C10.6094 3.11481 10.7487 3.25409 10.9198 3.25409C11.091 3.25409 11.2303 3.11491 11.2303 2.94369C11.2303 2.77248 11.091 2.6333 10.9198 2.6333Z"
                      fill="#182829" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_3261">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </a>
              <a className="header-top-social__link" href={contacts?.telegram} target="_blank" rel="noreferrer">
                <svg className={"header-top-social__link-img"} width="14" height="14"
                  viewBox="0 0 14 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.247281 7.52467L3.47316 8.72867L4.72177 12.7442C4.80167 13.0014 5.11615 13.0964 5.32489 12.9258L7.12305 11.4599C7.31154 11.3063 7.58001 11.2987 7.77699 11.4416L11.0202 13.7963C11.2435 13.9586 11.5599 13.8362 11.6159 13.5664L13.9917 2.13817C14.0529 1.84343 13.7633 1.59754 13.4826 1.70609L0.243501 6.81333C-0.083212 6.93933 -0.0803654 7.40189 0.247281 7.52467ZM4.52055 8.08775L10.8251 4.20476C10.9384 4.13518 11.055 4.28839 10.9577 4.37864L5.7546 9.21517C5.57171 9.38541 5.45374 9.61324 5.42033 9.86053L5.24309 11.174C5.21961 11.3494 4.97326 11.3668 4.92487 11.1971L4.24321 8.80189C4.16513 8.52871 4.27891 8.2369 4.52055 8.08775Z"
                    fill="#182829" />
                </svg>

              </a>
            </div>
          </div>
          <div ref={menuRef}>
            <HeaderBurger open={open} setOpen={setOpen} />

            <HeaderBurgerMenu open={open} setOpen={setOpen} contacts={contacts} />
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;