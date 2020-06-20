//#region Imports

import FONTS from '../fonts/fonts';

//#endregion

export const LABEL_STYLES = (labelColor) => {
    return {
        color: labelColor,
        ...FONTS.HelveticaNeueLTProMD,
    };
};

export default LABEL_STYLES;
