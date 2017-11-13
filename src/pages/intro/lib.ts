import * as b from 'bobril';
import * as styles from '../../components/styles';

interface IData {
    leftChildren: b.IBobrilChildren[];
    rightChildren?: b.IBobrilChildren[];
    contentWidth?: number;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createDerivedComponent<IData>(m.Paper, {
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
        ];

        b.style(
            me,
            styles.appBar,
            { background: m.primary2Color() }
        );
    }
});