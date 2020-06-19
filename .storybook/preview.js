//#region Imports

import React from "react";
import { addDecorator } from "@storybook/react";
import { StylesProvider } from "@material-ui/styles";
import { withThemes } from "storybook-addon-themes";

import "../src/assets/css/global.css";

//#endregion

const StylesDecorator = (storyFn) => (
    <StylesProvider injectFirst>{storyFn()}</StylesProvider>
);

addDecorator(withThemes);
addDecorator(StylesDecorator);
