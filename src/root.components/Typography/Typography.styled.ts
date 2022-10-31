import styled, { css } from "styled-components";
import type {
  TypographyProps,
  VariantCSSMap,
  VariantType,
} from "./Typography.types";

/**
 * @Todo Refactor css theme
 * 복붙이 더 빨랐음
 */
const variantCSSMap: VariantCSSMap = {
  h2: css`
    ${({ theme }) => css`
      font-size: ${theme.fontSize.h2};
    `}
  `,
  h3: css`
    ${({ theme }) => css`
      font-size: ${theme.fontSize.h3};
    `}
  `,
  main: css`
    ${({ theme }) => css`
      font-size: ${theme.fontSize.main};
    `}
  `,
  p: css`
    ${({ theme }) => css`
      font-size: ${theme.fontSize.p};
    `}
  `,
  sub1: css`
    ${({ theme }) => css`
      font-size: ${theme.fontSize.sub1};
      color: ${theme.texts.sub};
    `}
  `,
  sub2: css`
    ${({ theme }) => css`
      font-size: ${theme.fontSize.sub2};
      color: ${theme.texts.sub};
    `}
  `,
};

export const StyledTypography = styled.div<TypographyProps<VariantType>>`
  display: block;
  color: ${({ theme }) => theme.texts.main};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  ${({ variant }) => variantCSSMap[variant]};
`;
