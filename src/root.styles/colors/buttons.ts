import { pallete } from "../pallete";

export const buttons = {
  main: pallete.blue,
  gray: pallete.gray[400],
  white: pallete.gray[300],
};

export const presseds = {
  // 15%
  light: `${pallete.white}26`,
  // 5%
  dark: `${pallete.gray[700]}0D`,
} as const;

export type Buttons = typeof buttons;
export type Presseds = typeof presseds;
