import classNames from "classnames";

const Button = ({ children, variant, shape, type }) => {

    const classes = classNames(
        'btn',
        shape === 'round' && 'btn--round',
        variant === 'primary' && 'btn--primary'
    )
    return (
        <button className={classes} type={type}>
            {children}
        </button>
    )
}

export default Button;