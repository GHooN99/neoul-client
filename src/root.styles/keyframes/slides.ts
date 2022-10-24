import { keyframes } from "styled-components";

export const slideUp = keyframes`
from {
  transform: translateY(400px);
}
to {
  transform: translateY(0px);
}
`;

export const slideDown = keyframes`
from {
  transform: translateY(0px);
}
to {
  transform: translateY(400px);
}
`;
export const slideRight = keyframes`
from {
  transform: translateX(-400px);
}
to {
  transform: translateX(0px);
}
`;

export const slideLeft = keyframes`
from {
  transform: translateX(0px);
}
to {
  transform: translateX(-400px);
}
`;
