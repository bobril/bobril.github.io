import * as b from 'bobril';
import * as colors from '../colors';
import * as styles from '../styles';

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
    minWidth: `${minWidth}px`,

});

export const menuButton = b.styleDef([
    {
        lineHeight: `${height}px`,
        marginLeft: '24px',
        color: colors.color04
    },
    styles.menutext01
]);

export const menuIconButton = b.styleDef({
    lineHeight: `${height}px`,
    color: colors.color04
});

export const gitButton = b.styleDef([
    {
        lineHeight: `${height}px`,
        color: colors.color04
    },
    styles.menutext01s
]);

export const buttonStyle = b.styleDef({
    textAlign: 'center',
    cursor: 'pointer'
});
