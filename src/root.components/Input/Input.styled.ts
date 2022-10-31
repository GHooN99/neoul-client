import styled, { css } from "styled-components";
import { InputStyleProps } from "./Input.types";

export const StyledInputWrapper = styled.div<InputStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "300px")};
`;

export const StyledInput = styled.input<InputStyleProps>`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  outline: 0;
  padding: 16px;

  ${({ theme }) => css`
    color: ${theme.texts.main};
    background-color: ${theme.backgrounds.upper};
  `};

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border: 1px solid ${theme.borders.error};
    `};

  &:focus,
  &:focus-visible {
    outline: none;
    border: 1px solid
      ${({ theme, hasError }) =>
        hasError ? theme.borders.error : theme.borders.focused};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    border: 1px solid ${({ theme }) => theme.borders.focused};
  }
`;

export const StyledErrorMessage = styled.span`
  position: absolute;
  /* align-self: flex-end; */
  /* margin-right: 8px; */
  /* margin-top: 4px; */
  right: 8px;
  bottom: -20px;
  color: ${({ theme }) => theme.texts.error};
  font-size: ${({ theme }) => theme.fontSize.sub2}; ;
`;
