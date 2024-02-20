import { createElement } from 'react';
import StyledButton from './styles';
const Button = ({ children, href, classes, label, onClick }) => {
    const typeBtn = href ? 'a' : 'button';

    return (
        <StyledButton
            as={typeBtn}
            className={classes}
            href={href}
            aria-label={label}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
    // return createElement(typeBtn, {
    //     className: classes,
    //     ...(href ? { href } : {}),
    //     ...(label ? { 'aria-label': label } : {}),
    //     onClick,
    // }, children);
}

export default Button;