import { forwardRef } from "react";
import { StyledButtonWrapper } from "./Button.styled";
import { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      loading = false,
      icon,
      color = "cyan",
      ...restProps
    },
    ref
  ) => {
    return (
      <StyledButtonWrapper
        color={color}
        variant={variant}
        ref={ref}
        {...restProps}
      >
        {loading ?? "loading"}
        {icon ?? ""}
        {children}
      </StyledButtonWrapper>
    );
  }
);

Button.displayName = "Button";

export default Button;
