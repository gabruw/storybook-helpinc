//#region Imports

import { create } from "@storybook/theming/create";
import logo from "../src/assets/images/logo.jpg";

//#endregion

export default create({
    // General
    base: "light",
    colorPrimary: "#343434",
    colorSecondary: "#488991",

    // UI
    appBg: "#eff2f5",
    appBorderRadius: 4,
    appContentBg: "#F8F8F8",
    appBorderColor: "#488991",

    // Typography
    fontCode: "monospace",
    fontBase: '"Open Sans", sans-serif',

    // Text
    textColor: "#343434",
    textInverseColor: "#FFFFFF",

    // Toolbar
    barBg: "#343434",
    barTextColor: "#FFFFFF",
    barSelectedColor: "#78CCD6",

    // Form
    inputBg: "#FFFFFF",
    inputBorderRadius: 4,
    inputBorder: "#C0C0C0",
    inputTextColor: "#000000",

    // Header
    brandImage: logo,
    brandTitle: "Help Inc. UI",
    brandUrl: "http://localhost:13666/",
});
