import * as b from 'bobril';

interface IData {
    label: b.IBobrilChildren[] | b.IBobrilChildren;
    style?: b.IBobrilStyle;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = d.label;

        b.style(
            me,
            d.style && d.style
        );
    }
});