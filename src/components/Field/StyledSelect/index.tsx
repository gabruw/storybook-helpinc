//#region Imports

import React, { Fragment } from "react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import { useClasses } from "../styles";

//#endregion

interface ItemsType {
    title: string;
}

type Props = {
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
     * Array de opções a serem exibidas no campo
     */
    items?: [];
    /**
     * Condição para tornar o campo desabilitado
     */
    disabled?: boolean;
    /**
     * Tipo primário do campo
     */
    variant?: any;
};

const StyledSelect = ({
    label,
    items,
    styles,
    onBlur,
    onClick,
    variant,
    disabled,
    onChange,
}: Props) => {
    const classes = useClasses();
    const haveItems = items && items.length > 0;

    return (
        <Fragment>
            <Autocomplete
                className={styles.field}
                size={"small"}
                options={items as ItemsType[]}
                disabled={!haveItems || disabled}
                onBlur={() => onBlur && onBlur()}
                onClick={() => onClick && onClick()}
                onChange={() => onChange && onChange()}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        InputProps={{
                            ...params.InputProps,
                            ...classes,
                        }}
                        variant={variant}
                        placeholder={label}
                    />
                )}
            />
        </Fragment>
    );
};

export default StyledSelect;
