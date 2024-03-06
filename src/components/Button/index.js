import StyledButton from './styles';
const Button = ({ children, href, as, type, classes, fontSize, label, onClick }) => {

    return (
        <StyledButton
            as={as}
            className={classes}
            href={href}
            type={type}
            aria-label={label}
            onClick={onClick}
        >
            <span className={`relative z-10 font-bold ${fontSize || 'text-lg'} tracking-[0.03px]`}>
                {children}
            </span>
        </StyledButton>
    );
}

export default Button;