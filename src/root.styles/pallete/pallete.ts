export const pallete = {
  white: "#ffffff",
  black: "#000000",
  gray: {
    100: "#F8F9FA",
    200: "#E9ECEF",
    300: "#CED4DA",
    400: "#868E96",
    500: "#343A40",
    600: "#242424",
    700: "#191919",
  },
  green: "#85FA4E",
  red: "#E95656",
  blue: "#2FA3C8",
} as const;

export type Pallete = typeof pallete;
