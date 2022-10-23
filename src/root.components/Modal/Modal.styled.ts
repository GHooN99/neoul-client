import styled, { css } from "styled-components";
import { fadeIn, fadeOut } from "@styles/keyframes/fades";
import { slideDown, slideUp } from "@styles/keyframes/slides";

export const StyledMask = styled.div<{ close: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.dims.basic};

  ${({ close }) => {
    return css`
      opacity: ${close ? 0 : 1};
      animation: ${close ? fadeOut : fadeIn} 0.25s;
    `;
  }}
`;

export const StyledModalWrapper = styled.div<{ close: boolean }>`
  ${({ close }) => {
    return css`
      animation: ${close ? slideDown : slideUp} 0.25s;
    `;
  }}

  background: ${({ theme }) => theme.backgrounds.upper};
  border-radius: 10px;
  position: relative;

  height: 230px;
  width: 300px;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    position: relative;
    width: 100%;
    height: 100%;

    .modal-title {
      color: ${({ theme }) => theme.texts.main};
      font-size: ${({ theme }) => theme.fontSize.h3};
      font-weight: 500;
      padding: 20px 0;
    }

    .modal-body {
      white-space: pre-line;
      line-height: 1.6;
      color: ${({ theme }) => theme.texts.sub};
      font-size: ${({ theme }) => theme.fontSize.p};
    }

    .button-group {
      display: flex;
      width: 100%;
      position: absolute;
      bottom: 0;
      right: 0;

      & > :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;
