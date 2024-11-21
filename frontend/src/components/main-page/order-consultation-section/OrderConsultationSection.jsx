import {useEffect, useState} from "react";
import Input from "../../common/input/Input";

import "./OrderConsultationSection.css"
import consultation_square from "../../../assets/images/main-page/consultation-square.png"
import {isObjectEmpty} from "../../../utils/objects";

const OrderConsultationSection = ({translation}) => {

    const defaultFormData = {
        "name": "",
        "phone": "",
        "email": ""
    }

    const [formData, setFormData] = useState(defaultFormData)
    const [errors, setErrors] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // check that errors state is empty
        setIsError(!isObjectEmpty(errors));
    }, [errors])

    // const validate = (name, value, errorsObj) => {
    //     if (name === "name") {
    //         if (!value.trim()) {
    //             errorsObj.name = "Name is required";
    //         } else if (!/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+(?: [A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/.test(formData.name.trim())) {
    //             errorsObj.name = "Name is not valid";
    //         } else {
    //             delete errorsObj.name;
    //         }
    //     } else if (name === "phone") {
    //         if (value.trim()) {
    //             errorsObj.phone = "Phone is required";
    //         } else if (!/^\+?[1-9]\d{1,14}$/.test(value.trim())) {
    //             errorsObj.phone = "Phone number is not valid";
    //         } else {
    //             delete errorsObj.phone;
    //         }
    //     }
    //
    //     return errorsObj;
    // }
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

    // const onChangeInput = (e) => {
    //     const {name, value} = e.target;
    //     setFormData(prevState => ({...prevState, [name]: value}));
    //     setErrors(state => {
    //         const newErrors = {...state};
    //         return validate(name, value, newErrors);
    //     });
    // }

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}));

        setErrors((state) => {
            const newErrors = {...state};
            return validate(name, value, newErrors); // validate повертає об'єкт
        });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (!isError) {
            console.log(formData);
            // validationErrors = {}
            setFormData(defaultFormData);
            alert("Form submitted successfully");
        }
        // console.log(validationErrors);
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
            isDark: true,
        },
        {
            label: `${translation["Телефон"]}*`,
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_17_8916)">
                        <path
                            d="M17.4864 12.7197L13.5489 11.0322C13.3807 10.9605 13.1937 10.9454 13.0162 10.9892C12.8386 11.0329 12.6801 11.1331 12.5645 11.2748L10.8207 13.4052C8.08409 12.1149 5.88171 9.91257 4.59141 7.17591L6.72187 5.43216C6.86379 5.31674 6.96424 5.15822 7.00801 4.9806C7.05178 4.80298 7.03649 4.61594 6.96445 4.44779L5.27695 0.510287C5.19789 0.329024 5.05806 0.181029 4.88157 0.0918214C4.70508 0.00261353 4.50299 -0.0222158 4.31016 0.0216148L0.653906 0.865365C0.467989 0.908297 0.302114 1.01298 0.183352 1.16232C0.0645909 1.31167 -4.28277e-05 1.49686 2.12914e-08 1.68767C2.12914e-08 10.7052 7.30898 18.0002 16.3125 18.0002C16.5034 18.0003 16.6886 17.9357 16.8381 17.8169C16.9875 17.6982 17.0922 17.5322 17.1352 17.3463L17.9789 13.69C18.0225 13.4962 17.9971 13.2933 17.9072 13.1162C17.8173 12.9391 17.6685 12.7989 17.4864 12.7197Z"
                            fill="#586574"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_17_8916">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
            id: "input_phone",
            name: "phone",
            type: "text",
            placeholder: translation["Напишіть телефон"],
            value: formData.phone,
            onChange: onChangeInput,
            isRequired: true,
            isDark: true,
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
            isDark: true,
        },
    ]

    return (
        <section className="order-consultation-section">
            <div className="order-consultation-wrapper">
                <div className="container">
                    <div className="order-consultation-content">
                        <div className="order-consultation-section-info">
                            <h2 className="order-consultation-section__title">{translation["Замовити консультацію"]}</h2>
                            <p className="order-consultation-section__text">{translation["Залиште свої контакти та отримайте безкоштовний виїзд та консультацію від фахівця"]}</p>
                            <form onSubmit={onSubmitForm} className="order-consultation-section-form">
                                {inputsData.map((item, i) => <Input errors={errors || {}}
                                                                    key={i} {...item}/>)}
                                <input className="order-consultation__link button-link" type="submit"
                                       value={translation["Відправити"]}/>
                            </form>
                        </div>
                        <div className="order-consultation-section-images">
                            <div className="order-consultation-section-images__square">
                                <img src={consultation_square} alt={"consultation-square"}/>
                            </div>
                        </div>
                    </div>
                    <div className="order-consultation-bg"></div>
                </div>
            </div>
        </section>
    )
}

export default OrderConsultationSection;