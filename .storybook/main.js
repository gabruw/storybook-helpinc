const PATH = require("path");

module.exports = {
    stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-controls",
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-jest",
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
            },
        },
        {
            name: "@storybook/addon-storysource",
            options: {
                rule: {
                    test: [/\.stories\.(ts|tsx|js|jsx|mdx)?$/],
                    include: PATH.resolve(__dirname, "../src"),
                },
                loaderOptions: {
                    prettierConfig: {
                        printWidth: 80,
                        singleQuote: false,
                    },
                },
            },
        },
    ],
};
