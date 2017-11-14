import * as b from 'bobril';

let size75 = 0.75;
let size0 = 0;

export const menutext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '17pt',
    fontWeight: '600'
};

export const menutext01s: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '17pt',
    fontWeight: '600'
};

export const menutext01b: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size0}pt`,
    fontSize: '18pt',
    fontWeight: '600'
};

export const menutext02: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '15pt',
    fontWeight: '700'
};

export const headertext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '34pt',
    fontWeight: '600'
};

export const headertext02: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '20pt',
    fontWeight: '400',
    lineHeight: '24pt'
};

export const buttontext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '34pt',
    fontWeight: '700'
};

export const paragtext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size75}pt`,
    fontSize: '17pt',
    fontWeight: '400',
    lineHeight: '22pt'
};

export const smalltext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: `${size0}pt`,
    fontSize: '14pt',
    fontWeight: '300',
    lineHeight: '17pt'
};

export const normalButton = b.styleDef({
    width: '50px',
    height: '50px',
    background: 'red'
});

export const normalButtonHover = b.styleDef({
    background: 'green'
});