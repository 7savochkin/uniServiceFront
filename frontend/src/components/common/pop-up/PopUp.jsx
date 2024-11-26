import "./PopUp.css";

const PopUp = ({ active, setActive, children, errors, isImage }) => {
  const errorsIsEmpty = errors && Object.keys(errors).length > 0;

  const classNameIfErrors = errorsIsEmpty
    ? "pop-up__content pop-up__content--errors"
    : "pop-up__content";

  const classNameIsActive = active
    ? "pop-up__content active"
    : "pop-up__content";

  const contentClassName = isImage
    ? "pop-up__content pop-up__content--image"
    : classNameIfErrors + " " + classNameIsActive;

  return (
    <section className={active ? "pop-up active" : "pop-up"} onClick={() => setActive(false)}>
      <div
        className={contentClassName}
        onClick={(e) => e.stopPropagation()}
      >
        {isImage && (
          <button
            className="pop-up__image-close"
            onClick={() => setActive(false)}
          >
            {/* &times; Іконка закриття */}
          </button>
        )}
        {children}
      </div>
    </section>
  );
};

export default PopUp;
