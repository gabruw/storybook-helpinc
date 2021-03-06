//#region Imports

import React, { FC } from "react";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

//#endregion

type Props = {
    /**
     * Atributo que modificará o texto do botão
     */
    text: string;
    /**
     * Atributo que modificará a cor do texto do botão
     */
    color?: string;
    /**
     * Atributo que modificará a cor de fundo do botão
     */
    backgroundColor?: string;
};

export const StyledButton: FC<Props> = ({
    text,
    color = "#FFFFFF",
    backgroundColor = "#343434",
}: Props) => {
    const styles = useStyles(color, backgroundColor);

    return <Button className={styles.button}>{text}</Button>;
};

export default StyledButton;
