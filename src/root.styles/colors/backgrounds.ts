import { pallete } from "../pallete";

export const backgrounds = {
  base: pallete.gray[700],
  upper: pallete.gray[600],
  skeleton: pallete.gray[500],
} as const;

export type Backgrounds = typeof backgrounds;
