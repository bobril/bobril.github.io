import * as b from 'bobril';


export interface IButtonStyles {
    style: b.IBobrilStyleDef;
    hoverStyle?: b.IBobrilStyleDef;
}

export enum ButtonVariants{
     normal,
}

// demonstarce jak pridat novy typ buttonu 