import * as b from 'bobril';
import * as colors from './colors';

let size75 = 0.75;
let size0 = 0;

export const menutext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}px`,
    fontSize: '17px',
    fontWeight: '600'
});

export const menutext01s: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}px`,
    fontSize: '16px',
    fontWeight: '600'
});

export const menutext01b: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size0}px`,
    fontSize: '18px',
    fontWeight: '600'
});

export const menutext02: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}px`,
    fontSize: '15px',
    fontWeight: '700'
});

export const headertext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}px`,
    fontSize: '34px',
    fontWeight: '600'
});

export const headertext02: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}px`,
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '24px'
});

export const buttontext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}px`,
    fontSize: '17px',
    fontWeight: '700'
});

export const paragtext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}px`,
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '22px'
});

export const smalltext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size0}px`,
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '17px'
});

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
        paddingTop: '17px',
        paddingBottom: '16px',
        borderRadius: '2px',
        background: colors.color04,
        opacity: 0.7,
        color: colors.color01,
        boxShadow:
            '4px 4px 2px rgba(22, 24, 26, 0.15), 0 6px 20px 0 rgba(22, 24, 26, 0.9)',
        marginTop: '357px',
        marginLeft: '-115px'
    },
    buttontext01,
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
        paddingTop: '17px',
        paddingBottom: '16px',
        borderRadius: '2px',
        background: colors.color01,
        opacity: 0.95,
        color: colors.color04,
        boxShadow:
            '4px 4px 2px rgba(22, 24, 26, 0.3), 0 6px 20px 0 rgba(22, 24, 26, 0.9)',
        marginTop: '357px',
        marginLeft: '115px'
    },
    buttontext01,
    centeredPosition
]);

export const blackButtonHover: b.IBobrilStyleDef = b.styleDef({
    background: colors.color01,
    opacity: 1,
    size: '8px'
});

export const introPageIsAComponentText: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color04,
        marginTop: '235px'
    },
    headertext02,
    centeredPosition
]);

export const introPageBobrilText: b.IBobrilStyleDef = b.styleDef([
    {
        color: colors.color04,
        marginTop: '172px'
    },
    headertext01,
    centeredPosition
]);
