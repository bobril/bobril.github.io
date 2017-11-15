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

export const normalButton = b.styleDef({
    width: '50px',
    height: '50px',
    background: 'red'
});

export const normalButtonHover = b.styleDef({
    background: 'green'
});

export const buttonStyle = b.styleDef({
    textAlign: 'center',
    cursor: 'pointer',
});

export const menuButton = b.styleDef({
    lineHeight: '60px',
    marginLeft: '24px',
    color: colors.color04
});

export const menuIconButton = b.styleDef({
    lineHeight: '60px',
    color: colors.color04
});

export const gitButton = b.styleDef({
    lineHeight: '60px',
    color: colors.color04
});

export const whiteButton = b.styleDef({
    height: '45px',
   
    paddingTop: '17px',
    paddingBottom: '16px',
    borderRadius: '2px',
    background: colors.color04,
    color: colors.color01,
    boxShadow: '0 1px 6px rgba(22, 24, 26, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.9)',
    // [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]
});

export const whiteButtonHover = b.styleDef({
    background: '#ffffff',
    opacity: 0.3,
    size: '8px'
});
