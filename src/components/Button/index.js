import StyledButton from './styles';
const Button = ({ children, href, as, colorType, classes, fontSize, label, onClick, disabled }) => {

    return (
        <StyledButton
            as={as}
            className={classes}
            href={href}
            type={colorType}
            aria-label={label}
            onClick={onClick}
            disabled={disabled || false}
        >
            <span className={`relative z-10 font-bold ${fontSize || 'text-lg'} tracking-[0.03px]`}>
                {children}
            </span>
        </StyledButton>
    );
}

export default Button;