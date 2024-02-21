import theme from "@/styles/theme";
import styled from "styled-components";

export const SpanStyle = styled.span`
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${theme.colors.white};
    border-radius: 20px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;

    &:nth-child(1) {
        top: ${props => props.open ? "0" : spanItemsPosition(props)};
        transform: ${props => props.open ? "rotate(45deg)" : "rotate(0deg)"};
    }
    &:nth-child(2) {
        top: ${props => props.$top ? spanItemsPosition(props) : "8px"};
        width: ${props => props.open ? "0%" : "100%"};
        opacity: ${props => props.open ? "0" : "1"};
    }
    &:nth-child(3) {
        top: ${props => props.open ? "16px" : spanItemsPosition(props)};
        transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0deg)"};
    }
`;

const spanItemsPosition = (props) => {
    const topPosition = [0, 8, 16]
    return topPosition[props.$top] + 'px';
};