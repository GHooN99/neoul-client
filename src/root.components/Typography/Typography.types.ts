import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { css } from "styled-components";
import type { Combine, ValueOf } from "@libs/types/utilTypes";
import type { FontSize } from "@styles/texts/fontSize";

export const variantMap = {
  h2: "h2",
  h3: "h3",
  p: "p",
  main: "span",
  sub1: "span",
  sub2: "span",
} as const;

export type VariantType = Exclude<keyof FontSize, "input">;
export type VariantMap = typeof variantMap;
export type VariantElementType = ValueOf<VariantMap>;

const cssType = css<TypographyProps<VariantType>>``;
export type VariantCSSMap = Record<VariantType, typeof cssType>;

/**
 * interface x
 */
export type BaseTypographyProps<T extends VariantType = "main"> = {
  /**
   * 텍스트의 내용을 설정합니다.
   */
  children: ReactNode;
  /**
   * 텍스트의 굵기를 설정합니다.
   */
  weight?: "bold" | "normal" | "lighter";
  /**
   * 텍스트의 정렬 위치를 선택합니다.
   */
  align?: "left" | "right" | "center";
  /**
   * 텍스트의 종류를 지정합니다
   */
  variant: T;
};

export type TypographyProps<T extends VariantType = "main"> = Combine<
  BaseTypographyProps<T>,
  ComponentPropsWithoutRef<VariantMap[T]>
>;
