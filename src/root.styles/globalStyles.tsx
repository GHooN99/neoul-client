import { createGlobalStyle } from "styled-components";
import { miniReset } from "./miniReset";

export const GlobalStyles = createGlobalStyle`
  
  ${miniReset}

  
  @font-face {
    font-family: 'NanumSquareRound';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.woff2) format("woff2"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundR.ttf) format("truetype");
    font-weight: 500;
  }

@font-face {
    font-family: 'NanumSquareRound';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.woff2) format("woff2"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundB.ttf) format("truetype");
    font-weight: 600;
  }

@font-face {
    font-family: 'NanumSquareRound';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.woff2) format("woff2"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundEB.ttf) format("truetype");
  font-weight: 800;
  }

@font-face {
    font-family: 'NanumSquareRound';
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.eot);
    src: url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.woff2) format("woff2"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareRound/NanumSquareRoundL.ttf) format("truetype");
    font-weight:300;
  }
  body {
    font-family: 'NanumSquareRound';
    background-color: #191919;
  }
`;
