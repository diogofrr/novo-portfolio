import styled, { keyframes } from 'styled-components';

// Animação de surgimento da esquerda para a direita
export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-10%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInFromBottom = keyframes`
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

export const SlideFromLeftDiv = styled.div`
  animation: ${slideInFromLeft} 2.5s ease-in-out;
`;

export const SlideFromBottomDiv = styled.div`
  animation: ${slideInFromBottom} 2.5s ease-in-out;
`