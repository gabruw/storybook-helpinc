//#region Imports

import { FC, useEffect, useState } from "react";

//#endregion

type Props = {
    /**
     * O tempo de atraso na renderização
     */
    time?: number;
    /**
     * O componente a sofrer o atraso
     */
    children: any;
};

const Delayed: FC<Props> = ({ children, time = 500 }: Props) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsShown(true);
        }, time);

        return () => clearTimeout(timeOut);
    }, [time]);

    return isShown ? children : null;
};

export default Delayed;
