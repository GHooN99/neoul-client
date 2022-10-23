import type { ComponentPropsWithoutRef } from "react";

export type InputSize = "small" | "regular";

export interface BaseInputProps extends ComponentPropsWithoutRef<"input"> {
  /**
   * 인풋이 에러 상태일때의 에러메시지를 지정합니다.
   */
  errorMessage?: string;
}

export interface InputStyleProps {
  // /**
  //  * 인풋의 사이즈를 지정합니다.
  //  * @defaultValue "regular"
  //  */
  // size?: InputSize;

  /**
   * 인풋의 에러 상태를 지정합니다.
   * @defaultValue {false}
   */
  hasError?: boolean;

  /**
   * 인풋의 full width 여부를 지정합니다.
   */
  fullWidth?: boolean;
}

export interface InputProps extends BaseInputProps, InputStyleProps {}
