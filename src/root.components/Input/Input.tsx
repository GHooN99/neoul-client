import { forwardRef } from "react";
import {
  StyledErrorMessage,
  StyledInput,
  StyledInputWrapper,
} from "./Input.styled";
import { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      hasError = false,
      errorMessage = "",
      fullWidth = false,
      style,
      className,
      ...restProps
    },
    ref
  ) => {
    return (
      <StyledInputWrapper
        style={style}
        className={className}
        fullWidth={fullWidth}
      >
        <StyledInput hasError={hasError} ref={ref} {...restProps} />
        {hasError && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      </StyledInputWrapper>
    );
  }
);

Input.displayName = "Input";

export default Input;
