import { backgrounds, borders, buttons, dims, texts } from "./colors";
import { pallete } from "./pallete";

export const theme = {
  pallete,
  backgrounds,
  texts,
  dims,
  buttons,
  borders,
} as const;

export type Theme = typeof theme;
