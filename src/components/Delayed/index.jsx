//#region Imports

import { useEffect, useState } from 'react';

//#endregion

const Delayed = ({ children, time = 500 }) => {
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
