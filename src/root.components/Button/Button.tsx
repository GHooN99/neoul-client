import { forwardRef } from "react";
import { Spinner } from "@components/Spinner";
import { StyledButtonWrapper } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "regular",
      loading = false,
      color = "main",
      disabled = false,
      ...restProps
    },
    ref
  ) => {
    return (
      <StyledButtonWrapper
        size={size}
        color={color}
        ref={ref}
        disabled={loading || disabled}
        {...restProps}
      >
        {loading ? <Spinner size={5} /> : children}
      </StyledButtonWrapper>
    );
  }
);

Button.displayName = "Button";

export default Button;
