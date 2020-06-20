//#region Imports

import React, { FC, Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";

import COLOR from "../../library/color";
import useStyles from "./styles";

//#endregion

type Props = {
    /**
     * Texto da label do campo
     */
    label?: string;
    /**
     * Cor da label do campo
     */
    labelColor?: string;
    /**
     * Cor da borda do campo
     */
    borderColor?: string;
};

export const Field: FC<Props> = ({
    label = "",
    labelColor = COLOR.WHITE,
    borderColor = COLOR.PRIMARY,
}: Props) => {
    const styles = useStyles(labelColor, borderColor);

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>
        </Fragment>
    );
};

export default Field;
