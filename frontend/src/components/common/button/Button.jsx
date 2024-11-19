import './Button.css'

const Button = ({additionalClass, children, onClick}) => {
    const className = additionalClass ? additionalClass + ' ' + 'button-link' : 'button-link';
    return (
        <a href="#" className={className} onClick={onClick}>{children}</a>
    )
}

export default Button;