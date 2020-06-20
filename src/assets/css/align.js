export const ALIGN_STYLES = {
    LEFT: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    CENTER: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    RIGHT: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    START: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    END: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    IMAGE_CENTER: (image) => ({
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${image})`,
    }),
};

export default ALIGN_STYLES;
