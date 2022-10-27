import { createGlobalStyle } from "styled-components";
import { miniReset } from "./miniReset";

export const GlobalStyles = createGlobalStyle`
  
  ${miniReset}

  html,body {
    font-family: 'NanumSquareRound';
    background-color: #292929;
    height: 100%;
  }
  #__next{
    height: 100%;
  }
`;
