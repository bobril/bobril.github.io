import * as b from 'bobril';

interface IData {
    children: b.IBobrilChildren;
    maxWidth?: number;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [d.children];

        b.style(me, lCenterStyle, d.maxWidth && { maxWidth: d.maxWidth });
    }
});

export const lCenterStyle = b.styleDef({
    margin: 'auto'
});
