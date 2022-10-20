import { pallete } from "../pallete";

export const shadows = {
  // 25%
  basic: `${pallete.white}5A`,
  // 10%
  thin: `${pallete.gray[100]}1A`,
} as const;

export type Shadows = typeof shadows;
