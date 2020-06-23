//#region Imports

import React, { Fragment, useState } from 'react';

//#endregion

const Anchor = ({ getElement = null, className = null, id = null }) => {
    const [element, setElement] = useState(null);

    if (getElement) {
        getElement.current = element;
    }

    return (
        <Fragment>
            <div id={id} className={className} ref={(event) => setElement(event)}></div>
        </Fragment>
    );
};

export default Anchor;
