import "./PopUp.css"

const PopUp = ({active, setActive, children, errors}) => {

    const errorsIsEmpty = errors && Object.keys(errors).length > 0;

    const classNameIfErrors = errorsIsEmpty
        ? "pop-up__content pop-up__content--errors"
        : "pop-up__content";

    const classNameIsActive = active
        ? "pop-up__content active"
        : "pop-up__content";

    return <section className={active ? "pop-up active" : "pop-up"} onClick={() => setActive(false)}>
        <div className={classNameIfErrors + ' ' + classNameIsActive} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </section>
}

export default PopUp;