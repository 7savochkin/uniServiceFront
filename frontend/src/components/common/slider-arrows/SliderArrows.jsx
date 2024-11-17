import "./SliderArrows.css"

const SliderArrows = ({additionalClassName = null, prevClassName = null, nextClassName = null}) => {

    const arrowsDefaultClassName = "custom-slider-arrows";
    const prevArrowDefaultClassName = "custom-slider-arrow custom-slider-arrow__prev";
    const nextArrowDefaultClassName = "custom-slider-arrow custom-slider-arrow__next";

    function getClassName(defaultClass, additionalClass) {
        return additionalClass ? `${defaultClass} ${additionalClass}` : defaultClass;
    }

    return (
        <div className={getClassName(arrowsDefaultClassName, additionalClassName)}>
            <div className={getClassName(prevArrowDefaultClassName, prevClassName)}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.1503 4.99997C2.1503 4.82075 2.21874 4.64155 2.35531 4.50491L6.65513 0.205141C6.92865 -0.0683805 7.37212 -0.0683805 7.64553 0.205141C7.91894 0.478552 7.91894 0.921933 7.64553 1.19548L3.84081 4.99997L7.64539 8.80449C7.91881 9.07801 7.91881 9.52135 7.64539 9.79474C7.37198 10.0684 6.92851 10.0684 6.65499 9.79474L2.35517 5.49503C2.21858 5.35832 2.1503 5.17913 2.1503 4.99997Z"
                        fill="#586574"/>
                </svg>
            </div>
            <div className={getClassName(nextArrowDefaultClassName, nextClassName)}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.1503 4.99997C2.1503 4.82075 2.21874 4.64155 2.35531 4.50491L6.65513 0.205141C6.92865 -0.0683805 7.37212 -0.0683805 7.64553 0.205141C7.91894 0.478552 7.91894 0.921933 7.64553 1.19548L3.84081 4.99997L7.64539 8.80449C7.91881 9.07801 7.91881 9.52135 7.64539 9.79474C7.37198 10.0684 6.92851 10.0684 6.65499 9.79474L2.35517 5.49503C2.21858 5.35832 2.1503 5.17913 2.1503 4.99997Z"
                        fill="#586574"/>
                </svg>
            </div>
        </div>
    )
}

export default SliderArrows;