//#region Imports

import React, { FC, Fragment } from "react";
import InputLabel from "@material-ui/core/InputLabel";

import StyledInput from "./StyledInput";
import StyledSelect from "./StyledSelect";

import COLOR from "../../library/color";
import useStyles from "./styles";

//#endregion

type Props = {
    /**
     * Evento onBlur
     */
    onBlur?: any;
    /**
     * Evento onClick
     */
    onClick?: any;
    /**
     * Evento onChange
     */
    onChange?: any;
    /**
     * Nome do campo
     */
    name?: string;
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
    variant?: "filled" | "standard" | "outlined" | undefined;
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
    onBlur,
    onClick,
    onChange,
    name = "",
    label = "",
    items = [],
    type = "text",
    disabled = false,
    variant = "outlined",
    labelColor = COLOR.WHITE,
    borderColor = COLOR.PRIMARY,
}: Props) => {
    const styles = useStyles(labelColor, borderColor);

    return (
        <Fragment>
            <InputLabel className={styles.label} htmlFor={styles.field}>
                {label}
            </InputLabel>

            {type === "select" ? (
                <StyledSelect
                    label={label}
                    items={items}
                    styles={styles}
                    onBlur={onBlur}
                    onClick={onClick}
                    variant={variant}
                    onChange={onChange}
                    disabled={disabled}
                />
            ) : (
                <StyledInput
                    name={name}
                    type={type}
                    label={label}
                    styles={styles}
                    onBlur={onBlur}
                    variant={variant}
                    onClick={onClick}
                    onChange={onChange}
                    disabled={disabled}
                />
            )}
        </Fragment>
    );
};

export default Field;
