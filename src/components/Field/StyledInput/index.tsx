//#region Imports

import React, { Fragment } from "react";

import TextField from "@material-ui/core/TextField";
import { useClasses } from "../styles";

//#endregion

type Props = {
    /**
     * Nome do campo
     */
    name?: string;
    /**
     * Evento onBlur
     */
    onBlur?: any;
    /**
     * Estilos do campo
     */
    styles?: any;
    /**
     * Evento onClick
     */
    onClick?: any;
    /**
     * Evento onChange
     */
    onChange?: any;
    /**
     * Tipo do campo
     */
    type?: string;
    /**
     * Texto da label do campo
     */
    label?: string;
    /**
     * Condição para tornar o campo desabilitado
     */
    disabled?: boolean;
    /**
     * Tipo primário do campo
     */
    variant?: any;
};

const StyledInput = ({
    name,
    type,
    label,
    onBlur,
    styles,
    onClick,
    variant,
    disabled,
    onChange,
}: Props) => {
    const classes = useClasses();

    return (
        <Fragment>
            <TextField
                className={styles.field}
                type={type}
                name={name}
                size={"small"}
                variant={variant}
                disabled={disabled}
                placeholder={label}
                InputProps={classes}
                onBlur={() => onBlur && onBlur()}
                onClick={() => onClick && onClick()}
                onChange={() => onChange && onChange()}
            />
        </Fragment>
    );
};

export default StyledInput;
