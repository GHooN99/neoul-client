import styled, { css } from "styled-components";
import { slideLeft, slideRight } from "@styles/keyframes/slides";

export const StyledToastWrapper = styled.div<{
  isClosing: boolean;
}>`
  ${({ isClosing }) => {
    return css`
      opacity: ${isClosing ? 0 : 1};
      animation: ${isClosing ? slideLeft : slideRight} 0.3s;
      transition: opacity 0.3s linear;
    `;
  }}

  width:100%;
  height: 60px;

  border-radius: 10px;
  position: fixed;
  bottom: 10vh;
  margin: 0 auto;
  background: rgba(40, 40, 40, 0.8);

  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  .toast-message {
    ${({ theme }) => css`
      color: ${theme.texts.main};
      font-size: ${theme.fontSize.main};
    `}
  }
`;
