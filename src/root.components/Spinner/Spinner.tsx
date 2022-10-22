import styled from "styled-components";

interface SpinnerProps {
  /**
   * 스피너의 크기를 지정합니다.
   * @notice 적정크기: 5
   */
  size: number;
}

/**
 * LoadingSpinner
 * @from https://projects.lukehaas.me/css-loaders/
 * @prop {number} size 적정 크기: 5
 */
const Spinner = styled.div<SpinnerProps>`
  &,
  &:after {
    border-radius: 50%;
    width: 5em;
    height: 5em;
  }
  font-size: ${({ size }) => size}px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.5em solid rgba(255, 255, 255, 0.2);
  border-right: 0.5em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);
  border-left: 0.5em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
