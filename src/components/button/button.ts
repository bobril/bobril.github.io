import * as b from 'bobril';
import * as Buttons from './buttons';

export interface IData {
    variant: Buttons.ButtonVariants;
    content: string;
    onClick: () => void;
    hover: boolean;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        let styles = Buttons.ButtonsStyleMap.get(ctx.data.variant);

        let hoverStyle =
            styles.hoverStyle !== undefined ? styles.hoverStyle : styles.style;

        me.children = [ctx.data.content];
        b.style(
            me,
            { cursor: 'pointer' },
            styles.style,
            ctx.data.hover && hoverStyle
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
