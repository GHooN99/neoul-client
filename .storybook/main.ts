const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  stories: [
    "./Welcome.tsx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },

  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/root.components"),
      "@libs": path.resolve(__dirname, "../src/root.libs"),
      "@features": path.resolve(__dirname, "../src/root.features"),
      "@styles": path.resolve(__dirname, "../src/root.styles"),
      "@layouts": path.resolve(__dirname, "../src/root.layouts"),
      "@hooks": path.resolve(__dirname, "../src/root.hooks"),
      "@remotes": path.resolve(__dirname, "../src/root.remotes"),
      "@pages": path.resolve(__dirname, "../src/pages"),
    };

    return config;
  },
};
