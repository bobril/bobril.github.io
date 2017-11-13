import * as b from 'bobril';
import * as m from 'bobril-m';

export const height = 64;

export const appBar = b.styleDef({
    background: m.primary2Color(),
    overflow: 'hidden',
    height: height,
    paddingLeft: 16,
    paddingRight: 16
});

export const buttonsContainer = b.styleDef({
    cssFloat: 'left',
});

export const rightButtonsContainer = b.styleDef({
    cssFloat: 'right',
});

export const button = b.styleDef(
    {
        cssFloat: 'left',
    }, {
        hover: {
            color: m.white
        }
    }
);

export const rightButton = b.styleDef(
    {
        cssFloat: 'left',
    }, {
        hover: {
            color: m.white
        }
    }
);