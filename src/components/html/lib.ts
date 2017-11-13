import * as b from 'bobril';

interface IData {
    html: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    contentHeight: number;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = {
            tag: '/',
            children: ctx.data.html
        };
    }
});