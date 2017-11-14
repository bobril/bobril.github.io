import * as b from 'bobril';

export interface IButtonStyles {
    style: b.IBobrilStyleDef;
    hoverStyle?: b.IBobrilStyleDef;
}

export enum ButtonVariants {
    normal,
    white
}

// demonstarce jak pridat novy typ buttonu
let whiteButtonStyle = b.styleDef({
    height: '45px',
    width:  '150px',
    borderRadius: '2px',
    background: 'gray',
    textAlign: 'center',
});

let whiteButtonStyleHover = b.styleDef({
    background: 'white'
});
