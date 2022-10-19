import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Buttons } from "@styles/colors/buttons";

type ButtonType = "primary" | "secondary" | "text";
type color = keyof Buttons;

export interface BaseButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "color"> {
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
}

export interface ButtonStyleProps {
  /**
   * 버튼의 사이즈를 지정합니다.
   */
  // size?: ButtonSize

  /**
   * 버튼의 full width 여부를 지정합니다.
   */
  fullWidth?: boolean;

  /**
   * 버튼의 메인 색을 지정합니다.
   * varient에 따라 배경 혹은 텍스트의 색이 됩니다.
   * @defaultValue "blue"
   */
  color?: color;

  /**
   * 버튼의 타입을 지정합니다.
   */
  variant?: ButtonType;
}

export interface ButtonProps extends BaseButtonProps, ButtonStyleProps {}
