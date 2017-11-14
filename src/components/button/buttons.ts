import * as b from 'bobril';


export interface IButtonStyles {
    style: b.IBobrilStyleDef;
    hoverStyle?: b.IBobrilStyleDef;
}

export enum ButtonVariants{
     normal,
}

// demonstarce jak pridat novy typ buttonu 

let normalButtonStyle = b.styleDef({
    width: '50px',
    height: '50px',
    background: 'red'
});

let normalButtonStyleHover = b.styleDef({
    background: 'green'
});

export let ButtonsStyleMap: Map<ButtonVariants, IButtonStyles> = new Map();

ButtonsStyleMap.set(ButtonVariants.normal, { style: normalButtonStyle,hoverStyle: normalButtonStyleHover });
