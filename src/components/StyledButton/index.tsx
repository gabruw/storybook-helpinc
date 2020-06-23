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
/**
 *Ajustes para disciplina de GCM
 *Criar componente StyledButton
 *Criar esquema de cores primários para o componente StyledButton
 *Criar propriedade de onClick
 * Criar esquema de cores primários para o componente StyledButton
 * Criar propriedades do componente Field
**/
export default StyledButton;
