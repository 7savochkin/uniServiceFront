import Breadcrumbs from "../common/breadcrumbs/Breadcrumbs";
import "./VacanciesListPage.css";
import VacancyItem from "../common/list-items/vacancy-item/VacancyItem";
import Button from "../common/button/Button";
import React, {useEffect, useState} from "react";
import {LanguageContext} from "../../translations/language";
import getTranslations from "../../translations/translations";
import {isObjectEmpty} from "../../utils/objects";
import PopUp from "../common/pop-up/PopUp";
import pop_up_close_icon from "../../assets/images/pop-up/pop-up-close-icon.svg";
import Input from "../common/input/Input";
import ShowMore from "../common/show-more/ShowMore";
import useAPIClient from "../../hooks/api.hook";


const VacanciesListPage = ({vacanciesData, setVacanciesData, loadingVacanciesData}) => {
    const [language, setLanguage] = React.useContext(LanguageContext);
    const translation = getTranslations(language, "main");

    const [vacancies, setVacancies] = useState([]);
    const [vacancyTitles, setVacancyTitles] = useState({});
    const [hasNextPage, setHasNextPage] = useState(true);

    useEffect(() => {
        if (!loadingVacanciesData) {
            setVacancies(vacanciesData.results.vacancies);
            setVacancyTitles(vacanciesData.results.titles_of_vacancies);
            setHasNextPage(!!vacanciesData.next);
        }
    }, [vacanciesData]);

    const paths = [
        {path: "/", name: translation["Головна"]},
        {path: "", name: translation["Вакансії"]}
    ]

    const defaultFormData = {
        "name": "",
        "email": "",
        "phone": "",
        "message": "",
    }

    const [popUpActive, setPopUpActive] = useState(false);

    const [formData, setFormData] = useState(defaultFormData)
    const [errors, setErrors] = useState({});
    const [isError, setIsError] = useState(false);

    const client = useAPIClient(language);

    useEffect(() => {
        // check that errors state is empty
        setIsError(!isObjectEmpty(errors));
    }, [errors])

    const phoneRegex = /^\+380\d{9}$/;
    const validate = (name, value, errorsObj) => {
        if (name === "name") {
            if (!value.trim()) {
                errorsObj.name = "Name is required";
            } else if (!/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+(?: [A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/.test(value.trim())) {
                errorsObj.name = "Name is not valid";
            } else {
                delete errorsObj.name;
            }
        } else if (name === "phone") {
            if (!value.trim()) {
                errorsObj.phone = "Phone is required";
            } else if (!phoneRegex.test(value.trim())) {
                errorsObj.phone = "Phone number is not valid";
            } else {
                delete errorsObj.phone;
            }
        }

        return errorsObj;
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (!isError) {
            const dataToSend = {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                message: formData.message,
            };

            try {
                const response = await client.postFormOrderTender('/order/tender/', dataToSend);
                console.log("Form submitted successfully:", response.data);
                setFormData(defaultFormData);
                alert("Форма успішно відправлена!");
                setPopUpActive(false);
            } catch (error) {
                console.log("error.message: ", error.response.data);
                alert("Сталася помилка при відправці форми.");
            }
        } else {
            alert("Будь ласка, виправте помилки в формі.");
        }
    }

    const onChangeInput = (e) => {
        //setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}));
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));

        setErrors((state) => {
            const newErrors = {...state};
            return validate(name, value, newErrors); // validate повертає об'єкт
        });

    }

    const inputsData = [
        {
            label: `${translation["Ім’я"]}*`,
            icon: (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_17_8922)">
                        <path
                            d="M9 10.125C11.7949 10.125 14.0625 7.85742 14.0625 5.0625C14.0625 2.26758 11.7949 0 9 0C6.20508 0 3.9375 2.26758 3.9375 5.0625C3.9375 7.85742 6.20508 10.125 9 10.125ZM13.5 11.25H11.5629C10.7824 11.6086 9.91406 11.8125 9 11.8125C8.08594 11.8125 7.22109 11.6086 6.43711 11.25H4.5C2.01445 11.25 0 13.2645 0 15.75V16.3125C0 17.2441 0.755859 18 1.6875 18H16.3125C17.2441 18 18 17.2441 18 16.3125V15.75C18 13.2645 15.9855 11.25 13.5 11.25Z"
                            fill="#586574"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_17_8922">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
            id: "input_name",
            name: "name",
            type: "text",
            placeholder: translation["Напишіть ім’я"],
            value: formData.name,
            onChange: onChangeInput,
            isRequired: true,
            isDark: false,
        },
        {
            label: "Email",
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.659 6.70781C17.7961 6.59883 18 6.70078 18 6.87305V14.0625C18 14.9941 17.2441 15.75 16.3125 15.75H1.6875C0.755859 15.75 0 14.9941 0 14.0625V6.87656C0 6.70078 0.200391 6.60234 0.341016 6.71133C1.12852 7.32305 2.17266 8.1 5.75859 10.7051C6.50039 11.2465 7.75195 12.3855 9 12.3785C10.2551 12.3891 11.5312 11.2254 12.2449 10.7051C15.8309 8.1 16.8715 7.31953 17.659 6.70781ZM9 11.25C9.81563 11.2641 10.9898 10.2234 11.5805 9.79453C16.2457 6.40898 16.6008 6.11367 17.6766 5.26992C17.8805 5.11172 18 4.86562 18 4.60547V3.9375C18 3.00586 17.2441 2.25 16.3125 2.25H1.6875C0.755859 2.25 0 3.00586 0 3.9375V4.60547C0 4.86562 0.119531 5.1082 0.323437 5.26992C1.39922 6.11016 1.7543 6.40898 6.41953 9.79453C7.01016 10.2234 8.18437 11.2641 9 11.25Z"
                        fill="#586574"/>
                </svg>
            ),
            id: "input_email",
            name: "email",
            type: "email",
            placeholder: `${translation["Напишіть"]} E-mail`,
            value: formData.email,
            onChange: onChangeInput,
            isDark: false,
            isRequired: false,
        },
        {
            label: `${translation["Телефон"]}*`,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.25 11.8125C11.25 12.1233 10.9983 12.375 10.6875 12.375H7.3125C7.00172 12.375 6.75 12.1233 6.75 11.8125V10.125H0V15.1875C0 16.0875 0.7875 16.875 1.6875 16.875H16.3125C17.2125 16.875 18 16.0875 18 15.1875V10.125H11.25V11.8125ZM16.3125 4.5H13.5V2.8125C13.5 1.9125 12.7125 1.125 11.8125 1.125H6.1875C5.2875 1.125 4.5 1.9125 4.5 2.8125V4.5H1.6875C0.7875 4.5 0 5.2875 0 6.1875V9H18V6.1875C18 5.2875 17.2125 4.5 16.3125 4.5ZM11.25 4.5H6.75V3.375H11.25V4.5Z"
                        fill="#586574"/>
                </svg>

            ),
            id: "input_phone",
            name: "phone",
            type: "text",
            placeholder: translation["Напишіть телефон"],
            value: formData.phone,
            onChange: onChangeInput,
            isRequired: true,
            isDark: false,
        },
    ]

    return (
        <section className="vacancies-list">
            <Breadcrumbs paths={paths}/>
            <div className="vacancies-section">
                <div className="container">
                    <div className="vacancies-section-header">
                        <h2 className="vacancies-section__title">{translation["Вакансії"]}/<span>{translation["Тендери"]}</span>
                        </h2>
                        <Button additionalClass={"vacancies-section__link"}
                                className="button-link"
                                onClick={() => setPopUpActive(true)}
                        >{translation["Запросити до тендеру"]}</Button>
                    </div>
                    <div className="vacancies-section-list">
                        <ul className="vacancies-section-list__inner">
                            {vacancies.map((item, index) => <VacancyItem key={index}
                                                                         translation={translation}
                                                                         titles={vacancyTitles} item={item}/>)}
                        </ul>
                        {hasNextPage && <ShowMore fetchFuncData={client.getVacancies} setData={setVacanciesData}
                                                  setHasNextPage={setHasNextPage}/>
                        }
                    </div>
                </div>
            </div>
            <PopUp errors={errors} active={popUpActive} setActive={setPopUpActive}>
                <img src={pop_up_close_icon} alt="pop-close-icon" className="pop-up__image-close"
                     onClick={() => setPopUpActive(false)}/>
                <h2 className="pop-up__title">{translation["Замовити тендер"]}</h2>
                <form onSubmit={onSubmitForm} className="pop-up__form">
                    {inputsData.map((item, i) => <Input errors={errors || {}} key={i} {...item}/>)}
                    <div className="pop-up__feedback">
                        <label htmlFor="text-area" className="text-area__label">{translation["Повідомлення"]}</label>
                        <textarea name="message" id="" className="text-area input-field__input"
                                  placeholder={translation["Напишіть текст"]} required={true} value={formData.message} onChange={onChangeInput}></textarea>
                        <input className="pop-up__send-button button-link" type="submit"
                               value={translation["Відправити"]}/>
                    </div>
                </form>
            </PopUp>
        </section>
    )
}

export default VacanciesListPage;