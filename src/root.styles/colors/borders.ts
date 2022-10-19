import { pallete } from "../pallete";

export const borders = {
  focused: pallete.blue,
  error: pallete.red,
} as const;

export type Borders = typeof borders;
