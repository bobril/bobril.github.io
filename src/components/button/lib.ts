import * as b from 'bobril';
import * as styles from './styles';

export interface IData {
    variant: ButtonVariants;
    content: b.IBobrilChildren;
    onClick: () => void;
    hover: boolean;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export enum ButtonVariants {
    white,
    black
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [ctx.data.content];
        b.style(
            me,
            styles.buttonStyle,

            ctx.data.variant === ButtonVariants.white && styles.whiteButton,
            ctx.data.variant === ButtonVariants.white &&
                ctx.data.hover &&
                styles.whiteButtonHover,

            ctx.data.variant === ButtonVariants.black && styles.blackButton,
            ctx.data.variant === ButtonVariants.black &&
                ctx.data.hover &&
                styles.blackButtonHover
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
