import * as styles from '../styles';
import * as b from 'bobril';
import * as colors from '../colors';

export const normalButton: b.IBobrilStyleDef = b.styleDef({
    width: '50px',
    height: '50px',
    background: 'red'
});

export const normalButtonHover: b.IBobrilStyleDef = b.styleDef({
    background: 'green'
});

export const buttonStyle: b.IBobrilStyleDef = b.styleDef({
    textAlign: 'center',
    cursor: 'pointer'
});

export const centeredPosition: b.IBobrilStyleDef = b.styleDef({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
});

export const whiteButton: b.IBobrilStyleDef = b.styleDef([
    {
        height: '45px',
        lineHeight: '45px',
        borderRadius: '2px',
        paddingLeft: '17px',
        paddingRight: '16px',
        background: colors.color04,
        opacity: 0.7,
        color: colors.color01,
        boxShadow:
            '4px 4px 2px rgba(22, 24, 26, 0.15), 0 6px 20px 0 rgba(22, 24, 26, 0.9)',
        marginTop: '357px',
        marginLeft: '-133px'
    },
    styles.buttontext01,
    centeredPosition
]);

export const whiteButtonHover: b.IBobrilStyleDef = b.styleDef({
    background: '#ffffff',
    opacity: 1,
    size: '8px'
});

export const blackButton: b.IBobrilStyleDef = b.styleDef([
    {
        height: '45px',
        lineHeight: '45px',
        borderRadius: '2px',
        paddingLeft: '17px',
        paddingRight: '16px',
        background: colors.color01,
        opacity: 0.95,
        color: colors.color04,
        boxShadow:
            '4px 4px 2px rgba(22, 24, 26, 0.3), 0 6px 20px 0 rgba(22, 24, 26, 0.9)',
        marginTop: '357px',
        marginLeft: '133px'
    },
    styles.buttontext01,
    centeredPosition
]);

export const blackButtonHover: b.IBobrilStyleDef = b.styleDef({
    background: colors.color01,
    opacity: 1,
    size: '8px'
});
