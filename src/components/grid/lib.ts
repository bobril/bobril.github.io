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
        let row: b.IBobrilChildren[] = [];
        let rows = Math.floor(d.items.length / d.columns);
        d.items.forEach((item, index) => {
            let isEnoughtItemsOnLine = (index + 1) % d.columns === 0;
            row.push(
                b.styledDiv(
                    item,
                    styles.itemStyle,
                    !isEnoughtItemsOnLine && { marginRight: 40 }
                )
            );
            if (isEnoughtItemsOnLine) {
                rows--;
                children.push(
                    b.styledDiv(
                        row,
                        styles.rowStyle,
                        rows !== 0 && { marginBottom: 40 }
                    )
                );
                row = [];
            }
        });

        me.children = children;
    }
});
