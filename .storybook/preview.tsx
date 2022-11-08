import React from "react";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { ToastProvider } from "../src/root.components/Toast";
import "../src/root.styles/fonts.css";
import { GlobalStyles } from "../src/root.styles/globalStyles";
import { theme } from "../src/root.styles/theme";

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story />
  </ThemeProvider>
));

export const parameters = {
  backgrounds: {
    default: "dark",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Home", "Colors", "Components", "*"],
    },
  },
  previewTabs: {
    canvas: { hidden: true },
  },
  viewMode: "docs",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
