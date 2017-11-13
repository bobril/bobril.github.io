import * as b from 'bobril';

export const menutext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '75pt',
    fontSize: '17pt',
    fontWeight: '600'
};

export const menutext01s: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '75px',
    fontSize: '17pt',
    fontWeight: '600'
};

export const menutext01b: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '0px',
    fontSize: '18pt',
    fontWeight: '600'
};

export const menutext02: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '75px',
    fontSize: '15pt',
    fontWeight: '700'
};

export const headertext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '75pt',
    fontSize: '34pt',
    fontWeight: '600'
};

export const headertext02: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '75pt',
    fontSize: '20pt',
    fontWeight: '400',
    lineHeight: '24pt'
};

export const buttontext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '75pt',
    fontSize: '34pt',
    fontWeight: '700'
};

export const paragtext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '75px',
    fontSize: '17pt',
    fontWeight: '400',
    lineHeight: '22pt'
};

export const smalltext01: object = {
    fontFamily: 'Segoe UI',
    letterSpacing: '0px',
    fontSize: '14pt',
    fontWeight: '300',
    lineHeight: '17pt'
};

// function to concatenate objects and create style from them 
export function createBobrilStylefromObjects(...styleObjects: object[]) {
    let styleObject = {};
    for (let i = 0; i < styleObjects.length; i++) {
        Object.assign(styleObject, styleObjects[i]);
    }
    console.log(styleObject);
    return b.styleDef(styleObject);
}