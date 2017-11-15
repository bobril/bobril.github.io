import * as b from 'bobril';
import * as Buttons from './buttons';
import * as styles from '../styles';

export interface IData {
    variant: Buttons.ButtonVariants;
    content: b.IBobrilChildren;
    onClick: () => void;
    hover: boolean;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [ctx.data.content];        
        b.style(
            me,
            styles.buttonStyle,
            ctx.data.variant === Buttons.ButtonVariants.normal &&
                styles.normalButton,
            ctx.data.variant === Buttons.ButtonVariants.normal &&
                ctx.data.hover &&
                styles.normalButtonHover,

            ctx.data.variant === Buttons.ButtonVariants.white &&
                styles.whiteButton,
            ctx.data.variant === Buttons.ButtonVariants.white &&
                ctx.data.hover &&
                styles.whiteButtonHover,
            ctx.data.variant === Buttons.ButtonVariants.white &&
                styles.buttontext01,

            ctx.data.variant === Buttons.ButtonVariants.black &&
                styles.blackButton,
            ctx.data.variant === Buttons.ButtonVariants.black &&
                ctx.data.hover &&
                styles.blackButtonHover,
            ctx.data.variant === Buttons.ButtonVariants.black &&
                styles.buttontext01,



        );
    },

    onClick(ctx: IContext): boolean {
        if (ctx.data.onClick) {
            ctx.data.onClick();
            return true;
        }
        return false;
    },

    onMouseEnter(ctx: IContext) {
        ctx.data.hover = true;
        b.invalidate(ctx);
    },

    onMouseLeave(ctx: IContext) {
        ctx.data.hover = false;
        b.invalidate(ctx);
    }
});
