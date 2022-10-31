import { StyledTypography } from "./Typography.styled";
import {
  type TypographyProps,
  type VariantType,
  variantMap,
} from "./Typography.types";

const Typography = <T extends VariantType = "main">({
  variant,
  align,
  children,
  weight = "normal",
  ...restProps
}: TypographyProps<T>) => {
  return (
    /**
     * TS styled-components as props issue
     *  @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30117
     * */
    // eslint-disable-next-line
    // @ts-ignore
    <StyledTypography
      align={align}
      weight={weight}
      as={variantMap[variant]}
      variant={variant}
      {...restProps}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
