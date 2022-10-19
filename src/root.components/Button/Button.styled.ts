import styled, { css } from "styled-components";
import { ButtonStyleProps } from "./Button.types";

// default button style

const defaultButtonStyle = css<ButtonStyleProps>`
  ${({ theme, fullWidth }) => {
    const { pallete } = theme;
    return css`
      color: ${pallete.white};

      border: none;
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      /* 사이즈 나중에 */
      ${fullWidth &&
      css`
        width: 100%;
      `}

      font-size: 16px;
      padding: 16px 32px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
    `;
  }}
`;

// css variant style
const buttonVariants = css<ButtonStyleProps>`
  ${({ theme, variant, color = "cyan" }) => {
    const { pallete, buttons, borders } = theme;

    switch (variant) {
      case "primary":
        return css`
          background-color: ${buttons[color]};
        `;
      case "secondary":
        return css`
          color: ${buttons[color]};
          background-color: ${pallete.white};
          border: 1px solid ${borders.basic};
        `;
      case "text":
        return css`
          background-color: transparent;
          color: ${buttons[color]};
          padding: 6px;
        `;
      default:
        throw new Error("unhandled variant type!");
    }
  }}
`;

// css animation
const buttonTransitions = css`
  ${({ theme }) => {
    const { shadows } = theme;
    return css`
      transition-duration: 0.4s;

      &:hover {
        transition: opacity 0.1s;
        opacity: 0.8;
      }

      &:after {
        content: "";
        display: block;
        position: absolute;

        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.6s;
        box-shadow: 0 0 10px 10px ${shadows.basic};
      }

      &:active:after {
        box-shadow: 0 0 0 0 ${shadows.basic};
        position: absolute;

        opacity: 1;
        transition: 0s;
      }
    `;
  }}
`;
export const StyledButtonWrapper = styled.button<ButtonStyleProps>`
  ${defaultButtonStyle};

  ${buttonTransitions};

  ${buttonVariants};
`;
