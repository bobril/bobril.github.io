import * as b from 'bobril';
import * as colors from '../colors';
import * as styles from '../styles';

export const width = 240;
export const imgHeight = 113;

export const foregroundColor = colors.color04;

export const menuStyle = b.styleDef({
    height: '100vh',
    width: width,
    background: colors.color03
});

export const buttonStyle = b.styleDef([
    {
        textAlign: 'center',
        cursor: 'pointer',
        opacity: 1,
        color: colors.color01,
        background: foregroundColor
    },
    styles.menutext02
]);

export const buttonHoverStyle = b.styleDef({
    opacity: 1,
    color: colors.color03
});

export const buttonActiveStyle = b.styleDef({
    opacity: 1,
    color: colors.color03
});

export const imgStyle = b.styleDef({
    width: width,
    height: imgHeight,
    background: foregroundColor
});
