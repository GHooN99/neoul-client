import { createGlobalStyle } from "styled-components";
import { miniReset } from "./miniReset";

export const GlobalStyles = createGlobalStyle`
  
  ${miniReset}

  body {
    font-family: 'NanumSquareRound';
    background-color: #292929;
  }
`;
