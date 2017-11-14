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

let normalButtonStyle = b.styleDef({
    width: '50px',
    height: '50px',
    background: 'red'
});

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

let normalButtonStyleHover = b.styleDef({
    background: 'green'
});

export let ButtonsStyleMap: Map<ButtonVariants, IButtonStyles> = new Map();

ButtonsStyleMap.set(ButtonVariants.normal, {
    style: normalButtonStyle,
    hoverStyle: normalButtonStyleHover
});
ButtonsStyleMap.set(ButtonVariants.white, {
    style: whiteButtonStyle,
    hoverStyle: whiteButtonStyleHover
});
