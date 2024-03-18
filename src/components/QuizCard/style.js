import styled from "styled-components";

import theme from "@/styles/theme";

export const CardItem = styled.div`
padding: 30px 20px 20px;
background-color: ${theme.colors.white};
border-radius: 10px;
box-shadow: 0 0 17px rgb(0 0 0/15%);
z-index: 1;
position: relative;
box-sizing: border-box;
border: 1px solid #ebebeb;

`;

export const CardLabel = styled.label`
    font-size: 20px;
    font-weight: 600;
    color: #2b2b2b;
    padding-left: 45px;
    position: relative;
    margin-bottom: 0;
    cursor: pointer;
`;

export const CardSubtitle = styled.span`
    margin-bottom: 15px;
    padding-left: 45px;
    position: relative;
    top: -7px;
    height: auto;
    line-height: 1.2;
    display: block;
    &:before {
        content: "";
        position: absolute;
        top: 12px;
        transform: translateY(-50%);
        border-radius: 50%;
        box-sizing: border-box;
        left: 0;
        width: 27px;
        height: 27px;
        border: 2px solid #dbdbdb;
    }
    &:after {
        content: "";
        position: absolute;
        top: 12px;
        transform: translateY(-50%);
        border-radius: 50%;
        box-sizing: border-box;
        left: 6px;
        width: 15px;
        height: 15px;
        border: 0;
    }
    &:hover {
        &:after {
            background-color: #cf76f2;
        }
    }
`;
export const CardImage = styled.span`
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 52%;
    border-radius: 10px;
    margin-top: 10px;
    display: block;
`;