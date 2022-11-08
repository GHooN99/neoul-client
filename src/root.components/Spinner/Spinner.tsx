import { StyledSpinner } from "./Spinner.styled";
import type { SpinnerProps } from "./Spinner.types";

const Spinner = ({ size }: SpinnerProps) => {
  return <StyledSpinner size={size} />;
};

export default Spinner;
