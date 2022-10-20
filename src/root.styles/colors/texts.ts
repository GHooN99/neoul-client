import { pallete } from "../pallete";

export const texts = {
  main: pallete.gray[200],
  sub: pallete.gray[400],
  disabled: pallete.gray[300],
  placeholder: pallete.gray[400],
  dark: pallete.gray[700],
  error: pallete.red,
  success: pallete.green,
  primary: pallete.blue,
} as const;

export type Texts = typeof texts;
