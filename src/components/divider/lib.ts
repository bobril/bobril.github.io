import * as b from 'bobril';
import * as m from 'bobril-m';

interface IData {
    color?: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        b.style(
            me,
            dividerStyle,
            d.color && {background: d.color}
        );
    }
});

export const dividerStyle = b.styleDef({
    background: m.grey400,
    width: '80%',
    margin: 'auto',
    height: 1,
    marginTop: 24,
    marginBottom: 24
});