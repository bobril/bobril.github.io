import * as b from 'bobril';

interface IData {
    children: b.IBobrilChildren[];
    style?: b.IBobrilStyle;
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
            containerStyle,
            d.style && d.style
        );
    }
});

export const containerStyle = b.styleDef({
    textAlign: 'center',
    width: '100%',
    margin: 'auto',
    overflow: 'auto'
});

export const itemStyle = b.styleDef({
    width: '33.3%',
    margin: 'auto',
    cssFloat: 'left'
});