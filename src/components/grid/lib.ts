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
            children.push(
                b.styledDiv(
                    item,
                    styles.itemStyle,
                    { marginRight: 40 },
                    !(index + 1 === d.items.length) && { marginBottom: 40 }
                )
            );
        });

        me.children = children;
    }
});
