import * as fonts from '../fonts';
import * as b from 'bobril';
import * as colors from '../colors';

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
        height: 45,
        lineHeight: '45px',
        borderRadius: '2px',
        paddingLeft: '42px',
        paddingRight: '42px',
        background: colors.color04,
        color: colors.color01,
        opacity: 1,
        boxShadow:
            '2px 2px 1px rgba(22, 24, 26, 0.15), 0 3px 5px 0 rgba(22, 24, 26, 0.15)',
        marginTop: '327px',
        marginLeft: '-129px'
    },
    fonts.buttontext01,
    centeredPosition
]);

export const whiteButtonHover: b.IBobrilStyleDef = b.styleDef({
    background: colors.color05,
    opacity: 0.94,
    size: '8px',
    boxShadow: '0 0 8px rgba(255,255,255, 0.7)'
});

export const blackButton: b.IBobrilStyleDef = b.styleDef([
    {
        height: 45,
        lineHeight: '45px',
        borderRadius: '2px',
        paddingLeft: '42px',
        paddingRight: '42px',
        background: colors.color01,
        color: colors.color04,
        opacity: 0.95,
        boxShadow:
            '1px 1px 1px rgba(22, 24, 26, 0.3), 0 2px 5px 0 rgba(22, 24, 26, 0.3)',
        marginTop: '327px',
        marginLeft: '129px'
    },
    fonts.buttontext01,
    centeredPosition
]);

export const blackButtonHover: b.IBobrilStyleDef = b.styleDef({
    background: '#474a59',
    opacity: 1,
    size: '8px'
});
