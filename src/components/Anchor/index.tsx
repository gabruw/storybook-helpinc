//#region Imports

import React, { FC, Fragment, useState } from "react";

//#endregion

type Props = {
    /**
     * Referência do elemento Anchor
     */
    getElement?: any;
    /**
     * Nome da classe
     */
    className: string;
    /**
     * Nome do id
     */
    id: string;
};

const Anchor: FC<Props> = ({
    id = "",
    className = "",
    getElement = null,
}: Props) => {
    const [element, setElement] = useState(null);

    if (getElement) {
        getElement.current = element;
    }

    return (
        <Fragment>
            <div
                id={id}
                className={className}
                ref={(event) => setElement(event)}
            ></div>
        </Fragment>
    );
};

export default Anchor;
