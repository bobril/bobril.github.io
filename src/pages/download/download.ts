import * as b from 'bobril';
import * as downloadTable from './downloadTable/lib';
import * as styles from './styles';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            Label.create({
                label: 'DOWNLOAD',
                size: Label.LabelSize.HeaderText01,
                style: styles.downloadLabelStyle
            }),

            downloadTable.create(),

            Paragraph.create({
                content: ``,
                style: styles.bottomTextStyle
            })
        ];
        b.style(me, {
            height: 'calc(100vh - 60px)',
            textAlign: 'left',
            minHeight: '700px',
            width: 720
        });
    }
});
