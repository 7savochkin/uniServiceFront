import "./PopUp.css"

const PopUp = ({active, setActive, children}) => {

    return <section className={active ? "pop-up active" : "pop-up"} onClick={() => setActive(false)}>
        <div className={active ? "pop-up__content active" : "pop-up__content"} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </section>
}

export default PopUp;