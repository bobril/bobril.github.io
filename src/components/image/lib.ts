import * as b from 'bobril';

interface IData {
    asset: string;
    width: string;
    height: string;
    style?: b.IBobrilStyle;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        b.style(
            me,
            {
                backgroundSize: 'contain',
                backgroundImage: `url('${ctx.data.asset}')`,
                width: ctx.data.width,
                height: ctx.data.height,
                margin: 'auto',
                backgroundRepeat: 'no-repeat'
            },
            d.style && d.style
        );
    }
});