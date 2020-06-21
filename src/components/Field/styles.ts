//#region Imports

import { createStyles, makeStyles } from "@material-ui/core/styles";

import COLOR from "../../library/color";
import LABEL_STYLES from "../../assets/css/label";

//#endregion

export const useStyles = (labelColor = "", borderColor = "") => {
    const label = LABEL_STYLES(labelColor);

    const styles = makeStyles(() =>
        createStyles({
            label: label,
            field: {
                width: "100%",
                height: "40px",
                border: "3px solid",
                color: COLOR.SECONDARY,
                borderColor: borderColor,
                backgroundColor: COLOR.LIGHT_GRAY,
            },
            notchedOutline: {
                borderWidth: "1px",
                borderColor: "transparent !important",
            },
        })
    );

    return styles();
};

export const useClasses = () => {
    const styles = useStyles();
    const classes = {
        classes: {
            notchedOutline: styles.notchedOutline,
        },
    };

    return classes;
};

export default useStyles;
