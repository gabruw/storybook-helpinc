//#region Imports

import { createStyles, makeStyles } from "@material-ui/core/styles";

//#endregion

export const useStyles = (
    width = "",
    height = "",
    margin = "",
    backgroundColor = ""
) => {
    const styles = makeStyles(() =>
        createStyles({
            hr: {
                width: width,
                height: height,
                margin: margin,
                backgroundColor: backgroundColor,
            },
        })
    );

    return styles();
};

export default useStyles;
