import * as b from 'bobril';
import * as styles from './styles';
import * as m from 'bobril-m';

const zDepthHeader = 2;

interface IData {
    header?: b.IBobrilChildren;
    content: b.IBobrilChildren;
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
            d.header && m.Paper({
                zDepth: zDepthHeader,
                children: b.styledDiv(d.header, styles.header)
            }),
            d.content && b.styledDiv(
                d.content,
                styles.content,
            ),
            d.footer && b.styledDiv(d.footer, styles.footer)
        ];

        b.style(
            me,
            styles.basicLayout,
            d.backgroundColor && {background: d.backgroundColor}
        );
    }
});