import StyledButton from './styles';
const Button = ({ children, href, as, type, classes, label, onClick }) => {

    return (
        <StyledButton
            as={as}
            className={classes}
            href={href}
            type={type}
            aria-label={label}
            onClick={onClick}
        >
            <span className='relative z-10 font-extrabold text-lg tracking-normal'>
                {children}
            </span>
        </StyledButton>
    );
}

export default Button;