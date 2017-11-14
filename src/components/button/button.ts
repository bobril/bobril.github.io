import * as b from 'bobril';

type Function = () => void;

export interface IData {
    style?: b.IBobrilStyleDef;
    hoverStyle?: b.IBobrilStyleDef;
    fontStyle?: b.IBobrilStyleDef;
    color?: string;
    content: string;
    onClick: Function;
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
            ctx.data.style,
            {
                background: ctx.data.color,
                cursor: 'pointer'
            },
            ctx.data.hover && { background: 'green' }
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