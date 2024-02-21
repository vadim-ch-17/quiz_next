import styled, { keyframes } from "styled-components";

const dotJump = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-15px);
    }
`;

export const LoaderContainer = styled.div`
        position: absolute;
        left: 50%;
        top: calc(50% - 5px);
        
    
    .dot1 {
        left: 0px;
        animation: ${dotJump} 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
    }
    .dot2 {
        left: 20px;
        animation: ${dotJump} 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
    }
    .dot3 {
        left: 40px;
        animation: ${dotJump} 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
    }
`;