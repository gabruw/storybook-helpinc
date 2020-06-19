//#region Imports

import { createStyles, makeStyles } from "@material-ui/core/styles";

//#endregion

export const useStyles = (color = "", backgroundColor = "") => {
    const styles = makeStyles(() =>
        createStyles({
            button: {
                color: color,
                background: backgroundColor,
            },
        })
    );

    return styles();
};

export default useStyles;
