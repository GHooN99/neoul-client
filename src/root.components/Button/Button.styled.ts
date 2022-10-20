import styled, { css } from "styled-components";
import { ButtonStyleProps } from "./Button.types";

// default button style

const defaultButtonStyle = css<ButtonStyleProps>`
  ${({ theme, fullWidth }) => {
    const { texts, fontSize, buttons } = theme;
    return css`
      border: none;
      border-radius: 10px;
      font-weight: 600;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      ${fullWidth &&
      css`
        width: 100% !important;
      `}

      font-size: ${fontSize.main};

      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;

      &:disabled,
      &[disabled] {
        color: ${texts.disabled};
        background-color: ${buttons.gray};
        cursor: not-allowed;

        &:after {
          display: none;
        }
      }
    `;
  }}
`;

const buttonColors = css<ButtonStyleProps>`
  ${({ theme, color }) => {
    const { buttons, texts } = theme;
    switch (color) {
      case "main":
        return css`
          color: ${texts.main};
          background-color: ${buttons.main};
        `;

      case "gray":
        return css`
          color: ${texts.disabled};
          background-color: ${buttons.gray};
        `;
      case "white":
        return css`
          color: ${texts.dark};
          background-color: ${buttons.white};
        `;

      case "red":
        return css`
          color: ${texts.main};
          background-color: ${buttons.red};
        `;
      default:
        throw new Error("정확한 사이즈 값을 입력해주세요.");
    }
  }}
`;

// button size
const buttonSizes = css<ButtonStyleProps>`
  ${({ theme, size }) => {
    const { fontSize } = theme;
    switch (size) {
      case "regular":
        return css`
          font-size: ${fontSize.main};
          padding: 16px 32px;
          height: 50px;
        `;

      case "small":
        return css`
          font-size: ${fontSize.p};
          padding: 12px 24px;
          height: 40px;
        `;

      default:
        throw new Error("정확한 사이즈 값을 입력해주세요.");
    }
  }}
`;

// css animation
const buttonTransitions = css`
  ${({ theme }) => {
    const { shadows } = theme;
    return css`
      transition-duration: 0.1s;
      &:active {
        border-radius: 10px;
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 10px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.4s;
        box-shadow: 0 0 10px 10px ${shadows.basic};
      }

      &:active:after {
        box-shadow: 0 0 0 0 ${shadows.basic};
        position: absolute;
        border-radius: 10px;
        opacity: 1;
        transition: 0s;
      }
    `;
  }}
`;
export const StyledButtonWrapper = styled.button<ButtonStyleProps>`
  ${defaultButtonStyle};
  ${buttonSizes};
  ${buttonColors};
  ${buttonTransitions};
`;
