import "./Input.css"
import {isRouteErrorResponse} from "react-router-dom";

const Input = ({
                   label,
                   id,
                   name,
                   type,
                   placeholder,
                   value,
                   onChange,
                   errors = {},
                   icon = null,
                   isRequired = false,
                   isDark = false
               }) => {

    const getClassName = () => {
        let defaultClassName = "input-field";
        return isDark ? defaultClassName + " input-field-dark" : defaultClassName;
    }

    return (
        <div className={getClassName()}>
            <label htmlFor={name}>{label}</label>
            <div className={errors[name] ? "input-field-wrap input-field__input--error": "input-field-wrap"}>
                {
                    icon &&
                    <div className={errors[name] ? "input-field-icon input-field__input--error" : "input-field-icon"}>
                        {icon}
                    </div>
                }
                <input id={id} name={name} type={type}
                       placeholder={placeholder}
                       className={errors[name] ? "input-field__input input-field__input--error" : "input-field__input"}
                       value={value} onChange={onChange} required={isRequired}
                />
                {/*{errors[`${name}`] ?  <span>{errors[name]}</span> : null}*/}
            </div>
            {errors[name] ? <span className={"input-errors"}>{errors[name]}</span> : null}
        </div>
    )
}

export default Input;