const ReactDocgenTypescriptPlugin =
  require("react-docgen-typescript-plugin").default;

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: true,
        backgrounds: true,
        controls: false,
        docs: false,
        viewport: true,
        toolbars: true,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: "@storybook/react",
  plugins: [new ReactDocgenTypescriptPlugin()],
};
