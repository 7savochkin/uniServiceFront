import "./Input.css"

const Input = ({
                   label,
                   id,
                   name,
                   type,
                   placeholder,
                   value,
                   onChange,
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
            <div className="input-field-wrap">
                {
                    icon &&
                    <div className="input-field-icon">
                        {icon}
                    </div>
                }
                <input id={id} name={name} type={type}
                       placeholder={placeholder} className="input-field__input"
                       value={value} onChange={onChange} required={isRequired}
                />
            </div>
        </div>
    )
}

export default Input;