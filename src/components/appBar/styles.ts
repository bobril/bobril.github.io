import * as b from 'bobril';
import * as colors from '../colors';
import * as styles from '../styles';
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
    paddingLeft: 30,
    paddingRight: 30
});

export const menuButton = b.styleDef([
    {
        lineHeight: `${appBarHeight}px`,
        marginLeft: '24px',
        color: colors.color04
    },
    styles.menutext01
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
    styles.menutext01s
]);

export const buttonStyle = b.styleDef({
    textAlign: 'center',
    cursor: 'pointer'
});
