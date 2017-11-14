import * as b from 'bobril';
import * as colors from '../colors';

export const height = 60;
export const width = 1200;

export const appBar = b.styleDef({
    background: colors.color01,
    overflow: 'hidden',
    height: height,
    width: width,
});

export const gitButton = b.styleDef({
    cssFloat: 'right'
}) 

export const menuButtonContainer = b.styleDef({
    cssFloat: 'left'
})