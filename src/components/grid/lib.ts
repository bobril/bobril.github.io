import * as b from 'bobril';
import * as styles from './styles';

export interface IData {
    items: b.IBobrilChildren[];
    columns: number;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        let d = ctx.data;
        let children: b.IBobrilChildren[] = [];

        d.items.forEach((item, index) => {
            let isEnoughtItemsOnLine = (index + 1) % d.columns === 0;
            children.push(b.styledDiv(item, styles.itemStyle));
            if (isEnoughtItemsOnLine)
                children.push(b.createElement('br', null));
        });

        me.children = children;
    }
});
