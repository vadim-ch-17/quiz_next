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
    width: 375px;
    height: 375px;
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
    width: 375px;
    height: 375px;
  }
`;

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

const StyledButton = styled(({ as, ...rest }) => {
    if (as === 'button') {
        return <button {...rest} />;
    } else {
        return <a {...rest} />;
    }
})`
  position: relative;
  overflow: hidden;
  display: inline-block;
  color: ${randomColor};

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 20px;
    height: 20px;
    top : 50%;
    background-color: ${randomColor};
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
    color: ${randomColor};

    &::before {
      animation: ${crissCrossLeft} 0.8s both alternate;
    }

    &::after {
      animation: ${crissCrossRight} 0.8s both alternate;
    }
  }

        `;

export default StyledButton;