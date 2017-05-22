import * as b from 'bobril';

export interface Item {
    children: b.IBobrilChildren;
}
interface IData {
    items: Item[];
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.children = [
            d.items.map(item => {
                return b.styledDiv(item.children, itemStyle)
            })
        ];

        b.style(me, itemsContainerStyle);
    }
});

export const itemsContainerStyle = b.styleDef({
    textAlign: 'left',
    paddingLeft: 16
});

export const itemStyle = b.styleDef({
    marginTop: 8
});