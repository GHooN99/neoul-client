import styled from "styled-components";
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
  height: 44px;
`;

export const StyledErrorMessage = styled.span`
  position: absolute;
  align-self: flex-end;
  margin-right: 8px;
  margin-top: 8px;
  color: ${({ theme }) => theme.texts.error};
  font-size: ${({ theme }) => theme.fontSize.sub1}; ;
`;
