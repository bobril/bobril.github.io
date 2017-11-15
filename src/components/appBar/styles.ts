import * as b from 'bobril';
import * as colors from '../colors';

export const height = 60;
export const minWidth = 1200;

export const rightContainer = b.styleDef({
    cssFloat: 'right'
});

export const leftContainer = b.styleDef({
    cssFloat: 'left'
});

export const appBarStyle = b.styleDef({
    background: colors.color01,
    overflow: 'hidden',
    height: `${height}px`,
    minWidth: `${minWidth}px`
});
