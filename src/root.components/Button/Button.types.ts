import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Buttons } from "@styles/colors/buttons";

type color = keyof Buttons;
export type ButtonSize = "small" | "regular";

export interface BaseButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color"> {
  children: ReactNode;
  loading?: boolean;
}

export interface ButtonStyleProps {
  /**
   * 버튼의 사이즈를 지정합니다.
   * @defaultValue "regular"
   */
  size?: ButtonSize;

  /**
   * 버튼의 full width 여부를 지정합니다.
   */
  fullWidth?: boolean;

  /**
   * 버튼의 메인 색을 지정합니다.
   * @defaultValue "main"
   */
  color?: color;
}

export interface ButtonProps extends BaseButtonProps, ButtonStyleProps {}
