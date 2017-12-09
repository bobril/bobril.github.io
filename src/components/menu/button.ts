import * as b from 'bobril';
import * as menuStyles from './styles';

export interface IData {
    hover: boolean;
    content: b.IBobrilChildren;
    onClick: () => void;
    isActive?: boolean;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [ctx.data.content];
        b.style(
            me,
            menuStyles.buttonStyle,
            ctx.data.hover && menuStyles.buttonHoverStyle,
            !ctx.data.hover && ctx.data.isActive && menuStyles.buttonActiveStyle
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
