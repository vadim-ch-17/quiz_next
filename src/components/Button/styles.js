import theme from '@/styles/theme';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const crissCrossLeft = keyframes`
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    left: 50%;
    width: 200%;
    height: 200%;
  }
`;

const crissCrossRight = keyframes`
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    right: 50%;
    width: 200%;
    height: 200%;
  }
`;
const buttonTypeColors = (type) => {
  switch (type) {
    case 'blue':
      return {
        color: theme.colors.white,
        bgColor: theme.colors.blue,
        bgHoverColor: theme.colors.hoverBlue,
        hoverColor: theme.colors.hoverWhite,
      };
    case 'pink':
      return {
        color: theme.colors.white,
        bgColor: theme.colors.pink,
        bgHoverColor: theme.colors.hoverPink,
        hoverColor: theme.colors.hoverWhite,
      };
    case 'white':
      return {
        color: theme.colors.blue,
        bgColor: theme.colors.white,
        bgHoverColor: theme.colors.blue,
        hoverColor: theme.colors.white,
      };
    default:
      return {
        color: theme.colors.white,
        bgColor: theme.colors.blue,
        bgHoverColor: theme.colors.hoverBlue,
        hoverColor: theme.colors.hoverWhite,
      };
  }
}
const StyledButton = styled(({ as, color, bgColor, hoverColor, width, ...rest }) => {
  if (as === 'button') {
    return <button {...rest} />;
  } else {
    return <a {...rest} />;
  }
})`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  color: ${({ type }) => buttonTypeColors(type).color};
  border-radius: 50px;
  padding: 10px 30px;
  min-height: 55.78px;
  min-width: ${({ width }) => width || '233px'};
  background-color: ${({ type }) => buttonTypeColors(type).bgColor};
  @media (max-width: 350px) {
    padding: 10px 5px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 0;
    width: 20px;
    height: 20px;
    top : 50%;
    background-color: ${({ type }) => buttonTypeColors(type).bgHoverColor};
    border-radius: 50%;
  }

  &::before {
    left: -50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    right: -50%;
    transform: translate(50%, -50%);
  }

  &:hover {
    color: ${({ type }) => buttonTypeColors(type).hoverColor};
    // background-color: ${({ type }) => buttonTypeColors(type).bgHoverColor};
    &::before {
      animation: ${crissCrossLeft} 0.8s both alternate;
    }

    &::after {
      animation: ${crissCrossRight} 0.8s both alternate;
    }
  }

        `;

export default StyledButton;