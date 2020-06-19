//#region Imports

import React, { FC } from "react";

import useStyles from "./styles";

//#endregion

type Props = {
    /**
     * Atributo que modificará a largura do separador
     */
    width?: string;
    /**
     * Atributo que modificará a espessura do separador
     */
    height?: string;
    /**
     * Atributo que modificará a margem do separador
     */
    margin?: string;
    /**
     * Atributo que modificará a cor do separador
     */
    backgroundColor?: string;
};

export const Separator: FC<Props> = ({
    width = "100%",
    height = "2px",
    margin = "20px 10px",
    backgroundColor = "#343434",
}: Props) => {
    const styles = useStyles(width, height, margin, backgroundColor);

    return <hr className={styles.hr} />;
};

export default Separator;
