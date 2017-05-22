import * as b from 'bobril';

interface IData {
    children: b.IBobrilChildren[];
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.children =
            d.children.map(item => {
                return b.styledDiv(item, itemStyle)
            });

        b.style(
            me,
            containerStyle
        );
    }
});

export const containerStyle = b.styleDef({
    textAlign: 'center',
    width: '100%',
    margin: 'auto',
    display: 'table'
});

export const itemStyle = b.styleDef({
    width: '30%',
    margin: 'auto',
    display: 'table-cell'
});