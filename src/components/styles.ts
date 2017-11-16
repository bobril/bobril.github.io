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

export const centeredPosition: b.IBobrilStyleDef = b.styleDef({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
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


