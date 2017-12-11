import * as b from 'bobril';
import * as colors from '../colors';
import * as fonts from '../fonts';
import { appBarHeight } from './dimensions';

export const rightContainer = b.styleDef({
    cssFloat: 'right'
});

export const leftContainer = b.styleDef({
    cssFloat: 'left'
});

export const appBarStyle = b.styleDef({
    background: colors.color01,
    overflow: 'auto',
    height: appBarHeight,
    zIndex: 500,
    paddingLeft: 120,
    paddingRight: 117
});

export const menuButton = b.styleDef([
    {
        lineHeight: `${appBarHeight}px`,
        marginLeft: '24px',
        color: colors.color04
    },
    fonts.menutext01
]);

export const menuIconButton = b.styleDef({
    lineHeight: `${appBarHeight}px`,
    color: colors.color04
});

export const gitButton = b.styleDef([
    {
        lineHeight: `${appBarHeight}px`,
        color: colors.color04
    },
    fonts.menutext01s
]);

export const buttonStyle = b.styleDef({
    textAlign: 'center',
    cursor: 'pointer'
});
