//#region Imports

import { createStyles, makeStyles } from "@material-ui/core/styles";

import COLOR from "../../library/color";
import ALIGN_STYLES from "../../assets/css/align";
import LABEL_STYLES from "../../assets/css/label";

//#endregion

export const useStyles = (labelColor = "", borderColor = "") => {
    const label = LABEL_STYLES(labelColor);

    const styles = makeStyles(() =>
        createStyles({
            label: label,
            labelError: {
                color: "#9F3A38",
            },
            field: {
                width: "100%",
                height: "40px",
                border: "3px solid",
                color: COLOR.SECONDARY,
                borderColor: borderColor,
                backgroundColor: COLOR.LIGHT_GRAY,
            },
            fieldError: {
                color: "#B66A6B",
                borderColor: "#B66A6B",
                backgroundColor: "#FFF6F6",
                "&:focus-within": {
                    borderColor: "#D62D2D",
                },
            },
            notchedOutline: {
                borderWidth: "1px",
                borderColor: "transparent !important",
            },
            error: {
                color: "#DB4040",
                fontWeight: "bold",
                ...ALIGN_STYLES.RIGHT,
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
