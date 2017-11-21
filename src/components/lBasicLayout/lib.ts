import * as b from 'bobril';
import * as styles from './styles';

const zDepthHeader = 2;

interface IData {
    header?: b.IBobrilChildren;
    content: b.IBobrilChildren;
    menu?: b.IBobrilChildren;
    footer?: b.IBobrilChildren;
    backgroundColor?: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            d.header &&
                b.styledDiv(d.header, styles.header, d.menu && styles.withMenu),
            d.menu && b.styledDiv(d.menu, styles.menu),
            d.content &&
                b.styledDiv(
                    d.content,
                    styles.content,
                    d.menu && styles.withMenu
                ),
            d.footer &&
                b.styledDiv(d.footer, styles.footer, d.menu && styles.withMenu)
        ];

        b.style(
            me,
            styles.basicLayout,
            d.backgroundColor && { background: d.backgroundColor }
        );
    }
});
