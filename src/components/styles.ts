import * as b from 'bobril';
import * as Colors from './colors';

let size75 = 0.75;
let size0 = 0;

export const menutext01enutext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '17pt',
    fontWeight: '600'
});

export const menutext01s: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '17pt',
    fontWeight: '600'
});

export const menutext01b: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size0}pt`,
    fontSize: '18pt',
    fontWeight: '600'
});

export const menutext02: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '15pt',
    fontWeight: '700'
});

export const headertext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '34pt',
    fontWeight: '600'
});

export const headertext02: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '20pt',
    fontWeight: '400',
    lineHeight: '24pt'
});

export const buttontext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '17pt',
    fontWeight: '700'
});

export const paragtext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '17pt',
    fontWeight: '400',
    lineHeight: '22pt'
});

export const smalltext01: b.IBobrilStyleDef = b.styleDef({
    fontFamily: 'Segoe UI',
    letterSpacing: `${size0}pt`,
    fontSize: '14pt',
    fontWeight: '300',
    lineHeight: '17pt'
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
    display: 'inline-block',
    textAlign: 'center'
});

export const whiteButton = b.styleDef({
    height: '45px',
    background: Colors.color04,
    color: Colors.color01,
    shadow: '#16181a',
    opacity: 0.15,
    distance: '2px',
    spread: 0,
    size: '4px',

});

export const whiteButtonHover = b.styleDef({
    background: '#ffffff',
    opacity: 0.3,
    spread: '0',
    size: '8px'
});
