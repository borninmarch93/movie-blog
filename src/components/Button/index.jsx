import classNames from "classnames";

const Button = ({ onClick, id, variant, shape, type, children }) => {

    const classes = classNames(
        'btn',
        shape === 'round' && 'btn--round',
        variant === 'primary' && 'btn--primary',
        variant === 'secondary' && 'btn--secondary'
    )
    return (
        <button id={id} onClick={onClick} className={classes} type={type}>
            {children}
        </button>
    )
}

export default Button;