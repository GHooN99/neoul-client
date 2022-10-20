import { backgrounds, borders, buttons, dims, texts } from "./colors";
import { shadows } from "./colors/shadows";
import { pallete } from "./pallete";
import { fontSize } from "./texts/fontSize";

export const theme = {
  pallete,
  backgrounds,
  texts,
  dims,
  buttons,
  shadows,
  borders,
  fontSize,
} as const;

export type Theme = typeof theme;
